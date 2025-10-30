"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useNotification } from "@/lib/notification-context"
import { generatePDFContent, generateExcelCSV, downloadFile } from "@/lib/export-utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  FileText,
  Plus,
  Download,
  Eye,
  Edit2,
  Trash2,
  Menu,
  X,
  LogOut,
  Home,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  Bell,
} from "lucide-react"

interface DPREntry {
  id: string
  date: string
  title: string
  status: "draft" | "submitted" | "approved" | "rejected"
  revenue: number
  expenses: number
  loanAmount: number
  scheme: string
}

interface LoanPrediction {
  id: string
  scheme: string
  eligibility: number
  estimatedAmount: number
  status: string
}

interface BankNotification {
  id: string
  bank: string
  message: string
  status: "pending" | "approved" | "rejected"
  date: string
}

export function UserDashboard() {
  const router = useRouter()
  const { addNotification } = useNotification()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [showNotifications, setShowNotifications] = useState(false)
  const [dprEntries, setDprEntries] = useState<DPREntry[]>([
    {
      id: "1",
      date: "2025-10-30",
      title: "Manufacturing Unit - Q4 2025",
      status: "approved",
      revenue: 450000,
      expenses: 120000,
      loanAmount: 500000,
      scheme: "PMMY - Mudra Loan",
    },
    {
      id: "2",
      date: "2025-10-25",
      title: "Retail Business - Q4 2025",
      status: "submitted",
      revenue: 380000,
      expenses: 95000,
      loanAmount: 300000,
      scheme: "CGTMSE",
    },
    {
      id: "3",
      date: "2025-10-20",
      title: "Service Business - Q4 2025",
      status: "draft",
      revenue: 520000,
      expenses: 150000,
      loanAmount: 400000,
      scheme: "PMMY - Mudra Loan",
    },
    {
      id: "4",
      date: "2025-10-15",
      title: "Trading Business - Q3 2025",
      status: "approved",
      revenue: 620000,
      expenses: 180000,
      loanAmount: 600000,
      scheme: "PMMY - Mudra Loan",
    },
  ])

  const [bankNotifications, setBankNotifications] = useState<BankNotification[]>([
    {
      id: "1",
      bank: "HDFC Bank",
      message: "Your DPR for Manufacturing Unit has been approved. Loan amount: ₹5,00,000",
      status: "approved",
      date: "2025-10-30",
    },
    {
      id: "2",
      bank: "ICICI Bank",
      message: "Your DPR is under review. Expected decision within 5 business days.",
      status: "pending",
      date: "2025-10-28",
    },
  ])

  const [loanPredictions] = useState<LoanPrediction[]>([
    {
      id: "1",
      scheme: "PMMY - Mudra Loan",
      eligibility: 95,
      estimatedAmount: 500000,
      status: "Highly Eligible",
    },
    {
      id: "2",
      scheme: "CGTMSE",
      eligibility: 88,
      estimatedAmount: 750000,
      status: "Eligible",
    },
    {
      id: "3",
      scheme: "PMEGP",
      eligibility: 72,
      estimatedAmount: 1000000,
      status: "Eligible",
    },
  ])

  const stats = [
    { label: "Total Revenue", value: "₹19,70,000", change: "+12.5%", icon: TrendingUp },
    { label: "Total Expenses", value: "₹5,45,000", change: "-3.2%", icon: BarChart3 },
    { label: "DPRs Created", value: "4", change: "+2 this month", icon: FileText },
    { label: "Approval Rate", value: "75%", change: "3/4 approved", icon: CheckCircle },
  ]

  const handleDeleteDPR = (id: string) => {
    setDprEntries(dprEntries.filter((entry) => entry.id !== id))
    addNotification({
      title: "DPR Deleted",
      message: "Your DPR has been successfully deleted.",
      type: "info",
    })
  }

  const handleCreateDPR = () => {
    router.push("/dpr-upload")
  }

  const handleExportPDF = () => {
    try {
      const dprData = {
        businessName: "Tech Solutions Ltd",
        ownerName: "Rajesh Kumar",
        businessType: "Manufacturing",
        yearOfEstablishment: "2015",
        totalEmployees: "50",
        annualRevenue: "1970000",
        businessDescription: "Leading manufacturing company specializing in tech solutions",
        revenue: 1970000,
        expenses: 545000,
        loanAmount: 500000,
        scheme: "PMMY - Mudra Loan",
      }

      const pdfContent = generatePDFContent(dprData)
      downloadFile(pdfContent, "DPR_Report.pdf", "text/plain")

      addNotification({
        title: "PDF Downloaded",
        message: "Your DPR PDF has been downloaded successfully.",
        type: "success",
      })
    } catch (error) {
      addNotification({
        title: "Export Failed",
        message: "Failed to export PDF. Please try again.",
        type: "error",
      })
    }
  }

  const handleExportExcel = () => {
    try {
      const csvContent = generateExcelCSV(dprEntries)
      downloadFile(csvContent, "DPR_Data.csv", "text/csv")

      addNotification({
        title: "Excel Downloaded",
        message: "Your DPR data has been exported to Excel successfully.",
        type: "success",
      })
    } catch (error) {
      addNotification({
        title: "Export Failed",
        message: "Failed to export Excel. Please try again.",
        type: "error",
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "submitted":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "submitted":
        return <Clock className="w-4 h-4" />
      case "rejected":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getBankNotificationColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-50 border-green-200"
      case "pending":
        return "bg-yellow-50 border-yellow-200"
      case "rejected":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-card border-r border-border transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">MSME Hub</h2>
        </div>
        <nav className="flex-1 p-6 space-y-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "overview"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("dpr")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "dpr"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <FileText className="w-5 h-5" />
            DPR Management
          </button>
          <button
            onClick={() => setActiveTab("predictions")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "predictions"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Loan Predictions
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "notifications"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <Bell className="w-5 h-5" />
            Bank Notifications
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "feedback"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Feedback
          </button>
        </nav>
        <div className="p-6 border-t border-border space-y-2">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-muted-foreground hover:bg-background transition-colors"
          >
            <Home className="w-5 h-5" />
            Home
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-background rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-2xl font-bold text-foreground">Welcome Back, Entrepreneur!</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-background rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-foreground" />
                {bankNotifications.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
                )}
              </button>

              {/* Bank Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Bank Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {bankNotifications.length > 0 ? (
                      bankNotifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-border ${getBankNotificationColor(notif.status)}`}
                        >
                          <p className="text-sm font-semibold text-foreground">{notif.bank}</p>
                          <p className="text-sm text-foreground mt-1">{notif.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">{notif.date}</p>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No bank notifications</div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={() => router.push("/admin")}>
              Admin Portal
            </Button>
            <Button variant="outline" size="sm" onClick={() => router.push("/contact")}>
              Support
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Bank Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Bank Notifications</h2>
                <p className="text-muted-foreground mt-1">Receive updates from banks about your DPR submissions</p>
              </div>

              <div className="space-y-4">
                {bankNotifications.map((notif) => (
                  <Card key={notif.id} className={`p-6 border-2 ${getBankNotificationColor(notif.status)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{notif.bank}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notif.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          notif.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : notif.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {notif.status.charAt(0).toUpperCase() + notif.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-foreground">{notif.message}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <Card key={index} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="w-full gap-2" onClick={handleCreateDPR}>
                    <Plus className="w-4 h-4" />
                    Create New DPR
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-transparent"
                    onClick={() => setActiveTab("predictions")}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Check Loan Eligibility
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-transparent"
                    onClick={() => router.push("/chatbot")}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Ask AI Assistant
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* DPR Management Tab */}
            <TabsContent value="dpr" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Daily Progress Reports</h2>
                  <p className="text-muted-foreground mt-1">Manage and track your DPRs for funding applications</p>
                </div>
                <Button className="gap-2" onClick={handleCreateDPR}>
                  <Plus className="w-4 h-4" />
                  Create New DPR
                </Button>
              </div>

              {/* DPR Table */}
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-card border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Title</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Scheme</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Loan Amount</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dprEntries.map((entry) => (
                        <tr key={entry.id} className="hover:bg-card/50 transition-colors">
                          <td className="px-6 py-4 text-sm text-foreground">{entry.date}</td>
                          <td className="px-6 py-4 text-sm text-foreground font-medium">{entry.title}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{entry.scheme}</td>
                          <td className="px-6 py-4 text-sm text-foreground">₹{entry.loanAmount.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(entry.status)}
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}
                              >
                                {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                className="p-2 hover:bg-background rounded-lg transition-colors"
                                title="View"
                                onClick={() =>
                                  addNotification({
                                    title: "Viewing DPR",
                                    message: `Viewing DPR: ${entry.title}`,
                                    type: "info",
                                  })
                                }
                              >
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button
                                className="p-2 hover:bg-background rounded-lg transition-colors"
                                title="Edit"
                                onClick={() =>
                                  addNotification({
                                    title: "Editing DPR",
                                    message: `Editing DPR: ${entry.title}`,
                                    type: "info",
                                  })
                                }
                              >
                                <Edit2 className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button
                                onClick={() => handleDeleteDPR(entry.id)}
                                className="p-2 hover:bg-background rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Export Section */}
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Export Reports</h3>
                    <p className="text-sm text-muted-foreground">Download your DPR data in various formats</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleExportPDF}>
                      <Download className="w-4 h-4" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleExportExcel}>
                      <Download className="w-4 h-4" />
                      Excel
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Loan Predictions Tab */}
            <TabsContent value="predictions" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Loan Eligibility Predictions</h2>
                <p className="text-muted-foreground mt-1">AI-powered predictions based on your business profile</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {loanPredictions.map((prediction) => (
                  <Card key={prediction.id} className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">{prediction.scheme}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Eligibility Score</p>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{ width: `${prediction.eligibility}%` }}
                          ></div>
                        </div>
                        <p className="text-sm font-semibold text-foreground mt-2">{prediction.eligibility}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Loan Amount</p>
                        <p className="text-2xl font-bold text-primary">
                          ₹{prediction.estimatedAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {prediction.status}
                        </span>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() =>
                          addNotification({
                            title: "Application Started",
                            message: `Applying for ${prediction.scheme}`,
                            type: "success",
                          })
                        }
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Feedback & Suggestions</h2>
                <p className="text-muted-foreground mt-1">Help us improve by sharing your experience</p>
              </div>

              <Card className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Feedback</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      rows={6}
                      placeholder="Share your experience with MSME Hub..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-2xl hover:text-accent transition-colors"
                          onClick={() =>
                            addNotification({
                              title: "Rating Submitted",
                              message: `Thank you for rating us ${star} stars!`,
                              type: "success",
                            })
                          }
                        >
                          ⭐
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() =>
                      addNotification({
                        title: "Feedback Submitted",
                        message: "Thank you for your feedback! We appreciate your input.",
                        type: "success",
                      })
                    }
                  >
                    Submit Feedback
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
