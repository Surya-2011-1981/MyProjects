const mongoose=require("mongoose")

(async function(){
  try {
    await mongoose.connect("mongodb://localhost:27017/website2")
    console.log("successfully connected");
  } catch (error) {
    console.log("not connected");
  }
})()