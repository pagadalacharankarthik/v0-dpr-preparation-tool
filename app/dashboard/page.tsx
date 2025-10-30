import { UserDashboard } from "@/components/user-dashboard"
import { Header } from "@/components/header"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <UserDashboard />
    </main>
  )
}
