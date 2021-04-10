import './App.css';
import React, { useState } from 'react';

function App() {
  const [background, setBackground] = useState('color-default');

  return (
    <div className={`App ${background}`}>
      <Chatbox onColorClick={(color) => setBackground(color)}/>
    </div>
  );
}

function Chatbox(props) {
  return (
    <div className="chatbox">
        <div className="p-squished">
          <p>Welcome to [Chatbot Name]!</p>
          <p>You can talk to me about anything related to mental health.</p>
        </div>
        <p>To begin, please select a color:</p>
        <div className="color-list">
          <CircleButton color="color-red" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-orange" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-yellow" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-green" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-blue" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-purple" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-black" onClick={props.onColorClick}></CircleButton>
        </div>
      </div>
  )
}

function CircleButton(props) {
  return (
    <button 
      className={`circle-button ${props.color}`}
      onClick={() => props.onClick(props.color)}
    >
    </button>
  )
}

export default App;
