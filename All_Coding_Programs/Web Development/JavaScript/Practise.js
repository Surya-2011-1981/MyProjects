let fn1=(callback)=>{
    setTimeout(()=>{
    console.log("I am Function 1");
    callback();
    },2000);
}
let fn2=(callback)=>{
    setTimeout(()=>{
        console.log("I am Function 2");
        callback();
        },2000);
}
let fn3=()=>{
    setTimeout(()=>{
        console.log("I am Function 3");
        },2000);
}

let caller=(callback)=>{
    callback();
    }
caller(()=>{
    fn1(()=>{
        fn2(()=>{
            fn3();
        })
    })
})