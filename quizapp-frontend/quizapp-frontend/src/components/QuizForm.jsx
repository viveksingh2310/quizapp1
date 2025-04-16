import React, { useState } from 'react';
import { addQuestion } from '../services/api';

const QuizForm = () => {
  const [question, setQuestion] = useState({
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    category: '',
    difficultyLevel: ''
  });

  const handleChange = e => setQuestion({ ...question, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addQuestion(question);
    alert('Question added!');
    setQuestion({
      questionTitle: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      rightAnswer: '',
      category: '',
      difficultyLevel: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Question</h2>
      <input name="questionTitle" placeholder="Question" value={question.questionTitle} onChange={handleChange} />
      <input name="option1" placeholder="Option 1" value={question.option1} onChange={handleChange} />
      <input name="option2" placeholder="Option 2" value={question.option2} onChange={handleChange} />
      <input name="option3" placeholder="Option 3" value={question.option3} onChange={handleChange} />
      <input name="option4" placeholder="Option 4" value={question.option4} onChange={handleChange} />
      <input name="rightAnswer" placeholder="Correct Answer" value={question.rightAnswer} onChange={handleChange} />
      <input name="category" placeholder="Category" value={question.category} onChange={handleChange} />
      <input name="difficultyLevel" placeholder="Difficulty" value={question.difficultyLevel} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default QuizForm;
