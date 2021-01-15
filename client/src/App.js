import React from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import InitialPage from './components/InitialPage';
import backgroundImage from './assets/background.png';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <InitialPage />
      <div className="img_container">
        <img src={backgroundImage} className="background-img" />
      </div>
      <div>
        <Header />
        <div className="page_format">
          <Page />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
