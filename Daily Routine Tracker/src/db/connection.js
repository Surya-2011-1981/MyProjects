const mongoose = require("mongoose");
(async function () {
    try {
        await mongoose.connect("mongodb://localhost:27017/DailyRoutineTracker");
        console.log("Connection Success");
    } catch (error) {
        console.log("Connection Failed");
    }
})();

