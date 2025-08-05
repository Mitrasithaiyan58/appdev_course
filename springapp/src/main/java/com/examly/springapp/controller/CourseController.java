package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins="http://localhost:3000")
public class CourseController 
{

@Autowired

private CourseService courseService;

//post
@PostMapping
public ResponseEntity<Course> addCourse(@Valid @RequestBody Course course)
{
    
    return new ResponseEntity<> (courseService.addCourse(course),HttpStatus.CREATED);
}

//get by id

@GetMapping("/{id}")
public ResponseEntity<?> getCourse(@PathVariable Long id)
{
    Course course=courseService.getCourseById(id);
    if(course==null)
    {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message","Course not found with id: "+id));
    }

    return ResponseEntity.ok(course);
}

@GetMapping
public ResponseEntity<List<Course>>getAllCourses(@RequestParam(required=false)Boolean active)
{
    List<Course>courses=(active==null)
    ?courseService.getAllCourses()
    :courseService.getAllCourses().stream()
    .filter(course->course.getIsActive()==active)
    .toList();
    return ResponseEntity.ok(courses);
}


    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
        if (!courseService.exists(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Course not found with id: " + id));
        }
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

   


// @PutMapping("/put/{id}")
// public ResponseEntity<Course> updateCourse(@PathVariable Long id,@RequestBody Course course)
// {
//     Course updated=courseService.updateCourse(id,course);
//     return ResponseEntity.ok(updated);
// }

// @DeleteMapping("/delete/{id}")

//     public String deleteCourse(@PathVariable Long id)
//     {
//         courseService.deleteCourse(id);
//         return "Successfully deleted";
//     }

// @DeleteMapping("/delete/{id}")
// public ResponseEntity<Void> deleteCourse(@PathVariable Long id)
// {
//     courseService.deleteCourse(id);
//     return ResponseEntity.ok().build();
// }
