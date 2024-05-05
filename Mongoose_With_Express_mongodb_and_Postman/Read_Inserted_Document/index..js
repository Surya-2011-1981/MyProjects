const mongoose = require("mongoose");

// let URI = "mongodb://localhost:27017/Read_Inserted_Data";
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Read_Inserted_Data");
    console.log("Connection Success");
  }
  catch (err) {
    console.log("Connection Failed", err);
  }
})();
async function insert_document() {
  try {
    let C_Schema = new mongoose.Schema({
      name: String,
      age: Number
    })

    let C_Model = mongoose.model("Collection_Name", C_Schema);

    let doc_1 = new C_Model({
      name: "Surya",
      age: 20
    })
    let doc_2 = new C_Model({
      name: "Shaurya",
      age: 23
    })
    await C_Model.insertMany([doc_1, doc_2]);

    // console.log(await C_Model.find({ age: 23 }).select({ name: 1 }))
  }
  catch (error) {
    console.log("Connection Failed", error);
  }
}

let db = mongoose.connection;
async function read_document() {
  try {
    // insert_document();
    let collection_list = await db.listCollections();
    let Array_collection = await db.collection(collection_list[0].name).find({}).toArray();
    // console.log(collection_list[0].name);
    console.log(Array_collection[0].name)
  } catch (error) {
    console.log("Some Error occured", error);
  }
}
read_document();