package com.examly.springapp.repository;

import org.springframework.stereotype.Repository;

 import com.examly.springapp.model.Course;
 import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface CourseRepository extends JpaRepository<Course,Long>
{

}