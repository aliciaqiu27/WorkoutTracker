const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutTrackerSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: {
        type: String,
        required:"Exercise type is required!",
        trim: true,
      },
      name: {
        type: String,
        required: "Name of exercise is required!",
        trim: true,
      },
      duration: {
        type: Integer,
        required: "Duration of exercise is required!",
      },
      weight: {
        type: Integer,
        required: "Weight is required!",
      },
      reps: {
        type: Integer,
        required: "Number of reps is required!",
      },
      sets: {
        type: Integer,
        required: "Number of sets is required!",
      },
      distance: {
        type: Integer,
      },
    },
  ],
});

const WorkoutTracker = mongoose.model("WorkoutTracker", WorkoutTrackerSchema);

module.exports = WorkoutTracker;
