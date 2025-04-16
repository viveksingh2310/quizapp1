import React, { useEffect, useState } from 'react';
import { getAllQuestions, deleteQuestion } from '../services/api';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await getAllQuestions();
    setQuestions(res.data);
  };

  const handleDelete = async (id) => {
    await deleteQuestion(id);
    fetchQuestions();
  };

  return (
    <div>
      <h2>All Questions</h2>
      <ul>
        {questions.map(q => (
          <li key={q.id}>
            {q.questionTitle}
            <button onClick={() => handleDelete(q.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
