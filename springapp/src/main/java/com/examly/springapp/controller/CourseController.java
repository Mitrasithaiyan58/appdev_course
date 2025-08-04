package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseService;
import java.util.List;
@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins="http://localhost:3000")
public class CourseController 
{

@Autowired

private CourseService courseService;
@PostMapping("/post")
public Course addCourse(@RequestBody Course course)
{
    
    return courseService.addCourse(course);
}
@GetMapping("/get")
public List<Course>getAllCourses()
{
    return courseService.getAllCourses();
}

@PutMapping("/put/{id}")
public Course updateCourse(@PathVariable Long id,@RequestBody Course course)
{
    return courseService.updateCourse(id,course);
}

@DeleteMapping("/delete/{id}")
public String deleteCourse(@PathVariable Long id)
{
    courseService.deleteCourse(id);
    return "success";
}
}