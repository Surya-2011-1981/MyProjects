// CallBack Function Declarations


let additionFunction=(m,n)=>{
    return m+n;
}
let differenceFunction=(m,n)=>{
    return m-n;
}
let productFunction=(m,n)=>{
    return m*n;
}
let divisionFunction=(m,n)=>{
    return m/n;
}

// Caller Function
let fn1=(a,b,any)=>{
    return any(a,b);
}


// Calling Area
let addition=fn1(5,3,additionFunction);
console.log(addition);

let difference=fn1(5,3,differenceFunction);
console.log(difference);

let multiply=fn1(5,3,productFunction);
console.log(multiply);

let division=fn1(5,3,divisionFunction);
console.log(division);

let modulas=fn1(5,3,(m,n)=>{
    return m%n;
});
console.log(modulas);

