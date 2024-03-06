var str="Chinna_Swami_Mutthu_Swami_Ved_Gopal_Iyyer"
			console.log("Adding prefix : "+str.concat("Trichipalli","ok"));
			console.log("The length of the string  is : "+str.length+"<br>");
			console.log("The Strings are in uppercase : "+str.toUpperCase());
			console.log("The String are in lowercase : "+str.toLowerCase());
			console.log("From index 5 to 12 values are : "+str.slice(5,13));
			console.log("After index 10 all values are : "+str.slice(10));
			console.log("Replacing Swami by SWAMI : "+str.replace("Swami" , "SWAMI"));
            console.log(str);
			for(let a in str){
				console.log(str[a]+",");
			}
			console.log("<br>")
			for(let b of str){
				console.log(b+",");
			}
            console.log("surya\"".length);
 
			console.log(str.includes("Iyyer"));

			console.log(str.endsWith('r'));
			console.log(str.endsWith('c'));
			console.log(str.endsWith('d'));
			console.log(str.startsWith('C'));


			console.log(str.replace("Chinna_Swami_Mutthu_" , ""));
			let str2="SURYA";
			str[3]='A';
			str[4]='J';//String immutability concept occurs 
			console.log(str2);