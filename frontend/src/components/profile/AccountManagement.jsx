import React from 'react';
import { CloudArrowDownIcon } from '@heroicons/react/24/solid';
import './AccountManagement.css'

const AccountManagement = () => {

    /**
     * Handles downloading the user's data as a JSON file.
     */
    const handleDownload = async () => {
        try {
            // Fetch user data from the API
            const response = await fetch("http://localhost:5001/api/v1/users/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_MOCK_TOKEN}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data.");
            }

            // Extract user object
            const { user } = await response.json(); 

            // Pretty JSON format
            const jsonString = JSON.stringify(user, null, 2); 

            // Create a Blob object and trigger file download
            const blob = new Blob([jsonString], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            
            // Create and trigger a download link
            const a = document.createElement("a");
            a.href = url;
            a.download = `user_data.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading user data:", error);
            alert("Failed to download user data.");
        }
    };

    return (
        <div className="account-management">
            <h2>Account Management</h2>
            <div className="divider"></div>

            {/* Download Data Section */}
            <div className="account-data-section">
                <div className="account-data-section-text">
                    <h4>Download Your Data</h4>
                    <h5>Request a copy of your account data.</h5>
                </div>
                <button className="download-data-button" onClick={handleDownload}>
                    <CloudArrowDownIcon />
                    Download Data
                </button>
            </div>

            {/* Delete Data Section */}
            <div className="delete-account-section">
                <div className="delete-account-section-text">
                    <h4>Delete Account</h4>
                    <h5>If you no longer wish to use MentalHealth, you can permanently delete your account.</h5>
                </div>
                <button className="delete-account-button">
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default AccountManagement;