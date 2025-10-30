"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export interface BlockedUser {
  id: string
  email: string
  name: string
  businessName: string
  reason: string
  blockedDate: string
  blockedBy: string
  fraudScore: number
  suspiciousActivities: string[]
  dprCount: number
  rejectionRate: number
}

export interface FraudAlert {
  id: string
  userId: string
  userName: string
  alertType: "duplicate_dpr" | "suspicious_pattern" | "high_rejection" | "data_mismatch" | "rapid_submission"
  severity: "low" | "medium" | "high" | "critical"
  description: string
  timestamp: string
  status: "pending" | "reviewed" | "resolved"
}

interface FraudDetectionContextType {
  blockedUsers: BlockedUser[]
  fraudAlerts: FraudAlert[]
  blockUser: (user: BlockedUser) => void
  unblockUser: (userId: string) => void
  addFraudAlert: (alert: FraudAlert) => void
  resolveFraudAlert: (alertId: string) => void
  isUserBlocked: (userId: string) => boolean
  getUserFraudScore: (userId: string) => number
}

const FraudDetectionContext = createContext<FraudDetectionContextType | undefined>(undefined)

export function FraudDetectionProvider({ children }: { children: React.ReactNode }) {
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([
    {
      id: "blocked-1",
      email: "fraud@example.com",
      name: "Fraudulent User",
      businessName: "Fake Business Ltd",
      reason: "Multiple duplicate DPRs with identical content",
      blockedDate: "2025-10-25",
      blockedBy: "Admin Officer",
      fraudScore: 95,
      suspiciousActivities: [
        "Generated 50 identical DPRs in 2 hours",
        "Used multiple email addresses with same business details",
        "Attempted to submit same DPR 10 times",
      ],
      dprCount: 50,
      rejectionRate: 100,
    },
  ])

  const [fraudAlerts, setFraudAlerts] = useState<FraudAlert[]>([
    {
      id: "alert-1",
      userId: "user-3",
      userName: "Amit Patel",
      alertType: "high_rejection",
      severity: "high",
      description: "User has 80% DPR rejection rate - possible data quality issues",
      timestamp: "2025-10-30 10:30",
      status: "pending",
    },
    {
      id: "alert-2",
      userId: "user-5",
      userName: "Vikram Desai",
      alertType: "rapid_submission",
      severity: "medium",
      description: "User submitted 5 DPRs in 30 minutes - unusual activity pattern",
      timestamp: "2025-10-30 14:15",
      status: "pending",
    },
  ])

  const blockUser = useCallback((user: BlockedUser) => {
    setBlockedUsers((prev) => [...prev, user])
  }, [])

  const unblockUser = useCallback((userId: string) => {
    setBlockedUsers((prev) => prev.filter((u) => u.id !== userId))
  }, [])

  const addFraudAlert = useCallback((alert: FraudAlert) => {
    setFraudAlerts((prev) => [...prev, alert])
  }, [])

  const resolveFraudAlert = useCallback((alertId: string) => {
    setFraudAlerts((prev) => prev.map((a) => (a.id === alertId ? { ...a, status: "resolved" as const } : a)))
  }, [])

  const isUserBlocked = useCallback(
    (userId: string) => {
      return blockedUsers.some((u) => u.id === userId)
    },
    [blockedUsers],
  )

  const getUserFraudScore = useCallback(
    (userId: string) => {
      const user = blockedUsers.find((u) => u.id === userId)
      return user?.fraudScore || 0
    },
    [blockedUsers],
  )

  return (
    <FraudDetectionContext.Provider
      value={{
        blockedUsers,
        fraudAlerts,
        blockUser,
        unblockUser,
        addFraudAlert,
        resolveFraudAlert,
        isUserBlocked,
        getUserFraudScore,
      }}
    >
      {children}
    </FraudDetectionContext.Provider>
  )
}

export function useFraudDetection() {
  const context = useContext(FraudDetectionContext)
  if (context === undefined) {
    throw new Error("useFraudDetection must be used within FraudDetectionProvider")
  }
  return context
}
