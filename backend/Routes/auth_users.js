const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");
const authenticateJWT = require("../middleware/authmiddleware");
const router = express.Router();
const admin = require("../api/firebaseAdmin.js");
const checkFirebaseUserByEmail = require("../utils/checkFirebaseUser.js");
const sendVerificationEmail = require("./verificationEmail.js");

// REGISTERING NEW USER

router.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Step 1: Check if the user already exists in Firebase
    const firebaseCheck = await checkFirebaseUserByEmail(email);

    if (firebaseCheck.exists) {
      return res.status(400).json({
        message: "Email already exists. Please login or use a different email.",
      });
    }

    // Step 2: If user doesn't exist, proceed with checking username in database (MongoDB)
    const usernameExists = await UserModel.findOne({ username });
    // console.log("username:", usernameExists);
    if (usernameExists) {
      return res.status(400).json({
        message: "Username already exists. Please choose another.",
      });
    }

    // Step 3: If user doesn't exist, proceed to create a new Firebase user
    const UserRecord = await admin.auth().createUser({
      email,
      password,
    });

    // console.log("firebase user:", UserRecord);

    // Step 4: Generate email verification link
    // Generate password reset link with a custom continue URL
    const actionCodeSettings = {
      url: `${
        process.env.FRONTEND_LOCALHOST_URL || process.env.FRONTEND_VERCEL_URL
      }/#/form/login-form`, // Your frontend URL with reset password path
      handleCodeInApp: true, // Indicates that you want the user to be directed back to your app
    };
    const verificationLink = await admin
      .auth()
      .generateEmailVerificationLink(email, actionCodeSettings);

    await sendVerificationEmail(verificationLink, email); // Implement sendEmail function

    // console.log("verificationLink", verificationLink);

    // Step 5: Save the user in MongoDB (MongoDB logic here)
    const newUser = new UserModel({
      username,
      email: UserRecord.email,
      firebaseUID: UserRecord.uid, // Store Firebase UID for reference
      loggedIn: false,
    });
    // console.log("newuser", newUser);
    await newUser.save();

    res.status(201).json({
      message: "Signup successful! Please check your email for verification.",
      user: newUser,
      UserRecord,
    });
  } catch (error) {
    console.log("error:", error);
    res
      .status(500)
      .json({ error: "Internal server error. Please try again later." });
  }
});
