import { Story, StoryPrompt } from './types/story';
import { StoryParameters } from './types/story-parameters';
import { GroqStoryGenerator } from './groq/story-generator';
import { THEMES, LOCATIONS, TIME_PERIODS, PERSPECTIVES } from '@/components/story/customization/parameter-groups';

const generator = new GroqStoryGenerator();

function buildPrompt(prompt: string, parameters: StoryParameters): string {
  const theme = THEMES[parameters.theme];
  const setting = LOCATIONS[parameters.setting];
  const period = TIME_PERIODS[parameters.timePeriod];
  const perspective = PERSPECTIVES[parameters.perspective];

  return `
Create a ${theme} story from a ${perspective} perspective, set in a ${setting} during the ${period}.
${parameters.isSeriesPart ? `This is part ${parameters.seriesTotal} of a ${parameters.seriesTotal}-part series.` : ''}

Story prompt: ${prompt}

Required elements:
- Rich atmospheric details incorporating all five senses
- Natural dialogue that reflects the era
- Rising tension leading to a climactic moment
- A resolution that fits the theme and tone
`;
}

export async function generateStory(prompt: StoryPrompt): Promise<Story> {
  try {
    const enhancedPrompt = buildPrompt(prompt.prompt, prompt);
    const generatedStory = await generator.generateStory({
      ...prompt,
      prompt: enhancedPrompt
    });

    return {
      prompt: prompt.prompt,
      story: generatedStory,
    };
  } catch (error) {
    throw new Error('Failed to generate story. Please try again.');
  }
}