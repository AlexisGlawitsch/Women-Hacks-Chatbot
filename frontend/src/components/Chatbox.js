import '../styles/App.css';
import React, { useState } from 'react';
import styles from '../styles/styles.js';
import BubbleList from './BubbleList.js';
import InputBox from './InputBox.js';


const neg_checkin = [
  "Hey there! I’m Reshma, nice to e-meet you! I noticed you’re feeling not your best and I know that’s tough, but I am here to help!",
  "As your self-care companion, you can come to me for guidance, reassurance, or just someone to talk to!",
  "Yay! Now for a check in! I’m going to ask a few questions about your mood.",
  "Over the last two weeks, how often have you felt down, depressed, or pulled yourself away from things you usually enjoy?",
  "Over the last two weeks, did you feel angry, annoyed, or irritated from others or in unexplained situations?",
  "Over the last two weeks, how often have you felt nervous, concerned, or unable to stop worrying thoughts?",
  "Over the last two weeks, how often have you been getting the recommended hours of sleep (7-9 hours)?",
  "Our Check-In is complete! Thank you for answering those questions for me.",
  "Here are some resources to help with what you are feeling. Please feel free to come back for another Check-In anytime!",
  "Depression/including therapy tips: https://www.nimh.nih.gov/health/topics/depression/index.shtml",
  "Reduce feeling anxious: https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety",
  "Why is it necessary to get the recommended hours of sleep?: https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need",
  "How to reduce anger: https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434"
];

const pos_checkin = [
  "Hey there! I’m Reshma, nice to e-meet you! I noticed you’re feeling amazing and I am here to celebrate those emotions with you!",
  "As your self-care companion, you can come to me for guidance, reassurance, or just someone to talk to!",
  "Yay! Now for a check in! I’m going to ask a few questions about your mood.",
  "Over the last two weeks, how often have you done things you enjoy and love such as any hobbies (art, cooking, exercise)?",
  "Over the last two weeks, have you engaged in activities you find relaxing, for example watching Youtube Videos, going on a walk, self care, etc?",
  "Over the last two weeks, how often have you done things that made you feel energized, powerful, or spirited?",
  "Our Check-In is complete! Thank you for answering those questions for me.",
  "Here are some resources to help celebrate your positive feelings. Please feel free to come back for another Check-In anytime!",
  "Celebrate happiness: https://www.montynuss.com/blog/celebrate-happiness/",
  "Maintain calmness through meditation: https://www.mindful.org/how-to-meditate/",
  "Ways to boost energy: https://www.health.harvard.edu/energy-and-fatigue/9-tips-to-boost-your-energy-naturally"
]

const emotion_map = {
  "color-red": neg_checkin,
  "color-orange": neg_checkin,
  "color-yellow": pos_checkin,
  "color-green": pos_checkin,
  "color-blue": neg_checkin,
  "color-purple": pos_checkin,
  "color-black": neg_checkin
}

function Chatbox(props) {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [awaitingUserResponse, setAwaitingUserResponse] = useState(true);
  const [msgIndex, setMsgIndex] = useState(2);
  const [bubbles, setBubbles] = useState([{
    message: emotion_map[props.color][msgIndex - 2],
    color: "color-light-grey",
    side: "side-left",
    animation: styles.fadeInLeft
  }, {
    message: emotion_map[props.color][msgIndex - 1],
    color: "color-light-grey",
    side: "side-left",
    animation: styles.fadeInLeft
  }]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function onClick(text) {
    // setBubbles([...bubbles, {
    //   message: text,
    //   color: props.color,
    //   side: "side-right",
    //   animation: styles.fadeInRight
    // }]);

    console.log('Clicked button with text ' + text);

    if (msgIndex < emotion_map[props.color].length) {
      setBubbles([...bubbles, {
        message: text,
        color: props.color,
        side: "side-right",
        animation: styles.fadeInRight
      }, {
        message: emotion_map[props.color][msgIndex],
        color: "color-light-grey",
        side: "side-left",
        animation: styles.fadeInLeft
      }]);
    }

    console.log(msgIndex);
    
    if (msgIndex != 2 && msgIndex != emotion_map[props.color].length - 2) {
      setAwaitingUserResponse(true);
    }

    if (msgIndex == 3) {
      setIsFirstMessage(false);
    }

    setMsgIndex(msgIndex + 1);
  }

  return (
    <div className="box">
      <BubbleList bubbles={bubbles} />
      {<InputBox
          color={props.color}
          isFirstMessage={isFirstMessage}
          setIsFirstMessage={(val) => setIsFirstMessage(val)}
          awaitingUserResponse={awaitingUserResponse}
          showOptions={false}
          onClick={(text) => onClick(text)}
        />
      }
    </div>
  );
}

export default Chatbox;