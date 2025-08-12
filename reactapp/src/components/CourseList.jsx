import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []); // No warning now because fetchCourses is inside useEffect

  return (
    <div className="view-container">
      <h2>All Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <table className="course-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Trainer</th>
              <th>Duration</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseTitle}</td>
                <td>{course.trainerName}</td>
                <td>{course.courseDuration} days</td>
                <td>{course.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

