/**
 * statusRoutes.js
 * 
 * This file defines the routes for the API's status-related endpoints.
 * It uses Express Router to map incoming HTTP requests to the appropriate
 * controller functions. 
 * 
 */

const express = require('express');
const router = express.Router();
const StatusController = require('../controllers/statusController');

/**
 * GET /
 * 
 * Route: GET /v1/status
 * Description: Returns a JSON message indicating that the API is operational.
 * 
 */
router.get('/', StatusController.get_status);

module.exports = router;
