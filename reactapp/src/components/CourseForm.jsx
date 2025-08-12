import React, { useState } from "react";
import axios from "axios";
import "./CourseForm.css";

const CourseForm = ({ onCourseAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [price, setPrice] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation - all mandatory except description
    if (!title || !courseDuration || !price || !level) {
      setError("Please fill the required fields.");
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      setError("Price must be a positive number.");
      return;
    }

    try {
      const newCourse = {
        courseTitle: title,
        description,
        courseDuration,
        price: Number(price),
        level
      };

      await axios.post("/api/courses", newCourse);

      // Reset after submit
      resetForm();

      if (onCourseAdded) {
        onCourseAdded();
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add course.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCourseDuration("");
    setPrice("");
    setLevel("");
    setError("");
  };

 return (
<div className="course-form-container">
<h2>Add Course</h2>
{error && <p className="error">[Error - You need to specify the message]</p>}
<form onSubmit={handleSubmit}>

{/* Title */}
<div className="course-form-group">
<label>Title <span className="required">*</span></label>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Enter title"
/>
</div>

{/* Description */}
<div className="course-form-group">
<label>Description</label>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Enter course description (optional)"
rows={4}
/>
</div>

{/* Course Duration */}
<div className="course-form-group">
<label>Course Duration (in hours) <span className="required">*</span></label>
<input
type="number"
value={courseDuration}
onChange={(e) => setCourseDuration(e.target.value)}
placeholder="Enter course duration"
/>
</div>

{/* Price */}
<div className="course-form-group">
<label>Price (₹) <span className="required">*</span></label>
<input
type="number"
value={price}
onChange={(e) => setPrice(e.target.value)}
placeholder="Enter price"
/>
</div>

{/* Level */}
<div className="course-form-group">
<label>Level <span className="required">*</span></label>
<select value={level} onChange={(e) => setLevel(e.target.value)}>
<option value="">Select level</option>
<option value="BEGINNER">Beginner</option>
<option value="INTERMEDIATE">Intermediate</option>
<option value="ADVANCED">Advanced</option>
</select>
</div>

{/* Buttons */}
<div className="button-group">
<button type="submit" className="btn-submit">Submit</button>
<button type="button" className="btn-reset" onClick={resetForm}>
Reset
</button>
</div>
</form>
</div>
);
};

export default CourseForm;