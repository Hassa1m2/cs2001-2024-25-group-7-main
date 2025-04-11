/**
 * @file seedMuscles.js
 * @description This script seeds the MongoDB database with predefined muscle data.
 * It connects to the database, removes any existing muscle entries, and inserts new ones.
 * 
 * Usage:
 * - Run `npm run seed:muscles` 
 * - Or execute directly using `node seeds/seedMuscles.js`
 */

const mongoose = require("mongoose");
const Muscle = require("../models/muscle");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI

/**
 * @constant {Array<Object>} seedMuscles
 * @description An array of predefined muscle data to be inserted into the database.
 */
const seedMuscles = [
    { name: "Abs", muscleGroup: "Abs", imageURL: "muscles/abs.webp" },
    { name: "Back", muscleGroup: "Back", imageURL: "muscles/back.webp" },
    { name: "Biceps", muscleGroup: "Biceps", imageURL: "muscles/biceps.webp" },
    { name: "Chest", muscleGroup: "Chest", imageURL: "muscles/chest.webp" },
    { name: "Forearms", muscleGroup: "Forearms", imageURL: "muscles/forearms.webp" },
    { name: "Glutes", muscleGroup: "Glutes", imageURL: "muscles/glutes.webp" },
    { name: "Shoulders", muscleGroup: "Shoulders", imageURL: "muscles/shoulders.webp" },
    { name: "Triceps", muscleGroup: "Triceps", imageURL: "muscles/triceps.webp" },
    { name: "Upper Legs", muscleGroup: "Upper Legs", imageURL: "muscles/upper_legs.webp" },
    { name: "Lower Legs", muscleGroup: "Lower Legs", imageURL: "muscles/lower_legs.webp" },
];

/**
 * @async
 * @function seedDB
 * @description Connects to MongoDB, clears existing muscle data, and inserts new muscle entries.
 */
const seedDB = async () => {
    try {

        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");

        await Muscle.deleteMany({});
        console.log("Existing muscle data removed");

        await Muscle.insertMany(seedMuscles);
        console.log("Muscle data seeded successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding database:", error);
        mongoose.connection.close();
    }
};

// Execute seeding if this file is run directly from the command line
if (require.main === module) {
    seedDB();
}

module.exports = seedMuscles;
