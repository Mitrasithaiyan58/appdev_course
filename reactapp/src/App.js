import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1 className="title">Course Management System</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/add-course">Add Course</Link>
            <Link to="/view-courses">View Courses</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<CourseForm />} />
            <Route path="/view-courses" element={<CourseList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Simple Home Page
function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Course Management System</h2>
      <p>
        Manage your courses efficiently — add new courses, view course details,
        and keep track of all your offerings in one place.
      </p>
    </div>
  );
}

export default App;
