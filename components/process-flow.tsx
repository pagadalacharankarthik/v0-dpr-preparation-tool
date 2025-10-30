import { CheckCircle2, Upload, Zap, Edit, FileText, TrendingUp, Send } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Upload Project Details",
    description: "Upload your project details or existing DPR document for analysis",
  },
  {
    number: 2,
    icon: Zap,
    title: "AI Analysis",
    description: "Our AI analyzes and improves the structure and content of your DPR",
  },
  {
    number: 3,
    icon: Edit,
    title: "Edit & Refine",
    description: "Edit via text or Telugu voice input for easy customization",
  },
  {
    number: 4,
    icon: FileText,
    title: "Generate Report",
    description: "AI generates final DPR in PDF or Word format ready for submission",
  },
  {
    number: 5,
    icon: TrendingUp,
    title: "Predict Eligibility",
    description: "Get loan approval predictions and government scheme recommendations",
  },
  {
    number: 6,
    icon: Send,
    title: "Submit & Track",
    description: "Submit to MSME portal and track status in real-time",
  },
]

export function ProcessFlow() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six simple steps to transform your project idea into a bank-ready DPR
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-accent/5 border border-accent/20">
          <h3 className="text-xl font-semibold text-foreground mb-4">Submission Status Workflow</h3>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">Submitted</span>
            </div>
            <div className="w-8 h-0.5 bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">Under Review</span>
            </div>
            <div className="w-8 h-0.5 bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">Forwarded</span>
            </div>
            <div className="w-8 h-0.5 bg-border hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
