const express=require('express');
const app=express();

app.set("view engine","ejs");

app.get('/',(req,res)=>{
  res.render('homepage');
})
app.get('/about',(req,res)=>{
  res.render('about');
})
app.get('/contact',(req,res)=>{
  res.render('contact');
})
app.get('/gallery',(req,res)=>{
  res.render('gallery');
})
app.get('/services',(req,res)=>{
  res.render('services');
})

app.listen(5500);
