import React from 'react';
import Header from './components/Header/index';
import Page from './components/Page/index';
import backgroundImage from './assets/background.png';
import './styles.css';

const App = () => {
  return (
    <div class="app">
      <img src={backgroundImage} className="background-img" />
      <Header />
      <Page />
    </div>
  );
};

export default App;
