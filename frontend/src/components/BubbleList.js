import React from 'react';
import { StyleRoot } from 'radium';

function BubbleList(props) {
  const bubbles = props.bubbles;
  const bubbleItems = bubbles.map((bubble, index) => 
    <div className={`bubble-row ${bubble.side}`}>
      <ChatBubble
        key={index}
        animation={bubble.animation}
        message={bubble.message}
        color={bubble.color}
        style={{maxWidth: '40px'}}
      />
    </div>
  );

  return (
    <div className="chatbox">
      <div className="chatbox-inner">
        {bubbleItems}
      </div>
    </div>
  );
}

function ChatBubble(props) {
  return (
    <StyleRoot>
      <div 
        className={`chat-bubble ${props.color}`}
        style={props.animation}
      >
        <p>{props.message}</p>
      </div>
    </StyleRoot>
  )
}

export default BubbleList;