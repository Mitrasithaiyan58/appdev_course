import React from "react";

const Navbar = ({ setView }) => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Course Dashboard</h1>
      <div className="nav-links">
        <button onClick={() => setView("home")}> Home</button>
        <button onClick={() => setView("add")}>Add Course</button>
        <button onClick={() => setView("view")}> View Courses</button>
        <button onClick={() => setView("login")}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;