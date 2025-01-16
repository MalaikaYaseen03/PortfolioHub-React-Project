const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./api/.env" });
const path = require("path");

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = ["http://localhost:3000"];
      if (!origin || allowedOrigins) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, OPTIONS, PATCH",
    credentials: true, // Allow cookies or other credentials
  })
);

// Simple Route
app.get("/", (req, res) => {
  res.send("Welcome to API!");
});

// USE ROUTES
app.use(express.json);

// For Unknown API route
app.use("/api/*", (req, res, next) => {
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
module.exports = app;
