/**
 * @file seedExercises.js
 * @description This script seeds the MongoDB database with predefined exercise data.
 * It first fetches muscle IDs from the database and associates them correctly.
 *
 * Usage:
 * - Run `npm run seed:exercises` (if defined in package.json scripts)
 * - Or execute directly using `node seeds/seedExercises.js`
 */

const mongoose = require("mongoose");
const Exercise = require("../models/exercise");
const Muscle = require("../models/muscle");
require("dotenv").config();

const backExercises = require("./exerciseData/back");
const absExercises = require("./exerciseData/abs");
const bicepsExercises = require("./exerciseData/biceps");
const chestExercises = require("./exerciseData/chest");
const forearmsExercises = require("./exerciseData/forearms");
const glutesExercises = require("./exerciseData/glutes");
const shouldersExercises = require("./exerciseData/shoulders");
const tricepsExercises = require("./exerciseData/triceps");
const upperLegsExercises = require("./exerciseData/upperLegs");
const lowerLegsExercises = require("./exerciseData/lowerLegs");

const MONGO_URI = process.env.MONGO_URI;

/**
 * @async
 * @function getMuscleIds
 * @description Fetches all muscles from the database and returns a mapping of muscle names to their IDs.
 * @returns {Object} An object with muscle names as keys and their MongoDB ObjectIDs as values.
 */
const getMuscleIds = async () => {
    const muscles = await Muscle.find();
    const muscleMap = {};
    muscles.forEach(muscle => {
        muscleMap[muscle.name] = muscle._id;
    });
    return muscleMap;
};

/**
 * @async
 * @function formatExercises
 * @description Replaces muscle name strings in the exercise objects with their corresponding ObjectIDs.
 * @param {Array} exercises - Array of exercise objects exported from the data files.
 * @param {Object} muscleIds - Mapping of muscle names to their ObjectIDs.
 * @returns {Array} Formatted exercise objects with correct muscle references.
 */
const formatExercises = (exercises, muscleIds) => {
    return exercises.map(exercise => ({
        ...exercise,
        primaryMuscles: (Array.isArray(exercise.primaryMuscles) ? exercise.primaryMuscles : [])
            .map(muscleName => muscleIds[muscleName] || null)
            .filter(Boolean),
        secondaryMuscles: (Array.isArray(exercise.secondaryMuscles) ? exercise.secondaryMuscles : [])
            .map(muscleName => muscleIds[muscleName] || null)
            .filter(Boolean)
    }));
};
  
  

/**
 * @async
 * @function seedExercises
 * @description Seeds all exercise data into the database.
 */
const seedExercises = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Connected to MongoDB");
  
      const muscleIds = await getMuscleIds();
  
      if (Object.keys(muscleIds).length === 0) {
        console.error("No muscles found! Please seed the 'muscles' collection first.");
        mongoose.connection.close();
        return;
      }
  
      // Merge all exercise data and format with correct muscle IDs
      const exercises = [
        ...formatExercises(backExercises, muscleIds),
        ...formatExercises(absExercises, muscleIds),
        ...formatExercises(bicepsExercises, muscleIds),
        ...formatExercises(chestExercises, muscleIds),
        ...formatExercises(forearmsExercises, muscleIds),
        ...formatExercises(glutesExercises, muscleIds),
        ...formatExercises(shouldersExercises, muscleIds),
        ...formatExercises(tricepsExercises, muscleIds),
        ...formatExercises(upperLegsExercises, muscleIds),
        ...formatExercises(lowerLegsExercises, muscleIds)
      ];
  
      await Exercise.deleteMany({});
      console.log("Existing exercises removed");
  
      await Exercise.insertMany(exercises);
      console.log("Exercise data seeded successfully!");
  
    } catch (error) {
      console.error("Error seeding exercises:", error);
    } finally {
      mongoose.connection.close();
      console.log("Database connection closed");
    }
};

// Execute seed if running file directly
if (require.main === module) {
    seedExercises();
}

module.exports = seedExercises;

