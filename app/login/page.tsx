"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Eye, EyeOff, Globe } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const { language, setLanguage, t } = useLanguage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      // Redirect based on role
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        const user = JSON.parse(storedUser)
        router.push(user.role === "admin" ? "/admin" : "/dashboard")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="absolute top-6 right-6">
        <div className="relative">
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-card border border-border rounded-lg"
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
      </div>

      <Card className="w-full max-w-md p-8">
        <div className="mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold mb-4">
            M
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome to MSME Hub</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        {/* Demo Credentials Info */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-semibold text-blue-900 mb-2">Demo Credentials:</p>
          <div className="text-xs text-blue-800 space-y-1">
            <p>Entrepreneur: entrepreneur@demo.com / demo123</p>
            <p>Admin: admin@demo.com / admin123</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <button onClick={() => router.push("/")} className="text-primary hover:underline font-medium">
            Go back home
          </button>
        </p>
      </Card>
    </div>
  )
}
