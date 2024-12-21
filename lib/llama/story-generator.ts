import { LlamaConfig, LlamaResponse, StoryGenParams } from './types';
import { LLAMA_CONFIG } from './config';
import { buildPrompt } from './prompt-builder';

export class LlamaStoryGenerator {
  private config: LlamaConfig;
  private apiEndpoint: string;

  constructor(apiEndpoint: string, config: Partial<LlamaConfig> = {}) {
    this.apiEndpoint = apiEndpoint;
    this.config = { ...LLAMA_CONFIG, ...config };
  }

  async generateStory(params: StoryGenParams): Promise<string> {
    const prompt = buildPrompt(params);

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          ...this.config,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate story');
      }

      const data: LlamaResponse = await response.json();
      return this.formatStory(data.text);
    } catch (error) {
      console.error('Story generation error:', error);
      throw new Error('Failed to generate story. Please try again.');
    }
  }

  private formatStory(text: string): string {
    // Clean up the generated text
    return text
      .trim()
      .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
      .replace(/^\s*Story:\s*/i, ''); // Remove any "Story:" prefix
  }
}