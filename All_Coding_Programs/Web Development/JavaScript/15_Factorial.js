var factorial=(num)=>
{
    if(num==1)
    return 1;
    else
    return num*factorial(num-1)
}
number=6
console.log(`Factorial of ${number} is ${factorial(number)}`)