const express = require("express");
const getDynamicSections = require("../Controllers/DynamicSections");
const router = express.Router();

// Define the route for fetching publications
router.get("/", getDynamicSections);

module.exports = router;
