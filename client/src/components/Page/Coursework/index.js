import React from 'react';
import { data } from './courses';
import './styles.css';

const Coursework = () => {
  const listItems = ({ title, instructor, link, keyPoints }) => {
    return (
      <div>
        <h1>Title: {title}</h1>
        <h2>Instructor: {instructor}</h2>
        <text>
          Link: <a href={link}>{link}</a>
        </text>
        <ul>
          {keyPoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div id="coursework" className="coursework section">
      <h1>Coursework</h1>
      <div>
        {Object.keys(data).map(function (key) {
          return listItems(data[key]);
        })}
      </div>
    </div>
  );
};

export default Coursework;
