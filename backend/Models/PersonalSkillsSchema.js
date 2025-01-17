//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

const personalSkillsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const Personal_SkillsModel = mongoose.model(
  "PersonalSkills",
  personalSkillsSchema
);
module.exports = Personal_SkillsModel;
