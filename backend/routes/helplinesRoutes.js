// helplinesRoutes.js

/**
 * helplinesRoutes.js
 * 
 * This file defines the routes for the helplines-related endpoints.
 * It uses Express Router to map incoming HTTP requests to the appropriate
 * controller functions. 
 * 
 */

const express = require('express');
const router = express.Router();
const HelplinesController = require('../controllers/helplinesController');  // Import the controller


/**
 * GET /v1/helplines
 * 
 * Route: GET /v1/helplines
 * Description: Returns a list of helplines
 * 
 */

// Map the GET request to the getHelplines function in the controller
router.get('/', HelplinesController.getHelplines);

module.exports = router;
