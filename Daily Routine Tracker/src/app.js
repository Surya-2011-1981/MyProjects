const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs = require("express-handlebars");
const path = require("path");
require("./db/connection");
const ScheduleModel = require("./models/routineModel");
const port = 8000;
try {

    const viewPath = path.join(__dirname, "../templates/views");
    const staticPath = path.join(__dirname, "../public");

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(staticPath));
    app.set("views", viewPath);
    app.set("view engine", "hbs");

    app.get("/daily-schedule", (req, res) => {
        res.render("index");
    })


    app.post("/daily-schedule", async (req, res) => {

        const now = new Date();
        const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        const dd = String(ist.getDate()).padStart(2, '0');
        const mm = String(ist.getMonth() + 1).padStart(2, '0');
        const yyyy = ist.getFullYear();
        const today = `${dd}/${mm}/${yyyy}`;
        try {
            const isDatePresent = await ScheduleModel.findOne({ date: today });
            if (isDatePresent) {
                return res.render("alreadyFilled", { date: today });
            }
            const currentDay = new ScheduleModel({
                date: today,
                DSA_1: req.body.dsa1 === "on",
                Project_1: req.body.project1 === "on",
                Aptitude_1: req.body.aptitude1 === "on",
                DSA_2: req.body.dsa2 === "on",
                Project_2: req.body.project2 === "on",
                Aptitude_2: req.body.aptitude2 === "on"
            });
            await currentDay.save();
            res.render("savedSeccessfully");
        } catch (error) {
            console.log(error);
            if (error.code === 11000) {
                res.render("alreadyFilled", { date: today });
            } else {

                res.render("alreadyFilled", { date: today });
            }
        }



    })




    app.listen(port, () => {
        console.log("Listening at port ", port);
    });
} catch (error) {
    console.log("Connection Failed");
}