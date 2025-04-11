const mongoose = require('mongoose');

/**
 * UserSchema
 * 
 * Defines the structure of user documents in the database.
 */

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [20, 'Username cannot exceed 20 characters'],
        match: [/^[a-zA-Z0-9._]+$/, 'Username can only contain letters, numbers, underscores, and full stops'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
      },
      passwordHash: {
        type: String,
        required: [true, 'Password is required'],
      },
      forenames: {
        type: String,
        trim: true,
        required: [true, 'Forenames are required'],
        maxlength: [50, 'Forenames cannot exceed 50 characters'],
        match: [/^[a-zA-Z\s-]+$/, 'Forenames can only contain letters, spaces, and hyphens'],
      },
      surname: {
        type: String,
        trim: true,
        required: [true, 'Surname is required'],
        maxlength: [50, 'Surnames cannot exceed 50 characters'],
        match: [/^[a-zA-Z\s-]+$/, 'Surnames can only contain letters, spaces, and hyphens'],
      },
      isPrivate: {
        type: Boolean,
        default: true,
      },
      dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required'],
      },
      country: {
        type: String,
        trim: true
      },
      city: {
        type: String,
        trim: true
      },
    },
    {
      timestamps: true, 
    }
);

module.exports = mongoose.model('User', UserSchema, 'users');
