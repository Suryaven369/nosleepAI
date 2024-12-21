import { StoryGenParams } from './types';
import { STORY_PROMPTS, STORY_LENGTHS } from './config';

export function buildPrompt(params: StoryGenParams): string {
  const basePrompt = STORY_PROMPTS[params.theme as keyof typeof STORY_PROMPTS];
  const targetLength = STORY_LENGTHS[params.length as keyof typeof STORY_LENGTHS];
  
  return `
You are a master horror story writer. Create a ${params.intensity} horror story based on the following prompt:

"${params.prompt}"

Story requirements:
- Theme: ${params.theme}
- Target length: approximately ${targetLength} words
- Intensity level: ${params.intensity}
- Include vivid descriptions and atmospheric details
- Create a strong sense of dread and suspense
- End with a shocking or unsettling revelation

Format the story with proper paragraphs and spacing.

Story:`;
}