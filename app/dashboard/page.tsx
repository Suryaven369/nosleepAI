import { StoryGrid } from "@/components/stories/story-grid"

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Your Stories</h1>
      </div>
      <StoryGrid />
    </div>
  )
}