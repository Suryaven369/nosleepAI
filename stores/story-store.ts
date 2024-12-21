"use client"

import { create } from 'zustand'
import { Story } from '@/lib/types/story'
import { saveStory, fetchUserStories, deleteStory } from '@/lib/db/stories'

interface StoryState {
  stories: Story[]
  currentStory: Story | null
  loading: boolean
  error: string | null
  setCurrentStory: (story: Story) => void
  setError: (error: string | null) => void
  addStory: (story: Story, userId: string) => Promise<void>
  loadStories: (userId: string) => Promise<void>
  removeStory: (storyId: string, userId: string) => Promise<void>
  clearCurrentStory: () => void
}

export const useStoryStore = create<StoryState>((set) => ({
  stories: [],
  currentStory: null,
  loading: false,
  error: null,

  setCurrentStory: (story) => 
    set({ currentStory: story, error: null }),

  setError: (error) => 
    set({ error }),

  addStory: async (story, userId) => {
    try {
      const savedStory = await saveStory(story, userId)
      set((state) => ({ 
        stories: [savedStory, ...state.stories],
        currentStory: savedStory,
        error: null
      }))
    } catch (error) {
      set({ error: 'Failed to save story' })
      throw error
    }
  },

  loadStories: async (userId) => {
    try {
      const stories = await fetchUserStories(userId)
      set({ stories, error: null })
    } catch (error) {
      set({ error: 'Failed to load stories' })
      throw error
    }
  },

  removeStory: async (storyId, userId) => {
    try {
      await deleteStory(storyId, userId)
      set((state) => ({
        stories: state.stories.filter(story => story.id !== storyId),
        currentStory: state.currentStory?.id === storyId ? null : state.currentStory,
        error: null
      }))
    } catch (error) {
      set({ error: 'Failed to delete story' })
      throw error
    }
  },

  clearCurrentStory: () =>
    set({ currentStory: null }),
}))