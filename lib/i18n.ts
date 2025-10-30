// Multilingual support for Telugu and English
export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      features: "Features",
      dashboard: "Dashboard",
      admin: "Admin",
      contact: "Contact",
      login: "Login",
      logout: "Logout",
      chatbot: "Chatbot",
    },
    // Home Page
    home: {
      headline: "Create Bank-Ready DPRs in Minutes with AI",
      subtext: "Smart, bilingual, and secure AI tool for MSME entrepreneurs",
      startDPR: "Start Creating DPR",
      uploadDPR: "Upload Existing DPR",
      viewSchemes: "View MSME Schemes",
    },
    // How It Works
    howItWorks: {
      title: "How It Works",
      step1: "Upload or Fill Details",
      step2: "AI Analysis",
      step3: "Edit Content",
      step4: "Generate DPR",
      step5: "Loan Prediction",
      step6: "Submit & Track",
    },
    // Features
    features: {
      title: "Features",
      aiPowered: "AI-Powered Intelligence",
      predictive: "Predictive Analytics",
      voice: "Voice & Language Support",
      dashboard: "User Dashboard",
      msmeIntegration: "MSME Integration",
      security: "Security & Privacy",
    },
    // Dashboard
    dashboard: {
      title: "Dashboard",
      myDPRs: "My DPRs",
      loanPrediction: "Loan Prediction",
      feedback: "Feedback",
      notifications: "Notifications",
      export: "Export",
    },
    // Admin
    admin: {
      title: "Admin Dashboard",
      overview: "Overview",
      msmes: "MSMEs",
      users: "Users",
      compliance: "Compliance",
      tracking: "Progress Tracking",
      analytics: "Analytics",
      blockedUsers: "Blocked Users",
    },
    // Common
    common: {
      status: "Status",
      actions: "Actions",
      approve: "Approve",
      reject: "Reject",
      block: "Block",
      unblock: "Unblock",
      download: "Download",
      export: "Export",
      search: "Search",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      warning: "Warning",
      info: "Info",
    },
  },
  te: {
    // Navigation
    nav: {
      home: "హోమ్",
      howItWorks: "ఎలా పనిచేస్తుంది",
      features: "లక్షణాలు",
      dashboard: "డ్యాష్‌బోర్డ్",
      admin: "నిర్వాహకుడు",
      contact: "సంప్రదించండి",
      login: "లాగిన్",
      logout: "లాగ్‌అవుట్",
      chatbot: "చాట్‌బాట్",
    },
    // Home Page
    home: {
      headline: "AI తో నిమిషాల్లో బ్యాంక్-రెడీ DPRలను సృష్టించండి",
      subtext: "MSME వ్యవసాయోద్యమ కర్తలకు స్మార్ట్, ద్విభాషిక మరియు సురక్షితమైన AI సాధనం",
      startDPR: "DPR సృష్టించడం ప్రారంభించండి",
      uploadDPR: "ఇప్పటికే ఉన్న DPRను అప్‌లోడ్ చేయండి",
      viewSchemes: "MSME స్కీమ్‌లను చూడండి",
    },
    // How It Works
    howItWorks: {
      title: "ఎలా పనిచేస్తుంది",
      step1: "వివరాలను అప్‌లోడ్ చేయండి లేదా పూరించండి",
      step2: "AI విశ్లేషణ",
      step3: "కంటెంట్‌ను సవరించండి",
      step4: "DPRను సృష్టించండి",
      step5: "రుణ సూచన",
      step6: "సమర్పించండి & ట్రాక్ చేయండి",
    },
    // Features
    features: {
      title: "లక్షణాలు",
      aiPowered: "AI-శక్తిచేసిన బుద్ధిమత్త",
      predictive: "ఊహాత్మక విశ్లేషణ",
      voice: "వాయిస్ & భాష సపోర్టు",
      dashboard: "ఉపయోగకర్త డ్యాష్‌బోర్డ్",
      msmeIntegration: "MSME ఇంటిగ్రేషన్",
      security: "సురక్షత & గోప్యత",
    },
    // Dashboard
    dashboard: {
      title: "డ్యాష్‌బోర్డ్",
      myDPRs: "నా DPRలు",
      loanPrediction: "రుణ సూచన",
      feedback: "ఫీడ్‌బ్యాక్",
      notifications: "నోటిఫికేషన్‌లు",
      export: "ఎగుమతి",
    },
    // Admin
    admin: {
      title: "నిర్వాహక డ్యాష్‌బోర్డ్",
      overview: "సమీక్ష",
      msmes: "MSMEలు",
      users: "ఉపయోగకర్తలు",
      compliance: "సమ్మతి",
      tracking: "ప్రగతి ట్రాకింగ్",
      analytics: "విశ్లేషణ",
      blockedUsers: "నిరోధించిన ఉపయోగకర్తలు",
    },
    // Common
    common: {
      status: "స్థితి",
      actions: "చర్యలు",
      approve: "ఆమోదించండి",
      reject: "తిరస్కరించండి",
      block: "నిరోధించండి",
      unblock: "అన్‌బ్లాక్ చేయండి",
      download: "డౌన్‌లోడ్ చేయండి",
      export: "ఎగుమతి",
      search: "శోధించండి",
      loading: "లోడ్ చేస్తోంది...",
      error: "లోపం",
      success: "విజయం",
      warning: "హెచ్చరిక",
      info: "సమాచారం",
    },
  },
}

export type Language = "en" | "te"

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
