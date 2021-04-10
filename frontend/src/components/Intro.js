import React, { useState } from 'react';
import '../styles/App.css';

function Intro(props) {
    return (
      <div className="box introbox">
        <div className="p-squished">
          <p>Welcome to [Chatbot Name]!</p>
          <p>You can talk to me about anything related to mental health.</p>
        </div>
        <p>To begin, please select a color:</p>
        <div className="color-list">
          <CircleButton color="color-red" text="angry" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-orange" text="anxious" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-yellow" text="happy" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-green" text="calm" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-blue" text="sad" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-purple" text="energetic" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-black" text="tired" onClick={props.onColorClick}></CircleButton>
        </div>
        {props.allowContinue ?
          <button className="block-button color-grey" onClick={props.onContinueClick}>
            Continue
          </button>
          : <button disabled className="block-button" onClick={props.onContinueClick}>
            Continue
          </button>
        }
      </div>
    )
  }
  
  function CircleButton(props) {
    const [displayText, setDisplayText] = useState(false);

    return (
      <button 
        className={`circle-button ${props.color}`}
        onClick={() => props.onClick(props.color)}
        onMouseOver={() => setDisplayText(true)}
        onMouseLeave={() => setDisplayText(false)}
      >
        <p className="color-label">{displayText && props.text}</p>
      </button>
    )
  }

  export default Intro;