import React, { useState, useEffect } from 'react';
import arrowDown from '../../assets/downArrow.png';
import frisbee from '../../assets/frisbee.png';
import { Animate } from 'react-simple-animate';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

import './styles.css';

const InitialPage = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(!play);
  }, []);

  return (
    <div className="initial_page">
      <Animate
        play={play}
        start={{ opacity: 0, filter: 'blur(10px)' }}
        end={{ opacity: 1, filter: 'blur(0)', height: '100%' }}
      >
        <div className="initPageName">
          <h2>Hello, I'm</h2>
          <h1>Tannor Johnson</h1>
          <p>I'm a Web Developer.</p>
          <svg viewBox="0 0 100 100" height="66%" width="66%" class="svgBox">
            <path
              class="path"
              fill="white"
              stroke="black"
              stroke-width="2"
              d="M 75,50 v 25 h -50 v -50 h 50 Z"
            />
          </svg>
        </div>
      </Animate>
      <button
        onClick={() => {
          document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="downArrowButton"
      >
        <img src={arrowDown} alt="downArrow" className="arrowImg" />
      </button>
    </div>
  );
};

export default InitialPage;

{
  /* <Animate
        play={play} // Toggle when animation should start
        duration={3}
        start={{
          transform: 'translateX(0px) translateY(0)',
        }}
        end={{
          transform: 'translateX(84%) translateY(100%)',
        }}
      >
        <img alt="frisbee" src={frisbee} className="frisbee" />
      </Animate> */
}

{
  /* <svg>
            <path
              stroke="black"
              d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
            />
            <animated.path
              fill="none"
              stroke="red"
              strokeDasharray="500"
              strokeDashoffset="0"
              d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
            />
          </svg> */
}
