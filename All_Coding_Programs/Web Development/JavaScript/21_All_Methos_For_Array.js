var arr = [2, 3, 4, 7, 9, 11, 78, 45, 22]
newarr=[]
// function sum(a,b){
//     return a+b
// }

// var sum=function(a,b){
//     return a+b
// }

// var sum=(a,b)=>{
//     return a+b
// }
// console.log(sum(23,45))


// arr.forEach((value,index,array)=>
// {
//     console.log(`value at index ${index} is ${value}`)
//     if(index==(arr.length-1))
//     console.log(array)
// })


// for (const key in arr) {

//     console.log(arr[key])
// }

// newarr=arr.map((element) => {
//     return element*element
// })
// console.log(newarr)

// var even=(value)=>{
//     if(value%2==0)
//     return value
// }


// function even(a)
// {
//     if(a%2==0)
//     return a;
// }
// newarr=arr.filter(even);
// console.log(newarr)


// var total=arr.reduce((a,b)=>{
//     return a+b
// }
// )
// console.log(total)

arr.forEach((value,index) => {
newarr.push(value**2)
    
});
console.log(newarr)

