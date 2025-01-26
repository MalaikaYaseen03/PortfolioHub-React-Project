const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//advance mongodb query search query
const ContactSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const ContactModel = mongoose.model("Contact", ContactSchema);
module.exports = ContactModel;
