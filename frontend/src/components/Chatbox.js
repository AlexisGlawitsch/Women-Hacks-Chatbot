import '../styles/App.css';
import React, { useState } from 'react';
import styles from '../styles/styles.js';
import BubbleList from './BubbleList.js';
import InputBox from './InputBox.js';
import { sendMessage } from "../ApiHandler.js";

const introResponses = ["Thanks", "Sounds cool"];
const defaultResponses = ["None", "Several days", "More than half the days", "Almost every day"];

function Chatbox(props) {
  const [bubbles, setBubbles] = useState([{
    message: "Placeholder message",
    color: "color-light-grey",
    side: "side-left",
    animation: styles.fadeInLeft
  }]);

  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [isConversationEnded, setIsConversationEnded] = useState(false);

  function onClick(text) {
    setBubbles([...bubbles, {
      message: text,
      color: props.color,
      side: "side-right",
      animation: styles.fadeInRight
    }]);

    var response = sendMessage(text);
    if (response) {
      setBubbles([...bubbles, {
        message: response.text,
        color: "color-light-grey",
        side: "side-left",
        animation: styles.fadeInLeft
      }]);
    }
      // .then((response) => {
      //   setBubbles([...bubbles, {
      //     message: response.text,
      //     color: "color-light-grey",
      //     side: "side-left",
      //     animation: styles.fadeInLeft
      //   }]);
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
  }

  return (
    <div className="box">
      <BubbleList bubbles={bubbles} />
      {!isConversationEnded &&
        <InputBox
          color={props.color}
          buttons={isFirstMessage ? introResponses : defaultResponses}
          onClick={(text) => onClick(text)}
        />
      }
    </div>
  );
}

export default Chatbox;