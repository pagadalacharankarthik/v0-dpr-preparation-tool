import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AIChatbot } from "@/components/ai-chatbot"
import { AuthProvider } from "@/lib/auth-context"
import { NotificationProvider } from "@/lib/notification-context"
import { NotificationToast } from "@/components/notification-toast"
import { LanguageProvider } from "@/lib/language-context"
import { FraudDetectionProvider } from "@/lib/fraud-detection-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MSME Hub - DPR Preparation Platform",
  description: "AI-powered DPR preparation for MSME entrepreneurs",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <LanguageProvider>
            <FraudDetectionProvider>
              <NotificationProvider>
                {children}
                <NotificationToast />
                <AIChatbot />
                <Analytics />
              </NotificationProvider>
            </FraudDetectionProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
