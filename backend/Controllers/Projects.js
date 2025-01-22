const ProjectModel = require("../Models/ProjectSchema");

// FUNCTION FOR GET REQUEST
const getProjectInfo = async (req, res) => {
  try {
    // Fetch data from the database
    const ProjectInfo = await ProjectModel.find();
    // Check if the result is empty
    if (ProjectInfo.length === 0) {
      return res.status(404).json({ message: "No data found." });
    }
    // Return the data with a success status
    res.status(200).json(ProjectInfo);
  } catch (error) {
    console.error(error);
    // Send an error response in case of failure
    res.status(500).json({ message: "Faled to fetch data" });
  }
};

module.exports = getProjectInfo;
