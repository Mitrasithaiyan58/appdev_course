import React, { useState } from "react";
import { createCourse } from "../utils/api";

const initialForm = {
  title: "",
  description: "",
  duration: "",
  level: "",
  price: "",
  active: true
};

export default function CourseForm({ onCourseAdded }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.duration || !form.level || !form.price) {
      setError("⚠ Please fill all the required fields.");
      return;
    }
    try {
      await createCourse({
        ...form,
        duration: parseInt(form.duration),
        price: parseFloat(form.price)
      });
      setForm(initialForm);
      setError("");
      onCourseAdded();
    } catch (err) {
      setError("❌ Error adding course. Please try again.");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setError("");
  };

return (
<div className="card p-4 shadow-sm" style={{ maxWidth: "400px" }}>
<h4 className="text-center mb-3">Add Course</h4>
{error && <div className="alert alert-danger">[Error - You need to specify the message]</div>}

<form onSubmit={handleSubmit}>
{/* Title */}
<div className="mb-3">
<label className="form-label">Title *</label>
<input
name="title"
type="text"
className="form-control"
value={form.title}
onChange={handleChange}
/>
</div>

{/* Description */}
<div className="mb-3">
<label className="form-label">Description</label>
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
<label className="form-label">Duration (hours) *</label>
<input
name="duration"
type="number"
className="form-control"
value={form.duration}
onChange={handleChange}
/>
</div>

{/* Level */}
<div className="mb-3">
<label className="form-label">Level *</label>
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
<label className="form-label">Price *</label>
<input
name="price"
type="number"
className="form-control"
value={form.price}
onChange={handleChange}
/>
</div>

{/* Active Checkbox */}
<div className="form-check mb-3">
<input
className="form-check-input"
type="checkbox"
name="active"
checked={form.active}
onChange={handleChange}
/>
<label className="form-check-label">Active</label>
</div>

{/* Buttons */}
<div className="d-flex justify-content-between">
<button type="submit" className="btn btn-primary">Submit</button>
<button type="button" className="btn btn-secondary" onClick={handleReset}>
Reset
</button>
</div>
</form>
</div>
);
}