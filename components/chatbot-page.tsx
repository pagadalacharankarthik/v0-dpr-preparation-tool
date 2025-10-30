"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Loader, MessageCircle, ArrowLeft } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const suggestedQuestions = [
  "How can I improve my business growth?",
  "What are the compliance requirements?",
  "How do I submit a DPR?",
  "Can you analyze my business performance?",
  "What are the best practices for MSMEs?",
  "How does the AI assistant work?",
]

export function ChatbotPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to MSME Hub AI Assistant! I'm here to help you with DPR preparation, business growth, compliance, and strategic advice. Feel free to ask me anything about your business.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        growth:
          "To improve your business growth, I recommend: 1) Expand your customer base through digital marketing, 2) Optimize your operations to reduce costs, 3) Invest in employee training, 4) Explore new market opportunities. Would you like detailed strategies for any of these?",
        compliance:
          "Key compliance requirements for MSMEs include: 1) Regular DPR submission, 2) GST compliance, 3) Labor law compliance, 4) Environmental regulations. I can provide specific guidance for your industry. What would you like to know more about?",
        dpr: "To submit a DPR: 1) Log into your dashboard, 2) Click 'Create New DPR', 3) Fill in your business details, 4) Let AI generate the report, 5) Review and submit to MSME portal. You can also set up automated reminders. Need help with any specific field?",
        performance:
          "Based on your recent data, your business is performing well with a 94.2% compliance rate. Your revenue has grown 12.5% this month. I recommend focusing on customer retention to further boost growth. Would you like a detailed analysis?",
        practices:
          "Best practices for MSMEs: 1) Maintain accurate financial records, 2) Regular compliance monitoring, 3) Customer relationship management, 4) Continuous process improvement, 5) Employee development. Which area would you like to focus on?",
        default:
          "That's an interesting question! Based on your business profile and industry trends, I can provide personalized recommendations. Could you provide more context about what you're trying to achieve?",
      }

      let response = responses.default

      if (messageText.toLowerCase().includes("growth")) response = responses.growth
      else if (messageText.toLowerCase().includes("compliance")) response = responses.compliance
      else if (messageText.toLowerCase().includes("dpr")) response = responses.dpr
      else if (messageText.toLowerCase().includes("performance")) response = responses.performance
      else if (messageText.toLowerCase().includes("practice")) response = responses.practices

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">AI Assistant</h1>
            </div>
            <p className="text-muted-foreground">Get instant answers to your business questions</p>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="flex flex-col h-96 md:h-[600px] overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-md px-4 py-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card text-foreground border border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card text-foreground border border-border px-4 py-3 rounded-lg rounded-bl-none">
                  <Loader className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (shown when no messages) */}
          {messages.length === 1 && !isLoading && (
            <div className="px-6 py-4 border-t border-border bg-card">
              <p className="text-xs font-semibold text-muted-foreground mb-3">Suggested Questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-left text-xs px-3 py-2 rounded-lg bg-background hover:bg-primary/10 text-foreground transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-4 bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about your business..."
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
              />
              <Button onClick={() => handleSendMessage()} disabled={isLoading || !inputValue.trim()} className="gap-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
