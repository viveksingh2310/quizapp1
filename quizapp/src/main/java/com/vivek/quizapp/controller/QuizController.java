package com.vivek.quizapp.controller;

import com.vivek.quizapp.Question;
import com.vivek.quizapp.model.QuestionWrapper;
import com.vivek.quizapp.model.Response;
import com.vivek.quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("quiz")
public class QuizController {
    @Autowired
    QuizService quizService;
//    QuestionWrapper questionWrapper;
    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numQ, @RequestParam String difficultyLevel,@RequestParam String title){
    return quizService.createQuiz(category,numQ,difficultyLevel,title);
    }
    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id){
//here creation of the question wrapper is done here and the same would be returned to the user if he/she ask to get the real question from the database
   return quizService.getQuizQuestions(id);
    }
    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> response){// the score would be an int
return quizService.calculateResult(id,response);
    }
}
