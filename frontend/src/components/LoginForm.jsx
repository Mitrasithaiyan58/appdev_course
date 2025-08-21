import { useState } from "react";
import api from "../api";

export default function LoginForm({ onSuccess }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      alert("Login successful!");
      onSuccess(res.data); // Pass user data to App
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="username" placeholder="Username" onChange={handleChange}
          className="border w-full p-2 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange}
          className="border w-full p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white w-full p-2 rounded">Login</button>
      </form>
    </div>
  );
}
