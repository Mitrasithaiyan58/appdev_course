import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseForm from "./components/CourseForm";
import CourseDetails from "./components/CourseList";

function Home() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">
        Welcome to the Course Management System
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        Trainers can add and manage courses easily.  
        Use the navigation bar above to get started.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        
        {/* Top Navbar */}
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg p-4 flex justify-between items-center">
          {/* Centered Title */}
          <h1 className="text-2xl font-bold text-white flex-1 text-center">
            📚 Course Management System
          </h1>

          {/* Navigation Buttons */}
          <div className="space-x-4 absolute right-6">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-gray-100 transition"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-400 transition"
            >
              Add Course
            </Link>
            <Link
              to="/view"
              className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold shadow hover:bg-yellow-400 transition"
            >
              View Courses
            </Link>
          </div>
        </nav>

        {/* Main Page Content */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CourseForm />} />
            <Route path="/view" element={<CourseDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
