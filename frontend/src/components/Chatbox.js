import '../styles/App.css';
import React, { useState } from 'react';
import styles from '../styles/styles.js';
import BubbleList from './BubbleList.js';
import InputBox from './InputBox.js';

function Chatbox(props) {
  const [bubbles, setBubbles] = useState([{
    message: "Placeholder message",
    color: "color-light-grey",
    side: "side-left",
    animation: styles.fadeInLeft
  }]);

  // Placeholder
  function getNextMessage() {
    // Gets the next message from the chatbot
    const message = 0;
  }

  function onClick(text) {
    setBubbles([...bubbles, {
      message: text,
      color: props.color,
      side: "side-right",
      animation: styles.fadeInRight
    }]);
  }

  return (
    <div className="box">
      <BubbleList bubbles={bubbles} />
      <InputBox
        color={props.color}
        onClick={(text) => onClick(text)}
      />
    </div>
  );
}

export default Chatbox;