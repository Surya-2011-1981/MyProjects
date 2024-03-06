
	var suraj={
		name:"Surya",
		F_Name:"S_Narayan Singh",
		M_Name:"Smt. Rita Devi",
		Primary_Edu:"CM High School",
		Twelfth:"VBU",
		Current_Study:"BCA",
		Un_Roll:220199017211,
		Class_Roll:20,
		Highest_SGPA:8.36,
		Current_Semester:5,
		Grade:'A',
		Net_Worth:"1000cr"
	}
	// for(let details in suraj)
	// {
	// 	document.write("Your "+details+" is :"+suraj[details]+"<br>")
	// }
	document.write("<br><br>")
	function input(){
	var value=Number(prompt("Enter your option",""));
	// alert(value);
	if(value<=12 && value>=0)
	{
	document.getElementById('box2').innerHTML=Object.keys(suraj)[value-1]+" : "+suraj[Object.keys(suraj)[value-1]];
	}
	else
		alert("Sorry You Have Entered Wrong Input....!")
}