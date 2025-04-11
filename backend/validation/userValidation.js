const Joi = require('joi');

/**
 * Custom validation function to check if the user is at least 16 years old.
 * This function converts a `DD/MM/YYYY` date string into a JavaScript `Date` object
 * and calculates the user's age based on the current date.
 *
 * @param {string} value - The date of birth string in "DD/MM/YYYY" format.
 * @param {Object} helpers - Joi validation helper object for error handling.
 * @returns {string} - Returns the validated date string if valid, otherwise throws an error.
 */
const validateAge = (value, helpers) => {

    // Convert from DD/MM/YYYY to a Javascript Date object
    const [day, month, year] = value.split('/').map(Number);
    const dob = new Date(year, month - 1, day); // Month is zero-based in JS Date()
  
    if (isNaN(dob.getTime())) {
      return helpers.error('date.format'); // Triggers Joi validation error
    }
  
    // Calculate the user's age
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
  
    // Check if the birthday has passed in the current year
    const hasBirthdayPassed =
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
  
    const adjustedAge = hasBirthdayPassed ? age : age - 1;
  
    if (adjustedAge < 16) {
      return helpers.error('date.age'); // Triggers Joi validation error
    }

    // If valid, return the date as a string
    return value;
  };
  
/**
 * Parses a date string in "DD/MM/YYYY" format into a JavaScript `Date` object.
 *
 * @param {string} dateString - The date string in "DD/MM/YYYY" format.
 * @returns {Date|null} - A valid Date object, or `null` if the date is invalid.
 */
function parseDateString(dateString) {
    const [day, month, year] = dateString.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
}

/**
 * Joi validation schema for updating a user's profile.
 * Ensures all fields meet the expected format and constraints.
 */
const updateUserSchema = Joi.object({

    /** Username validation: Optional, 3-20 characters, only letters, numbers, underscores, and full stops. */
    username: Joi.string()
        .trim()
        .min(3)
        .max(20)
        .regex(/^[a-zA-Z0-9._]+$/)
        .message('Username can only contain letters, numbers, underscores, and full stops')
        .optional(),

    /** Email validation: Optional, must be a valid email format. */
    email: Joi.string()
        .email()
        .message('Please enter a valid email address')
        .optional(),

    /** Forenames validation: Optional, max 50 characters, only letters, spaces, and hyphens allowed. */
    forenames: Joi.string()
        .trim()
        .max(50)
        .regex(/^[a-zA-Z\s-]+$/)
        .message('Forenames can only contain letters, spaces, and hyphens')
        .optional(),

    /** Surname validation: Optional, max 50 characters, only letters, spaces, and hyphens allowed. */
    surname: Joi.string()
        .trim()
        .max(50)
        .regex(/^[a-zA-Z\s-]+$/)
        .message('Surnames can only contain letters, spaces, and hyphens')
        .optional(),

    /** Privacy setting: Optional boolean flag. */
    isPrivate: Joi.boolean().optional(),

    /** Date of birth validation: Must be in "DD/MM/YYYY" format and the user must be at least 16 years old. */
    dateOfBirth: Joi.string()
        .pattern(/^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/)
        .message('Invalid date format. Expected format: DD/MM/YYYY')
        .custom(validateAge)
        .messages({
        'date.format': 'Invalid date format. Expected format: DD/MM/YYYY',
        'date.age': 'You must be at least 16 years old.',
        })
        .optional(),

        /** Country validation: Optional string, trimmed for whitespace. */
        country: Joi.string().trim().optional(),
        
        /** City validation: Optional string, trimmed for whitespace. */
        city: Joi.string().trim().optional(),

}).unknown(false); 

module.exports = {
    updateUserSchema,
    parseDateString,
};
