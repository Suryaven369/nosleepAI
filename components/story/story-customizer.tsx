"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface CustomizerProps {
  value: {
    theme: string
    setting: string
    timePeriod: string
    tone: string
    perspective: string
  }
  onChange: (value: any) => void
}

export function StoryCustomizer({ value, onChange }: CustomizerProps) {
  const handleChange = (field: string, newValue: string) => {
    onChange({ ...value, [field]: newValue })
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Theme Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Theme</label>
          <Select value={value.theme} onValueChange={(v) => handleChange('theme', v)}>
            <SelectTrigger className="bg-[#2a1f1f] border-[#3a2f2f] text-white">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a1f1f] border-[#3a2f2f]">
              <SelectItem value="supernatural">Supernatural</SelectItem>
              <SelectItem value="psychological">Psychological</SelectItem>
              <SelectItem value="cursed-objects">Cursed Objects</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Period */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Time Period</label>
          <Select value={value.timePeriod} onValueChange={(v) => handleChange('timePeriod', v)}>
            <SelectTrigger className="bg-[#2a1f1f] border-[#3a2f2f] text-white">
              <SelectValue placeholder="Select era" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a1f1f] border-[#3a2f2f]">
              <SelectItem value="modern-day">Modern Day</SelectItem>
              <SelectItem value="historical">Historical</SelectItem>
              <SelectItem value="futuristic">Futuristic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Tone</label>
          <Select value={value.tone} onValueChange={(v) => handleChange('tone', v)}>
            <SelectTrigger className="bg-[#2a1f1f] border-[#3a2f2f] text-white">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a1f1f] border-[#3a2f2f]">
              <SelectItem value="creepy">Creepy</SelectItem>
              <SelectItem value="suspenseful">Suspenseful</SelectItem>
              <SelectItem value="action-packed">Action-Packed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Perspective */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Perspective</label>
          <Select value={value.perspective} onValueChange={(v) => handleChange('perspective', v)}>
            <SelectTrigger className="bg-[#2a1f1f] border-[#3a2f2f] text-white">
              <SelectValue placeholder="Select perspective" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a1f1f] border-[#3a2f2f]">
              <SelectItem value="first-person">First Person</SelectItem>
              <SelectItem value="third-person">Third Person</SelectItem>
              <SelectItem value="second-person">Second Person</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Setting */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Setting</label>
        <Input 
          placeholder="Describe your setting (e.g., an abandoned asylum)"
          value={value.setting}
          onChange={(e) => handleChange('setting', e.target.value)}
          className="bg-[#2a1f1f] border-[#3a2f2f] text-white"
        />
      </div>
    </div>
  )
}