/**
 * jwtUtils.js
 * 
 * Utility functions for handling JWT operations.
 * 
 * This file provides helper functions to generate and verify JWTs, using
 * the `jsonwebtoken` library. It also ensures that the JWT secret key
 * is securely loaded from environment variables.
 * 
 */

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


// Load environment variables from the .env file located in the parent directory
dotenv.config({ path: `${__dirname}/../.env` });

// Retrieve the JWT secret key from the environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Validate that the secret key is defined; throw an error if missing
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined. Please set it in the .env file.');
}

/**
 * generateMockToken
 * 
 * Generates a JWT token for a given user ID.
 * 
 * @param {string} userId - The unique identifier of the user.
 * @returns {string} - The generated JWT token.
 * 
 * Usage:
 * - Used to simulate authentication by generating tokens for testing purposes.
 */
const generateMockToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, {expiresIn: '1d'});
}

/**
 * verifyToken
 * 
 * Verifies the authenticity and validity of a JWT token.
 * 
 * @param {string} token - The JWT token to verify.
 * @returns {Object} - The decoded payload of the token if valid.
 * @throws {Error} - Throws an error if the token is invalid or expired.
 * 
 * Usage:
 * - Used in protected routes to authenticate and authorize requests.
 */
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

// Export the utility functions for use in other parts of the application
module.exports = { generateMockToken, verifyToken };

