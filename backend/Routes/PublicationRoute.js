const express = require("express");
const getPublicationInfo = require("../Controllers/Publications");
const router = express.Router();

// Define the route for fetching publications
router.get("/", getPublicationInfo);

module.exports = router;
