import { StateCreator } from "zustand";

export interface IOptionsSlice {
  theme: string,
  updateTheme: (newTheme: string) => void
}

export const useOptionsStore: StateCreator<IOptionsSlice> = (set) => ({
  theme: 'dark',
  updateTheme: (newTheme: string) => set({theme: newTheme})
})