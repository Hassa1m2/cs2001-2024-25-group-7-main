const mongoose = require("mongoose");

/**
 * ExerciseSchema
 * 
 * Defines the structure of exercise documents in the database.
 */

const ExerciseSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: true, 
    },
    description: {
      type: String,
      required: true, 
    },
    primaryMuscles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Muscle", // References the Muscle collection
        },
    ],
    secondaryMuscles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Muscle", // References the Muscle collection
        },
    ],
    logType: {
      type: String,
      enum: ["setsAndReps", "time", "distance"],
      required: true,
      default: "setsAndReps",
    },
    recommended: {
        minRecommendedSets: { type: Number, required: false },
        maxRecommendedSets: { type: Number, required: false },
        minRecommendedReps: { type: Number, required: false },
        maxRecommendedReps: { type: Number, required: false },
        timeInMinutes: { type: Number, required: false },
        distanceInKm: { type: Number, required: false },
    },
    instructions: [
        {
          type: String, // Array of step-by-step instructions
          required: true,
        },
    ],
    commonMistakes: [
        {
          type: String, // Array of common mistakes for the exercise
        },
    ],
    equipment: [
        {
          type: String, // Array of equipment needed for the exercise (e.g., "Dumbbells", "Barbell")
        },
    ],
    exerciseImages: [
        {
          type: String, // URLs of images demonstrating the exercise
          required: false, 
        },
    ],
    tags: [
        {
          type: String, 
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Exercise = mongoose.model("Exercise", ExerciseSchema, "exercises");

module.exports = Exercise;
