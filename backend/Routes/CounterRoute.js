const express = require("express");
const getCounterInfo = require("../Controllers/Counter");
const router = express.Router();

// Define the route for fetching counter data
router.get("/", getCounterInfo);

module.exports = router;
