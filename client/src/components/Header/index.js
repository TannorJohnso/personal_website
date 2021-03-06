import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <p className="header-name">Tannor Johnson</p>
      <div className="category-options">
        <ul>
          <a href="#about">About</a>
        </ul>
        <ul>
          <a href="#experience">Experience</a>
        </ul>
        <ul>
          <a href="#coursework">Coursework</a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
