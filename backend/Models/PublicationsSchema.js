//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

const PublicationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
//two argument need in schema 1st one is name  and 2nd one is Schema
const PublicationModel = mongoose.model("Publications", PublicationsSchema);
module.exports = PublicationModel;
