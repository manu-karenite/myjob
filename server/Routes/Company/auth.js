const express = require("express");
const authRouter = express.Router();
const { companyLogin } = require("../../Controllers/Company/auth.js");
authRouter.route("/company/login").post(companyLogin);
const obj = { authRouter };

module.exports = obj;
