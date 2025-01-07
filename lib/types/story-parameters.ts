export type StoryTheme = 
  | 'psychological'
  | 'supernatural'
  | 'cosmic'
  | 'cursed-objects'
  | 'urban-legends'
  | 'body-horror'

export type StoryPeriod = 'medieval' | 'victorian' | 'modern' | 'future' | 'post-apocalyptic' | 'alternative'
export type StoryLocation = 'natural' | 'urban' | 'supernatural' | 'post-apocalyptic' | 'historical'
export type StoryTone = 'horror' | 'suspense' | 'action' | 'mystery' | 'drama' | 'fantasy'
export type StoryPerspective = 'first-present' | 'first-past' | 'third-present' | 'third-past' | 'second'

export interface StoryParameters {
  theme: StoryTheme
  setting: StoryLocation
  timePeriod: StoryPeriod
  tone: StoryTone
  perspective: StoryPerspective
  isSeriesPart?: boolean
  seriesTotal?: number
}