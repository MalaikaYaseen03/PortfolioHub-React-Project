const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//advance mongodb query search query
const DashboardSchema = new Schema({
  Icon: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    require: true,
  },
});

//two argument need in schema 1st one is name  and 2nd one is Schema
const DashboardModel = mongoose.model("Dashboard", DashboardSchema);
module.exports = DashboardModel;
