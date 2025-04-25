const DynamicSectionsModel = require("../Models/DynamicSectionSchema");

// FUNCTION FOR GET REQUEST
const getDynamicSections = async (req, res) => {
  try {
    // Fetch data from the database
    const DynamicSection = await DynamicSectionsModel.find();
    // Check if the result is empty
    if (DynamicSection.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(DynamicSection);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getDynamicSections;
