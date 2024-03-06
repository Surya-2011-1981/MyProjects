var sum = function(a,b){
    console.log(`The sum is ${a+b}`)
}
sum(10,34);

var total=(p,q)=>{
    console.log(`The product is ${p*q}`);
}
total(20,5);
// Arrows Function and Anymonous Functions in JS

// Noraml Function Type1

function Hello(){
    console.log("Hi....! There");
}
Hello();

// Normal Function Type 2

let fn1=function(){
    console.log("Hello Function Declatration Type 2");
}
fn1()
// Arrows Function Type 1

let fn2=()=>{
    console.log("Hello Arrow Function users");
}
fn2();

// Arrow function Type 2
()=>{
    console.log("This is example of Anomynous Functions ic can't be called without a name or variable ");
}

//The above written Function (Arrow Function Type 2) is written without any function name this is also valid in javaScript but when we need to call it ne need to store it on variable and with the name of that varibale and the paranthesis we will call the function.

