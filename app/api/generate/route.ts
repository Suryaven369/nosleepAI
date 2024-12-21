import { NextResponse } from 'next/server';
import { LlamaStoryGenerator } from '@/lib/llama/story-generator';
import { StoryGenParams } from '@/lib/llama/types';

const LLAMA_API_ENDPOINT = process.env.LLAMA_API_ENDPOINT || 'http://localhost:11434/api/generate';

const generator = new LlamaStoryGenerator(LLAMA_API_ENDPOINT);

export async function POST(request: Request) {
  try {
    const params: StoryGenParams = await request.json();

    // Validate required parameters
    if (!params.prompt || !params.theme || !params.length || !params.intensity) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const story = await generator.generateStory(params);

    return NextResponse.json({ story });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate story' },
      { status: 500 }
    );
  }
}