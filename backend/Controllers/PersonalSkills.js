const Personal_SkillsModel = require("../Models/PersonalSkillsSchema");

// FUNCTION FOR GET REQUEST
const getPersonalSkills = async (req, res) => {
  try {
    // Fetch data from the database
    const PersonalSkills = await Personal_SkillsModel.find();
    // Check if the result is empty
    if (PersonalSkills.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(PersonalSkills);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getPersonalSkills;
