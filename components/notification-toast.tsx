"use client"

import { useNotification } from "@/lib/notification-context"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

export function NotificationToast() {
  const { notifications, clearNotification } = useNotification()

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  const getTextColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-900"
      case "error":
        return "text-red-900"
      case "warning":
        return "text-yellow-900"
      default:
        return "text-blue-900"
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border flex items-start gap-3 animate-in slide-in-from-top-2 ${getBackgroundColor(notification.type)}`}
        >
          {getIcon(notification.type)}
          <div className="flex-1">
            <p className={`font-semibold ${getTextColor(notification.type)}`}>{notification.title}</p>
            <p className={`text-sm ${getTextColor(notification.type)}`}>{notification.message}</p>
          </div>
          <button
            onClick={() => clearNotification(notification.id)}
            className={`flex-shrink-0 ${getTextColor(notification.type)} hover:opacity-70`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
