import { useEffect } from "react";
import api from "../../api";
import { useAuthStore } from "../store/auth";

export default function AuthBootstrap({ children }) {
  const {
    accessToken,
    setUser,
    logout,
    setAuthReady,
  } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      setUser(null);
      setAuthReady();
      return;
    }

    api
      .get("/accounts/me/")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        logout();
      })
      .finally(() => {
        setAuthReady();
      });
  }, []);

  return children;
}

