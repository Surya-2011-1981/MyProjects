let fn1=(callback)=>{
console.log("Got chicken");
setTimeout(()=>{
    callback();
},1000);
}

let fn2=(callback)=>{
console.log("Got onion");
setTimeout(()=>{
    callback();
},1000);
}

let fn3=(callback)=>{
console.log("Mixture Fried");
setTimeout(()=>{
    callback();
},1000);
}

let fn4=(callback)=>{
console.log("Chicken Boiled");
setTimeout(()=>{
    callback();
},1000);
}

let complete=()=>{
console.log("Chicken ready");
}

let customer=(callback)=>{
    setTimeout(()=>{
        callback();
    },1000);
}

customer(()=>{
    fn1(()=>{
        fn2(()=>{
            fn3(()=>{
                fn4(()=>{
                    complete();
                })
            })
        })
    })
})

