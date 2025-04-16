import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Quiz App</h1>
      <button className="home-button" onClick={() => navigate('/create')}>
        Create Quiz
      </button>
      <button className="home-button" onClick={() => navigate('/take')}>
        Take Quiz
      </button>
    </div>
  );
};

export default Home;
