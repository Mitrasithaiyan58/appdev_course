import React, { useState } from "react";
import "./CourseForm.css";

export default function CourseForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    price: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.duration) newErrors.duration = "Duration is required.";
    if (!form.level) newErrors.level = "Please select a level.";
    if (!form.price) newErrors.price = "Price is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Course submitted successfully!");
      // API call goes here
    }
  };

  const handleReset = () => {
    setForm({
      title: "",
      description: "",
      duration: "",
      level: "",
      price: ""
    });
    setErrors({});
  };

return (
<div className="course-form-container">
<h2>Add Course</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>Title *</label>
<input
type="text"
name="title"
value={form.title}
onChange={handleChange}
/>
{errors.title && <span className="error">{errors.title}</span>}
</div>

<div className="form-group">
<label>Description</label>
<textarea
name="description"
value={form.description}
onChange={handleChange}
/>
</div>

<div className="form-group">
<label>Duration (hours) *</label>
<input
type="number"
name="duration"
value={form.duration}
onChange={handleChange}
/>
{errors.duration && <span className="error">{errors.duration}</span>}
</div>

<div className="form-group">
<label>Level *</label>
<select
name="level"
value={form.level}
onChange={handleChange}
>
<option value="">Select Level</option>
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Advanced">Advanced</option>
</select>
{errors.level && <span className="error">{errors.level}</span>}
</div>

<div className="form-group">
<label>Price *</label>
<input
type="number"
name="price"
value={form.price}
onChange={handleChange}
/>
{errors.price && <span className="error">{errors.price}</span>}
</div>

<div className="button-row">
<button type="submit" className="submit-btn">Submit</button>
<button type="button" onClick={handleReset} className="reset-btn">Reset</button>
</div>
</form>
</div>
);
}