"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useStoryStore } from "@/stores/story-store"

export function StoryError() {
  const error = useStoryStore((state) => state.error)
  const setError = useStoryStore((state) => state.setError)

  if (!error) return null

  return (
    <Alert variant="destructive" className="bg-red-950/50 border-red-900/50">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
      <button 
        onClick={() => setError(null)}
        className="absolute top-4 right-4 text-red-300 hover:text-red-200"
      >
        ✕
      </button>
    </Alert>
  )
}