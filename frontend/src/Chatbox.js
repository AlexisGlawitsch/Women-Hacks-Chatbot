import './App.css';
import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeft, fadeInRight } from 'react-animations';

const styles = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
}

function BubbleList(props) {
  const bubbles = props.bubbles;
  const bubbleItems = bubbles.map((bubble, index) => 
    <div className="bubble-row">
      <ChatBubble
        key={index}
        animation={bubble.animation}
        message={bubble.message}
        side={bubble.side}
        color={bubble.color}
      />
    </div>
  );

  return (
    <div className="chatbox">{bubbleItems}</div>
  );
}

function Chatbox(props) {
  const [bubbles, setBubbles] = useState([{
    message: "Placeholder message",
    color: "color-light-grey",
    side: "side-left",
    animation: styles.fadeInLeft
  }]);

  function onSubmit(text) {
    setBubbles([...bubbles, {
      message: text,
      color: props.color,
      side: "side-right",
      animation: styles.fadeInRight
    }]);
    console.log(bubbles);
  }

  return (
    <div className="box">
      <BubbleList bubbles={bubbles} />
      <InputBox 
        color={props.color}
        onSubmit={(text) => onSubmit(text)}
      />
    </div>
  );
}

function ChatBubble(props) {
  return (
    <StyleRoot>
      <div className={`chat-bubble ${props.side} ${props.color}`}
        style={props.animation}>
        <p>{props.message}</p>
      </div>
    </StyleRoot>
  )
}

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

export default Chatbox;