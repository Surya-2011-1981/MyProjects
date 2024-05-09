require('dotenv').config();
const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect(`mongodb://localhost:27017/Complete_WebSite(Testing)`);
    console.log("Connection SuccessFul");
  } catch (error) {
    console.log("Connection Failed", error);;
  }
})();