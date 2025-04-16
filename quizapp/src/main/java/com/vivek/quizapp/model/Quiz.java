package com.vivek.quizapp.model;

import com.vivek.quizapp.Question;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Data
@Component
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    @ManyToMany
    private List<Question> questions;
public void setTitle(String title){
    this.title=title;
}
    public void setQuestions(List<Question> questions) {
        this.questions=questions;
    }
}
