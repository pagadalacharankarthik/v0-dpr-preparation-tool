"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, TrendingUp, MessageSquare, CheckCircle, User, Plus, Download, Edit2, Trash2 } from "lucide-react"

const sampleDPRs = [
  {
    id: 1,
    title: "Organic Farming Project",
    status: "Approved",
    createdDate: "2025-01-15",
    fundingAmount: "₹25,00,000",
    sector: "Agriculture",
  },
  {
    id: 2,
    title: "Textile Manufacturing Unit",
    status: "Under Review",
    createdDate: "2025-01-10",
    fundingAmount: "₹50,00,000",
    sector: "Manufacturing",
  },
  {
    id: 3,
    title: "Food Processing Business",
    status: "Submitted",
    createdDate: "2025-01-05",
    fundingAmount: "₹15,00,000",
    sector: "Food & Beverage",
  },
  {
    id: 4,
    title: "IT Services Startup",
    status: "Approved",
    createdDate: "2024-12-28",
    fundingAmount: "₹30,00,000",
    sector: "Technology",
  },
]

const loanPredictions = [
  {
    projectName: "Organic Farming Project",
    approvalChance: 92,
    recommendedSchemes: ["PM MUDRA Loan", "PMEGP", "State Agriculture Subsidy"],
  },
  {
    projectName: "Textile Manufacturing Unit",
    approvalChance: 78,
    recommendedSchemes: ["Technology Upgradation Fund", "PMEGP", "Export Promotion"],
  },
]

export function DashboardTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Manage your DPRs and track funding progress</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="dprs" className="flex items-center gap-2">
              <FileText size={16} />
              <span className="hidden sm:inline">DPRs</span>
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span className="hidden sm:inline">Predictions</span>
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span className="hidden sm:inline">Feedback</span>
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span className="hidden sm:inline">Status</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User size={16} />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Saved DPRs Tab */}
          <TabsContent value="dprs" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">Saved DPRs</h2>
              <Button className="gap-2">
                <Plus size={18} />
                Create New DPR
              </Button>
            </div>
            <div className="space-y-4">
              {sampleDPRs.map((dpr) => (
                <div
                  key={dpr.id}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{dpr.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>Sector: {dpr.sector}</span>
                        <span>Amount: {dpr.fundingAmount}</span>
                        <span>Created: {dpr.createdDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          dpr.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : dpr.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {dpr.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Download size={16} />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Edit2 size={16} />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 text-destructive bg-transparent">
                      <Trash2 size={16} />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Loan Predictions Tab */}
          <TabsContent value="predictions" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-6">Loan Eligibility Predictions</h2>
            <div className="space-y-4">
              {loanPredictions.map((prediction, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">{prediction.projectName}</h3>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Approval Probability</span>
                      <span className="text-2xl font-bold text-primary">{prediction.approvalChance}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${prediction.approvalChance}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Recommended Schemes:</p>
                    <div className="flex flex-wrap gap-2">
                      {prediction.recommendedSchemes.map((scheme, i) => (
                        <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {scheme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-6">Feedback & Improvements</h2>
            <div className="p-6 rounded-lg border border-border bg-card">
              <p className="text-muted-foreground mb-4">
                Your feedback helps us improve our AI recommendations. Share your experience with approved DPRs.
              </p>
              <Button>Submit Feedback</Button>
            </div>
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-6">MSME Submission Status</h2>
            <div className="space-y-4">
              {sampleDPRs.map((dpr) => (
                <div key={dpr.id} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">{dpr.title}</h3>
                  <div className="flex items-center gap-4 overflow-x-auto pb-2">
                    {["Submitted", "Under Review", "Forwarded", "Approved"].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            ["Submitted", "Under Review", "Forwarded", "Approved"].indexOf(dpr.status) >= i
                              ? "bg-primary text-white"
                              : "bg-border text-muted-foreground"
                          }`}
                        >
                          ✓
                        </div>
                        <span className="text-sm whitespace-nowrap">{step}</span>
                        {i < 3 && <div className="w-8 h-0.5 bg-border"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-6">My Profile</h2>
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Business Name</label>
                <p className="text-foreground font-medium">Green Valley Organic Farms</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-foreground font-medium">owner@greenvalley.com</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-foreground font-medium">+91 98765 43210</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Udyam Registration</label>
                <p className="text-foreground font-medium">UDYAM-AP-2024-001234</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
