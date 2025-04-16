package com.vivek.quizapp.service;

import com.vivek.quizapp.Question;
import com.vivek.quizapp.dao.QuestionDao;
import com.vivek.quizapp.dao.QuizDao;
import com.vivek.quizapp.model.QuestionWrapper;
import com.vivek.quizapp.model.Quiz;
import com.vivek.quizapp.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    QuizDao quizDao;
    @Autowired
    QuestionDao questionDao;
    public ResponseEntity<String> createQuiz(String category, int numQ, String difficultyLevel,String title) {
    List<Question> questions=questionDao.findRandomQuestionsByCategory(category,numQ);


        Quiz quiz=new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizDao.save(quiz);
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
       Optional<Quiz> quiz= Optional.of(new Quiz());
               quiz=quizDao.findById(id);
       List<Question> questionFromDB=quiz.get().getQuestions();
        List<QuestionWrapper> questionForUser=new ArrayList<>();
        for(Question q: questionFromDB){
            QuestionWrapper qw= new QuestionWrapper(q.getId(),q.getQuestionTitle(),q.getOption1(),q.getOption2(),q.getOption3(),q.getOption4());
     questionForUser.add(qw);
        }
        return new ResponseEntity<>(questionForUser,HttpStatus.OK);
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
    Quiz quiz= quizDao.findById(id).get();// we can also use optional class here
        List<Question> questions= quiz.getQuestions();
        int right=0;
        int i=0;
        for(Response response: responses){
            String rightAnswer=questions.get(i).getRightAnswer().trim();
            String resAnswer=response.getResponse().trim();
            if(resAnswer.equals(rightAnswer)){
                right++;
            }
                i++;
        }
        return new ResponseEntity<>(right,HttpStatus.OK);
    }
}

