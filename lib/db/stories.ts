import { supabase } from '@/lib/supabase'
import { Story } from '@/lib/types/story'

export async function saveStory(story: Story, userId: string) {
  const { data, error } = await supabase
    .from('stories')
    .insert([{
      user_id: userId,
      prompt: story.prompt,
      story: story.story,
      created_at: new Date().toISOString()
    }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function fetchUserStories(userId: string) {
  const { data, error } = await supabase
    .from('stories')
    .select('id, user_id, prompt, story, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateStory(storyId: string, userId: string, updates: Partial<Story>) {
  const { data, error } = await supabase
    .from('stories')
    .update(updates)
    .eq('id', storyId)
    .eq('user_id', userId)
    .select()
    .single()

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