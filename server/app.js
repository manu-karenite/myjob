require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const goNodeMongo = require("go-node-mongo");
let mongoURI = process.env.MONGO_SRV;
mongoURI = mongoURI.replace("<username>", process.env.MONGO_USER);
mongoURI = mongoURI.replace("<password>", process.env.MONGO_PASSWORD);
const app = goNodeMongo(mongoURI, mongoose);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
