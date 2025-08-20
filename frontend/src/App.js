import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaBook, FaCheckCircle } from "react-icons/fa";
import axios from "axios"; // ✅ axios import
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  // ✅ Fetch courses from backend when app loads
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

  // ✅ Add new course to backend
  const handleAddCourse = async (course) => {
    try {
      const res = await axios.post("http://localhost:8080/api/courses", course);
      setCourses([...courses, res.data]); // update frontend list
      alert("Course added successfully!");
    } catch (err) {
      console.error("Error adding course:", err);
      alert("Failed to add course!");
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
            <Route path="/view-courses" element={<CourseList courses={courses} />} />
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
        <p>{courses.filter(c => c.isActive).length}</p>
      </div>
    </div>
  </div>
);

export default App;
