import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../utils/api";

export default function CourseList({ refreshFlag }) {
  const [courses, setCourses] = useState([]);
  const [showActive, setShowActive] = useState(false);

  useEffect(() => {
    getCourses(showActive).then(setCourses);
  }, [refreshFlag, showActive]); // No loadCourses dependency warning

  const handleDelete = async (id) => {
    await deleteCourse(id);
    getCourses(showActive).then(setCourses);
  };

  return (
    <div>
      <h2>Courses</h2>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active
      </label>

      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            <b>{c.title}</b> — {c.level} — {c.duration} hrs — ₹{c.price} —{" "}
            {c.active ? "Active" : "Inactive"}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(c.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
