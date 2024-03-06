var ArmStrong= function(num){
    let rem,sum=0,hold
    hold=num

    while(num>0)
    {
        rem=num%10
        sum+=rem*rem*rem
        num=parseInt(num/10)
    }
    if(hold==sum)
    {
    console.log(`${hold} is Armstrong Number`)
    }
    else
    {
    console.log(`${hold} is not Armstrong Number`)
    }
}
ArmStrong(153)