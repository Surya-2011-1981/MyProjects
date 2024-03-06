// Loops in JavaScript
 
// Table printing by for loop
// var num=5;
// for( var i=1;i<=10;i++)
// {
//     console.log(num*i+"\n");
// }
// console.log("\n\n");
// Table printing by while loop
// var num2=6;
// j=0;
// while(j<11)
// {
//     console.log(j*num2);
//     j++;
// }
// console.log("\n\n");

// Table printing by do while loop
// var num3=7;
// k=0;
// do{
//     console.log(k*num3);
//     k++;
// }while(k<11);


// for in and for off loop 
var student={
    Name:"Surya",Dept:"BCA",Roll:20
}
for(let a in student)
{
    console.log("value of "+a+" is : "+student[a]);
}

// for of loop in JavaScript

// var post="Chief Executive Officer";    
// for(let p of post)
// {
//     console.log(p);
// }