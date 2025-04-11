import React, {useState} from 'react';
import './ToggleSwitch.css'

const ToggleSwitch = ({ label }) => {

    const [toggled, setToggled] = useState(false);
    return (
        <button className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={() => setToggled(!toggled)}>
            <div className='thumb'></div>
        </button>
    );
};

export default ToggleSwitch;
