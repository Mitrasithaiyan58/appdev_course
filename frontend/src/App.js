/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaBook, FaCheckCircle } from "react-icons/fa"; // icons
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

// Home component with icons
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

export default App; // make sure App is default exported