import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaBook } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Course Management System</h1>
        <nav className="dashboard-nav">
          <Link to="/" className="nav-link"><FaHome /> Home</Link>
          <Link to="/add-course" className="nav-link"><FaPlusCircle /> Add Course</Link>
          <Link to="/view-courses" className="nav-link"><FaBook /> View Courses</Link>
        </nav>
      </header>

      <main className="dashboard-content">
        <h2>Welcome to the Course Management System</h2>
        <p>
          Trainers can add and manage courses easily.  
          Use the navigation menu above to get started.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
