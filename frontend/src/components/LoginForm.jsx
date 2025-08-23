import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";   // ✅ import css

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role ❌");
      return;
    }

    if (role === "ADMIN" && email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("role", "ADMIN");
      alert("Admin Login Successful ✅");
      navigate("/");
    } else if (role === "TRAINER" && email === "trainer@example.com" && password === "trainer123") {
      localStorage.setItem("role", "TRAINER");
      alert("Trainer Login Successful ✅");
      navigate("/");
    } else if (role === "STUDENT" && email === "student@example.com" && password === "student123") {
      localStorage.setItem("role", "STUDENT");
      alert("Student Login Successful ✅");
      navigate("/");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">-- Select Role --</option>
            <option value="ADMIN">Admin</option>
            <option value="TRAINER">Trainer</option>
            <option value="STUDENT">Student</option>
          </select>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
