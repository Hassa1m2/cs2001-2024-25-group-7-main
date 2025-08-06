const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require("../models/user");
const { verifyToken } = require('../utils/jwtUtils');
const { updateUserSchema } = require('../validation/userValidation');

// CREATE USER
exports.create_user = async (req, res) => {
    try {
       const {
  username,
  email,
  password,
  forenames,
  surname,
  dateOfBirth,
  isPrivate = true,     // Default if not sent
  country = "",         // Optional, default empty string
  city = ""             // Optional, default empty string
} = req.body;


        if (!username || !email || !password || !forenames || !surname || !dateOfBirth) {
            return res.status(400).json({ error: 'All required fields must be provided.' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

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

        await newUser.save();

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

    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(409).json({ error: `${field} already exists.` });
        }
        res.status(500).json({ error: 'Internal server error.' });
    }
};

// LOGIN USER ✅
// LOGIN USER
exports.login_user = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check both username and email
    const user = await User.findOne({
      $or: [{ username: username }, { email: username }]
    });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


// DELETE USER
exports.delete_user = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized. No token provided.' });

        const decoded = verifyToken(token);
        const userId = decoded.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID format.' });
        }

        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) return res.status(404).json({ error: 'User not found.' });

        return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }
        console.log('Error in delete_user:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

// GET PROFILE
exports.get_user_profile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized. No token provided.' });

        const decoded = verifyToken(token);
        const userId = decoded.id;

        const user = await User.findById(userId).select('-passwordHash');
        if (!user) return res.status(404).json({ error: 'User not found.' });

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
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }
        console.log('Error in get_user_profile:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

// UPDATE USER
exports.update_user = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized. No token provided.' });

        const decoded = verifyToken(token);
        const userId = decoded.id;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found.' });

        const { error, value } = updateUserSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const fieldErrors = {};
            error.details.forEach(detail => {
                fieldErrors[detail.context.key] = detail.message;
            });
            return res.status(400).json({ error: 'Validation failed', fields: fieldErrors });
        }

        Object.assign(user, value);
        await user.save();

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
            for (let field in error.errors) {
                fieldErrors[field] = error.errors[field].message;
            }
        }
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            fieldErrors[field] = `${field} already exists.`;
        }
        if (Object.keys(fieldErrors).length > 0) {
            return res.status(400).json({ error: 'Validation failed', fields: fieldErrors });
        }

        console.error('Error in update_user:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

// GET USER DATA
exports.get_user_data = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized. No token provided.' });

        const decoded = verifyToken(token);
        const userId = decoded.id;

        const user = await User.findById(userId).select("-passwordHash -__v");
        if (!user) return res.status(404).json({ error: "User not found" });

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

        res.status(200).json({ user: formattedUser });

    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
