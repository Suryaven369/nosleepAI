import { AuthForm } from "@/components/auth/auth-form"
import { Skull } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center space-x-2">
            <Skull className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">NoSleep AI</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue to NoSleep AI
          </p>
        </div>

        <div className="mt-8">
          <AuthForm type="login" />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-medium text-red-600 hover:text-red-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}