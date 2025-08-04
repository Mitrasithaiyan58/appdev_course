package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import jakarta.validation.Valid;

import java.util.List;
@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins="http://localhost:3000")
public class CourseController 
{

@Autowired

private CourseService courseService;

//post
@PostMapping("/post")
public ResponseEntity<Course> addCourse(@Valid @RequestBody Course course)
{
    
    return ResponseEntity.ok (courseService.addCourse(course));
}

//get by id

@GetMapping("get/{id}")
public ResponseEntity<Course> getCourse(@PathVariable Long id)
{
    Course course=courseService.getCourseById(id);
    if(course==null)
    {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(course);
}

@GetMapping("/get")
public List<Course>getAllCourses()
{
    return courseService.getAllCourses();
}

@PutMapping("/put/{id}")
public ResponseEntity<Course> updateCourse(@PathVariable Long id,@RequestBody Course course)
{
    Course updated=courseService.updateCourse(id,course);
    return ResponseEntity.ok(updated);
}

@DeleteMapping("/delete/{id}")

    public String deleteCourse(@PathVariable Long id)
    {
        courseService.deleteCourse(id);
        return "Successfully deleted";
    }

// @DeleteMapping("/delete/{id}")
// public ResponseEntity<Void> deleteCourse(@PathVariable Long id)
// {
//     courseService.deleteCourse(id);
//     return ResponseEntity.ok().build();
// }
}