// Perform these wrong operations 10% of the time  
// + --> -
// - --> *
// * --> /
// / --> Square

var wrong_op={
    "+":'-',
    "-":'*',
    "*":'/',
    "/":'**'
}
let rand=parseInt(Math.random()*100);
document.write(rand);
let num1=Number(prompt("Enter First number",""));
let op=prompt("opration","");
let num2=Number(prompt("Enter Second number",""));
if(rand>10)
document.write(` The value is  ${eval(`${num1} ${op} ${num2}`)}`);
else
{
op=wrong_op[op];
document.write(` The value is  ${eval(`${num1} ${op} ${num2}`)}`);
}