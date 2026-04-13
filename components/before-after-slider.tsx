"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setShowHint(false)
    updatePosition(e.clientX)
  }, [updatePosition])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    setShowHint(false)
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updatePosition(e.touches[0].clientX)
      }
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchend", handleEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, updatePosition])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-2xl",
        isDragging && "cursor-grabbing",
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      aria-label="Image comparison slider"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          setSliderPosition((prev) => Math.max(0, prev - 5))
          setShowHint(false)
        } else if (e.key === "ArrowRight") {
          setSliderPosition((prev) => Math.min(100, prev + 5))
          setShowHint(false)
        }
      }}
    >
      {/* After Image (Background) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      >
        {/* After Label */}
        <div className="absolute top-4 right-4 glass rounded-xl px-4 py-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-primary">
            {afterLabel}
          </span>
          <span className="text-xs text-muted-foreground">Styled finish</span>
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        {/* Before Label */}
        <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-primary">
            {beforeLabel}
          </span>
          <span className="text-xs text-muted-foreground">Classic setup</span>
        </div>
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        animate={{ scale: isDragging ? 1.1 : 1 }}
      >
        {/* Handle Button */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-12 h-12 rounded-full bg-white shadow-xl border border-border",
            "flex items-center justify-center gap-1",
            "transition-transform duration-200",
            isDragging && "scale-110"
          )}
        >
          <span className="text-primary font-bold">‹</span>
          <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary/30 to-primary/60" />
          <span className="text-primary font-bold">›</span>
        </div>
      </motion.div>

      {/* Hint */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2"
        >
          <span className="text-sm text-muted-foreground">Drag • Swipe</span>
        </motion.div>
      )}
    </div>
  )
}
