const express = require("express");
const User = require("../models/UserAuth");
const Admin = require("../models/AdminAuth");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const fetchadmin = require("../middleware/fetchadmin");
require("dotenv/config");
const JWT_SECRET=process.env.JWT_SECRET;
const JWT_SECRET_Admin=process.env.JWT_SECRET_Admin;
let success = false;


// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }).isAlpha('en-US', {ignore: ' '}),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() ,error:"Invalid Credentials" });
    }
    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success=false
        return res
          .status(400)
          .json({
            success,
            error: "Sorry a user with this email already exists",
          });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      success = true;
      // res.json(user)
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal Server Error"});
    }
  }
);


// router.post(
//   "/createadmin",
//   [
//     body("name", "Enter a valid name").isLength({ min: 3 }),
//     body("email", "Enter a valid email").isEmail(),
//     body("password", "Password must be atleast 5 characters").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }
//     try {
//       // Check whether the user with this email exists already
//       let admin = await Admin.findOne({ email: req.body.email });
//       if (admin) {
//         success=false
//         return res
//           .status(400)
//           .json({
//             success,
//             error: "Sorry a user with this email already exists",
//           });
//       }
//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       // Create a new admin
//       admin = await Admin.create({
//         name: req.body.name,
//         password: secPass,
//         email: req.body.email,
//       });
//       const data = {
//         admin: {
//           id: admin.id,
//         },
//       };
//       // console.log(data);
//       // console.log(JWT_SECRET_Admin);
//       const authtoken = jwt.sign(data, JWT_SECRET_Admin);

//       success = true;
//       // res.json(user)
//       res.json({ success, authtoken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal Server Error"});
    }
  }
);
// ROUTE 3: Authenticate a Admin using: POST "/api/auth/Admin". No login required
router.post(
  "/admin",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (!admin) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }

      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }

      const data = {
        admin: {
          id: admin.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET_Admin);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal Server Error"});
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.get("/getuser", fetchuser, async (req, res) => {
  try {
   const userID = req.userdetails.id
    res.send(userID);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({error:"Internal Server Error"});
  }
});
router.get("/getadmin", fetchadmin, async (req, res) => {
  try {
    adminID = req.admin.id;
    const admin = await Admin.findById(adminID).select("-password");
    res.send(admin);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({error:"Internal Server Error"});
  }
});
module.exports = router;
