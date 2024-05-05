const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("./db/connection")
const Student = require("./models/Students")
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Servevr at homepage")
})

app.post('/students', (req, res) => {
  (async function () {
    // console.log(typeof req.body);
    // console.log(req.body);
    const doc = await new Student(req.body);
    doc.save().then(() => {
      console.log("Saved");
      res.status(201).send(doc);
    }).catch((error) => {
      res.status(400).send(error)
      console.log("Can't save ", error);
    })
  })();
  // console.log(doc);
  // res.send("Student Data")
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
  // console.log(Student);
})
