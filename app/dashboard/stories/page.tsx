"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { useStoryStore } from "@/stores/story-store"
import { StoryGrid } from "@/components/stories/story-grid"
import { useToast } from "@/hooks/use-toast"

export default function StoriesPage() {
  const { user } = useAuthStore()
  const { loadStories } = useStoryStore()
  const { toast } = useToast()

  useEffect(() => {
    if (user?.id) {
      loadStories(user.id).catch(() => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load stories",
        })
      })
    }
  }, [user?.id, loadStories, toast])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Your Stories</h1>
      <StoryGrid />
    </div>
  )
}