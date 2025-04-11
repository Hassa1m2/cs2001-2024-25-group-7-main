/**
 * statusController.js
 * 
 * This file contains the controller logic for handling the status endpoint of the API.
 * It provides functionality to check if the API is operational.
 * 
 */

/**
 * get_status
 * 
 * A controller function that responds with a JSON message indicating that the API is operational. 
 * 
 * Route: GET /api/v1/status
 * Response: { message: 'API is up and running!' }
 * 
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 */
exports.get_status = (req, res) => {
    // Send a 200 OK status with a success message
    res.status(200).json({ message: 'API is up and running!' });
};
  