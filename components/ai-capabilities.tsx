import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const capabilities = [
  {
    title: "Natural Language Processing",
    description:
      "Understand and respond to business queries in natural language. Get instant answers to compliance questions, financial advice, and growth strategies.",
    features: ["Multi-language support", "Context-aware responses", "Real-time learning"],
  },
  {
    title: "Predictive Intelligence",
    description:
      "Forecast business trends, customer behavior, and market opportunities. Make data-driven decisions with confidence.",
    features: ["Revenue forecasting", "Demand prediction", "Risk assessment"],
  },
  {
    title: "Automated Insights",
    description:
      "Get actionable insights automatically generated from your business data. Identify opportunities and risks before they impact your business.",
    features: ["Anomaly detection", "Pattern recognition", "Opportunity alerts"],
  },
  {
    title: "Smart Recommendations",
    description:
      "Receive personalized recommendations tailored to your business type, size, and goals. Optimize operations and maximize growth.",
    features: ["Personalized strategies", "Best practice guidance", "Industry benchmarks"],
  },
]

export function AICapabilities() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">AI-Powered Capabilities</span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced AI Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge machine learning and artificial intelligence to deliver intelligent solutions for
            your business.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
              <p className="text-muted-foreground mb-6">{capability.description}</p>
              <div className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2">
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
