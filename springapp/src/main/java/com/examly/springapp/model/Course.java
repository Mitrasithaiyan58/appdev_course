package com.examly.springapp.model;
import jakarta.persistence.*;
@Entity
@Table(name="courses")
public class Course{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String courseTitle;
    private String trainerName;
    private String courseDuration;
    private String startDate;
}
public class Course {

}


