const express = require("express");
const router = express.Router();
//getting the controllers
const {
  getWorkout,
  getWorkouts,
  postWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
//GET
router.get("/", getWorkouts);
//GET-SINGLE
router.get("/:id", getWorkout);
//POST
router.post("/", postWorkout);
//DELETE
router.delete("/:id", deleteWorkout);
//PATCH
router.patch("/:id", updateWorkout);
module.exports = router;
