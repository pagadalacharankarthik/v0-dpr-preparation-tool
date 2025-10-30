import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HowItWorksFlow } from "@/components/how-it-works-flow"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HowItWorksFlow />
      <Footer />
    </main>
  )
}
