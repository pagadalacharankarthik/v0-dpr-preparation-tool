import { Card } from "@/components/ui/card"
import { MessageSquare, TrendingUp, Shield, Zap, BarChart3, Globe, Workflow, Clock } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Assistant",
    description:
      "24/7 intelligent support for business queries, compliance guidance, and strategic advice powered by advanced AI.",
  },
  {
    icon: TrendingUp,
    title: "Growth Recommendations",
    description: "Personalized strategies to scale your business based on market trends and your performance data.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Automated DPR tracking, regulatory compliance monitoring, and documentation management.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and reduce manual work with intelligent automation workflows.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time dashboards with deep insights into sales, expenses, and business metrics.",
  },
  {
    icon: Globe,
    title: "Market Intelligence",
    description: "Stay ahead with AI-powered market trends, competitor analysis, and industry insights.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Identify bottlenecks and optimize your business processes for maximum efficiency.",
  },
  {
    icon: Clock,
    title: "Predictive Analytics",
    description: "Forecast future trends and prepare your business with AI-powered predictions.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to grow your MSME with AI-powered tools and intelligent insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
