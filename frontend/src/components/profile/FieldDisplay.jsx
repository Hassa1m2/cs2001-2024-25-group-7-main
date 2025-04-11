import React, {useState} from 'react';
import './FieldDisplay.css';

const FieldDisplay = ({ fieldName, value, isEditing, onValueChange, error }) => {

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        if (onValueChange) {
            onValueChange(newValue); 
        }
    };
    
    return (
        <div className="field-display">
          <p className="field-name">{fieldName}:</p>
          <div className="field-content">
            {isEditing ? (
              <div className="input-container"> 
                <input
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                  className={`edit-input ${error ? 'input-error' : ''}`}
                />
                <p className="error-message">{error || ''}</p> 
              </div>
            ) : (
              <p className="field-value">{value}</p>
            )}
          </div>
        </div>
    );
};

export default FieldDisplay;
