require('dotenv').config();
const mongoose = require("mongoose");

(async function () {
  try {
    // console.log(process.env.DB_NAME);
    await mongoose.connect(`mongodb://localhost:27017/Complete_WebSite`);
    console.log("Connection SuccessFul");
  } catch (error) {
    console.log("Connection Failed", error);;
  }
})();