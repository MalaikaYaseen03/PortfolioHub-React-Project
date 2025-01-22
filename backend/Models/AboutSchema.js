//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
});
//two argument need in schema 1st one is name  and 2nd one is Schema
const AboutModel = mongoose.model("About", AboutSchema);
module.exports = AboutModel;
