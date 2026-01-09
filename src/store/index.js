import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { authManager } from "./auth";
import { setsManager } from "./sets";

export const useBoundStore = create(
  devtools((...a) => ({
    ...authManager(...a),
    ...setsManager(...a),
  }), {
    name: "Thinkly Store",
  })
);