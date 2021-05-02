const WorkoutTracker = require("../models");

const path = require("path");

module.exports = function (app) {
    // to get getLastWorkout() from api.js
    app.get("/api/workouts", (req, res) => {
        // res.sendFile(path.join(__dirname, "../public/exercise.html"))
        WorkoutTracker.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });


    // to get createWorkout() from api.js
    app.create("/api/workouts", (req, res) => {
        WorkoutTracker.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // to get addExercise(data) from api.js
    // app.put("/api/workouts", ({body, params}, res) => {
    //     WorkoutTracker.findByIdAndUpdate({
    //     params.id,
    //     {$push:{exercise:body}},
    //     {new:true, runValidators: true}
    // })

    // to get getWorkoutsInRange() from api.js
    app.get("/api/workouts", (req, res) => {
        WorkoutTracker.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

}