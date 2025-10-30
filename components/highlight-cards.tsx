"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, BarChart3, Shield, Zap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI Chatbot Assistant",
    description: "24/7 intelligent support for business queries, compliance help, and growth strategies",
    action: "Try Now",
    route: "/chatbot",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Real-time insights into your business performance with actionable recommendations",
    action: "View Dashboard",
    route: "/dashboard",
  },
  {
    icon: Shield,
    title: "Compliance Made Easy",
    description: "Automated DPR management and regulatory compliance tracking",
    action: "Create DPR",
    route: "/dpr-generator",
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Streamline workflows and reduce manual work with intelligent automation",
    action: "Learn More",
    route: "/features",
  },
]

export function HighlightCards() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 flex-col h-full">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-fit mt-auto bg-transparent"
                    onClick={() => router.push(item.route)}
                  >
                    {item.action}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
