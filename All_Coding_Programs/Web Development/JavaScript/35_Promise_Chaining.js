let fn1=()=>{
    return new Promise((resolve,reject)=>{
        console.log(" Finding Username ");
        setTimeout(()=>{
        resolve("Username Found Successfully...!");
        },2000)
    })
}

let fn2=()=>{
    return new Promise((resolve,reject)=>{
        console.log(" Finding Password ");
        setTimeout(() => {
        resolve("Password Found Successfullly...!");
        }, 3000);
    })
}

let fn3=()=>{
    return new Promise((resolve,reject)=>{
        console.log("generating OTP ");
        setTimeout(() => {
        resolve("OTP Generated  Successfully...!");
        }, 5000);
    })
}
 
// This is Actual Promise Chaining 

fn1().then((data)=>{
    console.log(data);
    return fn2();
})
.then((data)=>{
    console.log(data);
    return fn3();
})
.then((data)=>{
    console.log(data);
})


// It is also a syntax of promise Chaining but the above one is mostly used

/*
fn1().then((data)=>{
    console.log(data);
    fn2().then((data)=>{
        console.log(data);
        fn3().then((data)=>{
            console.log(data);
        })
    })
})
*/