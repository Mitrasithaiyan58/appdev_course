import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaBook, FaCheckCircle } from "react-icons/fa";
import axios from "axios"; 
import CourseForm from "./components/CourseForm";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  // Fetch courses on load
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // Add new course
  const handleAddCourse = async (course) => {
    try {
      await axios.post("http://localhost:8080/api/courses", course);
      fetchCourses(); // refresh list
      alert("Course added successfully!");
    } catch (err) {
      console.error("Error adding course:", err);
      alert(err.response?.data?.message || "Failed to add course!");
    }
  };

  // Update existing course
  const handleUpdateCourse = async (id, updatedCourse) => {
    try {
      await axios.put(`http://localhost:8080/api/courses/${id}`, updatedCourse);
      fetchCourses();
      alert("Course updated successfully!");
    } catch (err) {
      console.error("Error updating course:", err);
      alert(err.response?.data?.message || "Failed to update course!");
    }
  };

  // Delete course
  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`http://localhost:8080/api/courses/${id}`);
      fetchCourses();
      alert("Course deleted successfully!");
    } catch (err) {
      console.error("Error deleting course:", err);
      alert(err.response?.data?.message || "Failed to delete course!");
    }
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header + Navbar */}
        <div className="dashboard-top">
          <div className="dashboard-header">
            <h1>Course Management System</h1>
            <p>Welcome to the trainer's dashboard</p>
          </div>

          <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/add-course" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Add Course</NavLink>
            <NavLink to="/view-courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>View Courses</NavLink>
          </nav>
        </div>

        {/* Page Content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home courses={courses} />} />
            <Route path="/add-course" element={<CourseForm onAddCourse={handleAddCourse} />} />
            <Route path="/view-courses" element={
              <CourseList 
                courses={courses} 
                onUpdateCourse={handleUpdateCourse} 
                onDeleteCourse={handleDeleteCourse} 
              />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// ✅ Home component with stats
const Home = ({ courses }) => (
  <div className="home">
    <h2>Welcome to Your Dashboard!</h2>
    <p>Use the menu above to add new courses or view existing ones.</p>

    <div className="home-stats">
      <div className="stat-card">
        <div className="stat-icon"><FaBook size={30} color="#3f51b5" /></div>
        <h3>Total Courses</h3>
        <p>{courses.length}</p>
      </div>
      <div className="stat-card">
        <div className="stat-icon"><FaCheckCircle size={30} color="#3f51b5" /></div>
        <h3>Active Courses</h3>
        <p>{courses.filter(c => c.isActive || c.active).length}</p>
      </div>
    </div>
  </div>
);

// ✅ CourseList component with Edit & Delete
const CourseList = ({ courses, onUpdateCourse, onDeleteCourse }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", level: "", price: "", isActive: true });

  const startEdit = (course) => {
    setEditingId(course.id);
    setEditForm(course);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: "", description: "", level: "", price: "", isActive: true });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm({ ...editForm, [name]: type === "checkbox" ? checked : value });
  };

  const handleSave = () => {
    onUpdateCourse(editingId, editForm);
    cancelEdit();
  };

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.length === 0 && <p>No courses found.</p>}
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            {editingId === course.id ? (
              <div className="edit-form">
                <input name="title" value={editForm.title} onChange={handleChange} />
                <input name="description" value={editForm.description} onChange={handleChange} />
                <input name="level" value={editForm.level} onChange={handleChange} />
                <input type="number" name="price" value={editForm.price} onChange={handleChange} />
                <label>
                  <input type="checkbox" name="isActive" checked={editForm.isActive} onChange={handleChange} /> Active
                </label>
                <button onClick={handleSave} className="btn-save">Save</button>
                <button onClick={cancelEdit} className="btn-cancel">Cancel</button>
              </div>
            ) : (
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p><b>Level:</b> {course.level}</p>
                <p><b>Price:</b> ₹{course.price}</p>
                <p><b>Status:</b> {course.isActive ? "Active" : "Inactive"}</p>
                <button onClick={() => startEdit(course)} className="btn-edit">Edit</button>
                <button onClick={() => onDeleteCourse(course.id)} className="btn-delete">Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
