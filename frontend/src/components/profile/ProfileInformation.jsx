import React, {useState} from 'react';
import FieldDisplay from './FieldDisplay';
import ProfileIcon from '../../assets/mentalhealthicon.png'
import {parseToDate, formatDate} from '../../utils/dateUtils'
import { useProfile } from "../../hooks/useProfile";
import './ProfileInformation.css'

const ProfileInformation = ({ profile }) => {

    const {
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
    } = useProfile(profile);

    return(
        <div className="profile-information">
            <h2>Profile Information</h2>
            <div className="divider"></div>

             {/* Profile Summary Section */}
            <div className="profile-summary"> 

                <div className='profile-edit-buttons'>

                    {isEditingProfile && (
                        <button 
                            className="cancel-button" onClick={() => handleCancelEdit("profile")}> 
                            Cancel
                        </button>
                    )}

                    <button className="edit-button" onClick={isEditingProfile ? handleProfileSave : () => setIsEditingProfile(true)}>
                        {isEditingProfile ? "Save" : "Edit"}
                    </button>
                </div>

                <img
                    src= {ProfileIcon} 
                    alt="Profile Icon"
                    className="profile-icon"
                />

                <FieldDisplay 
                fieldName="Username" 
                value={formData.username} 
                isEditing={isEditingProfile}
                onValueChange={(value) => handleFieldChange('username', value)}
                error={validationErrors.username}
                />

            </div>

             {/* Personal Information Section */}
            <div className="personal-info">
                
                <div className="profile-edit-buttons">
                    {isEditingPersonalInfo && (
                        <button className="cancel-button" onClick={() => handleCancelEdit("personalInfo")}>
                            Cancel
                        </button>
                    )}
                    <button className="edit-button" onClick={isEditingPersonalInfo ? handlePersonalInfoSave : () => setIsEditingPersonalInfo(true)}>
                        {isEditingPersonalInfo ? "Save" : "Edit"}
                    </button>
                </div>
             

                <div className="personal-info-row">
                <FieldDisplay
                    fieldName="Forename(s)"
                    value={formData.forenames}
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('forenames', value)}
                    error={validationErrors.forenames}
                />
                <FieldDisplay
                    fieldName="Surname"
                    value={formData.surname}
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('surname', value)}
                    error={validationErrors.surname}
                />
                </div>
                <div className="personal-info-row">
                    <FieldDisplay 
                    fieldName="Email" 
                    value={formData.email} 
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('email', value)}
                    error={validationErrors.email}
                    />

                    <FieldDisplay 
                    fieldName="Date of Birth" 
                    value={formData.dateOfBirth} 
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('dateOfBirth', value)}
                    error={validationErrors.dateOfBirth}
                    />
                </div>
                <div className="personal-info-row">
                    <FieldDisplay 
                    fieldName="Country" 
                    value={formData.country}
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('country', value)}
                    error={validationErrors.country}
                    />

                    <FieldDisplay 
                    fieldName="City" 
                    value={formData.city} 
                    isEditing={isEditingPersonalInfo}
                    onValueChange={(value) => handleFieldChange('city', value)}
                    error={validationErrors.city}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
