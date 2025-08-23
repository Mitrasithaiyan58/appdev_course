import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    // Fetch courses from backend
    axios
      .get("http://localhost:8080/api/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  // Filtering
  const filteredCourses = courses.filter(
    (course) =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortKey === "duration") return a.duration - b.duration;
    if (sortKey === "price") return a.price - b.price;
    if (sortKey === "level") return a.level.localeCompare(b.level);
    if (sortKey === "status") return a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1;
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 View Courses</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search by name or level..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px", width: "60%" }}
      />

      {/* Sort */}
      <select
        onChange={(e) => setSortKey(e.target.value)}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        <option value="">Sort By</option>
        <option value="duration">Duration</option>
        <option value="price">Price</option>
        <option value="level">Level</option>
        <option value="status">Status</option>
      </select>

      {/* Table */}
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ background: "#f4f4f4" }}>
          <tr>
            <th>Course ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Duration (hrs)</th>
            <th>Level</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedCourses.length > 0 ? (
            sortedCourses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseId}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.duration} hrs</td>
                <td>{course.level}</td>
                <td>₹{course.price}</td>
                <td
                  style={{
                    color: course.isActive ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {course.isActive ? "Active" : "Inactive"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", color: "gray" }}>
                No courses found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
