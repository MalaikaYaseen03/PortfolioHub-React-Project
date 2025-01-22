//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

//advance mongodb query search query
const ServiceSchema = new Schema({
  icon: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const ServiceModel = mongoose.model("Services", ServiceSchema);
module.exports = ServiceModel;
