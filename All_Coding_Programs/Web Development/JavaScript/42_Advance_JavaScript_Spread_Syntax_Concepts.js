let arr=[12,4,6.7];
let sum=(a,b,c)=>{
    return a+b+c;
}

console.log("The sum is : ",sum(...arr));