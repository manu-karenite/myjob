const company = require("../../Models/Company/company.js");

const companyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await company.findOne({ email: email });
    if (result === null) {
      throw "No Registered Company Found! Please Join Us to start Hiring";
    }
    res.status(200).json("ok");
  } catch (error) {
    res.status(401).json(error);
  }
};
const obj = { companyLogin };
module.exports = obj;
