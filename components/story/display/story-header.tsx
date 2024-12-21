"use client"

interface StoryHeaderProps {
  title: string
}

export function StoryHeader({ title }: StoryHeaderProps) {
  return (
    <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
      {title}
    </h1>
  )
}