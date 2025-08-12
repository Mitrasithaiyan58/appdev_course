
import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseDetails from "./components/CourseList";
import "./App.css";

function App() {
  const [view, setView] = useState("list");
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  return (
    <div className="app-container">
      <h1 className="main-title">Course Management System</h1>
      <div className="button-group">
        <button
          className={`toggle-button ${view === "list" ? "active" : ""}`}
          onClick={() => setView("list")}
        >
          View Courses
        </button>
        <button
          className={`toggle-button ${view === "add" ? "active" : ""}`}
          onClick={() => setView("add")}
        >
          Add Course
        </button>
      </div>

      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={showActiveOnly}
            onChange={() => setShowActiveOnly(!showActiveOnly)}
          />{" "}
          Show only active courses
        </label>
      </div>

      <div className="content-container">
        {view === "list" && <CourseDetails showActiveOnly={showActiveOnly} />}
        {view === "add" && <CourseForm onCourseAdded={() => setView("list")} />}
      </div>
    </div>
  );
}

export default App;
