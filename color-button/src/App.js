import { useState } from 'react';

import './App.css';

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setdisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
        <button 
          style={{"backgroundColor": disabled ? "gray" : buttonColor}}
          onClick={()=> setButtonColor(newButtonColor)}
          disabled={disabled}
        >
          Change to {replaceCameWithSpaces(newButtonColor)}
        </button>
        <input 
          type="checkbox"
          id='enable-button-checkbox'
          defaultChecked={disabled}
          onChange={(e)=>setdisabled(e.target.checked)}
        />
        <label htmlFor='enable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
