/**
 * muscleRoutes.js
 * 
 * Defines routes for muscle-related operations using Express Router.
 */

const express = require('express');
const router = express.Router();
const MuscleController = require("../controllers/muscleController");

/**
 * @route  POST /api/v1/muscles
 * @desc   Create a new muscle
 */
router.post("/", MuscleController.create_muscle);

/**
 * @route  GET /api/v1/muscles
 * @desc   Fetch all muscles
 */
router.get("/", MuscleController.get_all_muscles);

/**
 * @route  GET /api/v1/muscles/:id
 * @desc   Fetch a single muscle by ID
 */
router.get("/:id", MuscleController.get_muscle_by_id);

/**
 * @route  PATCH /api/v1/muscles/:id
 * @desc   Update a muscle entry
 */
router.patch("/:id", MuscleController.update_muscle);

/**
 * @route  DELETE /api/v1/muscles/:id
 * @desc   Delete a muscle entry
 */
router.delete("/:id", MuscleController.delete_muscle);

module.exports = router;
