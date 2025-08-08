
// App.js
import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const App = () => {
  const [view, setView] = useState("list");

  return (
    <div>
      <h1>Course Management System</h1>
      <button data-testid="nav-list" onClick={() => setView("list")}>View Courses</button>
      <button data-testid="nav-add" onClick={() => setView("add")}>Add Course</button>

      {view === "list" && <div data-testid="course-list"><CourseList /></div>}
      {view === "add" && <div data-testid="course-form"><CourseForm /></div>}
    </div>
  );
};

export default App;
