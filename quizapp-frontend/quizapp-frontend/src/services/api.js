import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getAllQuestions = () => axios.get(`${BASE_URL}/question/allQuestions`);
export const getQuestionsByCategory = (category) => axios.get(`${BASE_URL}/question/category/${category}`);
export const addQuestion = (question) => axios.post(`${BASE_URL}/question/add`, question);
export const deleteQuestion = (id) => axios.delete(`${BASE_URL}/question/delete/${id}`);

export const createQuiz = (category, numQ, difficultyLevel, title) =>
  axios.post(`${BASE_URL}/quiz/create`, null, {
    params: { category, numQ, difficultyLevel, title },
  });

export const getQuizQuestions = (id) => axios.get(`${BASE_URL}/quiz/get/${id}`);
export const submitQuiz = (id, responses) => axios.post(`${BASE_URL}/quiz/submit/${id}`, responses);
