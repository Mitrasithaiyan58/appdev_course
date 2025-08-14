import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-card">
        <h2>Welcome to the Course Management System</h2>
        <p>Trainers can add and manage courses easily. Use the navigation bar above to get started.</p>
      </div>
    </div>
  );
}

function DashboardLayout() {
const [showForm, setShowForm] = React.useState(false);

return (
<div className="dashboard-container">
{/* Sidebar Navigation */}
<div className="sidebar">
<div className="logo">CourseHub</div>
<nav>
<ul>
<li>
<Link to="/dashboard" className="nav-link">
<span className="nav-icon">🏠</span> Dashboard
</Link>
</li>
<li>
<Link to="/dashboard/courses" className="nav-link active">
<span className="nav-icon">📚</span> Courses
</Link>
</li>
<li>
<Link to="/dashboard/students" className="nav-link">
<span className="nav-icon">👥</span> Students
</Link>
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
<button>🔍</button>
</div>
<div className="user-profile">
<span>Welcome, Trainer</span>
<div className="avatar">T</div>
</div>
</header>

{/* Dashboard Content */}
<div className="content">
<Outlet />
</div>
</div>
</div>
);
}

export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/dashboard" element={<DashboardLayout />}>
<Route index element={<Home />} />
<Route path="courses" element={<CourseList />} />
<Route path="add-course" element={<CourseForm />} />
</Route>
</Routes>
</Router>
);
}