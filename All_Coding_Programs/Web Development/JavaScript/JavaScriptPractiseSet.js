// var input=parseInt(prompt("Enter input value",""));

// if(age<=20 && age>=10)
// alert("You are an adult now")
// else
// alert("Nibbe........! BC.....!")



// if(input%2==0 || input%3==0)
// {
//     alert("Divisible by 2 or 3")
// }


// var message=(input>18)?"Naagin bna de Naagin":"Chal na chutiye ja na ";
// alert(message);


// var stu={
//     surya:70,
//     saurya:60,
//     shaurya:50
// }
// let arr=Object.keys(stu);
// for(i=0;i<arr.length;i++)
// {
//     let keyName=arr[i];
//     console.log(keyName +" : " +stu[keyName])
// }


// for (const key in stu) {
//     console.log(key +" : "+stu[key]);
//     }

//          *****************************************Practise Set 2 Ends Here************************************





// while(input!=40)
// {
//     input=parseInt(prompt("Enter Again",""));
// }



// let avg=()=>{
//     let sum=0;
//     for(i=1;i<=5;i++)
//     {
//         input=Number(prompt(`Enter number ${i}`,""));
//         sum+=input;
//     }
//     return (sum/5);
// }
// let average=avg();
// alert(`The average is ${average}`);


// console.log("har\"".length)

//          *****************************************Practise Set 3 Ends Here************************************






// let st="Please give us Rupees 1000";
// console.log(st.includes("_"));
// console.log(st.startsWith("h"));
// console.log(st.startsWith("s"));
// console.log(st.endsWith("g"));
// console.log(st.endsWith("h"));
// console.log(st.toLowerCase())
// console.log(st.toUpperCase())


// console.log(st.slice(22));
// console.log(typeof Number(st.slice(22)));

// st[3]='A';//Not Possible bcz of String immutablity
// console.log(st[3]);
// console.log(st);

//          *****************************************Practise Set 4 Ends Here************************************





// let arr=[];

// for(i=0;input!=0;i++)
// {
//     var input=Number(prompt("Enter Number",""));
//     arr.push(input);
//     // arr[i]=input;

// }
// console.log(arr);

// arr.filter(num=>{
//     if(num%10==0)
//     console.log(num)
// })

// var arr2=[]
// arr2=arr.map(num=>{
//     return num**2;
// })
// console.log(arr2)


// let arr=[7,4,5,6];
// let arr2=[]
// console.log(arr);
// let num;
// num=Number(prompt(`Select a number from array to calculate factorial ${arr}`,""));
// if(arr.includes(num))
// {
//     let val=num;
// while(val>0)
// {
//     arr2[(val-1)]=val;
//     val--;
// }
// var fact=arr2.reduce((a,b)=>{
//     return a*b;
// })
// alert(`factorial is ${fact}`)
// }
// else
// {
// alert("Sorry Wrong input");
// }


//          *****************************************Practise Set 5 Ends Here************************************






// var age=Number(prompt("Enter age",""));
// if(age>21)
// {
//     let con=confirm("Do you want to confirm again");
//     if(con==true)
//     {
//         var age=Number(prompt("Enter age",""));
//         if(age>21)
//         {
//             alert("Naagin bna de Naagin")
//         }
//         else{
//             alert("Marna h kya tujhe BSDK");
//         }

//     }
//     else{
//         alert("Verification cancelled");
//     }
// }
// else if(age<0)
// {
//     console.error("htttt BSDK");
// }


// function decision(){
// var num=Number(prompt("Enter any number",""));
// if(num>4){
//     let attrval=document.querySelector("a");
//     attrval.setAttribute("href","https://www.google.com");
// }
// }

// var colour=prompt("Enter color Name","");
// document.body.style.backgroundColor=colour;

//          *****************************************Practise Set 6 Ends Here************************************



// let ul=document.querySelector("ul");
// ul.firstElementChild.style.backgroundColor="red";
// ul.firstElementChild.style.color="white";

// let li=document.querySelectorAll("li");
// li.forEach(col=>{
//     col.style.backgroundColor="pink";
// })










