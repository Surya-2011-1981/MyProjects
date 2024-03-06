/*

// Example of some Errors that doesn't provided by JavaScript Engine

let a="hello";
let b=10;
let sum=a+b;
console.log(sum);//This will give NaN as output

// Now to handle this we will use throw sta tement to give custom error

if(isNaN(a) || isNaN(b))
{
    if(isNaN(a))
    throw Error("a is not a number");
    else
    throw Error("b is not a number");
}
*/



/*
let age=14;
try {
    if(age<18)
    throw TypeError("Error");
}
catch(err)
{
    console.log("Not an adult rightmore");
    // console.log(err.name);
    // console.log(err.message);
    // console.log(err.stack);
}
*/

let age=19;
try{
    if(age>18)
    throw Error("");
}
// catch(err)
// {
//     console.log("Error Found")
// }
finally{
    console.log("I am from Finally Pur")
}

