"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Upload Project Details",
    description:
      "Upload your business information, financial data, or existing DPR. Our system securely processes your documents.",
    icon: "📝",
  },
  {
    number: 2,
    title: "AI Analyzes & Improves",
    description:
      "Our AI engine analyzes your data, improves structure, and generates professional content for your DPR.",
    icon: "🤖",
  },
  {
    number: 3,
    title: "Edit via Text or Voice",
    description: "Edit your DPR using text input or Telugu/English voice input. Make changes easily with our editor.",
    icon: "🎤",
  },
  {
    number: 4,
    title: "Generate Final DPR",
    description:
      "AI generates a bank-ready DPR in PDF or Word format with all required sections and financial projections.",
    icon: "📄",
  },
  {
    number: 5,
    title: "Predict Loan Eligibility",
    description: "Get AI-powered predictions on loan approval chances and recommendations for government schemes.",
    icon: "💰",
  },
  {
    number: 6,
    title: "Submit to MSME Portal",
    description: "Submit directly to MSME portal. Track status: Under Review → Forwarded → Approved.",
    icon: "✅",
  },
]

export function HowItWorksFlow() {
  const router = useRouter()

  const handleStartTrial = () => {
    router.push("/dashboard")
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with MSME Hub in 6 simple steps and transform your DPR creation process with AI-powered
            insights.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="flex gap-6">
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary to-primary/20 mt-2"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2 pb-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Ready to get started?</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Join thousands of MSMEs already transforming their business with our platform.
          </p>
          <Button size="lg" onClick={handleStartTrial}>
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
