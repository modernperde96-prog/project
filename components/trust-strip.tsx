"use client"

import { motion } from "framer-motion"
import { Sparkles, Ruler, Settings, Palette } from "lucide-react"

const trustItems = [
  {
    icon: Sparkles,
    title: "Premium Fabric",
    description: "Carefully selected textures and finishes",
  },
  {
    icon: Ruler,
    title: "Custom Sizes",
    description: "Made to match your exact window needs",
  },
  {
    icon: Settings,
    title: "Modern Rails",
    description: "Reliable movement with elegant hardware",
  },
  {
    icon: Palette,
    title: "Design Support",
    description: "We help you visualize before you buy",
  },
]

export function TrustStrip() {
  return (
    <section className="py-8 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <item.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
