import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotPage } from "@/components/chatbot-page"

export default function ChatbotPageRoute() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ChatbotPage />
      <Footer />
    </main>
  )
}
