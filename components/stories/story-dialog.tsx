"use client"

import { Story } from '@/lib/types/story'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface StoryDialogProps {
  story: Story | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StoryDialog({ story, open, onOpenChange }: StoryDialogProps) {
  if (!story) return null

  const title = story.prompt.split('\n')[0]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] bg-[#1a0f0f] border-[#2a1f1f]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 text-gray-200">
            {story.story.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}