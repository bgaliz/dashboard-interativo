import { create } from 'zustand'

export const useStore = create((set) => ({
  projects: [],
  createProject: (new_project) => set(() => ({projects: new_project}))
}))
