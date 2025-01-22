//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

//advance mongodb query search query
const CounterSchema = new Schema({
  icon: {
    type: String,
  },
  counterEnd: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const CounterModel = mongoose.model("Counter", CounterSchema);
module.exports = CounterModel;
