const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Company Must Have a Name"],
    },
    email: {
      type: String,
      required: [
        true,
        "A company must have an email address for business emails",
      ],
      unqiue: true,
    },
    password: {
      type: String,
    },
    bannerLink: {
      type: String,
    },
    logoLink: {
      type: String,
    },
    aboutUs: {
      type: String,
    },
    companyCode: {
      type: String,
      //generated whenever a new company regsiters
    },
    otp: {
      type: String,
    },
    otpValidUpto: Date,
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

//creating a model for users
const company = mongoose.model("company", companySchema);
module.exports = company;
