export default function Dashboard({ user }) {
  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h1>
      <p className="mb-2">Your role: <b>{user.role}</b></p>

      {user.role === "ADMIN" && <p>🔑 Admin Dashboard</p>}
      {user.role === "TRAINER" && <p>📘 Trainer Dashboard</p>}
      {user.role === "MANAGER" && <p>📊 Manager Dashboard</p>}
      {user.role === "STUDENT" && <p>🎓 Student Dashboard</p>}
    </div>
  );
}
