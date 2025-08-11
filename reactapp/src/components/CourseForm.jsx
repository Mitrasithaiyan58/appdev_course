import React, { useState } from "react";
import { addCourse } from "../utils/api";

const CourseForm = ({ onCourseAdded }) => {
  const [form, setForm] = useState({
    courseTitle: "",
    trainerName: "",
    courseDuration: "",
    startDate: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.courseTitle || !form.trainerName || !form.courseDuration || !form.startDate) {
      setError("All fields are required.");
      return;
    }

    try {
      await addCourse(form);
      setForm({
        courseTitle: "",
        trainerName: "",
        courseDuration: "",
        startDate: ""
      });
      setError("");
      if (onCourseAdded) onCourseAdded();
    } catch (err) {
      setError("Failed to add course. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      {error && <div style={{ color: "red" }}>[Error - You need to specify the message]</div>}
      <form onSubmit={handleSubmit}>
        <label>Course Title *</label>
        <input
          type="text"
          name="courseTitle"
          value={form.courseTitle}
          onChange={handleChange}
          required
        />

        <label>Trainer Name *</label>
        <input
          type="text"
          name="trainerName"
          value={form.trainerName}
          onChange={handleChange}
          required
        />

        <label>Course Duration (hours) *</label>
        <input
          type="number"
          name="courseDuration"
          value={form.courseDuration}
          onChange={handleChange}
          required
        />

        <label>Start Date *</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          required
        />

        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;