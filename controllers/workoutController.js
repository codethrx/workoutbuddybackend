const Workout = require("../models/workout");
const mongoose = require("mongoose");
//controllers functions
const postWorkout = async (req, res) => {
  try {
    const { title, load, reps } = req.body;
    const newWorkout = await Workout.create({ title, load, reps });
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json({ error: e.message || "Error adding workout" });
  }
};
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Error finding the workout." });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Error finding the workout." });
  }
  res.status(200).json(workout);
};
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Error updating the workout." });
  }
  //   const workout = await Workout.findByIdAndDelete(id);
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ error: "Error updating the workout." });
  }
  res.status(200).json(workout);
};
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Error deleting the workout." });
  }
  const workout = await Workout.findByIdAndDelete(id);
  //   const workout = await Workout.findOneAndDelete({_id:id})
  if (!workout) {
    return res.status(404).json({ error: "Error deleting the workout." });
  }
  res.status(200).json(workout);
};
//EXPORTING..
module.exports = {
  postWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};
