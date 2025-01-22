const express = require("express");
const getAboutInfo = require("../Controllers/About");
const router = express.Router();

// Define the route for fetching about data
router.get("/", getAboutInfo);

module.exports = router;
