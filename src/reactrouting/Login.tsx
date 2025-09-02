import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: "user" | "admin") => {
    login(role);
    navigate("/reactrouter/dashboard");
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">🔑 Login</h1>

  <div className="flex gap-4">
    <button
      onClick={() => handleLogin("user")}
      className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
    >
      Login as User
    </button>

    <button
      onClick={() => handleLogin("admin")}
      className="px-6 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
    >
      Login as Admin
    </button>
  </div>
</div>

  );
};

export default Login;
