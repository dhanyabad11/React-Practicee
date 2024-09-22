import React, { useState } from 'react';
function ToggleSwitch() {
    const [isOn, setisOn] = useState(false);

    return (
        <div>
        <h1> the switch is {isOn ? 'ON' : 'OFF'}
        </h1>
        <button onClick={() => setisOn(!isOn)}> Toggle </button>
        
        </div>
    )
}

export default ToggleSwitch;