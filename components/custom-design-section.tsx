"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const steps = [
  { num: "01", text: "Upload a room or window photo" },
  { num: "02", text: "Tell us size, style and color you like" },
  { num: "03", text: "Receive curated curtain suggestions" },
]

export function CustomDesignSection() {
  const [fileName, setFileName] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="custom-design" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary font-medium"
            >
              <span className="w-8 h-px bg-primary" />
              Custom service
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4"
            >
              Send your window and get a style suggestion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              Use this section as your lead form for clients who want to preview
              curtain ideas for their room, salon, office or villa.
            </motion.p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border"
                >
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold">
                    {step.num}
                  </span>
                  <p className="font-medium">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl border border-border p-6 md:p-8 space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                Modern Perde
              </span>
              <h3 className="text-xl font-bold mt-1">Fast custom request</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Send your room photo and details. We&apos;ll respond with styling suggestions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your city"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Space type</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select type</option>
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Office</option>
                  <option>Salon</option>
                  <option>Hotel</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell us your idea, fabric type, blackout need, color preference..."
              />
            </div>

            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                className={cn(
                  "border-2 border-dashed rounded-2xl p-6 text-center transition-colors",
                  fileName ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                )}
              >
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <span className="font-medium block">
                  {fileName || "Upload window photo"}
                </span>
                <span className="text-sm text-muted-foreground">
                  PNG, JPG, WEBP or short video preview
                </span>
              </div>
            </label>

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-xs text-muted-foreground">
                Fast response • Design idea • Better fit
              </span>
              <Button type="submit" size="lg" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  "Send Request"
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
