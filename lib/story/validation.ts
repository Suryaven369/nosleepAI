import { StoryParameters } from '@/lib/types/story-parameters';

export function validateStoryParameters(parameters: StoryParameters): string | null {
  if (!parameters.theme || !parameters.setting || !parameters.timePeriod || !parameters.perspective) {
    return 'All story parameters must be selected';
  }

  if (parameters.isSeriesPart && (!parameters.seriesTotal || parameters.seriesTotal < 2)) {
    return 'Series must have at least 2 parts';
  }

  return null;
}