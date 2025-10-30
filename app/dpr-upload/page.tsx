"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, CheckCircle, AlertCircle, Download, Mic } from "lucide-react"

interface DPRStep {
  number: number
  title: string
  description: string
  status: "pending" | "in-progress" | "completed"
}

export default function DPRUploadPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    ownerName: "",
    businessType: "",
    yearOfEstablishment: "",
    totalEmployees: "",
    annualRevenue: "",
    businessDescription: "",
  })
  const [recommendations, setRecommendations] = useState<string[]>([])
  const [generatedReport, setGeneratedReport] = useState<string | null>(null)
  const [voiceInput, setVoiceInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const steps: DPRStep[] = [
    {
      number: 1,
      title: "Upload Project Details",
      description: "Upload existing DPR or fill business details",
      status: currentStep >= 1 ? (currentStep === 1 ? "in-progress" : "completed") : "pending",
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "AI analyzes and improves structure",
      status: currentStep >= 2 ? (currentStep === 2 ? "in-progress" : "completed") : "pending",
    },
    {
      number: 3,
      title: "Edit & Voice Input",
      description: "Edit via text or Telugu voice input",
      status: currentStep >= 3 ? (currentStep === 3 ? "in-progress" : "completed") : "pending",
    },
    {
      number: 4,
      title: "Generate DPR",
      description: "AI generates final DPR (PDF/Word)",
      status: currentStep >= 4 ? (currentStep === 4 ? "in-progress" : "completed") : "pending",
    },
    {
      number: 5,
      title: "Loan Prediction",
      description: "Predict loan eligibility & suggest schemes",
      status: currentStep >= 5 ? (currentStep === 5 ? "in-progress" : "completed") : "pending",
    },
    {
      number: 6,
      title: "Submit & Track",
      description: "Submit to MSME portal → Track status",
      status: currentStep >= 6 ? (currentStep === 6 ? "in-progress" : "completed") : "pending",
    },
  ]

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setIsProcessing(true)
      setTimeout(() => {
        setRecommendations([
          "Add more detailed financial projections",
          "Include market analysis section",
          "Enhance risk mitigation strategies",
          "Add management team details",
        ])
        setIsProcessing(false)
        setCurrentStep(2)
      }, 1500)
    }
  }

  const handleBusinessDetailsSubmit = () => {
    if (businessDetails.businessName && businessDetails.ownerName && businessDetails.businessType) {
      setIsProcessing(true)
      setTimeout(() => {
        setRecommendations([
          "Strengthen financial projections for next 3 years",
          "Add detailed market analysis and competition study",
          "Include comprehensive risk mitigation plan",
          "Enhance management team qualifications",
          "Add technology and infrastructure details",
        ])
        setIsProcessing(false)
        setCurrentStep(2)
      }, 1500)
    }
  }

  const handleAnalysisComplete = () => {
    setCurrentStep(3)
  }

  const handleVoiceInput = () => {
    // Simulate voice input
    setVoiceInput("Business is in manufacturing sector with 50 employees...")
    alert("Voice input captured (Telugu/English supported)")
  }

  const handleGenerateDPR = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setGeneratedReport("DPR_Tech_Solutions_2025.pdf - Generated successfully with AI recommendations")
      setCurrentStep(5)
      setIsProcessing(false)
    }, 2000)
  }

  const handleLoanPrediction = () => {
    setCurrentStep(6)
  }

  const handleSubmitToMSME = () => {
    alert("DPR submitted to MSME portal. Status: Under Review")
    router.push("/dashboard")
  }

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case "in-progress":
        return <AlertCircle className="w-6 h-6 text-blue-600" />
      default:
        return <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container py-12">
        {/* 6-Step Flow Visualization */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">DPR Generation Workflow</h1>
          <p className="text-muted-foreground mb-8">
            Follow these 6 steps to create a bank-ready DPR with AI assistance
          </p>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentStep(step.number)}
                  className="mb-3 cursor-pointer transition-transform hover:scale-110"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : step.status === "in-progress"
                          ? "bg-blue-100 text-blue-700 ring-2 ring-blue-400"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {step.status === "completed" ? <CheckCircle className="w-6 h-6" /> : step.number}
                  </div>
                </button>
                <h3 className="text-sm font-semibold text-foreground text-center">{step.title}</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-full h-1 bg-gray-200 top-6 left-1/2 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {/* Step 1: Upload */}
          {currentStep === 1 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 1: Upload Project Details</h2>

              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Option A: Upload Existing DPR</h3>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-foreground font-semibold">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">PDF, DOC, or DOCX (Max 10MB)</p>
                    </label>
                  </div>
                  {uploadedFile && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <FileText className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-900">{uploadedFile.name}</p>
                        <p className="text-sm text-green-700">File uploaded successfully</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Or Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">OR</span>
                  </div>
                </div>

                {/* Business Details Form */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Option B: Fill Business Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                      <input
                        type="text"
                        value={businessDetails.businessName}
                        onChange={(e) => setBusinessDetails({ ...businessDetails, businessName: e.target.value })}
                        placeholder="Enter business name"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Owner Name</label>
                      <input
                        type="text"
                        value={businessDetails.ownerName}
                        onChange={(e) => setBusinessDetails({ ...businessDetails, ownerName: e.target.value })}
                        placeholder="Enter owner name"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Business Type</label>
                      <select
                        value={businessDetails.businessType}
                        onChange={(e) => setBusinessDetails({ ...businessDetails, businessType: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select business type</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="services">Services</option>
                        <option value="trading">Trading</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Year of Establishment</label>
                      <input
                        type="number"
                        value={businessDetails.yearOfEstablishment}
                        onChange={(e) =>
                          setBusinessDetails({ ...businessDetails, yearOfEstablishment: e.target.value })
                        }
                        placeholder="2020"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Total Employees</label>
                      <input
                        type="number"
                        value={businessDetails.totalEmployees}
                        onChange={(e) => setBusinessDetails({ ...businessDetails, totalEmployees: e.target.value })}
                        placeholder="50"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Annual Revenue</label>
                      <input
                        type="number"
                        value={businessDetails.annualRevenue}
                        onChange={(e) => setBusinessDetails({ ...businessDetails, annualRevenue: e.target.value })}
                        placeholder="500000"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">Business Description</label>
                      <textarea
                        value={businessDetails.businessDescription}
                        onChange={(e) =>
                          setBusinessDetails({ ...businessDetails, businessDescription: e.target.value })
                        }
                        placeholder="Describe your business..."
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={handleBusinessDetailsSubmit} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Proceed to AI Analysis"}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: AI Analysis */}
          {currentStep === 2 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 2: AI Analysis & Recommendations</h2>

              {isProcessing ? (
                <div className="text-center py-12">
                  <div className="inline-block">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                  </div>
                  <p className="text-foreground font-semibold">Analyzing your DPR...</p>
                  <p className="text-muted-foreground text-sm mt-2">AI is improving structure and content</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-900 font-semibold mb-2">Analysis Complete</p>
                    <p className="text-blue-800 text-sm">
                      Your DPR has been analyzed. Below are AI recommendations to improve it:
                    </p>
                  </div>

                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="p-4 bg-background border border-border rounded-lg flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-foreground">{rec}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" onClick={handleAnalysisComplete}>
                    Proceed to Edit & Voice Input
                  </Button>
                </div>
              )}
            </Card>
          )}

          {/* Step 3: Edit & Voice Input */}
          {currentStep === 3 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 3: Edit & Voice Input</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Edit DPR Content</h3>
                  <textarea
                    defaultValue={`Business Name: ${businessDetails.businessName}\nOwner: ${businessDetails.ownerName}\nType: ${businessDetails.businessType}\nEmployees: ${businessDetails.totalEmployees}\nRevenue: ₹${businessDetails.annualRevenue}`}
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Voice Input (Telugu/English)</h3>
                  <div className="flex gap-2 mb-4">
                    <Button variant="outline" className="gap-2 bg-transparent" onClick={handleVoiceInput}>
                      <Mic className="w-4 h-4" />
                      Start Voice Input
                    </Button>
                  </div>
                  {voiceInput && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-900">
                        <span className="font-semibold">Voice Input:</span> {voiceInput}
                      </p>
                    </div>
                  )}
                </div>

                <Button className="w-full" onClick={handleGenerateDPR} disabled={isProcessing}>
                  {isProcessing ? "Generating..." : "Generate Final DPR"}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Generate DPR */}
          {currentStep === 4 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 4: DPR Generated</h2>

              {isProcessing ? (
                <div className="text-center py-12">
                  <div className="inline-block">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                  </div>
                  <p className="text-foreground font-semibold">Generating your DPR...</p>
                  <p className="text-muted-foreground text-sm mt-2">Creating PDF and Word documents</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">{generatedReport}</p>
                      <p className="text-sm text-green-700">Ready for download and submission</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Download Word
                    </Button>
                  </div>

                  <Button className="w-full" onClick={handleLoanPrediction}>
                    Proceed to Loan Prediction
                  </Button>
                </div>
              )}
            </Card>
          )}

          {/* Step 5: Loan Prediction */}
          {currentStep === 5 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 5: Loan Eligibility & Schemes</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    scheme: "PMMY - Mudra Loan",
                    eligibility: 95,
                    amount: "500,000",
                    status: "Highly Eligible",
                  },
                  {
                    scheme: "CGTMSE",
                    eligibility: 88,
                    amount: "750,000",
                    status: "Eligible",
                  },
                  {
                    scheme: "PMEGP",
                    eligibility: 72,
                    amount: "1,000,000",
                    status: "Eligible",
                  },
                ].map((pred, index) => (
                  <Card key={index} className="p-6 border-2 border-border">
                    <h3 className="font-semibold text-foreground mb-4">{pred.scheme}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Eligibility Score</p>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: `${pred.eligibility}%` }}></div>
                        </div>
                        <p className="text-sm font-semibold text-foreground mt-2">{pred.eligibility}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Loan Amount</p>
                        <p className="text-2xl font-bold text-primary">₹{pred.amount}</p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {pred.status}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full mt-6" onClick={handleSubmitToMSME}>
                Submit to MSME Portal
              </Button>
            </Card>
          )}

          {/* Step 6: Submit & Track */}
          {currentStep === 6 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 6: Submission Status</h2>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-900 font-semibold mb-2">Submission Successful</p>
                  <p className="text-blue-800 text-sm">
                    Your DPR has been submitted to the MSME portal. Track the status below:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { status: "Submitted", date: "Today", icon: CheckCircle, color: "text-green-600" },
                    { status: "Under Review", date: "In Progress", icon: AlertCircle, color: "text-blue-600" },
                    { status: "Forwarded to Bank", date: "Pending", icon: AlertCircle, color: "text-yellow-600" },
                    { status: "Approved", date: "Pending", icon: AlertCircle, color: "text-gray-400" },
                  ].map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg"
                      >
                        <Icon className={`w-6 h-6 ${step.color}`} />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{step.status}</p>
                          <p className="text-sm text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button className="w-full" onClick={() => router.push("/dashboard")}>
                  Go to Dashboard
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
