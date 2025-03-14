const express = require("express");
const { register, login } = require("../Controllers/UserController");
const router = express.Router();

// REGISTERING NEW USER

router.post("/register", register);

// LOGIN

router.post("/login", login);

module.exports = router;
