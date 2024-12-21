"use client"

import { Story } from "@/lib/types/story"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface StoryItemProps {
  story: Story
  isOpen: boolean
  onSelect: (story: Story) => void
  onDelete: (storyId: string, e: React.MouseEvent) => void
}

export function StoryItem({ story, isOpen, onSelect, onDelete }: StoryItemProps) {
  return (
    <div
      onClick={() => onSelect(story)}
      className={cn(
        "w-full text-left p-3 rounded-lg transition-colors group cursor-pointer",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "border border-transparent hover:border-border"
      )}
    >
      {isOpen ? (
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">
              {story.prompt?.split('\n')[0] || 'Untitled Story'}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {story.story?.substring(0, 50)}...
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => story.id && onDelete(story.id, e)}
          >
            <Trash2 className="h-4 w-4 text-red-400 hover:text-red-300" />
          </Button>
        </div>
      ) : (
        <div className="w-8 h-8 flex items-center justify-center">
          <span className="font-medium">
            {(story.prompt?.split('\n')[0] || 'U')[0]}
          </span>
        </div>
      )}
    </div>
  )
}