// CourseForm.jsx
import React, { useState } from "react";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    price: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    else if (formData.title.length > 100) newErrors.title = "Title must be at most 100 characters";
    if (formData.description.length > 500) newErrors.description = "Description must be at most 500 characters";
    if (!formData.duration) newErrors.duration = "Duration is required";
    else if (formData.duration < 1) newErrors.duration = "Duration must be at least 1";
    if (!formData.level) newErrors.level = "Level is required";
    if (!formData.price && formData.price !== 0) newErrors.price = "Price is required";
    else if (formData.price < 0) newErrors.price = "Price must be non-negative number";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Course Added Successfully");
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Failed to add course");
        setMessage("");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setMessage("");
    }
  };

  const handleReset = () => {
    setFormData({ title: "", description: "", duration: "", level: "", price: "" });
    setErrors({});
  };

 return (
<form onSubmit={handleSubmit}>
<input data-testid="title-input" name="title" value={formData.title} onChange={handleChange} />
{errors.title && <div>{errors.title}</div>}

<textarea data-testid="description-input" name="description" value={formData.description} onChange={handleChange} />
{errors.description && <div>{errors.description}</div>}

<input data-testid="duration-input" name="duration" type="number" value={formData.duration} onChange={handleChange} />
{errors.duration && <div>{errors.duration}</div>}

<select data-testid="level-select" name="level" value={formData.level} onChange={handleChange}>
<option value="">Select</option>
<option value="BEGINEER">Beginner</option>
<option value="INTERMEDIATE">Intermediate</option>
<option value="ADVANCED">Advanced</option>
</select>
{errors.level && <div>{errors.level}</div>}

<input data-testid="price-input" name="price" type="number" value={formData.price} onChange={handleChange} />
{errors.price && <div>{errors.price}</div>}

<button data-testid="submit-btn" type="submit">Submit</button>
<button data-testid="reset-btn" type="button" onClick={handleReset}>Reset</button>

{message && <div data-testid="api-success">Course Added Successfully</div>}
{errorMessage && <div data-testid="api-error">{errorMessage}</div>}
</form>
);
};

export default CourseForm;