import React from 'react';
import arrowDown from '../../assets/downArrow.png';
import './styles.css';

const InitialPage = () => {
  return (
    <div className="initial_page">
      <div className="initPageName">
        <h2>Hello, I'm</h2>
        <h1>Tannor Johnson</h1>
        <p>I'm a Web Developer.</p>
      </div>
      <button
        onClick={() => {
          document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="downArrowButton"
      >
        <img src={arrowDown} className="arrowImg" />
      </button>
    </div>
  );
};

export default InitialPage;
