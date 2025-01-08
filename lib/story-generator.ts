import { Story, StoryPrompt } from './types/story';
import { StoryParameters } from './types/story-parameters';
import { GroqStoryGenerator } from './groq/story-generator';
import { THEMES, LOCATIONS, TIME_PERIODS, PERSPECTIVES } from '@/components/story/customization/parameter-groups';

const generator = new GroqStoryGenerator();

export async function generateOutline(prompt: string): Promise<string> {
  try {
    const generatedOutline = await generator.generateOutline(prompt);
    return generatedOutline;
  } catch (error) {
    throw new Error('Failed to generate outline. Please try again.');
  }
}

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