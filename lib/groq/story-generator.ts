import { GROQ_CONFIG } from './config';
import { StoryPrompt } from '@/lib/types/story';
import { GroqMessage, GroqResponse } from './types';
import { SYSTEM_PROMPT, buildUserPrompt } from './prompt-templates';
import { StoryGenerationError } from './errors';

export class GroqStoryGenerator {
  private config = GROQ_CONFIG;

  async generateOutline(prompt: string): Promise<string> {
    const messages: GroqMessage[] = [
      {
        role: 'system',
        content: 'You are a skilled story outliner. Create detailed, structured outlines for horror stories.'
      },
      {
        role: 'user',
        content: prompt
      }
    ];

    try {
      const response = await this.makeRequest(messages);
      return this.formatText(response.choices[0].message.content);
    } catch (error) {
      throw new StoryGenerationError('Failed to generate outline', error);
    }
  }

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
      const response = await this.makeRequest(messages);
      return this.formatText(response.choices[0].message.content);
    } catch (error) {
      throw new StoryGenerationError('Failed to generate story', error);
    }
  }

  private async makeRequest(messages: GroqMessage[]): Promise<GroqResponse> {
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
      throw new StoryGenerationError(error.message || 'Failed to generate content');
    }

    return response.json();
  }

  private formatText(text: string): string {
    return text
      .trim()
      .replace(/\n{3,}/g, '\n\n');
  }
}