const express = require("express");
const getContactInfo = require("../Controllers/Contact");
const router = express.Router();

// Define the get route for fetching contact info
router.get("/", getContactInfo);

module.exports = router;
