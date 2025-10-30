"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  role: "entrepreneur" | "admin"
  businessName?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Demo credentials
    const demoUsers: Record<string, { password: string; user: User }> = {
      "entrepreneur@demo.com": {
        password: "demo123",
        user: {
          id: "1",
          email: "entrepreneur@demo.com",
          name: "Rajesh Kumar",
          role: "entrepreneur",
          businessName: "Tech Solutions Ltd",
        },
      },
      "admin@demo.com": {
        password: "admin123",
        user: {
          id: "2",
          email: "admin@demo.com",
          name: "Admin Officer",
          role: "admin",
        },
      },
    }

    const demoUser = demoUsers[email]
    if (demoUser && demoUser.password === password) {
      setUser(demoUser.user)
      localStorage.setItem("user", JSON.stringify(demoUser.user))
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    throw new Error("Invalid email or password")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
