"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Story } from "@/lib/types/story"
import { StoryItem } from "./story-item"

interface StoryListProps {
  stories: Story[]
  isOpen: boolean
  onSelect: (story: Story) => void
  onDelete: (storyId: string, e: React.MouseEvent) => void
}

export function StoryList({ stories, isOpen, onSelect, onDelete }: StoryListProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-2">
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            story={story}
            isOpen={isOpen}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </ScrollArea>
  )
}