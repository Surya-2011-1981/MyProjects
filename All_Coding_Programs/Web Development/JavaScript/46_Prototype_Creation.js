let suraj = {
    work: () => {
        console.log("A FullStack Web Developer at learning Process");
    },
};


let Ranjit = {
    F_name: "Ruplal Yadav",
};


let Ajeet = {
    F_name: "Pradeep Rana",
};

Ranjit.__proto__ = suraj;
Ajeet.__proto__ = suraj;
// The Ranjit and Ajeet Object can Access Method work() of suraj object