"use client"

import { Button } from '@/components/ui/button'
import { Loader2, Wand2 } from 'lucide-react'

interface GenerateButtonProps {
  loading: boolean
  disabled: boolean
}

export function GenerateButton({ loading, disabled }: GenerateButtonProps) {
  return (
    <Button 
      type="submit" 
      className="w-full bg-gradient-to-r from-red-900 to-red-600 hover:from-red-800 hover:to-red-500"
      disabled={disabled}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Crafting your nightmare...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Story
        </>
      )}
    </Button>
  )
}