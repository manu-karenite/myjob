const express = require("express");
const authRouter = express.Router();
const {
  companyLogin,
  companyRegister,
} = require("../../Controllers/Company/auth.js");
authRouter.route("/company/login").post(companyLogin);
authRouter.route("/company/register").post(companyRegister);
const obj = { authRouter };

module.exports = obj;
