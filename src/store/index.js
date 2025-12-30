import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { authManager } from "./auth";

export const useBoundStore = create(
  devtools((...a) => ({
    ...authManager(...a),
  }), {
    name: "Thinkly Store",
  })
);