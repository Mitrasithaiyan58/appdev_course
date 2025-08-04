package com.examly.springapp.service;
import com.examly.springapp.model.Course;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.repository.CourseRepository;
@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
//post

    public Course addCourse(Course course)
    {
        return courseRepository.save(course);
    }

    //get
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

    //put
    public Course updateCourse(Long id,Course course)
    {
        course.setId(id);
        return courseRepository.save(course);
    }

    //delete
    public void deleteCourse(Long id)
    {
        courseRepository.deleteById(id);
    }

}


