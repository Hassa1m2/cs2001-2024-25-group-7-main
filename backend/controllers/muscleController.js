/**
 * muscleController.js
 * 
 * This file contains the controller logic for handling muscle endpoints of the API.
 * 
 * 
 */

const Muscle = require("../models/muscle")
const mongoose = require("mongoose");

/**
 * @route   POST /api/v1/muscles
 * @desc    Creates a new muscle entry in the database.
 * @access  Private (Admin Only)
 * 
 * @requestBody
 * - name: String (required) - The name of the specific muscle (e.g. "Rear Deltoid").
 * - imageURL: String (optional) - A URL pointing to an image representing the muscle.
 * 
 * @response
 * - 201: Successfully created a new muscle entry.
 * - 400: Bad request (e.g., missing required fields).
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.create_muscle = async (req, res) => {
    try {
        const { name, muscleGroup, bodyRegion, imageURL } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newMuscle = new Muscle({ name, imageURL });
        await newMuscle.save();

        res.status(201).json({
            message: "Muscle created successfully",
            muscle: newMuscle,
        });
    } catch (error) {
        console.error("Error creating muscle:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * @route   GET /api/v1/muscles
 * @desc    Retrieves a list of all muscles stored in the database.
 * @access  Public
 * 
 * @response
 * - 200: Returns an array of muscle objects.
 * - 500: Internal server error if retrieval fails.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.get_all_muscles = async (req, res) => {
    try {
        const muscles = await Muscle.find();
        res.status(200).json(muscles);
    } catch (error) {
        console.error("Error fetching muscles:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * @route   GET /api/v1/muscles/:id
 * @desc    Retrieves a single muscle entry based on the provided ID.
 * @access  Public
 * 
 * @param {string} req.params.id - The unique identifier (_id) of the muscle.
 * 
 * @response
 * - 200: Successfully retrieved the requested muscle.
 * - 400: Invalid ID format.
 * - 404: Muscle not found.
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.get_muscle_by_id = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid muscle ID format" });
        }

        const muscle = await Muscle.findById(id);

        if (!muscle) {
            return res.status(404).json({ error: "Muscle not found" });
        }

        res.status(200).json(muscle);
    } catch (error) {
        console.error("Error fetching muscle by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * @route   PATCH /api/v1/muscles/:id
 * @desc    Updates an existing muscle entry.
 * @access  Private (Admin Only)
 * 
 * @param {string} req.params.id - The unique identifier (_id) of the muscle.
 * @param {Object} req.body - The fields to update.
 * 
 * @requestBody
 * - name: String (optional) - Updated name of the muscle.
 * - imageURL: String (optional) - Updated image URL.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.update_muscle = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid muscle ID format" });
        }

        const updatedMuscle = await Muscle.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!updatedMuscle) {
            return res.status(404).json({ error: "Muscle not found" });
        }

        res.status(200).json({
            message: "Muscle updated successfully",
            muscle: updatedMuscle,
        });
    } catch (error) {
        console.error("Error updating muscle:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * @route   DELETE /api/v1/muscles/:id
 * @desc    Deletes an existing muscle entry.
 * @access  Private (Admin Only)
 * 
 * @param {string} req.params.id - The unique identifier (_id) of the muscle.
 * 
 * @response
 * - 200: Muscle successfully deleted.
 * - 400: Invalid ID format.
 * - 404: Muscle not found.
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.delete_muscle = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid muscle ID format" });
        }

        const deletedMuscle = await Muscle.findByIdAndDelete(id);

        if (!deletedMuscle) {
            return res.status(404).json({ error: "Muscle not found" });
        }

        res.status(200).json({ message: "Muscle deleted successfully" });
    } catch (error) {
        console.error("Error deleting muscle:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
