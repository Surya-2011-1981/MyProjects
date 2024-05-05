const express = require("express");
const mongoose = require("mongoose");
const employee = require('./models/Employee');
require("./Database/connection")
const app = express();
app.use(express.json());


const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send("Hello From homepage get request ")
});


app.post('/employees', (req, res) => {
  (async function () {
    try {
      let doc = new employee(req.body);
      await doc.save();
      console.log("Saved SuccessFully");
      res.status(201).send(doc);
    } catch (error) {
      res.status(400).send(error);
      console.log("Saving Failed", error);
    }
  }
  )();
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
})