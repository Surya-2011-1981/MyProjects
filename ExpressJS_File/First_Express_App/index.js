const express=require('express');
const app=express();
app.set("view engine","ejs");

// This is called MiddleWare
app.use((req,res,next)=>{
  console.log("MiddleWare Working");
  next();
})


// These Are the Routes with '/' slashes
app.get('/',(req,res)=>{
res.render('index');
})


// app.get('/about',(req,res)=>{
// res.render('<h1>This is our About Page</h1>');
// })
// app.get('/contact',(req,res)=>{
// res.render('<h1>This is our Contact Page</h1>');
// })

app.listen(5500);