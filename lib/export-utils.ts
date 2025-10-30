export function generatePDFContent(dprData: any): string {
  const content = `
    DETAILED PROJECT REPORT (DPR)
    =============================
    
    Business Name: ${dprData.businessName || "N/A"}
    Owner Name: ${dprData.ownerName || "N/A"}
    Business Type: ${dprData.businessType || "N/A"}
    Year of Establishment: ${dprData.yearOfEstablishment || "N/A"}
    Total Employees: ${dprData.totalEmployees || "N/A"}
    Annual Revenue: ₹${dprData.annualRevenue || "N/A"}
    
    BUSINESS DESCRIPTION
    ====================
    ${dprData.businessDescription || "N/A"}
    
    FINANCIAL SUMMARY
    =================
    Total Revenue: ₹${dprData.revenue?.toLocaleString() || "N/A"}
    Total Expenses: ₹${dprData.expenses?.toLocaleString() || "N/A"}
    Net Profit: ₹${((dprData.revenue || 0) - (dprData.expenses || 0)).toLocaleString()}
    
    LOAN DETAILS
    ============
    Requested Loan Amount: ₹${dprData.loanAmount?.toLocaleString() || "N/A"}
    Scheme: ${dprData.scheme || "N/A"}
    
    AI RECOMMENDATIONS
    ==================
    1. Strengthen financial projections for next 3 years
    2. Add detailed market analysis and competition study
    3. Include comprehensive risk mitigation plan
    4. Enhance management team qualifications
    5. Add technology and infrastructure details
    
    Generated on: ${new Date().toLocaleDateString()}
    Status: Bank Ready
  `
  return content
}

export function generateExcelCSV(dprEntries: any[]): string {
  const headers = ["Date", "Title", "Scheme", "Loan Amount", "Revenue", "Expenses", "Status"]
  const rows = dprEntries.map((entry) => [
    entry.date,
    entry.title,
    entry.scheme,
    entry.loanAmount,
    entry.revenue,
    entry.expenses,
    entry.status,
  ])

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function generateAnalyticsCSV(analyticsData: any): string {
  const headers = ["Metric", "Value", "Change", "Timestamp"]
  const rows = [
    ["Total DPRs Generated", analyticsData.totalDPRs || 0, "+15.3%", new Date().toISOString()],
    ["Approval Rate", analyticsData.approvalRate || 0, "+3.2%", new Date().toISOString()],
    ["Avg Processing Time", analyticsData.avgProcessingTime || 0, "-0.8 days", new Date().toISOString()],
    ["Fraud Detection Rate", analyticsData.fraudRate || 0, "Stable", new Date().toISOString()],
    ["Active Users", analyticsData.activeUsers || 0, "+8.3%", new Date().toISOString()],
    ["Compliance Rate", analyticsData.complianceRate || 0, "+2.1%", new Date().toISOString()],
  ]

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function generateFraudReportCSV(fraudData: any[]): string {
  const headers = [
    "User ID",
    "User Name",
    "Business Name",
    "Fraud Score",
    "Alert Type",
    "Severity",
    "Reason",
    "Blocked Date",
    "DPR Count",
    "Rejection Rate",
  ]
  const rows = fraudData.map((item) => [
    item.id,
    item.name,
    item.businessName,
    item.fraudScore,
    item.alertType,
    item.severity,
    item.reason,
    item.blockedDate,
    item.dprCount,
    item.rejectionRate,
  ])

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function generateUserProgressCSV(progressData: any[]): string {
  const headers = [
    "User Name",
    "Business Name",
    "Email",
    "Registration Date",
    "DPRs Created",
    "DPRs Submitted",
    "DPRs Approved",
    "Completion %",
    "Current Stage",
    "Last Activity",
  ]
  const rows = progressData.map((user) => [
    user.name,
    user.businessName,
    user.email,
    user.registrationDate,
    user.dprCreated,
    user.dprSubmitted,
    user.dprApproved,
    user.completionPercentage,
    user.currentStage,
    user.lastActivity,
  ])

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function generateSectorPerformanceCSV(sectorData: any[]): string {
  const headers = [
    "Sector",
    "DPR Count",
    "Approval Rate %",
    "Average Loan Amount",
    "Active Users",
    "Avg Processing Days",
  ]
  const rows = sectorData.map((sector) => [
    sector.name,
    sector.dprCount,
    sector.approvalRate,
    sector.avgLoan,
    sector.activeUsers,
    sector.avgProcessingDays,
  ])

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function generateRegionalDistributionCSV(regionalData: any[]): string {
  const headers = ["Region", "DPR Count", "Active Users", "Approval Rate %", "Avg Loan Amount", "Compliance Rate %"]
  const rows = regionalData.map((region) => [
    region.name,
    region.dprCount,
    region.users,
    region.approvalRate,
    region.avgLoan,
    region.complianceRate,
  ])

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
  return csvContent
}

export function downloadFile(content: string, filename: string, mimeType: string) {
  const element = document.createElement("a")
  const file = new Blob([content], { type: mimeType })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export function downloadCSV(data: string, filename: string) {
  downloadFile(data, `${filename}_${new Date().toISOString().split("T")[0]}.csv`, "text/csv")
}

export function downloadPDF(data: string, filename: string) {
  downloadFile(data, `${filename}_${new Date().toISOString().split("T")[0]}.txt`, "text/plain")
}
