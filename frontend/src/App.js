import './App.css';
import React, { useState } from 'react';
import Intro from './Intro.js';
import Chatbox from './Chatbox.js';

function App() {
  const [theme, setTheme] = useState('color-default');
  const [allowContinue, setAllowContinue] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  function onColorClick(color) {
    setTheme(color);
    setAllowContinue(true);
  }
  
  return (
    <div className={`App ${theme}`}>
      {showIntro ? 
        <Intro 
          onColorClick={onColorClick}
          allowContinue={allowContinue}
          onContinueClick={() => setShowIntro(false)}
        />
        : <Chatbox/>
      }
    </div>
  );
}


export default App;
