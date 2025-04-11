/**
 * exerciseRoutes.js
 * 
 * Defines routes for exercise-related operations using Express Router.
 */

const express = require('express');
const router = express.Router();
const ExerciseController = require("../controllers/exerciseController");

/**
 * @route   POST /api/v1/exercises
 * @desc    Create a new exercise (Admin Only)
 */
router.post("/", ExerciseController.create_exercise);

/**
 * @route   GET /api/v1/exercises
 * @desc    Fetch all exercises (Public)
 */
router.get("/", ExerciseController.get_all_exercises);

/**
 * @route   GET /api/v1/exercises/:id
 * @desc    Fetch an exercise (Public)
 */
router.get("/:id", ExerciseController.get_exercise_by_id);

/**
 * @route   PATCH /api/v1/exercises/:id
 * @desc    Update an existing exercise (Admin Only)
 */
router.patch("/:id", ExerciseController.update_exercise);

/**
 * @route   DELETE /api/v1/exercises/:id
 * @desc    Delete an exercise (Admin Only)
 */
router.delete("/:id", ExerciseController.delete_exercise);

module.exports = router;
