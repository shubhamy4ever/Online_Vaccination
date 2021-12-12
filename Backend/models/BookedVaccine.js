const mongoose = require("mongoose");

const bookedSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,
    ref:"user"
    },
  hospitalid:{type:mongoose.Schema.Types.ObjectId,
    ref:"hospitaldetails"
    },
  name: { type: String, ref:"user", required:true },
  hospitalname: { type: String, required: true  ,ref:"hospitalDetails"},
  address: { type: String, required: true  ,ref:"hospitalDetails"},
  pincode: { type: String, required: true ,ref:"hospitalDetails" },
  vaccineType:{type:String,required:true ,ref:"hospitalDetails"},
  date: { type: String ,ref:"hospitalDetails",required:true},
  time:{type:String,ref:"hospitalDetails",required:true}
});

module.exports = mongoose.model("bookedVaccine", bookedSchema);
