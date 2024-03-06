var prime=(num,count,i)=>
{
    count=0,i=0
    while(i<=num)
    {
        if(num%i==0)
        {
        count++
        }
        i++
    }
    if(count==2)
    console.log(num+" is a prime number")
}
prime(19)