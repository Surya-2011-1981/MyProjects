                                        // Simple example of callback


// Type 1 CallBack Functions

// let sum=(a,b)=>{
//     console.log("I am a callback Function Sum() and i perfrom Addition of two Numbers")
//     console.log("The sum is "+(a+b));
// }

// let caller=(n,m,sumCallback)=>{
//     console.log("I am a Caller function of Sum() callaback ")
//     // sumCallback();
// }
// caller(10,25,sum(2,5));

function sum(a, b) {
    return a + b;
  }
  
  function caller(callback) {
    // Perform some operation with arg1, arg2, and the result of the callback
    // let result = callback;
    console.log(callback);
    // For example, log the result
    // console.log(result);
    
}
  // Usage
  caller(sum(2, 5));
  

                    // **********************************************************************************

                   
 // Type 2 CallBack Functions

// let caller=(a,b,sum)=>{
//     console.log("I am a Caller function of Sum() callback ");
//     sum(a,b)
// }
// caller(20,25,(n,m)=>{
//     console.log("Sum is "+(n+m));
// })


 
