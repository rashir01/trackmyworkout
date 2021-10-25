const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema({

  
  day: {
    type: Date, 
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String },
      name: { type: String },
      duration: { type: Number},
      weight: { type: Number},
      reps: { type: Number},
      sets: { type: Number},
      distance: { type: Number}
    },
  ],

}, opts );
WorkoutSchema.virtual("totalDuration").get(function() {
  const totalDuration = this.exercises.reduce((partialSum, exercise) => {
    return partialSum + exercise.duration;
  }, 0)
  return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;