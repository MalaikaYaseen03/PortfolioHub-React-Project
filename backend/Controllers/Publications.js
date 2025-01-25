const PublicationModel = require("../Models/PublicationsSchema");

// FUNCTION FOR GET REQUEST
const getPublicationInfo = async (req, res) => {
  try {
    // Fetch data from the database
    const PublicationInfo = await PublicationModel.find();
    // Check if the result is empty
    if (PublicationInfo.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(PublicationInfo);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getPublicationInfo;
