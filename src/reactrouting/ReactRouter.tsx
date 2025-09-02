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
        <Route path="" element={<Home />} /> 
        <Route path="login" element={<Login />} /> 

        <Route
          path="dashboard/*"
          element={
            <ProtectedRoute roles={["user", "admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} /> 
          <Route path="settings" element={<Settings />} />
        </Route>
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
