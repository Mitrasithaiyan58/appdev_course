import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

export default function App() {
  const [refreshFlag, setRefreshFlag] = useState(0);

  return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>
      <CourseForm onCourseAdded={() => setRefreshFlag(f => f + 1)} />
      <CourseList refreshFlag={refreshFlag} />
    </div>
  );
}
