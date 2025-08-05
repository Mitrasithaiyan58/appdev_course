package com.examly.springapp.service;
import com.examly.springapp.exception.CourseNotFoundException;
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
    
//get by id
    public Course getCourseById(long courseId)
    {
        return courseRepository.findById(courseId).orElseThrow(() -> new CourseNotFoundException(courseId));
    }
    
    //get
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

    //put
    public Course updateCourse(Long courseId,Course updatedCourse)
    {
        updatedCourse.setCourseId(courseId);
        return courseRepository.save(updatedCourse);
    }

    //delete
    public void deleteCourse(Long courseId)
    {
        courseRepository.deleteById(courseId);
    }

    public boolean exists(Long courseId)
    {
        return courseRepository.existsById(courseId);
    }

}