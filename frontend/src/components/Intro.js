import React from 'react';
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
          <CircleButton color="color-red" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-orange" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-yellow" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-green" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-blue" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-purple" onClick={props.onColorClick}></CircleButton>
          <CircleButton color="color-black" onClick={props.onColorClick}></CircleButton>
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
    return (
      <button 
        className={`circle-button ${props.color}`}
        onClick={() => props.onClick(props.color)}
      />
    )
  }

  export default Intro;