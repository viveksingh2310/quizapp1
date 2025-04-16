import React, { useState, useEffect } from 'react';
import { getQuizQuestions, submitQuiz } from '../services/api';
import ResultPage from '../components/ResultPage';
import './TakeQuiz.css';

const TakeQuiz = () => {
  const [quizId, setQuizId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(null);

  const fetchQuiz = async () => {
    const res = await getQuizQuestions(quizId);
    setQuestions(res.data);
    setResponses(res.data.map(q => ({ id: q.id, response: '' })));
  };

  const handleOptionChange = (qId, value) => {
    const updated = responses.map(r => (r.id === qId ? { ...r, response: value } : r));
    setResponses(updated);
  };

  const handleSubmit = async () => {
    const res = await submitQuiz(quizId, responses);
    setScore(res.data);
  };

  if (score !== null) return <ResultPage score={score} />;

  return (
    <div className="take-quiz-container">
      <h2 className="take-quiz-title">Take a Quiz</h2>
      <div className="quiz-id-input">
        <input
          placeholder="Enter Quiz ID"
          value={quizId}
          onChange={e => setQuizId(e.target.value)}
        />
        <button onClick={fetchQuiz}>Start Quiz</button>
      </div>

      {questions.map(q => (
        <div key={q.id} className="question-block">
          <h3>{q.questionTitle}</h3>
          <div className="options">
            {[q.option1, q.option2, q.option3, q.option4].map(opt => (
              <label key={opt}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt}
                  onChange={() => handleOptionChange(q.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {questions.length > 0 && (
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default TakeQuiz;
