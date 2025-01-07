"use client"

import { create } from 'zustand'
import { User } from '@/lib/types'
import { supabase } from '@/lib/supabase'

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
  initialized: boolean
  initializeAuth: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  initialized: false,

  initializeAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      // Set up auth state change listener
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ 
          user: session?.user as User || null,
          initialized: true,
          loading: false 
        })
      })

      set({ 
        user: session?.user as User || null,
        initialized: true,
        loading: false 
      })
    } catch (error: any) {
      set({ 
        error: error.message,
        initialized: true,
        loading: false 
      })
    }
  },

  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null })
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      set({ user: data.user as User })
    } catch (error: any) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  signUp: async (email: string, password: string) => {
    set({ loading: true, error: null })
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
      set({ user: data.user as User })
    } catch (error: any) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  signOut: async () => {
    set({ loading: true, error: null })
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      set({ user: null })
    } catch (error: any) {
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  clearError: () => set({ error: null }),
}))