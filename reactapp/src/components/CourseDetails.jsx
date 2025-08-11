import React, { useEffect, useState } from "react";
import { getAllCourses } from "../utils/api";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data);
    } catch (err) {
      setError("Failed to fetch courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (error) return <div style={{ color: "red" }}>[Error - You need to specify the message]</div>;
  if (courses.length === 0) return <p>No courses available.</p>;

  return (
    <div>
      <h2>Course List</h2>
      {courses.map((course, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <h3>{course.courseTitle}</h3>
          <p>Trainer: {course.trainerName}</p>
          <p>Duration: {course.courseDuration} hours</p>
          <p>Start Date: {course.startDate}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;