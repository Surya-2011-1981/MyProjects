const express = require("express");
const app = express();
require("./db/connection");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
app.use(express.json());

const db = mongoose.connection;
app.get('/Students/S0001_This_is_Roll_Type/:roll', async (req, res) => {

  const stu_Roll = req.params.roll;
  // console.log(typeof stu_Roll);
  const list_collections = await db.listCollections();
  const Stu_document = await db.collection(list_collections[0].name).find({ roll: stu_Roll }).toArray();
  // console.log(Stu_document[0]);
  res.send(Stu_document[0]);
})

app.listen(port, () => {
  console.log("Listening at port ", port);
})