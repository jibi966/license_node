const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
  return mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to db");
  });
};

module.exports = connect;
