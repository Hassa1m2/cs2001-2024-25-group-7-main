import { useState } from "react";
import {formatDate } from "../utils/dateUtils";

/**
 * Custom Hook for handling profile updates and state management.
 * This hook manages profile editing, validation, and API interactions.
 *
 * @param {Object} profile - The initial user profile data.
 * @returns {Object} - An object containing state variables and functions for profile management.
 */
export const useProfile = (profile) => {

    // State Variables
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
    const [formData, setFormData] = useState({ ...profile });
    const [backupData, setBackupData] = useState({ ...profile }); // Stores original values for cancel
    const [validationErrors, setValidationErrors] = useState({});


    // Handlers & API Calls

    /**
     * Updates the local form state when a user modifies a field.
     *
     * @param {string} field - The name of the field being updated.
     * @param {string} value - The new value for the field.
     */
    const handleFieldChange = (field, value) => {
        console.log(`Updating field: ${field} with value:`, value);
        setFormData((prevData) => ({ 
            ...prevData, 
            [field]: value 
        }));
    };

    /**
     * Sends an API request to update the user's profile.
     *
     * @param {Object} fieldsToUpdate - Object containing fields to update.
     * @param {Function} [onSuccess] - Callback function to execute on successful update.
     */
    const updateUserProfile = async (fieldsToUpdate, onSuccess) => {
        try {
            const response = await fetch('http://localhost:5001/api/v1/users/profile', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_MOCK_TOKEN}`,
                },
                body: JSON.stringify(fieldsToUpdate),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Update successful:', data);

                // Update both formData and backupData with new values
                setFormData((prevData) => ({
                    ...prevData,
                    ...fieldsToUpdate,
                }));

                setBackupData((prevData) => ({
                    ...prevData,
                    ...fieldsToUpdate,
                }));

                // Clear validation errors
                setValidationErrors({});

                // Execute callback if provided
                if (onSuccess) onSuccess();
            } else {
                const errorData = await response.json();
                if (errorData.fields) {
                    // Store field-specific validation errors
                    setValidationErrors(errorData.fields);
                } else {
                    alert(`Error: ${errorData.error}`);
                }
                console.error('Error updating profile:', errorData.error);
            }
        } catch (error) {
            console.error('Error during API call:', error);
            alert('An unexpected error occurred.');
        }
    };

    /**
     * Saves the Profile section if there are no validation errors.
     * Calls `updateUserProfile()` with only the `username` field.
     */
    const handleProfileSave = () => {
        if (isEditingProfile) {
            updateUserProfile({ username: formData.username }, () => {
                setIsEditingProfile(false);
            });
        }
    };

    /**
     * Saves the Personal Info section if there are no validation errors.
     * Calls `updateUserProfile()` with all relevant personal information fields.
     */
    const handlePersonalInfoSave = () => {
        if (isEditingPersonalInfo) {
            updateUserProfile(
                {
                    forenames: formData.forenames,
                    surname: formData.surname,
                    email: formData.email,
                    dateOfBirth: formData.dateOfBirth,
                    country: formData.country,
                    city: formData.city,
                },
                () => {
                    setIsEditingPersonalInfo(false);
                }
            );
        }
    };

    /**
     * Cancels editing and restores original values from `backupData`.
     * It only resets the section being edited (Profile or Personal Info).
     *
     * @param {string} section - The section to cancel ("profile" or "personalInfo").
     */
    const handleCancelEdit = (section) => {

        // Clear validation errors
        setValidationErrors({});

        // Restore fields depending on sections
        if (section === "profile") {
            setFormData((prevData) => ({
                ...prevData,
                username: backupData.username, 
            }));
            setIsEditingProfile(false);
        }
    
        if (section === "personalInfo") {
            setFormData((prevData) => ({
                ...prevData,
                forenames: backupData.forenames,
                surname: backupData.surname,
                email: backupData.email,
                dateOfBirth: backupData.dateOfBirth,
                country: backupData.country,
                city: backupData.city,
            }));
            setIsEditingPersonalInfo(false);
        }
    };
    

    return {
        formData,
        validationErrors,
        isEditingProfile,
        isEditingPersonalInfo,
        handleFieldChange,
        handleProfileSave,
        handlePersonalInfoSave,
        handleCancelEdit,
        setIsEditingProfile,
        setIsEditingPersonalInfo,
    };

}

