const express = require("express");
const getSkillsInfo = require("../Controllers/Skills");
const router = express.Router();

// Define the route for fetching skills data
router.get("/", getSkillsInfo);

module.exports = router;
