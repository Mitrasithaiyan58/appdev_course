import React, { useState } from "react";
import "./CourseForm.css";

const CourseForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    price: "",
    active: true
  });

  const [errors, setErrors] = useState({});
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.title.trim()) tempErrors.title = "Please fill the required fields.";
    if (!form.duration.trim()) tempErrors.duration = "Please fill the required fields.";
    if (!form.price.trim()) tempErrors.price = "Please fill the required fields.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      // API call can be placed here
    }
  };

  const handleReset = () => {
    setForm({
      title: "",
      description: "",
      duration: "",
      level: "",
      price: "",
      active: true
    });
    setErrors({});
  };

return (
<div className="course-form-container">
{/* Top right checkbox */}
<div style={{ display: "flex", justifyContent: "flex-end" }}>
<label className="fw-bold">
<input
type="checkbox"
checked={showOnlyActive}
onChange={(e) => setShowOnlyActive(e.target.checked)}
style={{ marginRight: "5px" }}
/>
Show only active courses
</label>
</div>

<h2 className="text-center">Add Course</h2>

<form onSubmit={handleSubmit}>
{/* Title */}
<div className="mb-3">
<label className="form-label fw-bold">Title *</label>
<input
name="title"
type="text"
className="form-control"
value={form.title}
onChange={handleChange}
/>
{errors.title && <small className="text-danger">{errors.title}</small>}
</div>

{/* Description */}
<div className="mb-3">
<label className="form-label fw-bold">Description</label>
<textarea
name="description"
className="form-control"
rows="2"
value={form.description}
onChange={handleChange}
/>
</div>

{/* Duration */}
<div className="mb-3">
<label className="form-label fw-bold">Duration *</label>
<input
name="duration"
type="text"
className="form-control"
value={form.duration}
onChange={handleChange}
/>
{errors.duration && <small className="text-danger">{errors.duration}</small>}
</div>

{/* Level */}
<div className="mb-3">
<label className="form-label fw-bold">Level</label>
<select
name="level"
className="form-select"
value={form.level}
onChange={handleChange}
>
<option value="">Select Level</option>
<option value="BEGINNER">Beginner</option>
<option value="INTERMEDIATE">Intermediate</option>
<option value="ADVANCED">Advanced</option>
</select>
</div>

{/* Price */}
<div className="mb-3">
<label className="form-label fw-bold">Price *</label>
<input
name="price"
type="number"
className="form-control"
value={form.price}
onChange={handleChange}
/>
{errors.price && <small className="text-danger">{errors.price}</small>}
</div>

{/* Submit & Reset buttons */}
<div style={{ display: "flex", justifyContent: "space-between" }}>
<button type="submit" className="btn btn-primary">
Submit
</button>
<button type="button" className="btn btn-secondary" onClick={handleReset}>
Reset
</button>
</div>
</form>
</div>
);
};

export default CourseForm;