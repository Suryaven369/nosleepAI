"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { FilterPill } from "./filter-pill"
import { THEMES } from "./parameter-groups"

interface ThemeFilterProps {
  value: string
  onChange: (value: string) => void
}

export function ThemeFilter({ value, onChange }: ThemeFilterProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">Core Theme</h3>
      <ScrollArea className="w-full scrollbar-hide" orientation="horizontal">
        <div className="flex space-x-2 pb-4">
          {Object.entries(THEMES).map(([key, label]) => (
            <FilterPill
              key={key}
              label={label}
              active={value === key}
              onClick={() => onChange(key)}
              className="whitespace-nowrap"
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}