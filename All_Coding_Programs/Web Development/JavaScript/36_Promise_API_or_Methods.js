/*
let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("This is Promise 1 and");
        resolve("Success First...!")
    }, 2000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("This Promise 2 and");
        reject("No Success in Second...!")
    }, 2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("This Promise 3 and ");
        resolve("Success Third...!")
    }, 2000);
})

let p4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("This Promise 4 and");
        resolve("Success Fourth...!")
    }, 2000);
})

console.log(Promise.all([p1,p2.then((data)=>{
    console.log(data);
}),p3,p4]));


console.log(Promise.all([p1,p2.catch((data)=>{
	console.log(data)
}),p3,p4]));


console.log(Promise.allSettled([p1,p2.catch((data)=>{
	console.log(data)
}),p3,p4]));

console.log(Promise.race([p1,p2.catch((data)=>{
	console.log(data)
}),p3,p4]));


console.log(Promise.any([p1,p2.catch((data)=>{
	console.log(data)
}),p3,p4]));

*/

Promise.resolve("Success").then((data)=>{
    console.log(data);
});
Promise.reject("Error").catch((data)=>{
    console.log(data);
});
// For better output use broswer console view