import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


export const useSetsStore = create(
  devtools(
    persist(
        (sets) => ({
            sets: [],

            createSet: (set) => (
                sets((state) => ({
                    sets: [...state.sets, set]
                }))
            )

        })
    ),
    {
        name: "Thinkly Sets Store", 
    }
)
);