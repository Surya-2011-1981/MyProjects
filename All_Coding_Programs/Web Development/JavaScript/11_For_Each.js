var arr=Array(12,56,23,9,13,78,5)
max=0
min=arr[0]
sum=0
arr.forEach((value,index)=>
{
    sum+=value
    if(value>max)
    {
    max=value
    }
    if(value<min)
    {
        min=value
    }
    
}
)
console.log(`max is ${max} `)
console.log(`min is ${min}`)
console.log(`The Sum of the array Elements is  ${sum}`)
