"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions about DPR preparation or need support? We're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:support@dprai.com" className="text-muted-foreground hover:text-foreground">
                    support@dprai.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Hyderabad, Andhra Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM IST
                <br />
                Saturday: 10:00 AM - 4:00 PM IST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="dpr-help">DPR Preparation Help</option>
                  <option value="technical">Technical Support</option>
                  <option value="scheme-info">Scheme Information</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does it take to generate a DPR?",
                a: "Our AI can generate a complete DPR in 5-10 minutes based on your project details.",
              },
              {
                q: "Is my data secure?",
                a: "Yes, we use AES encryption and comply with GDPR and Indian Data Protection laws.",
              },
              {
                q: "Can I edit the generated DPR?",
                a: "You can edit any section via text or voice input in Telugu or English.",
              },
              {
                q: "What schemes are supported?",
                a: "We support PM MUDRA, PMEGP, and various state-specific schemes for MSMEs.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
