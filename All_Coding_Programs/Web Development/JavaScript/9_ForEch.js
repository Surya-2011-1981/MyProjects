let ar=[12,34,56,78]
var sum=0;
// function view(item,index,array){
    //     console.log(`value at index ${index} is ${item} and array is ${array}`);
    //     sum+=item;
    // }
    // console.log(`Sum is : ${sum}`);

    // Both will give Same Output the below one is shorthand of Above one

    ar.forEach((value,index,array)=>{
        console.log(`${value} at index ${index} and array is ${array}`)
    }
    )