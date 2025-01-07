"use client"

import { create } from 'zustand'
import { Story } from '@/lib/types/story'
import { saveStory, fetchUserStories, deleteStory, updateStory } from '@/lib/db/stories'

interface StoryState {
  stories: Story[]
  currentStory: Story | null
  loading: boolean
  error: string | null
  setCurrentStory: (story: Story) => void
  setError: (error: string | null) => void
  addStory: (story: Story, userId: string) => Promise<void>
  updateStory: (storyId: string, userId: string, updates: Partial<Story>) => Promise<void>
  loadStories: (userId: string) => Promise<void>
  removeStory: (storyId: string, userId: string) => Promise<void>
  clearCurrentStory: () => void
}

export const useStoryStore = create<StoryState>((set, get) => ({
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

  updateStory: async (storyId, userId, updates) => {
    try {
      const updatedStory = await updateStory(storyId, userId, updates)
      set((state) => ({
        stories: state.stories.map(story => 
          story.id === storyId ? updatedStory : story
        ),
        currentStory: updatedStory,
        error: null
      }))
    } catch (error) {
      set({ error: 'Failed to update story' })
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
    const { currentStory } = get()
    try {
      await deleteStory(storyId, userId)
      set((state) => {
        const newState = {
          stories: state.stories.filter(story => story.id !== storyId),
          error: null
        }
        
        if (currentStory?.id === storyId) {
          newState.currentStory = null
        }
        
        return newState
      })
    } catch (error) {
      set({ error: 'Failed to delete story' })
      throw error
    }
  },

  clearCurrentStory: () =>
    set({ currentStory: null }),
}))