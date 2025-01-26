const ContactModel = require("../Models/ContactSchema");

// FUNCTION FOR GET REQUEST
const getContactInfo = async (req, res) => {
  try {
    // Fetch data from the database
    const ContactInfo = await ContactModel.find();
    // Check if the result is empty
    if (ContactInfo.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(ContactInfo);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getContactInfo;
