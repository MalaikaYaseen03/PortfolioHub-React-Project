const express = require("express");
const getServiceInfo = require("../Controllers/Services");
const router = express.Router();

// Define the route for fetching services
router.get("/", getServiceInfo);

module.exports = router;
