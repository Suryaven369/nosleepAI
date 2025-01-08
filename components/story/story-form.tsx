"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useStoryGeneration } from '@/hooks/use-story-generation'
import { StoryCustomizer } from './customization/story-customizer'
import { StoryParameters } from '@/lib/types/story-parameters'
import { ScrollArea } from "@/components/ui/scroll-area"

const DEFAULT_PARAMETERS: StoryParameters = {
  theme: "psychological",
  setting: "urban",
  timePeriod: "modern",
  tone: "horror",
  perspective: "first-present",
  isSeriesPart: false,
  seriesTotal: 2
}

export function StoryForm() {
  const [prompt, setPrompt] = useState("")
  const [parameters, setParameters] = useState<StoryParameters>(DEFAULT_PARAMETERS)
  const [outline, setOutline] = useState("")
  const [showOutline, setShowOutline] = useState(false)
  const { generateStory, generateOutline, loading } = useStoryGeneration()

  const handleGenerateOutline = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return
    const generatedOutline = await generateOutline(prompt, parameters)
    setOutline(generatedOutline)
    setShowOutline(true)
  }

  const handleGenerateStory = async () => {
    if (!outline.trim()) return
    await generateStory(prompt, parameters, outline)
    setShowOutline(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
        <form onSubmit={handleGenerateOutline} className="space-y-6">
          <StoryCustomizer 
            value={parameters}
            onChange={setParameters}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Story Prompt</label>
            <Textarea
              placeholder="Enter your story prompt... (e.g., 'A mysterious package arrives at midnight')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] bg-background/50 border-red-900/20"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-red-900 to-red-600 hover:from-red-800 hover:to-red-500"
            disabled={loading || !prompt.trim()}
          >
            {loading ? 'Generating Outline...' : 'Generate Story Outline'}
          </Button>
        </form>
      </Card>

      {showOutline && (
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Story Outline</h3>
            <ScrollArea className="h-[300px] rounded-md border p-4">
              <Textarea
                value={outline}
                onChange={(e) => setOutline(e.target.value)}
                className="min-h-[250px] bg-background/50 border-red-900/20"
                placeholder="Loading outline..."
              />
            </ScrollArea>
            <Button 
              onClick={handleGenerateStory}
              className="w-full bg-gradient-to-r from-red-900 to-red-600 hover:from-red-800 hover:to-red-500"
              disabled={loading || !outline.trim()}
            >
              {loading ? 'Generating Story...' : 'Generate Final Story'}
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}