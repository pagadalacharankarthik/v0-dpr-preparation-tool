"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of MSMEs already using our platform to grow faster and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" onClick={() => router.push("/dashboard")}>
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/contact")}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
