import { StoryParameters } from '@/lib/types/story-parameters';
import { THEMES, LOCATIONS, TIME_PERIODS, PERSPECTIVES } from '@/components/story/customization/parameter-groups';

export function buildStoryPrompt(userPrompt: string, parameters: StoryParameters): string {
  const theme = THEMES[parameters.theme];
  const setting = LOCATIONS[parameters.setting];
  const period = TIME_PERIODS[parameters.timePeriod];
  const perspective = PERSPECTIVES[parameters.perspective];

  return `
Create a ${theme} story that takes place in ${setting} during the ${period} era. 
Write from a ${perspective} perspective.
${parameters.isSeriesPart ? `This is part ${parameters.seriesTotal} of a ${parameters.seriesTotal}-part series.` : ''}

Story prompt: ${userPrompt}

Required elements:
- Maintain consistent ${perspective} perspective throughout
- Include rich sensory details and atmospheric descriptions
- Create tension and suspense appropriate for ${theme}
- Incorporate period-appropriate dialogue and details from ${period} era
- Ensure the setting (${setting}) plays a significant role
- Build to a satisfying conclusion that fits the theme

Story length: 1200-1500 words
Format: Clear paragraphs with proper dialogue formatting
`;
}