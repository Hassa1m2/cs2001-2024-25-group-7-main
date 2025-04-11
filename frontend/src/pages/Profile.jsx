import React, { useEffect, useState } from 'react';
import Sidebar from '../components/profile/Sidebar';
import ProfileInformation from '../components/profile/ProfileInformation';
import Preferences from '../components/profile/Preferences';
import AccountManagement from '../components/profile/AccountManagement';
import { formatDate } from '../utils/dateUtils';
import '../styles/Profile.css';

const Profile = () => {

    const [activeButton, setActiveButton] = useState(1);
    const [profile, setProfile] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    /**
     * Converts the date of birth in a user profile from ISO format to "DD/MM/YYYY".
     * 
     * @param {Object} data - The user profile object.
     * @param {string} data.dateOfBirth - The date of birth in ISO format.
     * @returns {Object} - A new profile object with the formatted date.
     */
    function transformProfileData(data) {
        const newData = { ...data };
        if (newData.dateOfBirth) {
          newData.dateOfBirth = formatDate(newData.dateOfBirth);
        }
        return newData;
    }

    useEffect(() => {
        
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/v1/users/profile', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_MOCK_TOKEN}`, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }

                const data = await response.json();

                const transformedData = transformProfileData(data);

                setProfile(transformedData);
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchProfile();
    }, []);

    const renderComponent = () => {
        switch (activeButton) {
          case 1:
            return <ProfileInformation profile={profile}/>;
          case 2:
            return <Preferences />;
          case 3:
            return <AccountManagement />;
          default:
            return <ProfileInformation/>;
        }
      };

    if (loading) return <p>Loading user profile...</p>;
    if (error) return <p>Error: {error}</p>;

    // Display user profile
    return (
        <div className='profile-page'>
            <Sidebar activeButton={activeButton} setActiveButton={setActiveButton} />
            {renderComponent()}
        </div>
    );
};

export default Profile;