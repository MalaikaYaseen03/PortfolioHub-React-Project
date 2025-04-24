const DashboardModel = require("../Models/dDashboardSchema");

const getDashboard = async (req, res) => {
  // console.log("Dashboard get");
  try {
    const DashboardInfo = await DashboardModel.find();
    if (DashboardInfo.length === 0) {
      return res.status(404).send("Inforamtion Not Found");
    }
    res.status(200).json(DashboardInfo); // 200 OK status code
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

const getDashboardById = async (req, res) => {
  const Id = req.params.id;

  try {
    const DashboardInfo = await Dashboard_Model.findById(Id); // Ensure you're querying by the correct field,`id`
    if (DashboardInfo.length === 0) {
      return res
        .status(404)
        .send({ message: `Information with ID ${Id} not found` });
    }
    res.status(200).json(DashboardInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch data with ${Id}` });
  }
};

const postDashboard = async (req, res) => {
  // console.log("Inside post function");

  const data = new Dashboard_Model({
    Icon: req.body.Icon,
    Title: req.body.Title,
    Description: req.body.Description,
    link: req.body.link,
  });

  try {
    const val = await data.save();
    res.status(201).json(val);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
};

module.exports = { getDashboard, getDashboardById, postDashboard };
