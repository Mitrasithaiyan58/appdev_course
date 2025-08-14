import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  const handleAddCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <Router>
      <div className="app-container">

        {/* Header + Navbar in one line */}
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
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<CourseForm onAddCourse={handleAddCourse} />} />
            <Route path="/view-courses" element={<CourseList courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h2>Dashboard Home</h2>
    <p>Select a menu option to get started.</p>
  </div>
);

export default App;
