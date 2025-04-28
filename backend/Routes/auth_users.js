const express = require("express");
const { register, login, logout } = require("../Controllers/UserController");
const authenticateJWT = require("../Middleware/jwtMiddleware");
const router = express.Router();

// REGISTERING NEW USER

router.post("/register", register);

// LOGIN

router.post("/login", login);

// LOGOUT

router.post("/logout", authenticateJWT, logout);

module.exports = router;
