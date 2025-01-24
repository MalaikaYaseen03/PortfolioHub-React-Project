const express = require("express");
const getTestimonialInfo = require("../Controllers/Testimonial");
const router = express.Router();

// Define the route for fetching counter data
router.get("/", getTestimonialInfo);

module.exports = router;
