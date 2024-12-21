"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SAMPLE_STORIES = [
  {
    id: 1,
    title: "The Midnight Visitor",
    preview: "I never believed in supernatural entities until that fateful night...",
    date: "2024-01-20",
  },
  {
    id: 2,
    title: "Whispers in the Static",
    preview: "The old radio in my grandmother's attic started broadcasting strange messages...",
    date: "2024-01-19",
  },
]

export function StoryList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your Stories</h2>
      <div className="grid gap-4">
        {SAMPLE_STORIES.map((story) => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{story.preview}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">{story.date}</span>
              <Button variant="outline">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}