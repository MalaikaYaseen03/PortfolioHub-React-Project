const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//advance mongodb query search query
const CertificationSchema = new Schema({
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const CertificationModel = mongoose.model("Certification", CertificationSchema);
module.exports = CertificationModel;
