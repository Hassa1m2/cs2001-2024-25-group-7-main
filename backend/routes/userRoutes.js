/**
 * userRoutes.js
 * 
 * Defines routes for user-related operations using Express Router.
 */

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

/**
 * @route  POST /api/v1/users
 * @desc   Creates a new user.
 */
router.post('/', UserController.create_user);

/**
 * @route  DELETE /api/v1/users/:id
 * @desc   Deletes a user by their ID.
 */
router.delete('/:id', UserController.delete_user);

/**
 * @route  GET /api/v1/users/profile
 * @desc   Retrieves the profile information of the currently logged-in user.
 */
router.get('/profile', UserController.get_user_profile);

/**
 * @route  PATCH /api/v1/users/profile
 * @desc   Updates the profile details of the currently logged-in user.
 */
router.patch('/profile', UserController.update_user);

/**
 * @route  GET /api/v1/users/me
 * @desc   Returns the logged-in user's data.
 */
router.get('/me', UserController.get_user_data);

module.exports = router;
