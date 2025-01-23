const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./api/.env" });
const path = require("path");
const connecttoDB = require("../Database/dbConfig");

const app = express();
// Connect to the Database
connecttoDB();

// Middleware
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = ["http://localhost:5000"];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, OPTIONS, PATCH",
    credentials: true, // Allow cookies or other credentials
  })
);

// IMPORT ROUTES
const PersonalSkillsRoute = require("../Routes/PersonalSkillsRoute");
const AboutRoute = require("../Routes/AboutRoute");
const ServiceRoute = require("../Routes/ServiceRoute");
const CounterRoute = require("../Routes/CounterRoute");
const ProjectsRoute = require("../Routes/ProjectsRoute");
const CertificationRoute = require("../Routes/CertificationRoute");

// USE ROUTES

app.use("/api/v1/personalSkills", PersonalSkillsRoute);
app.use("/api/v1/about", AboutRoute);
app.use("/api/v1/services", ServiceRoute);
app.use("/api/v1/counter", CounterRoute);
app.use("/api/v1/projects", ProjectsRoute);
app.use("/api/v1/certifications", CertificationRoute);

// Simple Route
app.get("/", (req, res) => {
  res.send("Welcome to API!");
});

// For Unknown API route
app.use("/api/*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// Serve the static files from the React app (build folder)
app.use(express.static(path.join(__dirname, "../../frontend/build")));

// Catch-all handler for any route that isn't an API call
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api")) {
    const filePath = path.join(__dirname, "../../frontend/build", "index.html");
    res.sendFile(filePath);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
module.exports = app;
