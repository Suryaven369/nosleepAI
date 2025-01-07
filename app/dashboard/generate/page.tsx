import { StoryForm } from "@/components/story/story-form"
import { Card } from "@/components/ui/card"

export default function GeneratePage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Generate Story</h1>
      </div>
      <Card className="p-6">
        <StoryForm />
      </Card>
    </div>
  )
}