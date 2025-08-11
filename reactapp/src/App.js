import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [view, setView] = useState("list");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course Management</h1>
      <nav>
        <button onClick={() => setView("list")}>View Courses</button>
        <button onClick={() => setView("add")}>Add Course</button>
      </nav>

      {view === "list" && <CourseDetails />}
      {view === "add" && <CourseForm onCourseAdded={() => setView("list")} />}
    </div>
  );
}

export default App;