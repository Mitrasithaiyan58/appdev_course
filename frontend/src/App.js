// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaBook, FaCheckCircle } from "react-icons/fa";
import axios from "axios"; 
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import LoginForm from "./components/LoginForm";   // ✅ import login
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  // ✅ Fetch courses when app loads
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/courses");
      setCourses(res.data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleAddCourse = async (course) => {
    try {
      await axios.post("http://localhost:8080/api/courses", course);
      fetchCourses();
      alert("Course added successfully!");
    } catch (err) {
      console.error("Error adding course:", err);
      alert(err.response?.data?.message || "Failed to add course!");
    }
  };

  return (
    <Router>
      <div className="app-container">
        {/* ✅ Header + Navbar */}
        <div className="dashboard-top">
          <div className="dashboard-header">
            <h1>Course Management System</h1>
            <p>Welcome to the trainer's dashboard</p>
          </div>

          <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/add-course" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Add Course
            </NavLink>
            <NavLink to="/view-courses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              View Courses
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Login
            </NavLink>
          </nav>
        </div>

        {/* ✅ Page Content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home courses={courses} />} />
            <Route path="/add-course" element={<CourseForm onAddCourse={handleAddCourse} />} />
            <Route path="/view-courses" element={<CourseList courses={courses} />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// ✅ Home Component (Dashboard Overview)
const Home = ({ courses }) => {
  const totalCourses = courses.length;
  const activeCourses = courses.filter((c) => c.isActive === true || c.active === true).length;

  return (
    <div className="home">
      <h2>Welcome to Your Dashboard!</h2>
      <p>Use the menu above to add new courses or view existing ones.</p>

      <div className="home-stats">
        <div className="stat-card">
          <div className="stat-icon"><FaBook size={30} color="#3f51b5" /></div>
          <h3>Total Courses</h3>
          <p>{totalCourses}</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaCheckCircle size={30} color="#4caf50" /></div>
          <h3>Active Courses</h3>
          <p>{activeCourses}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
