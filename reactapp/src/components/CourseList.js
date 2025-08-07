// File: src/components/CourseList.jsx
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/courses`);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses = filterActive ? courses.filter(c => c.isActive) : courses;

  if (loading) return <div data-testid="loading">Loading...</div>;
  if (error) return <div data-testid="error">[Error - You need to specify the message]</div>;
  if (filteredCourses.length === 0) return <div data-testid="empty">No courses available.</div>;

  return (
    <div>
      <button data-testid="active-filter" onClick={() => setFilterActive(!filterActive)}>Toggle Active Filter</button>
      {filteredCourses.map(course => (
        <div key={course.courseId} data-testid={`course-card-${course.courseId}`}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>Duration: {course.duration}</p>
          <p>Level: {course.level}</p>
          <p>Price: ${course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
