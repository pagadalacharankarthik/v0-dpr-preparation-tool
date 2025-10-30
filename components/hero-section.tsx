"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Create Bank-Ready DPRs in Minutes with AI</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Smart DPR Preparation for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">MSME Success</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            AI-powered tool that simplifies funding access for Andhra Pradesh MSMEs. Generate professional DPRs, predict
            loan eligibility, and submit directly to MSME portals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2" onClick={() => router.push("/dashboard")}>
              Start Creating DPR
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/how-it-works")}>
              View Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 5000+ MSMEs across Andhra Pradesh</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5000+</div>
                <div className="text-xs text-muted-foreground">DPRs Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">₹250Cr+</div>
                <div className="text-xs text-muted-foreground">Funding Unlocked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">92%</div>
                <div className="text-xs text-muted-foreground">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
