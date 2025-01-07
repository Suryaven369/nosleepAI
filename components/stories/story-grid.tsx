"use client"

import { useStoryStore } from '@/stores/story-store'
import { StoryCard } from './story-card'
import { StoryDialog } from './story-dialog'
import { useState } from 'react'
import { Story } from '@/lib/types/story'

export function StoryGrid() {
  const { stories } = useStoryStore()
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  if (stories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No stories yet. Start by generating one!</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCard 
            key={story.id} 
            story={story} 
            onClick={() => setSelectedStory(story)}
          />
        ))}
      </div>

      <StoryDialog
        story={selectedStory}
        open={!!selectedStory}
        onOpenChange={() => setSelectedStory(null)}
      />
    </>
  )
}