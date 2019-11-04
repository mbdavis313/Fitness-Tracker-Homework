const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Walking Criteria - Time, Distance, Speed, Laps, Location

const workoutSchema = new Schema({
    exercise: {
        type: String,
        trim: true,
        required: "Exercise is Required",
      },
    
  time: {
    type: String,
    trim: true,
    required: "Time is Required"
  },

  distance: {
    type: Number,
    trim: true,
    required: "Distance is Required",
  },

  speed: {
    type: Number,
    trim: true,
  },

  laps: {
    type: Number,
    trim: true,
  }
    
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 

