"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ThemeSearchProps {
  value: string
  onChange: (value: string) => void
}

export function ThemeSearch({ value, onChange }: ThemeSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search themes..."
        className="pl-9 bg-background/50 border-red-900/20"
      />
    </div>
  )
}