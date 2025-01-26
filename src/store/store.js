import { create } from 'zustand'

const useStore = create((set) => ({
  projects: {},
  currentProject: {},
  createProject: set((state) => projects.assing(state.currentProject, state.projects))
}))
