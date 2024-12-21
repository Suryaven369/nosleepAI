"use client"

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2, Wand2 } from 'lucide-react'
import { useStoryGeneration } from '@/hooks/use-story-generation'
import { StoryError } from './story-error'
import { useStoryStore } from '@/stores/story-store'

export function StoryForm() {
  const [prompt, setPrompt] = useState('')
  const { generateStory, loading } = useStoryGeneration()
  const currentStory = useStoryStore((state) => state.currentStory)

  // Reset form when currentStory is cleared
  useEffect(() => {
    if (!currentStory) {
      setPrompt('')
    }
  }, [currentStory])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await generateStory({
      prompt,
      theme: 'psychological',
      length: 'medium',
      intensity: 'moderate'
    })
  }

  return (
    <div className="space-y-4">
      <StoryError />
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            placeholder="Enter your story prompt... (e.g., 'A mysterious package arrives at midnight')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] bg-background/50 border-red-900/20"
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-red-900 to-red-600 hover:from-red-800 hover:to-red-500"
            disabled={loading || !prompt.trim()}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Crafting your nightmare...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Story
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  )
}