package com.examly.springapp.service;
import com.examly.springapp.model.Course;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.examly.springapp.repository.CourseRepository;
@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
//post

    public Course addCourse(@RequestBody Course course)
    {
        return courseRepository.save(course);
    }

    //get
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

}


