/**
 * userController.js
 * 
 * This file contains the controller logic for handling user endpoints of the API.
 * 
 * 
 */

const bcrypt = require('bcryptjs');
const User = require("../models/user")
const mongoose = require('mongoose');
const { verifyToken } = require('../utils/jwtUtils');
const { updateUserSchema, parseDateString } = require('../validation/userValidation')

/**
 * @route   POST /api/v1/users
 * @desc    Creates a new user account in the database.
 * @access  Public
 * 
 * @requestBody
 * - username: String (required) - Unique identifier for the user.
 * - email: String (required) - User's email address (must be unique).
 * - password: String (required) - User's password (hashed before saving).
 * - forenames: String (required) - User's given name(s).
 * - surname: String (required) - User's last name.
 * - dateOfBirth: String (required) - User's birthdate in `DD/MM/YYYY` format.
 * - isPrivate: Boolean (optional) - Whether the user's profile is private (default: `true`).
 * - country: String (optional) - User's country.
 * - city: String (optional) - User's city.
 * 
 * @response
 * - 201: Successfully created a new user account.
 * - 400: Bad request (e.g., missing required fields).
 * - 409: Conflict (e.g., email or username already exists).
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.create_user = async (req, res) => {

    try {

        // Fetch the required fields from the request body
        const { username, email, password, forenames, surname, dateOfBirth, isPrivate, country, city } = req.body;

        // Check if all required fields are provided
        if (!username || !email || !password || !forenames || !surname || !dateOfBirth) {
            return res.status(400).json({ error: 'All required fields must be provided.' });
        }

        // Generate a salt for password hashing
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the generated salt
        const passwordHash = await bcrypt.hash(password, salt);
        
        // Create a new user instance
        const newUser = new User({ 
            username, 
            email, 
            passwordHash, 
            forenames, 
            surname,
            dateOfBirth, 
            isPrivate: isPrivate !== undefined ? isPrivate : true,
            country,  
            city 
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                forenames: newUser.forenames,
                surname: newUser.surname,
                isPrivate: newUser.isPrivate,
                dateOfBirth: newUser.dateOfBirth.toISOString().split('T')[0],
                country: newUser.country,
                city: newUser.city,
            }
        });

    } catch(error) {
        // Handle validation and database errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }

        // Handle duplicate key errors (e.g., username or email already exists)
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(409).json({ error: `${field} already exists.` });
        }

        // General server error
        res.status(500).json({ error: 'Internal server error.' });
    } 

};

/**
 * @route   DELETE /api/v1/users
 * @desc    Deletes the logged-in user's account from the database.
 * @access  Private (Requires JWT authentication)
 * 
 * @headers
 * - Authorization: Bearer <JWT Token>
 * 
 * @response
 * - 200: Successfully deleted the user account.
 * - 400: Invalid user ID format.
 * - 401: Unauthorized (missing or invalid token).
 * - 404: User not found.
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.delete_user = async (req, res) => {
    try {

        // Extract token from Authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized. No token provided.' });
        }

        // Verify the JWT token to extract user information
        const decoded = verifyToken(token);
        const userId = decoded.id;

        // Validate the provided ID format
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID format.' });
        }
        
        // Find the user by ID and delete it
        const deletedUser = await User.findByIdAndDelete(userId);

        // If no user is found with the given ID, return a 404 error
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Respond with a success message
        return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {

        // Handle JWT-specific errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }

        // Log the error for debugging
        console.log('Error in delete_user:', error);

        // Handle unexpected errors
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

/**
 * @route   GET /api/v1/users/profile
 * @desc    Retrieves the authenticated user's profile information.
 * @access  Private (Requires JWT authentication)
 * 
 * @headers
 * - Authorization: Bearer <JWT Token>
 * 
 * @response
 * - 200: Returns user profile data.
 * - 401: Unauthorized (missing or invalid token).
 * - 404: User not found.
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.get_user_profile = async (req, res) => {
    try {

        // Extract token from Authorization header
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            // Return an unauthorized error if no token is provided
            return res.status(401).json({ error: 'Unauthorized. No token provided.' });
        }

        // Verify the JWT token to extract user information
        const decoded = verifyToken(token);

        // Extract user ID from the token payload
        const userId = decoded.id;

        // Query the database for the user associated with the ID
        const user = await User.findById(userId).select('-passwordHash'); 
        if (!user) {
             // Return a not found error if the user does not exist
            return res.status(404).json({ error: 'User not found.' });
        }

        // Respond with the user's profile details
        res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            forenames: user.forenames,
            surname: user.surname,
            dateOfBirth: user.dateOfBirth,
            country: user.country,
            city: user.city
        });
    } catch (error) {

        if (error.name === 'JsonWebTokenError') {
            // Handle invalid or expired JWT tokens
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }

        // Handle unexpected server errors
        console.log('Error in get_user_profile:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

/**
 * @route   PATCH /api/v1/users/profile
 * @desc    Updates the logged-in user's profile information.
 * @access  Private (Requires JWT authentication)
 * 
 * @headers
 * - Authorization: Bearer <JWT Token>
 * 
 * @requestBody
 * - Any combination of: username, email, forenames, surname, dateOfBirth, country, city.
 * 
 * @response
 * - 200: Successfully updated user profile.
 * - 400: Validation error or invalid data.
 * - 401: Unauthorized (missing or invalid token).
 * - 404: User not found.
 * - 500: Internal server error.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.update_user = async (req, res) => {
    try {
        // Extract token from Authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized. No token provided.' });
        }

         // Verify the JWT token to extract user information
        const decoded = verifyToken(token);
        const userId = decoded.id;

        // Find user in DB
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Validate incoming request data with Joi
        const { error, value } = updateUserSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const fieldErrors = {};
            error.details.forEach(detail => {
                fieldErrors[detail.context.key] = detail.message;
            });

            console.log(fieldErrors)
            return res.status(400).json({ error: 'Validation failed', fields: fieldErrors });
        }

        // Apply updates only if all fields are valid
        Object.assign(user, value);
        await user.save();

        // Return updated user (excluding passwordHash)
        res.status(200).json({
            message: 'User updated successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                forenames: user.forenames,
                surname: user.surname,
                isPrivate: user.isPrivate,
                dateOfBirth: user.dateOfBirth,
                country: user.country,
                city: user.city,
            },
        });

    } catch (error) {

    const fieldErrors = {};
        if (error.name === 'ValidationError') {
            for (let field in err.errors) {
                fieldErrors[field] = err.errors[field].message;
            }

            console.log("Error Validating: ", error)
        }
        
        // Handle duplicate key errors (MongoDB error code 11000)
        if (error.code === 11000) {
            console.log("Error Duplicate: ", error);

            const field = Object.keys(error.keyValue)[0]; // Extract the duplicate field name
            fieldErrors[field] = `${field} already exists.`; // Add duplicate error to field errors
        }

        // If there are any field errors, return them
        if (Object.keys(fieldErrors).length > 0) {
            return res.status(400).json({ 
                error: 'Validation failed', 
                fields: fieldErrors 
            });
        }

        // Handle other unexpected errors
        console.error('Error in update_user:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

/**
 * @route   GET /api/v1/users/me
 * @desc    Retrieves the authenticated user's information from MongoDB.
 * @access  Private (Requires JWT authentication)
 * 
 * @headers
 * - Authorization: Bearer <JWT Token> 
 * 
 * @response
 * - 200: Successfully retrieves the authenticated user's profile.
 * - 401: Unauthorized (missing or invalid token).
 * - 404: User not found.
 * - 500: Internal server error.
 * 
 * @returns {Object} user - The user's profile information in a structured format.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.get_user_data = async (req, res) => {
    try {
        // Extract token from Authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized. No token provided.' });
        }

        // Verify JWT token to get user ID
        const decoded = verifyToken(token);
        const userId = decoded.id;

        // Fetch user from MongoDB, excluding sensitive fields (passwordHash)
        const user = await User.findById(userId).select("-passwordHash -__v");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Format the response with a logical order
        const formattedUser = {
            username: user.username,
            email: user.email,
            forenames: user.forenames,
            surname: user.surname,
            dateOfBirth: user.dateOfBirth.toISOString().split('T')[0], 
            isPrivate: user.isPrivate,
            country: user.country,
            city: user.city,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
        // Send user data as JSON response
        res.status(200).json({ user: formattedUser });

    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
