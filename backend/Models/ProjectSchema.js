//need to make models to use for mongodb also called mongoose schema
//include mongoose
const mongoose = require("mongoose");
// Extract schema from mongoose
const Schema = mongoose.Schema;

//advance mongodb query search query
const ProjectSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})([/\w .-]*)*\/?$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  projectDetailsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectDetailsModel", // Ensure this matches the name of your `workDetails` model
    required: false, // Make it required if necessary
    default: null,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = ProjectModel;
