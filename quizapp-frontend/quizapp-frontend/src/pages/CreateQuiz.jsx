import React, { useState } from 'react';
import axios from 'axios';
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [category, setCategory] = useState('');
  const [numQ, setNumQ] = useState(1);
  const [difficulty, setDifficulty] = useState('Easy');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/quiz/create?category=${category}&numQ=${numQ}&difficultyLevel=${difficulty}&title=${title}`
      );
      setMessage(response.data);
    } catch (error) {
      console.error('Error creating quiz:', error);
      setMessage('Failed to create quiz.');
    }
  };

  return (
    <div className="create-container">
      <h2 className="create-title">Create a New Quiz</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <label>
          Quiz Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>

        <label>
          Number of Questions:
          <input
            type="number"
            value={numQ}
            min="1"
            onChange={(e) => setNumQ(e.target.value)}
            required
          />
        </label>

        <label>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>

        <button type="submit">Create Quiz</button>
      </form>
      {message && <p className="response-message">{message}</p>}
    </div>
  );
};

export default CreateQuiz;
