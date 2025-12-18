import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  accessToken: localStorage.getItem("access"),
  refreshToken: localStorage.getItem("refresh"),
  isAuthenticated: !!localStorage.getItem("access"),

  setTokens: ({ access, refresh }) => {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    set({
      accessToken: access,
      refreshToken: refresh,
      isAuthenticated: true,
    });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  },
}));
