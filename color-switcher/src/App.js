import React, { useState } from 'react';
import './App.css';
import ColorChangeButton from './ColorChangeButton';

function App() {
  const [color, setColor] = useState('green')
  console.log(color, setColor)
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Switcher</h1>
        <ColorChangeButton color='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='green' setColor={setColor}/>
        <p>Click the button below to change the color of the text.</p>

        {/* <button className='red' onClick={() => setColor('red')}>RED</button>
        <button className='blue' onClick={() => setColor('blue')}>BLUE</button>
        <button className='green' onClick={() => setColor('green')}>GREEN</button> */}

      </div>
    </div>
    
  );
}

export default App;
