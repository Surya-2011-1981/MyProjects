const mongoose = require("mongoose");

// const require = mongoose("mongoose");


(async function () {

  const db_Schema = new mongoose.Schema({
    name: String,
    roll: Number,
  })();

  db_Model = new mongoose.model("db_Model", db_Schema);

  module.exports = db_Model;

})();