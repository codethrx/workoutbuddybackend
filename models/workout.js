const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//structure
const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true }
);
//model is used to interact with a database colleciton
module.exports = mongoose.model("Workout", workoutSchema);
