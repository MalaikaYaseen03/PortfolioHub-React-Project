const express = require("express");
const getProjectInfo = require("../Controllers/Projects"); // controller for getting data
const router = express.Router();

// Define the get route for fetching projects
router.get("/", getProjectInfo);

module.exports = router;
