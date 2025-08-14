import React, { useState } from "react";
import "./Dashboard.css"; // We'll create this CSS file

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="logo">CourseHub</div>
        <nav>
          <ul>
            <li 
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li 
              className={activeTab === "courses" ? "active" : ""}
              onClick={() => setActiveTab("courses")}
            >
              <i className="fas fa-book"></i> Courses
            </li>
            <li 
              className={activeTab === "students" ? "active" : ""}
              onClick={() => setActiveTab("students")}
            >
              <i className="fas fa-users"></i> Students
            </li>
            <li 
              className={activeTab === "analytics" ? "active" : ""}
              onClick={() => setActiveTab("analytics")}
            >
              <i className="fas fa-chart-line"></i> Analytics
            </li>
            <li 
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </nav>
      </div>

{/* Main Content Area */}
<div className="main-content">
{/* Header */}
<header className="header">
<div className="search-bar">
<input type="text" placeholder="Search courses..." />
<button><i className="fas fa-search"></i></button>
</div>
<div className="user-profile">
<span>Admin</span>
<div className="avatar">A</div>
</div>
</header>

{/* Dashboard Content */}
<div className="content">
{activeTab === "courses" && (
<>
<div className="content-header">
<h2>Course Management</h2>
<button
className="btn-primary"
onClick={() => setShowForm(true)}
>
<i className="fas fa-plus"></i> Add New Course
</button>
</div>

{/* Course Form Modal */}
{showForm && (
<div className="modal-overlay">
<div className="modal-content">
<div className="modal-header">
<h3>Add New Course</h3>
<button
className="close-btn"
onClick={() => setShowForm(false)}
>
&times;
</button>
</div>
<CourseForm />
</div>
</div>
)}

{/* Course List */}
<div className="course-list-container">
<CourseList />
</div>
</>
)}

{activeTab === "dashboard" && (
<div className="dashboard-overview">
<h2>Dashboard Overview</h2>
<div className="stats-cards">
<div className="stat-card">
<h3>Total Courses</h3>
<p>24</p>
</div>
<div className="stat-card">
<h3>Active Students</h3>
<p>156</p>
</div>
<div className="stat-card">
<h3>Revenue</h3>
<p>₹84,500</p>
</div>
</div>
{/* Add more dashboard widgets here */}
</div>
)}

{/* Add other tab contents here */}
</div>
</div>
</div>
);
};



export default Dashboard;