import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css"; // your custom styling

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="app-container">
      <h1 className="main-title">Course Management System</h1>
      <div className="button-group">
        <button
          className={`toggle-button ${!showForm ? "active" : ""}`}
          onClick={() => setShowForm(false)}
        >
          View Courses
        </button>
        <button
          className={`toggle-button ${showForm ? "active" : ""}`}
          onClick={() => setShowForm(true)}
        >
          Add Course
        </button>
      </div>
      <div className="content-container">
        {showForm ? <CourseForm /> : <CourseList />}
      </div>
    </div>
  );
}

export default App;