export const SYSTEM_PROMPT = `You are a skilled storyteller. Create engaging stories that include:
- A clear beginning, middle, and end
- Well-developed characters
- Descriptive settings
- Natural dialogue
- A central conflict or challenge
- An appropriate resolution

Always write stories between 500-1000 words and maintain proper formatting with paragraphs and dialogue breaks.`;

export function buildUserPrompt(theme: string, intensity: string, prompt: string): string {
  return `Write a ${theme} story with ${intensity} intensity based on this prompt: "${prompt}"`;
}