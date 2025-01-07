import { MainNav } from "@/components/layout/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0a0404]">
      <MainNav />
      <main className="container py-6">
        {children}
      </main>
    </div>
  )
}