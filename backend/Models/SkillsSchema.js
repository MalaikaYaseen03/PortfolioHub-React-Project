const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//advance mongodb query search query
const SkillsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  proficiency: {
    type: String,
    required: true,
  },
  order: {
    type: Number, // To track the order of skills
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const SkillsModel = mongoose.model("Skills", SkillsSchema);
module.exports = SkillsModel;
