import React from 'react';
import './Preferences.css'
import ToggleSwitch from '../ToggleSwitch';

const Preferences = () => {
  return (
    <div className='preferences'>
      <h2>Preferences</h2>
      <div className='divider'></div>
      <div className='preferences-sections'>
        <div className='privacy-settings'>
          <h3>Privacy Settings</h3>

          <div className='privacy-field'>

            <ToggleSwitch />
            <div className='privacy-description'>
              <h4>Profile Visibility</h4>
              <h5>Show my profile in search results.</h5>
            </div>

          </div>

          <div className='location-field'>
            
            <ToggleSwitch />
            <div className='location-description'>
              <h4>Location Tracking</h4>
              <h5>Allow location tracking for personalised recommendations</h5>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Preferences;
