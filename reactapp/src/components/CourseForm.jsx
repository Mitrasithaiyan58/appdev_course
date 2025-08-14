import React, { useState } from "react";

const CourseForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // API call can be placed here
  };

  const handleReset = () => {
    setForm({
      title: "",
      description: "",
      duration: "",
      level: "",
      price: ""
    });
  };

return (
<div className="course-form-container">
<h2 className="text-center">Add Course</h2>

<form onSubmit={handleSubmit}>
{/* Title */}
<div className="mb-3">
<label className="form-label" style={{ fontWeight: "bold" }}>
Title *
</label>
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
<label className="form-label" style={{ fontWeight: "bold" }}>
Description
</label>
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
<label className="form-label" style={{ fontWeight: "bold" }}>
Duration (hours) *
</label>
<input
name="duration"
type="text"
className="form-control"
value={form.duration}
onChange={handleChange}
/>
</div>

{/* Level */}
<div className="mb-3">
<label className="form-label" style={{ fontWeight: "bold" }}>
Level *
</label>
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
<label className="form-label" style={{ fontWeight: "bold" }}>
Price *
</label>
<input
name="price"
type="number"
className="form-control"
value={form.price}
onChange={handleChange}
/>
</div>

{/* Buttons */}
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