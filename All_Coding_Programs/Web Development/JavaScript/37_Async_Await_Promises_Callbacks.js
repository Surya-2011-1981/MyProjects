let arr=[12,3,4,19,0];


let getdata=(data)=>{
return new Promise((resolve,reject)=>{
console.log("Getting data of "+data+"th index.....");
setTimeout(() => {
    resolve(data);
}, 2000);
})
}


//Probem solving with async-await

(async function calling(){
for(let i=0;i<5;i++)
{
    await getdata(i).then((data)=>
    {
        console.log("Got data of id "+data+" is : "+arr[i]);
    }).catch((data)=>{
        console.log("Some error occured");
    })

}
})();



//Probem solving with .then primise chaining
/*
  getdata(0).then((data)=>{
    // console.log("Getting data of "+data+"th index.....");
    console.log("Data at index "+data+" is :"+arr[data]);
    return getdata(1);
    })
    .then((data)=>{
        console.log("Data at index "+data+" is :"+arr[data]);
        return getdata(2);
    })
    .then((data)=>{
        console.log("Data at index "+data+" is :"+arr[data]);
        return getdata(3);
    })
    .then((data)=>{
        console.log("Data at index "+data+" is :"+arr[data]);
        return getdata(4);
    }) .then((data)=>{
        console.log("Data at index "+data+" is :"+arr[data]);
    })
*/


// Problem solving with callbacks

// let getdata=(data,callback)=>{
//     console.log("Getting data of index "+data);
// setTimeout(() => {
//     console.log("Data at index "+data+" is  : "+arr[data]);
//     callback();
// }, 2000);
// }

// getdata(0,()=>{
//     getdata(1,()=>{
//         getdata(2,()=>{
//             getdata(3,()=>{
//                 getdata(4,()=>{
                    
//                 })
//             })
//         })
//     })
// })

