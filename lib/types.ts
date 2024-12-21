// Auth Types
export interface User {
  id: string;
  email: string;
  created_at: string;
}

// Story Types
export interface Story {
  id: string;
  title: string;
  content: string;
  preview: string;
  created_at: string;
  user_id: string;
}

export interface StoryPrompt {
  theme: string;
  length: 'short' | 'medium' | 'long';
  intensity: 'mild' | 'moderate' | 'intense';
}