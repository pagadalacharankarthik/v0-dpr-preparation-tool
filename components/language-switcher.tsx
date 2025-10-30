"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="gap-2">
        <Globe className="w-4 h-4" />
        {language.toUpperCase()}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50">
          <button
            onClick={() => {
              setLanguage("en")
              setIsOpen(false)
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
              setIsOpen(false)
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
  )
}
