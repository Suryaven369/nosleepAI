import { Story, StoryPrompt } from './types/story';
import { GroqStoryGenerator } from './groq/story-generator';

const generator = new GroqStoryGenerator();

export async function generateStory(prompt: StoryPrompt): Promise<Story> {
  try {
    const generatedStory = await generator.generateStory(prompt);

    return {
      prompt: prompt.prompt,
      story: generatedStory,
    };
  } catch (error) {
    throw new Error('Failed to generate story. Please try again.');
  }
}