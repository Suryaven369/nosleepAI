"use client"

import { cn } from "@/lib/utils"

interface FilterPillProps {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function FilterPill({ label, active, onClick, className }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "filter-pill px-4 py-2 rounded-full text-sm font-medium",
        "hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        active && "bg-red-500 text-white hover:bg-red-600",
        className
      )}
    >
      {label}
    </button>
  )
}