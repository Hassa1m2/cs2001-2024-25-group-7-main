const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// ✅ Registration route
router.post('/register', UserController.create_user);

// ✅ Login route
router.post('/login', UserController.login_user);

// ✅ Delete user (by ID)
router.delete('/:id', UserController.delete_user);

// ✅ Get current user profile
router.get('/profile', UserController.get_user_profile);

// ✅ Update user profile
router.patch('/profile', UserController.update_user);

// ✅ Get full user data
router.get('/me', UserController.get_user_data);

module.exports = router;
