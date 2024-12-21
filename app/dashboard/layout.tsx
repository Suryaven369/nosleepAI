import { DashboardHeader } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/layout/sidebar"
import { ProfileFooter } from "@/components/dashboard/layout/profile-footer"
import { AuthCheck } from "@/components/auth/auth-check"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <div className="flex">
          <div className="flex flex-col">
            <Sidebar />
            <ProfileFooter />
          </div>
          {children}
        </div>
      </div>
    </AuthCheck>
  )
}