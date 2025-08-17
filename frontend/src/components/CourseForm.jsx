import React, { useState } from "react";
import "./CourseForm.css";

const CourseForm = ({ onAddCourse }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    price: "",
    isActive: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    const err = {};
    if (!form.title.trim()) err.title = "Title is required";
    if (!form.description.trim()) err.description = "Description is required";
    if (!form.duration || Number(form.duration) < 1) err.duration = "Duration must be at least 1 hour";
    if (!form.level) err.level = "Select a level";
    if (form.price === "" || Number(form.price) < 0) err.price = "Price must not be negative";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    onAddCourse(form);
    setForm({
      title: "",
      description: "",
      duration: "",
      level: "",
      price: "",
      isActive: false
    });
    setErrors({});
    alert("Course added successfully!");
  };

  return (
<div className="course-form-container">
<h2>Add Course</h2>
<form onSubmit={handleSubmit}>
<label>Title *</label>
<input type="text" name="title" value={form.title} onChange={handleChange} />
{errors.title && <span className="error">{errors.title}</span>}

<label>Description *</label>
<textarea name="description" value={form.description} onChange={handleChange}></textarea>
{errors.description && <span className="error">{errors.description}</span>}

<label>Duration (hours) *</label>
<input type="number" name="duration" value={form.duration} onChange={handleChange} />
{errors.duration && <span className="error">{errors.duration}</span>}

<label>Level *</label>
<select name="level" value={form.level} onChange={handleChange}>
<option value="">Select Level</option>
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Advanced">Advanced</option>
</select>
{errors.level && <span className="error">{errors.level}</span>}

<label>Price *</label>
<input type="number" name="price" value={form.price} onChange={handleChange} />
{errors.price && <span className="error">{errors.price}</span>}

{/* Properly aligned checkbox */}
<label className="checkbox-label">
<input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
Active
</label>

<div className="form-buttons">
<button type="submit" className="submit-btn">Submit</button>
<button type="reset" className="reset-btn" onClick={() => setForm({
title: "",
description: "",
duration: "",
level: "",
price: "",
isActive: false
})}>Reset</button>
</div>
</form>
</div>
);
};

export default CourseForm;