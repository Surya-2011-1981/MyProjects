const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  res.send("This is Home page");
})
app.get('/profile',(req,res)=>{
  res.send("This is Profile page");
})
// in the below example we can se that the '/profile/' is repeating again and again 

// app.get('/profile/Suraj',(req,res)=>{
//   res.send("This is Suraj's Profile Page");
// })
// app.get('/profile/Surya',(req,res)=>{
//   res.send("This is Surya's Profile page");
// })
// app.get('/profile/Saurya',(req,res)=>{
//   res.send("This is Saurya's Profile Page");
// })
// app.get('/profile/Singh',(req,res)=>{
//   res.send("This is Singh's Profile Page");
// })



// The alternate way to the same thing is 
app.get('/profile/:username',function(req,res){
res.send(`This is ${req.params.username}'s Profile`)
})


app.listen(3000);