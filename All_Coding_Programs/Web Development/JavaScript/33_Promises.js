let age=new Promise((resolve,reject)=>{
    let year=Math.random()*100+1;
    setTimeout(() => {
    if(year>18)
    {
        resolve("Now you can have driving licence");
    }
    else
    {
        reject("You can't have a driving licence right now");
    }
}, 1000);
});
 
age
.then((data)=>{
    console.log("Hurray...!"+data);
}).catch((data)=>{ 
    console.log("Sorry....!"+data);
})
.finally(()=>{
    console.log("I will always be executed ");
})