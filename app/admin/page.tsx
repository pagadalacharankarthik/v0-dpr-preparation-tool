"use client"

import { useState } from "react"
import { AdminDashboard } from "@/components/admin-dashboard"
import { ExportDialog } from "@/components/export-dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AdminPage() {
  const [showExportDialog, setShowExportDialog] = useState(false)

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => setShowExportDialog(true)} className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <Download className="w-4 h-4" />
          Export Data
        </Button>
      </div>
      <AdminDashboard />
      <ExportDialog isOpen={showExportDialog} onClose={() => setShowExportDialog(false)} />
    </div>
  )
}
