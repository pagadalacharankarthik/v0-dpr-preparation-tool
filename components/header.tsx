"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  const handleNavigation = (path: string) => {
    router.push(path)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            M
          </div>
          <span className="font-semibold text-foreground">MSME Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigation("/how-it-works")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.howItWorks")}
          </button>
          <button
            onClick={() => handleNavigation("/features")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.features")}
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </button>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLanguageMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === "en" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-background"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("te")
                    setLanguageMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === "te" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-background"
                  }`}
                >
                  తెలుగు
                </button>
              </div>
            )}
          </div>

          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavigation(user?.role === "admin" ? "/admin" : "/dashboard")}
              >
                {t("nav.dashboard")}
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={() => handleNavigation("/login")}>
                {t("nav.login")}
              </Button>
              <Button size="sm" onClick={() => handleNavigation("/login")}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          <button
            onClick={() => handleNavigation("/how-it-works")}
            className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("nav.howItWorks")}
          </button>
          <button
            onClick={() => handleNavigation("/features")}
            className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("nav.features")}
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("nav.contact")}
          </button>
          <div className="flex gap-2 pt-2">
            {isAuthenticated ? (
              <Button
                size="sm"
                className="flex-1"
                onClick={() => handleNavigation(user?.role === "admin" ? "/admin" : "/dashboard")}
              >
                {t("nav.dashboard")}
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => handleNavigation("/login")}
                >
                  {t("nav.login")}
                </Button>
                <Button size="sm" className="flex-1" onClick={() => handleNavigation("/login")}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
