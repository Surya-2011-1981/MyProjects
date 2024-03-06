class Show{
    // f1=()=>{
    //     console.log("Hello world");
    // }
    constructor(name){
        setTimeout(() => {
            console.log("Welcome to Classes and Object Chutiye");
            console.log("My Name is : "+name);
        }, 1000);
    }
}
let obj1=new Show("Suraj");
let obj2=new Show("Surya");
// obj1.f1();