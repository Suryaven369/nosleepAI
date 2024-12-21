"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { StoryTheme, StoryLength, StoryIntensity } from '@/lib/story-types'

interface StoryControlsProps {
  theme: StoryTheme
  length: StoryLength
  intensity: StoryIntensity
  onThemeChange: (value: StoryTheme) => void
  onLengthChange: (value: StoryLength) => void
  onIntensityChange: (value: StoryIntensity) => void
}

export function StoryControls({
  theme,
  length,
  intensity,
  onThemeChange,
  onLengthChange,
  onIntensityChange,
}: StoryControlsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Select value={theme} onValueChange={onThemeChange}>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="psychological">Psychological Horror</SelectItem>
          <SelectItem value="supernatural">Supernatural</SelectItem>
          <SelectItem value="cosmic">Cosmic Horror</SelectItem>
          <SelectItem value="ghost">Ghost Story</SelectItem>
        </SelectContent>
      </Select>

      <Select value={length} onValueChange={onLengthChange}>
        <SelectTrigger>
          <SelectValue placeholder="Length" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="short">Short</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="long">Long</SelectItem>
        </SelectContent>
      </Select>

      <Select value={intensity} onValueChange={onIntensityChange}>
        <SelectTrigger>
          <SelectValue placeholder="Intensity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mild">Mild</SelectItem>
          <SelectItem value="moderate">Moderate</SelectItem>
          <SelectItem value="intense">Intense</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}