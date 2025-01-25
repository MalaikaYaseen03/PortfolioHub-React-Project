const express = require("express");
const getTestimonialInfo = require("../Controllers/Testimonial");
const router = express.Router();

// Define the route for fetching testimonials
router.get("/", getTestimonialInfo);

module.exports = router;
