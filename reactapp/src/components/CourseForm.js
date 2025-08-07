// File: src/components/CourseForm.jsx
import React, { useState } from 'react';
import { BASE_URL } from '../constants';

function CourseForm() {
  const [form, setForm] = useState({ title: '', description: '', duration: '', level: '', price: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = 'Title is required';
    else if (form.title.length > 100) newErrors.title = 'Title must be at most 100 characters';

    if (!form.description) newErrors.description = 'Description is required';
    else if (form.description.length > 500) newErrors.description = 'Description must be at most 500 characters';

    if (!form.duration) newErrors.duration = 'Duration is required';
    else if (form.duration < 1) newErrors.duration = 'Duration must be at least 1';

    if (!form.level) newErrors.level = 'Level is required';

    if (!form.price) newErrors.price = 'Price is required';
    else if (form.price < 0) newErrors.price = 'Price must be non-negative number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setApiError('');

    if (!validate()) return;

    try {
      const response = await fetch(`${BASE_URL}/api/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, isActive: true })
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ title: '', description: '', duration: '', level: '', price: '' });
      } else {
        const errorData = await response.json();
        setApiError(errorData.message || 'Something went wrong');
      }
    } catch (err) {
      setApiError(err.message);
    }
  };

  const resetForm = () => {
    setForm({ title: '', description: '', duration: '', level: '', price: '' });
    setErrors({});
    setSuccess(false);
    setApiError('');
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="title-input" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      {errors.title && <div>{errors.title}</div>}

      <textarea data-testid="description-input" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
      {errors.description && <div>{errors.description}</div>}

      <input data-testid="duration-input" type="number" placeholder="Duration" value={form.duration} onChange={e => setForm({ ...form, duration: Number(e.target.value) })} />
      {errors.duration && <div>{errors.duration}</div>}

      <select data-testid="level-select" value={form.level} onChange={e => setForm({ ...form, level: e.target.value })}>
        <option value="">Select Level</option>
        <option value="BEGINNER">BEGINNER</option>
        <option value="INTERMEDIATE">INTERMEDIATE</option>
        <option value="ADVANCED">ADVANCED</option>
      </select>
      {errors.level && <div>{errors.level}</div>}

      <input data-testid="price-input" type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} />
      {errors.price && <div>{errors.price}</div>}

      <button data-testid="submit-btn" type="submit">Submit</button>
      <button data-testid="reset-btn" type="button" onClick={resetForm}>Reset</button>

      {success && <div data-testid="api-success">Course added successfully!</div>}
      {apiError && <div data-testid="api-error">{apiError}</div>}
    </form>
  );
}

export default CourseForm;