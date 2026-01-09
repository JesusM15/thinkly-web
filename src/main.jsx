import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter  } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./index.css";
import "./i18";
import AuthBootstrap from "./components/AuthComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthBootstrap>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthBootstrap>
  </StrictMode>
);
