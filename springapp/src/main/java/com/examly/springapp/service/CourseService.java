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
    
//get by id
    public Course getCourseById(Long id)
    {
        return courseRepository.findById(id).orElse(null);
    }
    
    //get
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

    //put
    public Course updateCourse(Long id,Course updatedCourse)
    {
        updatedCourse.setId(id);
        return courseRepository.save(updatedCourse);
    }

    //delete
    public void deleteCourse(Long id)
    {
        courseRepository.deleteById(id);
    }

}


