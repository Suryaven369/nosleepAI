"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { FilterPill } from "./filter-pill"

interface FilterOption {
  key: string
  label: string
}

interface FilterGroupProps {
  title: string
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function FilterGroup({ title, options, value, onChange, className }: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <ScrollArea className="w-full scrollbar-hide" orientation="horizontal">
        <div className="flex space-x-2 pb-4">
          {options.map((option) => (
            <FilterPill
              key={option.key}
              label={option.label}
              active={value === option.key}
              onClick={() => onChange(option.key)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}