import React from "react";
import "./CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list-container">
      <h2>All Courses</h2>
      {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Price</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.duration} hrs</td>
                <td>{course.level}</td>
                <td>₹{course.price}</td>
                <td>{course.isActive ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;