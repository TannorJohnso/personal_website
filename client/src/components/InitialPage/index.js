import React, { useState } from 'react';
import arrowDown from '../../assets/downArrow.png';
import frisbee from '../../assets/frisbee.png';
import { Animate } from 'react-simple-animate';
import './styles.css';

const InitialPage = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="initial_page">
      <div className="initPageName">
        <h2>Hello, I'm</h2>
        <h1>Tannor Johnson</h1>
        <p>I'm a Web Developer.</p>
        <Animate
          play={play} // Toggle when animation should start
          start={{
            transform: 'translateX(-100px) rotateZ(0)',
          }}
          end={{ transform: 'translateX(200px) rotateZ(720deg)' }}
        >
          <img alt="frisbee" src={frisbee} className="frisbee" />
        </Animate>
        <button onClick={() => setPlay(!play)}>Play</button>
      </div>
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
