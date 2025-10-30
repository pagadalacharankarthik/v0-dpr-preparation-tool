"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your MSME Hub AI Assistant. How can I help you today? I can assist with business growth strategies, compliance questions, DPR management, and more.",
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response (in production, this would call your AI API)
    setTimeout(() => {
      const botResponses = [
        "That's a great question! Based on your business profile, I recommend focusing on customer retention strategies to increase your revenue by 20-30%.",
        "For DPR compliance, make sure to submit your daily reports by 5 PM every day. I can help you set up automated reminders if you'd like.",
        "Your current compliance rate is 94.2%, which is excellent! Keep maintaining this standard to ensure smooth operations.",
        "I can help you with financial forecasting, market analysis, and growth strategies. What specific area would you like to explore?",
        "Based on industry benchmarks, your business is performing 15% above average. Consider expanding to new markets to accelerate growth.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 max-h-96 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">MSME Hub AI Assistant</h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card text-foreground border border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card text-foreground border border-border px-4 py-2 rounded-lg rounded-bl-none">
                  <Loader className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-background rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="gap-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
