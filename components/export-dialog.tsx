"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, BarChart3, AlertCircle, Users, MapPin } from "lucide-react"
import {
  generateAnalyticsCSV,
  generateFraudReportCSV,
  generateUserProgressCSV,
  generateSectorPerformanceCSV,
  generateRegionalDistributionCSV,
  downloadCSV,
} from "@/lib/export-utils"

interface ExportDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ExportDialog({ isOpen, onClose }: ExportDialogProps) {
  const [exporting, setExporting] = useState(false)

  if (!isOpen) return null

  const handleExportAnalytics = () => {
    setExporting(true)
    const analyticsData = {
      totalDPRs: 2847,
      approvalRate: 87.4,
      avgProcessingTime: 4.2,
      fraudRate: 2.1,
      activeUsers: 1234,
      complianceRate: 94.2,
    }
    const csv = generateAnalyticsCSV(analyticsData)
    downloadCSV(csv, "analytics-report")
    setTimeout(() => setExporting(false), 500)
  }

  const handleExportFraudReport = () => {
    setExporting(true)
    const fraudData = [
      {
        id: "blocked-1",
        name: "Fraudulent User",
        businessName: "Fake Business Ltd",
        fraudScore: 95,
        alertType: "duplicate_dpr",
        severity: "critical",
        reason: "Multiple duplicate DPRs with identical content",
        blockedDate: "2025-10-25",
        dprCount: 50,
        rejectionRate: 100,
      },
    ]
    const csv = generateFraudReportCSV(fraudData)
    downloadCSV(csv, "fraud-detection-report")
    setTimeout(() => setExporting(false), 500)
  }

  const handleExportUserProgress = () => {
    setExporting(true)
    const progressData = [
      {
        name: "Rajesh Kumar",
        businessName: "Tech Solutions Ltd",
        email: "rajesh@techsol.com",
        registrationDate: "2025-08-15",
        dprCreated: 28,
        dprSubmitted: 25,
        dprApproved: 20,
        completionPercentage: 95,
        currentStage: "Loan Approved",
        lastActivity: "2025-10-30 14:30",
      },
      {
        name: "Priya Sharma",
        businessName: "Fashion Hub",
        email: "priya@fashionhub.com",
        registrationDate: "2025-09-01",
        dprCreated: 25,
        dprSubmitted: 22,
        dprApproved: 18,
        completionPercentage: 88,
        currentStage: "Under Bank Review",
        lastActivity: "2025-10-29 10:15",
      },
    ]
    const csv = generateUserProgressCSV(progressData)
    downloadCSV(csv, "user-progress-report")
    setTimeout(() => setExporting(false), 500)
  }

  const handleExportSectorPerformance = () => {
    setExporting(true)
    const sectorData = [
      {
        name: "Manufacturing",
        dprCount: 456,
        approvalRate: 92,
        avgLoan: "₹45L",
        activeUsers: 234,
        avgProcessingDays: 3.8,
      },
      {
        name: "Retail & Trade",
        dprCount: 523,
        approvalRate: 88,
        avgLoan: "₹32L",
        activeUsers: 289,
        avgProcessingDays: 4.2,
      },
    ]
    const csv = generateSectorPerformanceCSV(sectorData)
    downloadCSV(csv, "sector-performance-report")
    setTimeout(() => setExporting(false), 500)
  }

  const handleExportRegionalDistribution = () => {
    setExporting(true)
    const regionalData = [
      {
        name: "Hyderabad",
        dprCount: 456,
        users: 234,
        approvalRate: 89,
        avgLoan: "₹42L",
        complianceRate: 95,
      },
      {
        name: "Visakhapatnam",
        dprCount: 234,
        users: 156,
        approvalRate: 86,
        avgLoan: "₹38L",
        complianceRate: 92,
      },
    ]
    const csv = generateRegionalDistributionCSV(regionalData)
    downloadCSV(csv, "regional-distribution-report")
    setTimeout(() => setExporting(false), 500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Export Data</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleExportAnalytics}
            disabled={exporting}
            className="p-4 border border-border rounded-lg hover:bg-background transition-colors text-left group"
          >
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">Analytics Report</p>
                <p className="text-sm text-muted-foreground">Export comprehensive analytics data</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleExportFraudReport}
            disabled={exporting}
            className="p-4 border border-border rounded-lg hover:bg-background transition-colors text-left group"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">Fraud Detection Report</p>
                <p className="text-sm text-muted-foreground">Export blocked users and fraud alerts</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleExportUserProgress}
            disabled={exporting}
            className="p-4 border border-border rounded-lg hover:bg-background transition-colors text-left group"
          >
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-accent mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">User Progress Report</p>
                <p className="text-sm text-muted-foreground">Export user completion and activity data</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleExportSectorPerformance}
            disabled={exporting}
            className="p-4 border border-border rounded-lg hover:bg-background transition-colors text-left group"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">Sector Performance Report</p>
                <p className="text-sm text-muted-foreground">Export sector-wise analytics</p>
              </div>
            </div>
          </button>

          <button
            onClick={handleExportRegionalDistribution}
            disabled={exporting}
            className="p-4 border border-border rounded-lg hover:bg-background transition-colors text-left group"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-600 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground">Regional Distribution Report</p>
                <p className="text-sm text-muted-foreground">Export region-wise data</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-6 p-4 bg-background rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            All exports are generated in CSV format with timestamp. Data is ready for analysis in Excel or other tools.
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}
