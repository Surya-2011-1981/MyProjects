// const express = require("express");
// const path = require("path");
// const app = express();

// const file_path = path.join(__dirname, "../public");
// console.log(file_path);
// app.use(express.static(file_path));


// const port = 5050;
// app.get('/home', (req, resp) => {
//   resp.send('<h1> hello world <h1>')
//   // resp.render("index");
// })

// app.listen(port, () => {
//   console.log(`server listen at port no: ${port}`);
// })


const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// const file_Path = path.join(__dirname, "../public");

app.use(express.static(path.join(__dirname, "../public")));

app.get('/homepage', (req, res) => {
  // res.send("working")
  res.render("index");
})

app.listen(port, () => {
  console.log("listening", port);
}) 