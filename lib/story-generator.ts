import { Story, StoryPrompt } from './types/story';

export async function generateStory(prompt: StoryPrompt): Promise<Story> {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate story');
    }

    const { story } = await response.json();

    return {
      prompt: prompt.prompt,
      story: story,
    };
  } catch (error) {
    console.error('Story generation error:', error);
    throw new Error('Failed to generate story. Please try again.');
  }
}