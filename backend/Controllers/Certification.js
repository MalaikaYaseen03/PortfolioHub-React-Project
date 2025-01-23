const CertificationModel = require("../Models/CertificationSchema");

// FUNCTION FOR GET REQUEST
const getCertificationInfo = async (req, res) => {
  try {
    // Fetch data from the database
    const CertificationInfo = await CertificationModel.find();
    // Check if the result is empty
    if (CertificationInfo.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(CertificationInfo);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getCertificationInfo;
