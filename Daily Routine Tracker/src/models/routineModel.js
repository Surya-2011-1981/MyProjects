const mongoose = require("mongoose");
try {
    let contentSchema = new mongoose.Schema({
        date: {
            type: String,
            required: true,
            default: () => {
                const now = new Date();
                const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
                const dd = String(ist.getDate()).padStart(2, '0');
                const mm = String(ist.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
                const yyyy = ist.getFullYear();
                return `${dd}/${mm}/${yyyy}`;
            }
        },
        DSA_1: {
            time: "8:00 - 9:30",
            type: Boolean,
            default: false,
            required: true
        },
        Project_1: {
            time: "10:30 - 12:00",
            type: Boolean,
            default: false,
            required: true
        },
        Aptitude_1: {
            time: "12:00 - 1:00",
            type: Boolean,
            default: false,
            required: true
        },
        DSA_2: {
            time: "2:30 - 4:00",
            type: Boolean,
            default: false,
            required: true
        },
        Project_2: {
            time: "5:00 - 6:30",
            type: Boolean,
            default: false,
            required: true
        },
        Aptitude_2: {
            time: "8:00 - 9:00",
            type: Boolean,
            default: false,
            required: true
        }
    });


    const ScheduleModel = new mongoose.model("ScheduleModel", contentSchema);

    module.exports = ScheduleModel;
} catch (error) {
    console.log("Error Occured : ", error);
}
