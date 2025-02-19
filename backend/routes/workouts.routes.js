const express = require("express");
const { getWorkout, getWorkoutById, updateWorkout, deleteWorkout, createWorkout } = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
router.use(requireAuth)

router.get("/",getWorkout);

router.get("/:id", getWorkoutById);

router.patch("/:id", updateWorkout);

router.delete("/:id", deleteWorkout);

router.post("/", createWorkout);

module.exports = router;
