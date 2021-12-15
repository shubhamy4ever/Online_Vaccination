const express = require("express");
const router = express.Router();
const hospitalDetails = require("../models/hospitalDetails");
const fetchuser = require("../middleware/fetchuser");
const fetchadmin = require("../middleware/fetchadmin");
const { body, validationResult } = require("express-validator");
const BookedVaccine = require("../models/BookedVaccine");

//fetch hospitals by pincode  from body  get request /api/hosp/fetchhosptdetails anyone can fetch without credntials
router.post("/fetchhosptdetails", async (req, res) => {
  try{
    if(!req.body.pincode || req.body.pincode==null || req.body.pincode.length < 6 || req.body.pincode==""){
      let success = false;
      return res.json({success,error:"empty search box"});
    }
    success=true;
    const Tpincode = req.body.pincode;
    const hospital = await hospitalDetails
      .find({ pincode: Tpincode })
      .select("-admin");
    res.json(hospital);
  }catch(err){
    return res.json(err);
  }
});

//add a hospital  /api/hosp/addhospitals only admin can
router.post(
  "/addhospitals",
  fetchadmin,
  [
    body("name", "Enter a valid hsopital name").isLength({ min: 2 }),
    body("address", "address must be more than 5 length").isLength({
      min: 5,
    }),
    body("pincode", "pincode must be more than 5 length").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, address, pincode } = req.body;
      const hospitaldet = new hospitalDetails({
        admin: req.admin.id,
        name: name,
        address: address,
        pincode: pincode,
        vaccineType: null,
        slots: null,
        date: null,
        time: null,
      });

      const saveDetails = await hospitaldet.save();
      res.json(saveDetails);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  }
);

//route 4 update for admin   put request /api/hosp/updatedetails/id only admin can
router.put("/updatedetails/:id", fetchadmin, async (req, res) => {
  try {
    const { vaccineType, slots, date, time } = req.body;
    const updated = {};
    if (vaccineType) {
      updated.vaccineType = vaccineType;
    }
    if (slots) {
      updated.slots = slots;
    }
    if (date) {
      updated.date = date;
    }
    if (time) {
      updated.time = time;
    }
    let hospital = await hospitalDetails.findById(req.params.id);
    if (!hospital) {
      return res.status(404).send("not found");
    }
    if (hospital.admin.toString() !== req.admin.id) {
      return res.status(401).send("unauthorized");
    }
    hospital = await hospitalDetails.findByIdAndUpdate(req.params.id, {
      $set: updated,
    });
    res.json(hospital);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

//route 5 delete a  hospitals complete data   delete request on  /api/hosp/deletedata/id  only admin can
router.delete("/deletedata/:id", fetchadmin, async (req, res) => {
  //fetchadmin is fetching token decrypting it in two parts and embedding req.admin details uing the id
  try {
    let hospital = await hospitalDetails.findById(req.params.id);
    if (!hospital) {
      //if you put return app will not crash else it will
      return res.status(404).send("not found");
    }
    if (hospital.admin.toString() !== req.admin.id) {
      return res.status(401).send("unauthorized");
    }
    hospital = await hospitalDetails.findByIdAndDelete(req.params.id);
    res.send("Hospital data deleted");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

//to do for client add update delete
// client specific
//add in db booked vaccine
router.put("/bookvaccine/:id", fetchuser, async (req, res) => {
  try {
    //fetchh the clicked hospital details from database and select everything except admin id
    const booked = await hospitalDetails
      .findById(req.params.id)
      .select("-admin");
    //if user has already booked a vaccine and is in booked vaccine database found by his id
    if (booked.slots <= 0) {
      return res.json({ success, error: "cant book no slots available" });
    }
    let user = await BookedVaccine.findById(req.userdetails.id);
    if (user) {
      success = false;
      return res.status(400).json({
        success,
        error: "you already have booked a vaccine",
      });
    }

    const book = new BookedVaccine({
      user: req.userdetails.id,
      hospitalid: booked.id,
      name: req.userdetails.name,
      hospitalname: booked.name,
      address: booked.address,
      pincode: booked.pincode,
      vaccineType: booked.vaccineType,
      date: booked.date,
      time: booked.time,
    });

    const saveDetails = await book.save();
    res.json(saveDetails);

    //update with --1 in slots in hospitalDetails
    const updated = {};
    updated.slots = booked.slots - 1;
    hospital = await hospitalDetails.findByIdAndUpdate(req.params.id, {
      $set: updated,
    });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
});

//deleting booked data for client and here id of booked database
router.delete("/delete/:id", fetchuser, async (req, res) => {
  // deleting
  try {
    //in booked vaccine by id finding
    let bookeddata = await BookedVaccine.findById(req.params.id);

    if (!bookeddata) {
      //if you put return app will not crash else it will
      return res.status(404).send("not found");
    }

    //only that user can delete it
    if (bookeddata.user.toString() !== req.userdetails.id) {
      return res.status(401).send("unauthorized");
    }

    bookeddata = await BookedVaccine.findByIdAndDelete(req.params.id);
    res.send("your vaccine booking data deleted");
    //updating slots data
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
});

//read my booked status
router.get("/bookedstatus", fetchuser, async (req, res) => {
  let bookeddata = await BookedVaccine.find({ user: req.userdetails.id });
  res.json(bookeddata);
});

module.exports = router;
