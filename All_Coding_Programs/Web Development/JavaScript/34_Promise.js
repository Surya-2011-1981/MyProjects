let promise_1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        console.log("I am a promise Object");
        resolve("Hey work has been done....!");
    }, 3000);
})

promise_1.then((data)=>{
    console.log(data);
});
