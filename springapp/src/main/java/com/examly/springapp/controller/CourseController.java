package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseService courseService;

  
    @PostMapping
    public ResponseEntity<Course> addCourse(@Valid @RequestBody Course course) {
        Course savedCourse = courseService.addCourse(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getCourse(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Course not found with id: " + id));
        }
        return ResponseEntity.ok(course);
    }


    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(@RequestParam(required = false) Boolean active) {
        List<Course> courses = (active == null)
                ? courseService.getAllCourses()
                : courseService.getAllCourses().stream()
                    .filter(course -> course.getIsActive() == active)
                    .collect(Collectors.toList());
        return ResponseEntity.ok(courses);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
        courseService.getCourseById(id); // Will throw if not found
        course.setCourseId(id);
        Course updatedCourse = courseService.addCourse(course);
        return ResponseEntity.ok(updatedCourse);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        if (!courseService.exists(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Course not found with id: " + id));
        }
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}