"use client"

import { Card } from "@/components/ui/card"
import { ParametersForm } from "./parameters-form"
import { StoryParameters } from "@/lib/types/story-parameters"

interface StoryCustomizerProps {
  value: StoryParameters
  onChange: (value: StoryParameters) => void
}

export function StoryCustomizer({ value, onChange }: StoryCustomizerProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-red-900/20">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Customize Your Story</h2>
        <ParametersForm
          value={value}
          onChange={onChange}
        />
      </div>
    </Card>
  )
}