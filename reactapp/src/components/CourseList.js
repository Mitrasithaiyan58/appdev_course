// CourseList.jsx
import React, { useEffect, useState } from "react";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/courses");
      const data = await response.json();
      if (response.ok) {
        setCourses(data);
      } else {
        throw new Error(data.message || "Error fetching courses");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses = activeOnly ? courses.filter(c => c.isActive) : courses;

  if (loading) return <div data-testid="loading">Loading...</div>;
  if (error) return <div data-testid="error">[Error - You need to specify the message]</div>;
  if (filteredCourses.length === 0) return <div data-testid="empty">No courses available</div>;

  return (
    <div>
      <button data-testid="active-filter" onClick={() => setActiveOnly(!activeOnly)}>
        Active Only
      </button>
      {filteredCourses.map(course => (
        <div data-testid={`course-card-${course.courseId}`} key={course.courseId}>
          {course.title}
        </div>
      ))}
    </div>
  );
};

export default CourseList;