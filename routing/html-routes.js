const path = require("path");

module.exports = function(app) {
//exporting a function that takes a parameter called app used in the body that defines the GET route. We're passing the express app in this function
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});
};