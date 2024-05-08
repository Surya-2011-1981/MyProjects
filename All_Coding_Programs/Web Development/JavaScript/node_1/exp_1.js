const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

console.log(path.join(__dirname, "../../"));

app.get("/login", (req, res) => {
  res.send("This is login page")
  // res.render("");
})



// app.get()
// app.post();
// app.put();
// app.patch();
// app.delete();

app.listen(port, () => {
  console.log("listening at ", port);
})