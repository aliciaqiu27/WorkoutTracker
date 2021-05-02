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
        type: Number,
        required: "Duration of exercise is required!",
      },
      weight: {
        type: Number,
        required: "Weight is required!",
      },
      reps: {
        type: Number,
        required: "Number of reps is required!",
      },
      sets: {
        type: Number,
        required: "Number of sets is required!",
      },
      distance: {
        type: Number,
      },
    },
  ],
}, 
{
 toJSON: {
   virtuals: true,
 },
},
);

//Virtual column in the duration. We're telling the duration the specific workout by summing the duration. Starting value is 0.
WorkoutTrackerSchema.virtual("totalDuration").get(() => {
  return this.exercise.reduce((total, exercise) => total + exercise.duration, 0);
});


const WorkoutTracker = mongoose.model("WorkoutTracker", WorkoutTrackerSchema);

module.exports = WorkoutTracker;
