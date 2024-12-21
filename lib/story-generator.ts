import { Story, StoryPrompt } from './types/story'

function generateStoryContent(prompt: string): string {
  // For now, just return the prompt as the story
  // In a real implementation, this would call an AI service
  return `Here's a horror story based on your prompt:

${prompt}

The night grew darker as the story unfolded, and with each passing moment, the terror intensified...

In the end, nothing would ever be the same again.`
}

export async function generateStory(prompt: StoryPrompt): Promise<Story> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  try {
    const generatedStory = generateStoryContent(prompt.prompt)

    return {
      prompt: prompt.prompt,
      story: generatedStory
    }
  } catch (error) {
    throw new Error('Failed to generate story. Please try again.')
  }
}