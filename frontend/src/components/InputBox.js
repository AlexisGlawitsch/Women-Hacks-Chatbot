import React from 'react';
import '../styles/App.css';

const introResponses = ["Thanks", "Sounds cool"];
const defaultResponses = ["None", "Several days", "More than half the days", "Almost every day"];

function InputBox(props) {
  var buttons;
  console.log(props);
  if (props.isFirstMessage) {
    buttons = introResponses;
  } else {
    buttons = defaultResponses;
  }

  var buttonList = buttons.map((text, index) =>
    <button 
      key={index}
      className={`block-button ${props.color}`}
      onClick={() => props.onClick(text)}
    >
      <p>{text}</p>
    </button>
  );
  

  return (
    <div className="box textbox">
      <div className="button-list">
        {buttonList}
      </div>
    </div>
  )
}

export default InputBox;