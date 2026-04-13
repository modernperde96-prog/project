"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sara A.",
    location: "Erbil, Iraq",
    rating: 5,
    text: "The custom service was incredible. They understood my room style and suggested the perfect layered sheer and blackout combination.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Omar K.",
    location: "Dubai, UAE",
    rating: 5,
    text: "Best quality rails I've ever installed. The movement is smooth and the finish matches my modern interior perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Lina M.",
    location: "Sulaymaniyah, Iraq",
    rating: 5,
    text: "Modern Perde transformed my salon. The velvet curtains brought a luxury feel I couldn't find anywhere else.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary font-medium"
          >
            <span className="w-8 h-px bg-primary" />
            Customer stories
            <span className="w-8 h-px bg-primary" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold mt-3"
          >
            What clients say about Modern Perde
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl border border-border p-6 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
