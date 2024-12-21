"use client"

import { StoryForm } from "@/components/story/story-form"
import { StoryDisplay } from "@/components/story/story-display"

export function MainContent() {
  return (
    <div className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <StoryForm />
        <StoryDisplay />
      </div>
    </div>
  )
}