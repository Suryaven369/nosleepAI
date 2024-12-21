"use client"

import { useState, useEffect } from 'react'
import { useStoryStore } from '@/stores/story-store'
import { useAuthStore } from '@/stores/auth-store'
import { StoryPrompt } from '@/lib/types/story'
import { generateStory } from '@/lib/story-generator'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

export function useStoryGeneration() {
  const [loading, setLoading] = useState(false)
  const { addStory, setError } = useStoryStore()
  const { user, initialized } = useAuthStore()
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (initialized && !user) {
      router.push('/login')
    }
  }, [initialized, user, router])

  const generate = async (prompt: StoryPrompt) => {
    if (!user?.id) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please log in to generate stories",
      })
      router.push('/login')
      return
    }

    setLoading(true)
    try {
      const story = await generateStory(prompt)
      await addStory(story, user.id)
      toast({
        title: "Success",
        description: "Your horror story has been created successfully.",
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to generate story'
      setError(message)
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      })
    } finally {
      setLoading(false)
    }
  }

  return { generateStory: generate, loading }
}