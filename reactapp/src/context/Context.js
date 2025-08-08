// Context.js
import { createContext, useContext, useState } from "react";

export const CourseViewContext = createContext();

export const CourseViewProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(true);

  return (
    <CourseViewContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </CourseViewContext.Provider>
  );
};

export const useCourseView = () => useContext(CourseViewContext);