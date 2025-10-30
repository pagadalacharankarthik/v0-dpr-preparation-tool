import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSupport } from "@/components/contact-support"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactSupport />
      <Footer />
    </main>
  )
}
