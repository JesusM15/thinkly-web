import { Routes, Route, Navigate } from "react-router";
import { useAuthStore } from "./store/auth";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import FormSetPage from "./pages/FormSetPage";
import SetCreatorPage from "./pages/set/SetCreatorPage";

export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);
  const authReady = useAuthStore((s) => s.authReady);

  if (!authReady) {
    return null; // o loader
  }
  
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<DashboardPage />} />
          <Route path='/formset/:id?' element={<FormSetPage />} />
          <Route path='/set-creator/:id' element={<SetCreatorPage />} />
          <Route path="*" element={<DashboardPage />} />
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
