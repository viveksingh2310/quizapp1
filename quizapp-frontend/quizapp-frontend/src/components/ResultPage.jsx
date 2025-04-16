import React from 'react';
import './ResultPage.css';

const ResultPage = ({ score }) => {
  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Completed!</h2>
      <p className="result-score">Your score: {score}</p>
    </div>
  );
};

export default ResultPage;
