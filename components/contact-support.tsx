"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageSquare, Clock, HelpCircle, ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "support@msmehub.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call our support team during business hours",
    contact: "+91 1800-MSME-HUB",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 9 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit our office for in-person support",
    contact: "Hyderabad, Andhra Pradesh",
  },
]

const faqItems: FAQItem[] = [
  {
    question: "How do I get started with MSME Hub?",
    answer:
      "Getting started is easy! Sign up for a free account, complete your business profile, and start creating DPRs. Our AI will analyze your data and provide personalized recommendations.",
  },
  {
    question: "What is DPR and why is it important?",
    answer:
      "DPR (Detailed Project Report) is a comprehensive document required for bank loans and government schemes. It includes business details, financial projections, and market analysis.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes, we use enterprise-grade AES encryption and follow all Indian data protection regulations. Your data is stored securely and never shared without your consent.",
  },
  {
    question: "Can I export my DPR?",
    answer: "Yes, you can export your DPRs in PDF, Word, and Excel formats directly from your dashboard.",
  },
  {
    question: "What MSME schemes does MSME Hub support?",
    answer:
      "We support PMMY (Mudra Loan), CGTMSE, PMEGP, and other government schemes. Our AI recommends the best scheme for your business.",
  },
  {
    question: "How much does MSME Hub cost?",
    answer: "We offer a free tier for basic features and premium plans starting from ₹999/month for advanced features.",
  },
]

export function ContactSupport() {
  const router = useRouter()
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll get back to you at ${formData.email} soon.`)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleOpenChat = () => {
    router.push("/chatbot")
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact & Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Get in touch with our support team or find answers to common questions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.contact}</p>
              </Card>
            )
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Support Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quick Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <button
                        onClick={() => alert("Documentation page opened")}
                        className="hover:text-primary transition-colors"
                      >
                        Documentation & Guides
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("Video tutorials page opened")}
                        className="hover:text-primary transition-colors"
                      >
                        Video Tutorials
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("Community forum opened")}
                        className="hover:text-primary transition-colors"
                      >
                        Community Forum
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Need Immediate Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try our AI chatbot for instant answers to common questions.
              </p>
              <Button variant="outline" className="w-full bg-transparent" onClick={handleOpenChat}>
                Open AI Chat
              </Button>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our support team is always ready to help. Reach out to us through any of the channels above.
            </p>
            <Button size="lg" onClick={() => alert("Contacting support team...")}>
              Get in Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
