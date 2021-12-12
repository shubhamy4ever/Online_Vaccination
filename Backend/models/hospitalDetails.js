const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  admin:{type:mongoose.Schema.Types.ObjectId,
    ref:"admin"
    },
  name: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  vaccineType:{type:String,required:false},
  slots:{type:Number,required:false},
  date: { type: String },
  time:{type:String}
});

module.exports = mongoose.model("hospitalDetails", hospitalSchema);
