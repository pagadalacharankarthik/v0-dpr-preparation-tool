"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  Building2,
  AlertCircle,
  TrendingUp,
  Menu,
  X,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  LogOut,
  Home,
  Bell,
  Activity,
  LineChart,
  Target,
  FileText,
} from "lucide-react"

interface Business {
  id: string
  name: string
  owner: string
  email: string
  status: "active" | "pending" | "inactive"
  dprSubmitted: number
  compliance: number
}

interface Notification {
  id: string
  message: string
  type: "approval" | "submission" | "alert"
  timestamp: string
  read: boolean
}

interface UserProgress {
  id: string
  name: string
  businessName: string
  email: string
  registrationDate: string
  dprCreated: number
  dprSubmitted: number
  dprApproved: number
  completionPercentage: number
  currentStage: string
  lastActivity: string
}

export function AdminDashboard() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotifications, setShowNotifications] = useState(false)
  const [businesses, setBusinesses] = useState<Business[]>([
    {
      id: "1",
      name: "Tech Solutions Ltd",
      owner: "Rajesh Kumar",
      email: "rajesh@techsol.com",
      status: "active",
      dprSubmitted: 28,
      compliance: 95,
    },
    {
      id: "2",
      name: "Fashion Hub",
      owner: "Priya Sharma",
      email: "priya@fashionhub.com",
      status: "active",
      dprSubmitted: 25,
      compliance: 88,
    },
    {
      id: "3",
      name: "Manufacturing Co",
      owner: "Amit Patel",
      email: "amit@mfgco.com",
      status: "pending",
      dprSubmitted: 15,
      compliance: 72,
    },
    {
      id: "4",
      name: "Retail Express",
      owner: "Neha Singh",
      email: "neha@retailexp.com",
      status: "active",
      dprSubmitted: 30,
      compliance: 98,
    },
    {
      id: "5",
      name: "Services Plus",
      owner: "Vikram Desai",
      email: "vikram@servicesplus.com",
      status: "inactive",
      dprSubmitted: 8,
      compliance: 45,
    },
  ])

  const [userProgress, setUserProgress] = useState<UserProgress[]>([
    {
      id: "1",
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
      id: "2",
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
    {
      id: "3",
      name: "Amit Patel",
      businessName: "Manufacturing Co",
      email: "amit@mfgco.com",
      registrationDate: "2025-09-10",
      dprCreated: 15,
      dprSubmitted: 12,
      dprApproved: 8,
      completionPercentage: 72,
      currentStage: "DPR Submitted",
      lastActivity: "2025-10-28 09:45",
    },
    {
      id: "4",
      name: "Neha Singh",
      businessName: "Retail Express",
      email: "neha@retailexp.com",
      registrationDate: "2025-08-20",
      dprCreated: 30,
      dprSubmitted: 28,
      dprApproved: 25,
      completionPercentage: 98,
      currentStage: "Loan Approved",
      lastActivity: "2025-10-30 16:20",
    },
    {
      id: "5",
      name: "Vikram Desai",
      businessName: "Services Plus",
      email: "vikram@servicesplus.com",
      registrationDate: "2025-09-25",
      dprCreated: 8,
      dprSubmitted: 5,
      dprApproved: 2,
      completionPercentage: 45,
      currentStage: "DPR Creation",
      lastActivity: "2025-10-25 11:00",
    },
  ])

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      message: "Tech Solutions Ltd DPR approved by bank",
      type: "approval",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      message: "Manufacturing Co submitted new DPR",
      type: "submission",
      timestamp: "4 hours ago",
      read: false,
    },
    {
      id: "3",
      message: "Services Plus compliance score below threshold",
      type: "alert",
      timestamp: "1 day ago",
      read: true,
    },
  ])

  const adminStats = [
    { label: "Total MSMEs", value: "5,234", change: "+12.5%", icon: Building2 },
    { label: "Active Users", value: "12,456", change: "+8.3%", icon: Users },
    { label: "Compliance Rate", value: "94.2%", change: "+2.1%", icon: CheckCircle },
    { label: "Pending Reviews", value: "48", change: "-5.2%", icon: AlertCircle },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "inactive":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Loan Approved":
        return "bg-green-100 text-green-800"
      case "Under Bank Review":
        return "bg-blue-100 text-blue-800"
      case "DPR Submitted":
        return "bg-yellow-100 text-yellow-800"
      case "DPR Creation":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredBusinesses = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProgress = userProgress.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleApprove = (id: string) => {
    setBusinesses(businesses.map((b) => (b.id === id ? { ...b, status: "active" as const } : b)))
    const business = businesses.find((b) => b.id === id)
    if (business) {
      setNotifications([
        {
          id: Date.now().toString(),
          message: `${business.name} DPR approved and forwarded to bank`,
          type: "approval",
          timestamp: "just now",
          read: false,
        },
        ...notifications,
      ])
    }
  }

  const handleReject = (id: string) => {
    setBusinesses(businesses.map((b) => (b.id === id ? { ...b, status: "inactive" as const } : b)))
    const business = businesses.find((b) => b.id === id)
    if (business) {
      setNotifications([
        {
          id: Date.now().toString(),
          message: `${business.name} DPR rejected. Feedback sent to entrepreneur.`,
          type: "alert",
          timestamp: "just now",
          read: false,
        },
        ...notifications,
      ])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-card border-r border-border transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Admin Panel</h2>
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
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("msmes")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "msmes"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <Building2 className="w-5 h-5" />
            MSMEs
          </button>
          <button
            onClick={() => setActiveTab("tracking")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "tracking"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <Activity className="w-5 h-5" />
            Progress Tracking
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "users"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <Users className="w-5 h-5" />
            Users
          </button>
          <button
            onClick={() => setActiveTab("compliance")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "compliance"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <AlertCircle className="w-5 h-5" />
            Compliance
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "analytics"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <LineChart className="w-5 h-5" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab("blocked")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full transition-colors ${
              activeTab === "blocked"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-background"
            }`}
          >
            <AlertCircle className="w-5 h-5" />
            Blocked Users
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
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-background rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-foreground" />
                {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-border hover:bg-background transition-colors cursor-pointer ${
                            !notif.read ? "bg-primary/5" : ""
                          }`}
                        >
                          <p className="text-sm text-foreground font-medium">{notif.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notif.timestamp}</p>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">No notifications</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminStats.map((stat, index) => {
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

              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Average Compliance</p>
                      <p className="text-3xl font-bold text-foreground">89.6%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">DPR Submission Rate</p>
                      <p className="text-3xl font-bold text-foreground">92.1%</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-accent" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Pending Actions</p>
                      <p className="text-3xl font-bold text-foreground">12</p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-destructive" />
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* MSMEs Tab */}
          {activeTab === "msmes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">MSME Management</h2>
                  <p className="text-muted-foreground mt-1">Monitor and manage all registered MSMEs</p>
                </div>
                <Button className="gap-2" onClick={() => alert("Add new MSME form opened")}>
                  <Building2 className="w-4 h-4" />
                  Add New MSME
                </Button>
              </div>

              {/* Search Bar */}
              <Card className="p-4">
                <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-2">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name, owner, or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                  />
                </div>
              </Card>

              {/* MSMEs Table */}
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-card border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Business Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Owner</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">DPR</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Compliance</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredBusinesses.map((business) => (
                        <tr key={business.id} className="hover:bg-card/50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{business.name}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{business.owner}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{business.email}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(business.status)}
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(business.status)}`}
                              >
                                {business.status.charAt(0).toUpperCase() + business.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-foreground">{business.dprSubmitted}/30</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-background rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${business.compliance}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-foreground">{business.compliance}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleApprove(business.id)}
                                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
                                title="Approve"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(business.id)}
                                className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                                title="Reject"
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Progress Tracking Tab */}
          {activeTab === "tracking" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">User Progress Tracking</h2>
                <p className="text-muted-foreground mt-1">Monitor individual user progress and DPR completion status</p>
              </div>

              {/* Search Bar */}
              <Card className="p-4">
                <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-2">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name, business, or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
                  />
                </div>
              </Card>

              {/* Progress Cards */}
              <div className="space-y-4">
                {filteredProgress.map((user) => (
                  <Card key={user.id} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">User Name</p>
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Business</p>
                        <p className="font-semibold text-foreground">{user.businessName}</p>
                        <p className="text-xs text-muted-foreground mt-1">Joined: {user.registrationDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Current Stage</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStageColor(user.currentStage)}`}
                        >
                          {user.currentStage}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Last Activity</p>
                        <p className="font-semibold text-foreground text-sm">{user.lastActivity}</p>
                      </div>
                    </div>

                    {/* Progress Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="p-4 bg-background rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">DPRs Created</p>
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{user.dprCreated}</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">DPRs Submitted</p>
                          <Clock className="w-4 h-4 text-yellow-600" />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{user.dprSubmitted}</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">DPRs Approved</p>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{user.dprApproved}</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">Completion</p>
                          <Target className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{user.completionPercentage}%</p>
                      </div>
                    </div>

                    {/* Overall Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-foreground">Overall Progress</p>
                        <p className="text-sm text-muted-foreground">{user.completionPercentage}%</p>
                      </div>
                      <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                          style={{ width: `${user.completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Summary Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Avg. Completion Rate</p>
                      <p className="text-3xl font-bold text-foreground">79.6%</p>
                    </div>
                    <LineChart className="w-8 h-8 text-primary" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Users in Progress</p>
                      <p className="text-3xl font-bold text-foreground">3</p>
                    </div>
                    <Activity className="w-8 h-8 text-yellow-600" />
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Completed Users</p>
                      <p className="text-3xl font-bold text-foreground">2</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Management</h2>
              <p className="text-muted-foreground">User management features coming soon...</p>
            </Card>
          )}

          {/* Compliance Tab */}
          {activeTab === "compliance" && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Monitoring</h2>
              <p className="text-muted-foreground">Compliance monitoring features coming soon...</p>
            </Card>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Advanced Analytics</h2>
                <p className="text-muted-foreground mt-1">
                  Comprehensive insights into MSME performance and DPR metrics
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">Total DPRs Generated</p>
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">2,847</p>
                  <p className="text-xs text-green-600 mt-2">+15.3% from last month</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">Approval Rate</p>
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">87.4%</p>
                  <p className="text-xs text-green-600 mt-2">+3.2% from last month</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">Avg Processing Time</p>
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">4.2 days</p>
                  <p className="text-xs text-green-600 mt-2">-0.8 days faster</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">Fraud Detection Rate</p>
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">2.1%</p>
                  <p className="text-xs text-green-600 mt-2">Blocked 60 fraudulent DPRs</p>
                </Card>
              </div>

              {/* Performance by Sector */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Performance by Sector</h3>
                <div className="space-y-4">
                  {[
                    { sector: "Manufacturing", dprCount: 456, approvalRate: 92, avgLoan: "₹45L" },
                    { sector: "Retail & Trade", dprCount: 523, approvalRate: 88, avgLoan: "₹32L" },
                    { sector: "Services", dprCount: 389, approvalRate: 85, avgLoan: "₹28L" },
                    { sector: "Agriculture", dprCount: 234, approvalRate: 91, avgLoan: "₹38L" },
                    { sector: "IT & Software", dprCount: 245, approvalRate: 94, avgLoan: "₹52L" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.sector}</p>
                        <p className="text-sm text-muted-foreground">{item.dprCount} DPRs</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{item.approvalRate}%</p>
                          <p className="text-xs text-muted-foreground">Approval Rate</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{item.avgLoan}</p>
                          <p className="text-xs text-muted-foreground">Avg Loan</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Regional Distribution */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Regional Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      { region: "Hyderabad", dprCount: 456, users: 234 },
                      { region: "Visakhapatnam", dprCount: 234, users: 156 },
                      { region: "Vijayawada", dprCount: 189, users: 123 },
                      { region: "Warangal", dprCount: 145, users: 89 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-background rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{item.region}</p>
                          <p className="text-xs text-muted-foreground">{item.users} users</p>
                        </div>
                        <p className="text-lg font-bold text-primary">{item.dprCount}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-background rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-2">1,024</p>
                      <p className="text-sm text-muted-foreground">Total DPRs by Region</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* User Engagement Metrics */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">User Engagement Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Active Users (30 days)</p>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                    <div className="w-full bg-border rounded-full h-2 mt-3">
                      <div className="h-full bg-primary rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">New Users (30 days)</p>
                    <p className="text-2xl font-bold text-foreground">234</p>
                    <div className="w-full bg-border rounded-full h-2 mt-3">
                      <div className="h-full bg-accent rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Returning Users</p>
                    <p className="text-2xl font-bold text-foreground">89.2%</p>
                    <div className="w-full bg-border rounded-full h-2 mt-3">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: "89%" }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blocked Users Tab */}
          {activeTab === "blocked" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Blocked Users & Fraud Management</h2>
                  <p className="text-muted-foreground mt-1">Monitor and manage users flagged for suspicious activity</p>
                </div>
              </div>

              {/* Fraud Alerts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Active Fraud Alerts</h3>
                <div className="space-y-3">
                  {[
                    {
                      id: "1",
                      user: "Amit Patel",
                      type: "High Rejection Rate",
                      severity: "high",
                      description: "80% of DPRs rejected - possible data quality issues",
                      date: "2025-10-30 10:30",
                    },
                    {
                      id: "2",
                      user: "Vikram Desai",
                      type: "Rapid Submission",
                      severity: "medium",
                      description: "5 DPRs submitted in 30 minutes - unusual pattern",
                      date: "2025-10-30 14:15",
                    },
                    {
                      id: "3",
                      user: "Unknown User",
                      type: "Duplicate Content",
                      severity: "critical",
                      description: "Multiple identical DPRs detected with different business names",
                      date: "2025-10-30 16:45",
                    },
                  ].map((alert) => (
                    <div key={alert.id} className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="font-semibold text-foreground">{alert.user}</p>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                alert.severity === "critical"
                                  ? "bg-red-100 text-red-800"
                                  : alert.severity === "high"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {alert.severity.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{alert.type}</p>
                          <p className="text-sm text-foreground">{alert.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">{alert.date}</p>
                        </div>
                        <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Blocked Users List */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Blocked Users</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-background border-b border-border">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">User</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Business</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Fraud Score</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Reason</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Blocked Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        {
                          id: "1",
                          name: "Fraudulent User",
                          business: "Fake Business Ltd",
                          score: 95,
                          reason: "Multiple duplicate DPRs",
                          date: "2025-10-25",
                        },
                        {
                          id: "2",
                          name: "Suspicious Account",
                          business: "Unknown Enterprise",
                          score: 87,
                          reason: "Rapid DPR generation pattern",
                          date: "2025-10-28",
                        },
                      ].map((user) => (
                        <tr key={user.id} className="hover:bg-background/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-medium text-foreground">{user.name}</td>
                          <td className="px-4 py-3 text-sm text-foreground">{user.business}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-2 bg-border rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-destructive rounded-full"
                                  style={{ width: `${user.score}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-destructive">{user.score}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">{user.reason}</td>
                          <td className="px-4 py-3 text-sm text-foreground">{user.date}</td>
                          <td className="px-4 py-3">
                            <button className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors">
                              Unblock
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
