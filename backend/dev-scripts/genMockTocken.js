/**
 * Script to generate a mock JWT token for testing purposes.
 * 
 * This script uses the `generateMockToken` utility function to create a
 * JWT token for a specified mock user ID. The generated token can be
 * used for testing authenticated endpoints in the application.
 * 
 * Usage:
 * - Run this script to generate a token for a specific mock user ID.
 * - Use the generated token in the Authorization header of your API requests.
 */

const {generateMockToken} = require('../utils/jwtUtils')

// Mock user ID to simulate a logged-in user
const mockUserId = '67595c492c138b14b7487ced';

// Generate the mock token
const token = generateMockToken(mockUserId);

// Log the generated token to the console
console.log('Mock Token:', token);
