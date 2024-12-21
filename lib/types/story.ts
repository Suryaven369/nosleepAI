export interface Story {
  id?: string
  user_id?: string
  prompt: string
  story: string
  created_at?: string
}

export interface StoryPrompt {
  prompt: string
  theme: 'psychological' | 'supernatural' | 'cosmic' | 'ghost'
  length: 'short' | 'medium' | 'long'
  intensity: 'mild' | 'moderate' | 'intense'
}

export interface StoryError {
  message: string
  code?: string
}