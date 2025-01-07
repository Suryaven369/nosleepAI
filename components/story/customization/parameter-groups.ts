import { StoryPeriod, StoryLocation, StoryTone, StoryPerspective, StoryTheme } from "@/lib/types/story-parameters"

export const THEMES: Record<StoryTheme, string> = {
  psychological: "Psychological Horror",
  supernatural: "Supernatural",
  cosmic: "Cosmic Horror",
  "cursed-objects": "Cursed Objects",
  "urban-legends": "Urban Legends",
  "body-horror": "Body Horror"
}

export const LOCATIONS: Record<StoryLocation, string> = {
  natural: "Natural Locations",
  urban: "Urban Environments",
  supernatural: "Supernatural Places",
  "post-apocalyptic": "Post-apocalyptic Landscapes",
  historical: "Historical Settings"
}

export const TIME_PERIODS: Record<StoryPeriod, string> = {
  medieval: "Medieval Era",
  victorian: "Victorian Era",
  modern: "Modern Day",
  future: "Future",
  "post-apocalyptic": "Post-apocalyptic",
  alternative: "Alternative History"
}

export const TONES: Record<StoryTone, string> = {
  horror: "Horror/Creepy",
  suspense: "Suspense/Thriller",
  action: "Action/Adventure",
  mystery: "Mystery/Noir",
  drama: "Drama/Emotional",
  fantasy: "Fantasy/Magical"
}

export const PERSPECTIVES: Record<StoryPerspective, string> = {
  "first-present": "First Person Present",
  "first-past": "First Person Past",
  "third-present": "Third Person Present",
  "third-past": "Third Person Past",
  second: "Second Person"
}