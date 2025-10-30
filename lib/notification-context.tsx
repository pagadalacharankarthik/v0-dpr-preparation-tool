"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export interface Notification {
  id: string
  title: string
  message: string
  type: "success" | "error" | "info" | "warning"
  timestamp: Date
  read: boolean
  actionUrl?: string
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void
  markAsRead: (id: string) => void
  clearNotification: (id: string) => void
  clearAll: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const id = Date.now().toString()
    const newNotification: Notification = {
      ...notification,
      id,
      timestamp: new Date(),
      read: false,
    }
    setNotifications((prev) => [newNotification, ...prev])

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 5000)
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }, [])

  const clearNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead, clearNotification, clearAll }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within NotificationProvider")
  }
  return context
}
