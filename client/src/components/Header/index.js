import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <div class="header">
      <text class="header-name">Tannor Johnson</text>
      <div class="category-options">
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
