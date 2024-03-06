let fn1 = () => {
    return new Promise((resolve, reject) => {
        console.log(" Finding Username ");
        setTimeout(() => {
            resolve("Username Found Successfully");
        }, 1000)
    })
}

let fn2 = () => {
    return new Promise((resolve, reject) => {
        console.log(" Finding Password ");
        setTimeout(() => {
            resolve("Password found Successfully");
        }, 2000);
    })
}

let fn3 = () => {
    return new Promise((resolve, reject) => {
        console.log("generating OTP ");
        setTimeout(() => {
            resolve("OTP generated Successfully");
        }, 1000);
    })
}

// let calling=async ()=>{
//     await fn1().then((data)=>{
//         console.log(data);
//     });
//     await fn2().then((data)=>{
//         console.log(data);
//     });
//     await fn3().then((data)=>{
//         console.log(data);
//     });
// }

// Both are Same the --> the above one and the bottom one 

// async function calling() {
//     await fn1().then((data) => {
//         console.log(data);
//     });
//     await fn2().then((data) => {
//         console.log(data);
//     });
//     await fn3().then((data) => {
//         console.log(data);
//     });
// }
// calling();


(async function calling(){
    
        await fn1().then((data) => {
            console.log(data);
        });
        await fn2().then((data) => {
            console.log(data);
        });
        await fn3().then((data) => {
            console.log(data);
        });
})();
// This is IIFE