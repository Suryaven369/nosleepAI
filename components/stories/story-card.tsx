"use client"

import { Story } from '@/lib/types/story'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate } from '@/lib/utils'
import { useStoryStore } from '@/stores/story-store'
import { useAuthStore } from '@/stores/auth-store'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { DeleteDialog } from './delete-dialog'

interface StoryCardProps {
  story: Story
  onClick: () => void
}

export function StoryCard({ story, onClick }: StoryCardProps) {
  const [showDelete, setShowDelete] = useState(false)
  const { user } = useAuthStore()
  const { removeStory } = useStoryStore()
  
  const title = story.prompt.split('\n')[0]
  const preview = story.story.substring(0, 150) + '...'

  const handleDelete = async () => {
    if (!user?.id || !story.id) return
    await removeStory(story.id, user.id)
    setShowDelete(false)
  }

  return (
    <>
      <Card className="bg-[#1a0f0f] border-[#2a1f1f] hover:border-[#3a2f2f] transition-colors cursor-pointer group">
        <div onClick={onClick}>
          <CardHeader>
            <CardTitle className="text-xl text-white line-clamp-2">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 line-clamp-3 mb-4">
              {preview}
            </p>
            {story.created_at && (
              <p className="text-sm text-gray-400">
                {formatDate(story.created_at)}
              </p>
            )}
          </CardContent>
        </div>
        <CardFooter className="justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              setShowDelete(true)
            }}
          >
            <Trash className="h-4 w-4 text-red-500" />
          </Button>
        </CardFooter>
      </Card>

      <DeleteDialog
        open={showDelete}
        onOpenChange={setShowDelete}
        onConfirm={handleDelete}
      />
    </>
  )
}