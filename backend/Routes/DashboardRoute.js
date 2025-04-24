const express = require("express");
const {
  getDashboard,
  getDashboardById,
  postDashboard,
} = require("../Controllers/Dashboard");
const router = express.Router();

// GET ALL DASHBOARD INFO
router.get("/", getDashboard);

// GET DASHBOARD INFO BY SPECIFIC ID

router.get("/:id", getDashboardById);

// POST DASHBOARD INFO

router.post("/", postDashboard);

module.exports = router;
