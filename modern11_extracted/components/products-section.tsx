"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircleMore, Heart, Eye, ShoppingBag, X } from "lucide-react"
import { cn } from "@/lib/utils"

const filters = [
  { id: "all", label: "All" },
  { id: "curtain", label: "Curtains" },
  { id: "sheer", label: "Sheers" },
  { id: "rail", label: "Rails" },
  { id: "accessory", label: "Accessories" },
]

const products = [
  {
    id: 1,
    category: "curtain",
    badge: "10% off",
    brand: "Modern Perde",
    title: "Royal Velvet Curtain",
    price: "$180",
    originalPrice: "$200",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    category: "sheer",
    badge: "New",
    brand: "Modern Perde",
    title: "Soft Light Sheer",
    price: "$95",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    category: "rail",
    badge: "15% off",
    brand: "Modern Perde",
    title: "Black Track Rail",
    price: "$70",
    originalPrice: "$82",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    category: "accessory",
    badge: "",
    brand: "Modern Perde",
    title: "Premium Tieback Set",
    price: "$28",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1604066807436-7f4c6e2a9a23?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    category: "curtain",
    badge: "Best seller",
    brand: "Modern Perde",
    title: "Grand Blackout Panel",
    price: "$140",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    category: "sheer",
    badge: "",
    brand: "Modern Perde",
    title: "Pearl White Voile",
    price: "$88",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 7,
    category: "rail",
    badge: "20% off",
    brand: "Modern Perde",
    title: "Ceiling Rail Pro",
    price: "$82",
    originalPrice: "$102",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 8,
    category: "accessory",
    badge: "",
    brand: "Modern Perde",
    title: "Decor Ring Set",
    price: "$34",
    originalPrice: "",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    swatch: "https://images.unsplash.com/photo-1604066807436-7f4c6e2a9a23?auto=format&fit=crop&w=200&q=80",
  },
]

// Fabric Swatch Component with zigzag pinking shears edge on all 4 sides
function FabricSwatch({ src, alt, isHovered, id = "default", onClickPreview }: { src: string; alt: string; isHovered: boolean; id?: string; onClickPreview?: () => void }) {
  const clipId = `zigzag-clip-${id}`
  
  return (
    <div 
      className={cn(
        "relative transition-all duration-500 transform cursor-pointer",
        isHovered ? "scale-110 rotate-[-3deg]" : "scale-100 rotate-0"
      )}
      style={{
        filter: isHovered ? "drop-shadow(0 8px 16px rgba(0,0,0,0.35))" : "drop-shadow(0 4px 8px rgba(0,0,0,0.25))"
      }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClickPreview?.()
      }}
    >
      {/* Zigzag all edges SVG mask - smaller teeth */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="
              M 0.03 0.025
              L 0.06 0 L 0.09 0.025 L 0.12 0 L 0.15 0.025 L 0.18 0 L 0.21 0.025 L 0.24 0 L 0.27 0.025 L 0.30 0 L 0.33 0.025 L 0.36 0 L 0.39 0.025 L 0.42 0 L 0.45 0.025 L 0.48 0 L 0.51 0.025 L 0.54 0 L 0.57 0.025 L 0.60 0 L 0.63 0.025 L 0.66 0 L 0.69 0.025 L 0.72 0 L 0.75 0.025 L 0.78 0 L 0.81 0.025 L 0.84 0 L 0.87 0.025 L 0.90 0 L 0.93 0.025 L 0.96 0 L 0.97 0.025
              L 1 0.03 L 0.975 0.06 L 1 0.09 L 0.975 0.12 L 1 0.15 L 0.975 0.18 L 1 0.21 L 0.975 0.24 L 1 0.27 L 0.975 0.30 L 1 0.33 L 0.975 0.36 L 1 0.39 L 0.975 0.42 L 1 0.45 L 0.975 0.48 L 1 0.51 L 0.975 0.54 L 1 0.57 L 0.975 0.60 L 1 0.63 L 0.975 0.66 L 1 0.69 L 0.975 0.72 L 1 0.75 L 0.975 0.78 L 1 0.81 L 0.975 0.84 L 1 0.87 L 0.975 0.90 L 1 0.93 L 0.975 0.96 L 1 0.97
              L 0.97 0.975 L 0.96 1 L 0.93 0.975 L 0.90 1 L 0.87 0.975 L 0.84 1 L 0.81 0.975 L 0.78 1 L 0.75 0.975 L 0.72 1 L 0.69 0.975 L 0.66 1 L 0.63 0.975 L 0.60 1 L 0.57 0.975 L 0.54 1 L 0.51 0.975 L 0.48 1 L 0.45 0.975 L 0.42 1 L 0.39 0.975 L 0.36 1 L 0.33 0.975 L 0.30 1 L 0.27 0.975 L 0.24 1 L 0.21 0.975 L 0.18 1 L 0.15 0.975 L 0.12 1 L 0.09 0.975 L 0.06 1 L 0.03 0.975
              L 0 0.97 L 0.025 0.96 L 0 0.93 L 0.025 0.90 L 0 0.87 L 0.025 0.84 L 0 0.81 L 0.025 0.78 L 0 0.75 L 0.025 0.72 L 0 0.69 L 0.025 0.66 L 0 0.63 L 0.025 0.60 L 0 0.57 L 0.025 0.54 L 0 0.51 L 0.025 0.48 L 0 0.45 L 0.025 0.42 L 0 0.39 L 0.025 0.36 L 0 0.33 L 0.025 0.30 L 0 0.27 L 0.025 0.24 L 0 0.21 L 0.025 0.18 L 0 0.15 L 0.025 0.12 L 0 0.09 L 0.025 0.06 L 0 0.03
              Z
            " />
          </clipPath>
        </defs>
      </svg>
      
      {/* Fabric swatch container - no white border, image fills zigzag */}
      <div 
        className="relative w-16 h-20 overflow-hidden"
        style={{
          clipPath: `url(#${clipId})`
        }}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
        />
        {/* Subtle fabric texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/15 pointer-events-none" />
      </div>
    </div>
  )
}

// Fabric Preview Modal Component
function FabricPreviewModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const clipId = "zigzag-modal"
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-10 end-0 rounded-full bg-background/90 p-2 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-background"
          aria-label="Close preview"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* SVG clip path for modal */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d="
                M 0.03 0.025
                L 0.06 0 L 0.09 0.025 L 0.12 0 L 0.15 0.025 L 0.18 0 L 0.21 0.025 L 0.24 0 L 0.27 0.025 L 0.30 0 L 0.33 0.025 L 0.36 0 L 0.39 0.025 L 0.42 0 L 0.45 0.025 L 0.48 0 L 0.51 0.025 L 0.54 0 L 0.57 0.025 L 0.60 0 L 0.63 0.025 L 0.66 0 L 0.69 0.025 L 0.72 0 L 0.75 0.025 L 0.78 0 L 0.81 0.025 L 0.84 0 L 0.87 0.025 L 0.90 0 L 0.93 0.025 L 0.96 0 L 0.97 0.025
                L 1 0.03 L 0.975 0.06 L 1 0.09 L 0.975 0.12 L 1 0.15 L 0.975 0.18 L 1 0.21 L 0.975 0.24 L 1 0.27 L 0.975 0.30 L 1 0.33 L 0.975 0.36 L 1 0.39 L 0.975 0.42 L 1 0.45 L 0.975 0.48 L 1 0.51 L 0.975 0.54 L 1 0.57 L 0.975 0.60 L 1 0.63 L 0.975 0.66 L 1 0.69 L 0.975 0.72 L 1 0.75 L 0.975 0.78 L 1 0.81 L 0.975 0.84 L 1 0.87 L 0.975 0.90 L 1 0.93 L 0.975 0.96 L 1 0.97
                L 0.97 0.975 L 0.96 1 L 0.93 0.975 L 0.90 1 L 0.87 0.975 L 0.84 1 L 0.81 0.975 L 0.78 1 L 0.75 0.975 L 0.72 1 L 0.69 0.975 L 0.66 1 L 0.63 0.975 L 0.60 1 L 0.57 0.975 L 0.54 1 L 0.51 0.975 L 0.48 1 L 0.45 0.975 L 0.42 1 L 0.39 0.975 L 0.36 1 L 0.33 0.975 L 0.30 1 L 0.27 0.975 L 0.24 1 L 0.21 0.975 L 0.18 1 L 0.15 0.975 L 0.12 1 L 0.09 0.975 L 0.06 1 L 0.03 0.975
                L 0 0.97 L 0.025 0.96 L 0 0.93 L 0.025 0.90 L 0 0.87 L 0.025 0.84 L 0 0.81 L 0.025 0.78 L 0 0.75 L 0.025 0.72 L 0 0.69 L 0.025 0.66 L 0 0.63 L 0.025 0.60 L 0 0.57 L 0.025 0.54 L 0 0.51 L 0.025 0.48 L 0 0.45 L 0.025 0.42 L 0 0.39 L 0.025 0.36 L 0 0.33 L 0.025 0.30 L 0 0.27 L 0.025 0.24 L 0 0.21 L 0.025 0.18 L 0 0.15 L 0.025 0.12 L 0 0.09 L 0.025 0.06 L 0 0.03
                Z
              " />
            </clipPath>
          </defs>
        </svg>
        
        {/* Larger zigzag swatch preview */}
        <div 
          className="relative w-56 h-72 sm:w-64 sm:h-80 overflow-hidden"
          style={{
            filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.5))",
            clipPath: `url(#${clipId})`
          }}
        >
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
        </div>
        
        <p className="mt-4 text-center text-sm font-medium text-white/90">{alt}</p>
      </div>
    </div>
  )
}

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [previewSwatch, setPreviewSwatch] = useState<{ src: string; alt: string } | null>(null)

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter)

  return (
    <section id="collections" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary font-medium"
            >
              <span className="w-8 h-px bg-primary" />
              Featured collections
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold mt-3"
            >
              Modern Perde best sellers
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary hover:bg-secondary/80 hover:shadow-md"
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-2xl transition-all duration-500",
                  "bg-card",
                  "border-2",
                  hoveredId === product.id 
                    ? "border-primary shadow-2xl shadow-primary/20 -translate-y-3" 
                    : "border-border/60 shadow-lg hover:border-primary/50"
                )}>
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className={cn(
                        "aspect-[4/5] w-full object-cover transition-all duration-700",
                        hoveredId === product.id ? "scale-110 brightness-[0.85]" : "scale-100"
                      )}
                    />
                    
                    {/* Overlay gradient */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500",
                      hoveredId === product.id ? "opacity-100" : "opacity-40"
                    )} />
                    
                    {/* Badge */}
                    {product.badge && (
                      <motion.span 
                        initial={{ scale: 0, rotate: -12 }}
                        animate={{ scale: 1, rotate: -6 }}
                        className={cn(
                          "absolute top-4 start-4 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg transform",
                          product.badge === "New" 
                            ? "bg-emerald-500 text-white" 
                            : product.badge === "Best seller"
                            ? "bg-amber-500 text-white"
                            : "bg-primary text-primary-foreground"
                        )}
                      >
                        {product.badge}
                      </motion.span>
                    )}

                    {/* Action buttons on hover */}
                    <div className={cn(
                      "absolute top-4 end-4 flex flex-col gap-2 transition-all duration-500",
                      hoveredId === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}>
                      <button className="p-2.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-2.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Fabric Swatch - Real fabric sample look with zigzag edge */}
                    <div className={cn(
                      "absolute bottom-4 end-4 transition-all duration-500"
                    )}>
                      <FabricSwatch 
                        src={product.swatch} 
                        alt={`${product.title} fabric sample`}
                        isHovered={hoveredId === product.id}
                        id={`product-${product.id}`}
                        onClickPreview={() => setPreviewSwatch({ src: product.swatch, alt: `${product.title} fabric sample` })}
                      />
                      <p className={cn(
                        "absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-white bg-black/80 px-2.5 py-1 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20",
                        hoveredId === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}>
                        Fabric Sample
                      </p>
                    </div>

                    {/* Quick add button */}
                    <div className={cn(
                      "absolute bottom-4 start-4 transition-all duration-500",
                      hoveredId === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                      <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-xl text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300">
                        <ShoppingBag className="h-4 w-4" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-gradient-to-b from-card to-card/95">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {product.brand}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-1">
                      {product.title}
                    </h3>
                    
                    {/* Price */}
                    <div className="mt-3 flex items-baseline gap-3">
                      <span className="text-2xl font-black text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through decoration-2">{product.originalPrice}</span>
                      )}
                      {product.originalPrice && (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Save {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                        </span>
                      )}
                    </div>
                    
                    {/* WhatsApp CTA */}
                    <a
                      href={`https://wa.me/9647501234567?text=${encodeURIComponent(`Hi, I'm interested in ${product.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300",
                        "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30",
                        "hover:bg-[#128C7E] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
                      )}
                    >
                      <MessageCircleMore className="h-5 w-5" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Fabric Preview Modal */}
      {previewSwatch && (
        <FabricPreviewModal 
          src={previewSwatch.src} 
          alt={previewSwatch.alt} 
          onClose={() => setPreviewSwatch(null)} 
        />
      )}
    </section>
  )
}
