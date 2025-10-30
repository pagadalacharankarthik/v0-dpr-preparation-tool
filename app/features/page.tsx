import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesGrid } from "@/components/features-grid"
import { AICapabilities } from "@/components/ai-capabilities"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FeaturesGrid />
      <AICapabilities />
      <Footer />
    </main>
  )
}
