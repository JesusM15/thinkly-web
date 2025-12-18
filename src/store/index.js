import { create } from "zustand";
import { authManager } from "./auth";

export const useBoundStore = create((...a) => ({
    ...authManager(...a),
}));