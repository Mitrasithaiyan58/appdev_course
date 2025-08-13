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
    console.log("Form Submitted", form);
    // Add your API call here
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
    <div className="form-container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <label>Title *</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />

        <label>Duration (hours) *</label>
        <input name="duration" type="number" value={form.duration} onChange={handleChange} required />

        <label>Level *</label>
        <select name="level" value={form.level} onChange={handleChange} required>
          <option value="">Select Level</option>
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>

        <label>Price *</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} required />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
          <button type="submit" className="btn-primary">Submit</button>
          <button type="button" onClick={handleReset} className="btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;