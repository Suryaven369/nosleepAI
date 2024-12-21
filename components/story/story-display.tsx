"use client"

import { useStoryStore } from '@/stores/story-store'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PenSquare } from 'lucide-react'

export function StoryDisplay() {
  const { currentStory } = useStoryStore()

  if (!currentStory) {
    return (
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
        <div className="flex flex-col items-center justify-center text-center py-12 text-muted-foreground">
          <PenSquare className="h-12 w-12 mb-4 text-red-600/50" />
          <h3 className="text-lg font-semibold mb-2">Start a New Story</h3>
          <p className="max-w-sm">
            Enter your prompt above and let our AI craft a spine-chilling tale that will keep readers awake at night.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
      <ScrollArea className="h-[calc(100vh-20rem)]">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Your Story
          </h1>
          <div className="mt-6 space-y-4 text-foreground/90">
            {currentStory.story.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </ScrollArea>
    </Card>
  )
}