const express = require("express");
const getCertificationInfo = require("../Controllers/Certification");
const router = express.Router();

// Define the route for fetching certifications
router.get("/", getCertificationInfo);

module.exports = router;
