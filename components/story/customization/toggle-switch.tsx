"use client"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  className?: string
}

export function ToggleSwitch({ checked, onChange, label, className }: ToggleSwitchProps) {
  return (
    <label className={cn("relative inline-flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className={cn(
        "w-11 h-6 bg-gray-200 rounded-full peer",
        "peer-focus:ring-4 peer-focus:ring-red-300",
        "dark:peer-focus:ring-red-800 dark:bg-gray-700",
        "peer-checked:after:translate-x-full peer-checked:after:border-white",
        "after:content-[''] after:absolute after:top-0.5 after:left-[2px]",
        "after:bg-white after:border-gray-300 after:border after:rounded-full",
        "after:h-5 after:w-5 after:transition-all",
        "peer-checked:bg-red-600"
      )}></div>
      <span className="ml-3 text-sm font-medium">{label}</span>
    </label>
  )
}