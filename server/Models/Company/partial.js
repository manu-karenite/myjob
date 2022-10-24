const mongoose = require("mongoose");

const partialSchema = new mongoose.Schema(
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
    token: {
      type: String,
    },
  },
  { timestamp: true }
);

//creating a model for users
const partial = mongoose.model("partial", partialSchema);
module.exports = partial;
