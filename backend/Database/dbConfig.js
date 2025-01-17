const mongoose = require("mongoose");

// asyncronous function to connect MongoDb
const connecttoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log(`Error in connecting to MongoDB ${error}`);
  }
};
module.exports = connecttoDB;
