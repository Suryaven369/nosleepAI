import { supabase } from '@/lib/supabase'
import { Story } from '@/lib/types/story'

export async function saveStory(story: Story, userId: string) {
  const { data, error } = await supabase
    .from('stories')
    .insert([{
      user_id: userId,
      prompt: story.prompt,
      story: story.story,
    }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function fetchUserStories(userId: string) {
  const { data, error } = await supabase
    .from('stories')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function deleteStory(storyId: string, userId: string) {
  const { error } = await supabase
    .from('stories')
    .delete()
    .eq('id', storyId)
    .eq('user_id', userId)

  if (error) throw error
}