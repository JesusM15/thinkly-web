import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,

        setTokens: ({ access, refresh }) =>
          set(
            {
              accessToken: access,
              refreshToken: refresh,
              isAuthenticated: true,
            },
            false,
            "auth/setTokens"
          ),

        setUser: (user) =>
          set(
            {
              user,
              isAuthenticated: true,
            },
            false,
            "auth/setUser"
          ),

        logout: () =>
          set(
            {
              user: null,
              accessToken: null,
              refreshToken: null,
              isAuthenticated: false,
            },
            false,
            "auth/logout"
          ),
      }),
      {
        name: "thinkly-auth",
        partialize: (state) => ({
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: "Thinkly Auth Store", // así aparece en Redux DevTools
    }
  )
);
