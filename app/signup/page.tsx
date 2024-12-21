import { AuthForm } from "@/components/auth/auth-form"
import { Skull } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center space-x-2">
            <Skull className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">NoSleep AI</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Create your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Start generating horror stories with AI
          </p>
        </div>

        <div className="mt-8">
          <AuthForm type="signup" />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-red-600 hover:text-red-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}