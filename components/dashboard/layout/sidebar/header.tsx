"use client"

import { Button } from "@/components/ui/button"
import { PenSquare, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { SearchBar } from "./search-bar"
import { useStoryStore } from "@/stores/story-store"

interface SidebarHeaderProps {
  isOpen: boolean
  searchQuery: string
  onSearchChange: (value: string) => void
  onToggle: () => void
}

export function SidebarHeader({ 
  isOpen, 
  searchQuery, 
  onSearchChange, 
  onToggle 
}: SidebarHeaderProps) {
  const clearCurrentStory = useStoryStore((state) => state.clearCurrentStory)

  const handleNewStory = () => {
    clearCurrentStory()
  }

  return (
    <div className="p-4 border-b relative">
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute -right-4 top-4 z-50"
        onClick={onToggle}
      >
        <ChevronLeft className={cn(
          "h-4 w-4 transition-transform",
          !isOpen && "rotate-180"
        )} />
      </Button>
      
      {isOpen && (
        <>
          <Button 
            onClick={handleNewStory}
            className="w-full bg-red-600 hover:bg-red-700 mb-4" 
            size="lg"
          >
            <PenSquare className="mr-2 h-4 w-4" />
            New Story
          </Button>
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </>
      )}
      
      {!isOpen && (
        <Button 
          onClick={handleNewStory}
          className="w-full p-2" 
          variant="ghost"
        >
          <PenSquare className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}