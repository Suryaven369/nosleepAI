export type StoryTheme = 'psychological' | 'supernatural' | 'cosmic' | 'ghost'
export type StoryLength = 'short' | 'medium' | 'long'
export type StoryIntensity = 'mild' | 'moderate' | 'intense'

export interface Story {
  id?: string
  title: string
  content: string
  theme?: StoryTheme
  length?: StoryLength
  intensity?: StoryIntensity
  createdAt?: string
  userId?: string
}

export interface StoryPrompt {
  prompt: string
  theme: StoryTheme
  length: StoryLength
  intensity: StoryIntensity
}