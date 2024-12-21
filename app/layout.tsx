import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toast'
import { FloatingOrbs } from '@/components/ui/floating-orbs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoSleep Story Generator',
  description: 'AI-powered horror story generator for r/nosleep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FloatingOrbs />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}