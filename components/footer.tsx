"use client"

import { useRouter } from "next/navigation"

export function Footer() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">MSME Hub</h3>
            <p className="text-sm text-muted-foreground">
              Empowering MSMEs with AI-driven DPR preparation and funding solutions for Andhra Pradesh.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => handleNavigation("/features")}
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Pricing page coming soon")}
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Security information")}
                  className="hover:text-foreground transition-colors"
                >
                  Security
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => alert("About MSME Hub")} className="hover:text-foreground transition-colors">
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Blog page coming soon")}
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Careers page coming soon")}
                  className="hover:text-foreground transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => alert("Privacy Policy")} className="hover:text-foreground transition-colors">
                  Privacy
                </button>
              </li>
              <li>
                <button onClick={() => alert("Terms of Service")} className="hover:text-foreground transition-colors">
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 MSME Hub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button
              onClick={() => alert("Twitter profile")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </button>
            <button
              onClick={() => alert("LinkedIn profile")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </button>
            <button
              onClick={() => alert("Facebook profile")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
