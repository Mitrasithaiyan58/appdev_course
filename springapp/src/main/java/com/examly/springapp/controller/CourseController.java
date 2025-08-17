package com.examly.springapp.controller;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return new ResponseEntity<>(courseService.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable Long id) {
        Course course = courseService.getCourseById(id); // throws if not found
        return ResponseEntity.ok(course);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(@RequestParam(required = false) Boolean active) {
        List<Course> courses = (active == null)
                ? courseService.getAllCourses()
                : courseService.getAllCourses().stream()
                    .filter(course -> course.isActive() == active)
                    .collect(Collectors.toList());
        return ResponseEntity.ok(courses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
        courseService.getCourseById(id); // throws if not found
        course.setCourseId(id);
        return ResponseEntity.ok(courseService.addCourse(course));
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