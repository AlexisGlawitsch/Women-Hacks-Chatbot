import React, { useState } from 'react';
import '../styles/App.css';

function InputBox(props) {
  if (props.buttons) {
    var buttonList = props.buttons.map((text, index) =>
      <button 
        key={index}
        className={`block-button ${props.color}`}
        onClick={() => props.onClick(text)}
      >
        {text}
      </button>
    );
  }

  return (
    <div className="box textbox">
      <div className="buttonList">
        {buttonList}
      </div>
    </div>
  )
}

export default InputBox;