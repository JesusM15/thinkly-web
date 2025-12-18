import { Routes, Route, Navigate } from "react-router";
import { useAuthStore } from "./store/auth";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);

  /* Aún no sabemos si está logueado (ej: /me pendiente) */
  if (user === undefined) {
    return null; // o un loader
  }

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
