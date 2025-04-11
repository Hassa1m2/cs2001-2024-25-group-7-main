/**
 * db.js
 * 
 * This file establishes a connection to the MongoDB database using Mongoose.
 * It exports `connectDB`, an async function that initiates the connection.
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' }); // Ensure environment variables are loaded

/**
 * connectDB
 * 
 * Asynchronously connects to the MongoDB database using the connection string 
 * stored in the environment variable `MONGO_URI`.
 * 
 * Logs a success message if the connection is successful, or exits the process
 * with an error code if the connection fails.
 */
const connectDB = async () => {
    try {
        // Connect to MongoDB (removing deprecated options)
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "your_database_name" // Replace with actual DB name if needed
        });

        console.log(`✅ MongoDB Successfully Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
