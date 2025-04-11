/**
 * server.js
 * 
 * This file serves as the entry point for the backend server. It:
 * - Loads environment variables
 * - Connects to the MongoDB database
 * - Starts the Express server
 * 
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config/.env') });

console.log("Debugging: JWT_SECRET =", process.env.JWT_SECRET); // Debugging line
require('dotenv').config({ path: './config/.env' });

const dotenv = require('dotenv');

// Load environment variables from .env file BEFORE anything else
dotenv.config();

// Debugging: Check if environment variables are loaded
if (!process.env.JWT_SECRET) {
    console.error("⚠️ ERROR: JWT_SECRET is not defined. Make sure you have a correct .env file.");
    process.exit(1);
}

if (!process.env.MONGO_URI) {
    console.error("⚠️ ERROR: MONGO_URI is not defined. Make sure you have a correct .env file.");
    process.exit(1);
}

const app = require('./app');
const connectDB = require('./config/db');

// Connect to the database and then start the server
connectDB()
    .then(() => {
        // Use the PORT from the environment or default to 5000
        const PORT = process.env.PORT || 5000;

        // Start the server
        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        // If the database connection fails, log the error and exit the process
        console.error(`❌ Failed to connect to the database: ${error.message}`);
        process.exit(1);
    });
