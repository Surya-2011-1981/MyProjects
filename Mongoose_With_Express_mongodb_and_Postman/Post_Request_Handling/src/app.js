const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const Model = require("./models/Models");
require("./db/connection");
app.use(express.json());

/*********************************************** */

app.post('/employee', async (req, res) => {


  try {
    const doc = new Model(req.body);
    await doc.save();
    // res.send(doc);
    res.send(doc.name);
    // console.log(req.body);

  } catch (error) {
    console.log("Error occured", error);
  }
})

app.listen(port, function () {

  console.log("Listening at port ", port);
})
