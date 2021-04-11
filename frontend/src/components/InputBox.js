import React, { useState } from 'react';
import '../styles/App.css';

function InputBox(props) {
  // const [value, setValue] = useState();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   props.onSubmit(value);
  //   setValue("");
  // }

  const buttonList = [];
  if (props.buttons) {
    buttonList = props.buttons.map((button, index) =>
      <button 
        className={`block-button ${props.color}`}
        onClick={() => props.onClick(button.text)}
      >
        {button.text}
      </button>
    );
  }

  return (
    <div className="box textbox">
      <div className="buttonList">
        {buttonList}
      </div>
      {/* <form onSubmit={handleSubmit} className="textbox">
        <textarea 
          value={value} 
          onChange={(event) => setValue(event.target.value)}/>
        <input type="submit" className={`block-button ${props.color}`} />
      </form> */}
    </div>
  )
}

export default InputBox;