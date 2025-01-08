import { StoryParameters } from '@/lib/types/story-parameters';
import { THEMES, LOCATIONS, TIME_PERIODS, PERSPECTIVES } from '@/components/story/customization/parameter-groups';

export function buildOutlinePrompt(userPrompt: string, parameters: StoryParameters): string {
  const theme = THEMES[parameters.theme];
  const setting = LOCATIONS[parameters.setting];
  const period = TIME_PERIODS[parameters.timePeriod];
  const perspective = PERSPECTIVES[parameters.perspective];

  return `
Create a detailed outline for a ${theme} story that takes place in ${setting} during the ${period} era. 
The story will be written from a ${perspective} perspective.
${parameters.isSeriesPart ? `This is part ${parameters.seriesTotal} of a ${parameters.seriesTotal}-part series.` : ''}

Story prompt: ${userPrompt}

Please provide a structured outline including:
1. Opening scene setup
2. Main characters introduction
3. Key plot points
4. Rising action events
5. Climax description
6. Resolution elements

Format the outline with clear sections and bullet points.
`;
}

export function buildStoryPrompt(userPrompt: string, parameters: StoryParameters, outline: string): string {
  const theme = THEMES[parameters.theme];
  const setting = LOCATIONS[parameters.setting];
  const period = TIME_PERIODS[parameters.timePeriod];
  const perspective = PERSPECTIVES[parameters.perspective];

  return `
Create a ${theme} story based on this outline and parameters:

Setting: ${setting} during ${period} era
Perspective: ${perspective}
${parameters.isSeriesPart ? `Part ${parameters.seriesTotal} of ${parameters.seriesTotal}` : ''}

Original prompt: ${userPrompt}

Story outline:
${outline}

Required elements:
- Follow the provided outline structure
- Maintain consistent ${perspective} perspective
- Include rich sensory details and atmospheric descriptions
- Create tension and suspense appropriate for ${theme}
- Incorporate period-appropriate dialogue and details
- Build to the outlined climax and resolution

Story length: 1200-1500 words
Format: Clear paragraphs with proper dialogue formatting
`;
}