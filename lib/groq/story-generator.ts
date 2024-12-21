import { GROQ_CONFIG } from './config';
import { StoryPrompt } from '@/lib/types/story';
import { GroqMessage, GroqResponse } from './types';
import { SYSTEM_PROMPT, buildUserPrompt } from './prompt-templates';
import { StoryGenerationError } from './errors';

export class GroqStoryGenerator {
  private config = GROQ_CONFIG;

  async generateStory(prompt: StoryPrompt): Promise<string> {
    const messages: GroqMessage[] = [
      {
        role: 'system',
        content: SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: buildUserPrompt(prompt.theme, prompt.intensity, prompt.prompt)
      }
    ];

    try {
      const response = await fetch(this.config.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model,
          messages,
          max_tokens: this.config.maxTokens,
          temperature: this.config.temperature,
          top_p: this.config.topP,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new StoryGenerationError(error.message || 'Failed to generate story');
      }

      const data: GroqResponse = await response.json();
      return this.formatStory(data.choices[0].message.content);
    } catch (error) {
      console.error('Story generation error:', error);
      throw new StoryGenerationError('Failed to generate story. Please try again.', error);
    }
  }

  private formatStory(text: string): string {
    return text
      .trim()
      .replace(/\n{3,}/g, '\n\n');
  }
}