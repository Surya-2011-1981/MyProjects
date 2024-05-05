const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const Model = require("./models/Model");
const db = mongoose.connection;

require('./db/connection');
app.use(express.json());
const port = process.env.PORT || 8000;


// (async function () {
//   const collections = await db.listCollections();
//   // console.log(collections);
//   const collection_Name = collections[0].name;
//   // const documents_In_Collection=db.collection(collection_Name).find({}).toArray();
//   // console.log(listt);
//   const total_docs = await db.collection(collection_Name).find({}).toArray();
//   console.log((total_docs).length);
//   // console.log( total_docs);
//   console.log(total_docs[1]);
// })();


app.get("/data", async (req, res) => {
  try {
    const collections = await db.listCollections();
    const documents = await db.collection(collections[0].name).find({}).toArray();
    res.send(documents);
  } catch (error) {
    console.log("Some Error Occured", error);
  }
});

app.listen(port, () => {
  console.log("Listening at port ", port);
})
