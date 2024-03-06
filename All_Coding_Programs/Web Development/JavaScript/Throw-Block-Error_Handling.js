let demo=()=>{
    let age=16;
    try{
        if(age<18)
        {
            throw Error("You Are not eligible for having a driving licence");
            
        }
    }catch(err){
        console.log("Yaha se chle jao Nadan Balak");
        return "17 saal ka jawani me madhos baccha";//This line is executed but according to rule after return statement no any statement will be executed but teh finally block will executed even the return statement executed. 
    }
    finally{
        console.log("Finally Block executed");//This will also executed
    }
}
let a=demo();
console.log(a);