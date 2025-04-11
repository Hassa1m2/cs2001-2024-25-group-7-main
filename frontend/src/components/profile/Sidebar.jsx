import React from 'react';
import { AdjustmentsHorizontalIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import './Sidebar.css';

const Sidebar = ({ activeButton, setActiveButton }) => {

    const navItems = [
        { id: 1, icon: <UserIcon/>, text: 'Profile Info' },
        { id: 2, icon: <AdjustmentsHorizontalIcon/>, text: 'Preferences' },
        { id: 3, icon: <Cog6ToothIcon/>, text: 'Account Management' }
    ];

    return (
        <ul className="profile-nav">
            <h2>User Profile<br /> Management</h2>
            {navItems.map((item) => (
                <li key={item.id} className={`nav-item ${activeButton === item.id ? 'active' : ''}`}
                    onClick={() => setActiveButton(item.id)}>

                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.text}</span>
                </li>
            ))}
        </ul>
    );
};

export default Sidebar;
