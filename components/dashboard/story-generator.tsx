"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function StoryGenerator() {
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt for your story",
        variant: "destructive",
      })
      return
    }

    setGenerating(true)
    // TODO: Implement story generation with AI
    setTimeout(() => {
      setGenerating(false)
      toast({
        title: "Story Generated",
        description: "Your horror story has been created successfully.",
      })
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter your story prompt... (e.g., 'A mysterious package arrives at midnight')"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="h-32"
      />
      <Button 
        onClick={handleGenerate}
        className="w-full bg-red-600 hover:bg-red-700"
        disabled={generating}
      >
        {generating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Story...
          </>
        ) : (
          "Generate Story"
        )}
      </Button>
    </div>
  )
}