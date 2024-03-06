var Special_2_Digit = function(num){
    let rem,total=0,hold
    hold=num
        rem=num%10;
        num=parseInt(num/10);
        total=(rem*num)+(rem+num)
        if(total==hold)
        console.log(total+" is Special Two Digit Number")
}
Special_2_Digit(59)