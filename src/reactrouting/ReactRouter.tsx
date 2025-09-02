import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Setting";
import Admin from "./Admin";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoutes";
import { AuthProvider } from "./AuthContext";

const ReactRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="" element={<Home />} /> {/* /reactrouter */}
        <Route path="login" element={<Login />} /> {/* /reactrouter/login */}

        {/* Protected Routes */}
        <Route
          path="dashboard/*"
          element={
            <ProtectedRoute roles={["user", "admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested routes inside Dashboard */}
          <Route path="profile" element={<Profile />} /> {/* /reactrouter/dashboard/profile */}
          <Route path="settings" element={<Settings />} /> {/* /reactrouter/dashboard/settings */}
        </Route>

        {/* Role-based route only for admin */}
        <Route
          path="admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default ReactRouter;
