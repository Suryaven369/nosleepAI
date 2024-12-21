"use client"

interface StoryContentProps {
  content: string
}

export function StoryContent({ content }: StoryContentProps) {
  return (
    <div className="mt-6 space-y-4 text-foreground/90">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}