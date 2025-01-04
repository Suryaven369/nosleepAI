"use client"

import { useState, useEffect } from "react"
import { useStoryStore } from "@/stores/story-store"
import { useAuthStore } from "@/stores/auth-store"
import { useSidebarStore } from "@/stores/sidebar-store"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { SidebarHeader } from "./sidebar/header"
import { StoryList } from "./sidebar/story-list"

export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const { stories, loadStories, setCurrentStory, removeStory } = useStoryStore()
  const { user } = useAuthStore()
  const { isOpen, toggle } = useSidebarStore()
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

  const filteredStories = stories.filter((story) => 
    story.prompt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.story?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = async (storyId: string) => {
    if (!user?.id) return

    try {
      await removeStory(storyId, user.id)
      toast({
        title: "Success",
        description: "Story deleted successfully",
      })
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete story",
      })
    }
  }

  return (
    <div className={cn(
      "h-[calc(100vh-4rem)] border-r flex flex-col transition-all duration-300",
      isOpen ? "w-64" : "w-20"
    )}>
      <SidebarHeader
        isOpen={isOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onToggle={toggle}
      />
      <StoryList
        stories={filteredStories}
        isOpen={isOpen}
        onSelect={setCurrentStory}
        onDelete={handleDelete}
      />
    </div>
  )
}