"use client"

import { Textarea } from '@/components/ui/textarea'

interface StoryPromptProps {
  value: string
  onChange: (value: string) => void
}

export function StoryPrompt({ value, onChange }: StoryPromptProps) {
  return (
    <div className="space-y-2">
      <Textarea
        placeholder="Enter your story prompt... (e.g., 'A mysterious package arrives at midnight')"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px] bg-background/50 border-red-900/20"
      />
    </div>
  )
}