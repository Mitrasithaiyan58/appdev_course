import { useState } from "react";
import api from "../api";

export default function SignupForm({ onSuccess }) {
  const [form, setForm] = useState({ username: "", password: "", role: "STUDENT" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      alert("Signup successful!");
      onSuccess(res.data);
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="username" placeholder="Username" onChange={handleChange}
          className="border w-full p-2 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange}
          className="border w-full p-2 rounded" />
        <select name="role" onChange={handleChange} className="border w-full p-2 rounded">
          <option value="STUDENT">Student</option>
          <option value="TRAINER">Trainer</option>
          <option value="MANAGER">Manager</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">Signup</button>
      </form>
    </div>
  );
}
