"use client"

import { useState } from 'react'
import { useStoryStore } from '@/stores/story-store'
import { useAuthStore } from '@/stores/auth-store'
import { StoryParameters } from '@/lib/types/story-parameters'
import { buildStoryPrompt, buildOutlinePrompt } from '@/lib/story/prompt-builder'
import { validateStoryParameters } from '@/lib/story/validation'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { generateStory as generateStoryAPI, generateOutline as generateOutlineAPI } from '@/lib/story-generator'

export function useStoryGeneration() {
  const [loading, setLoading] = useState(false)
  const { addStory, setError } = useStoryStore()
  const { user, initialized } = useAuthStore()
  const { toast } = useToast()
  const router = useRouter()

  const generateOutline = async (prompt: string, parameters: StoryParameters) => {
    if (!user?.id) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please log in to generate stories",
      })
      router.push('/login')
      return ""
    }

    const validationError = validateStoryParameters(parameters)
    if (validationError) {
      toast({
        variant: "destructive",
        title: "Invalid Parameters",
        description: validationError,
      })
      return ""
    }

    setLoading(true)
    try {
      const enhancedPrompt = buildOutlinePrompt(prompt, parameters)
      const outline = await generateOutlineAPI(enhancedPrompt)
      return outline
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to generate outline'
      setError(message)
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      })
      return ""
    } finally {
      setLoading(false)
    }
  }

  const generateStory = async (prompt: string, parameters: StoryParameters, outline: string) => {
    setLoading(true)
    try {
      const enhancedPrompt = buildStoryPrompt(prompt, parameters, outline)
      const story = await generateStoryAPI({
        prompt: enhancedPrompt,
        theme: parameters.theme,
        length: 'medium',
        intensity: 'moderate'
      })
      
      await addStory(story, user!.id)
      toast({
        title: "Success",
        description: "Your story has been generated successfully.",
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

  return { generateStory, generateOutline, loading }
}