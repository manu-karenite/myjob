const partial = require("../../Models/Company/partial.js");
const company = require("../../Models/Company/company.js");

const { sendMessage } = require("../../Utilities/mail.js");
let verifyEmail = require("../../Utilities/Templates/Company/verifyEmail.js");
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

const companyRegister = async (req, res) => {
  //check if email exists in body
  try {
    const existingData = await partial.findOne({ email: req.body.email });
    console.log(existingData);
    if (existingData === null) {
      //not available
      const query = new partial({
        name: req?.body?.name,
        email: req.body?.email.toLowerCase(),
      });
      verifyEmail = verifyEmail.replace("{{COMPANY_NAME}}", req.body?.name);
      const emailResponse = await sendMessage(
        req.body?.email,
        "Verify Email Address | myJOB",
        "hello",
        verifyEmail
      );
      res
        .status(200)
        .json(
          `Verification Link sent to you ${req?.body?.email.toLowerCase()}. Please Check your Inbox (or Spam Folder ).`
        );
    } else {
      res.status(401).json("Already Present");
    }
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};
const obj = { companyLogin, companyRegister };
module.exports = obj;
