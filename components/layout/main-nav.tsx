"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from '@/stores/auth-store'

export function MainNav() {
  const router = useRouter()
  const { user, signOut } = useAuthStore()

  const handleSignOut = async () => {
    await signOut()
    router.push('/login')
  }

  return (
    <nav className="border-b border-[#2a1f1f] bg-[#1a0f0f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1a0f0f]/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Link href="/dashboard" className="text-xl font-bold text-white">
            Nightmare Ink
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-6">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-gray-200 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link 
            href="/dashboard/stories" 
            className="text-sm font-medium text-gray-200 transition-colors hover:text-white"
          >
            Stories
          </Link>
          <Link 
            href="/dashboard/generate" 
            className="text-sm font-medium text-gray-200 transition-colors hover:text-white"
          >
            Generate
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{user?.email?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}