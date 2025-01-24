const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//advance mongodb query search query
const TestimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const TestimonialModel = mongoose.model("Testimonial", TestimonialSchema);
module.exports = TestimonialModel;
