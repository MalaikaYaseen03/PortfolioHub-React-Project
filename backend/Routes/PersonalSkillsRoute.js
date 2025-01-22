const express = require("express");
const getPersonalSkills = require("../Controllers/PersonalSkills");
const router = express.Router();

// Define the get route for fetching personal skills
router.get("/", getPersonalSkills);

module.exports = router;
