import React, { useState } from 'react';
import '../styles/App.css';

function InputBox(props) {
  const [value, setValue] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(value);
    setValue("");
  }

  return (
    <div className="box textbox">
      <form onSubmit={handleSubmit} className="textbox">
        <textarea 
          value={value} 
          onChange={(event) => setValue(event.target.value)}/>
        <input type="submit" className={`block-button ${props.color}`} />
      </form>
    </div>
  )
}

export default InputBox;