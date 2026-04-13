'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function ProductSwatchTile({
  image,
  title,
  className,
  large = false,
  showLabel = false,
}: {
  image: string
  title: string
  className?: string
  large?: boolean
  showLabel?: boolean
}) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <div 
        className={cn('relative z-10 cursor-pointer group', className)} 
        aria-label={title}
        onClick={() => setShowPreview(true)}
      >
        <div className="relative">
          <div
            className={cn(
              'relative overflow-hidden rounded-bl-[0.95rem] rounded-br-[1.5rem] rounded-tl-[1.25rem] rounded-tr-[0.55rem] border-[6px] border-[#efe1ca] bg-[#efe1ca] shadow-[0_18px_38px_rgba(61,41,18,0.24)] dark:border-[#2b221c] dark:bg-[#2b221c] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_24px_48px_rgba(61,41,18,0.32)]',
              large ? 'h-28 w-28 sm:h-32 sm:w-32' : 'h-20 w-20 sm:h-24 sm:w-24',
            )}
          >
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_42%,rgba(0,0,0,0.08))]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:7px_7px]" />
            
            {/* Hover overlay with zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="rounded-full bg-background/90 px-2 py-1 text-[10px] font-medium opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                Click to enlarge
              </span>
            </div>
          </div>

          {showLabel ? (
            <div className="absolute -bottom-3 start-2 max-w-[9.5rem] rounded-full border border-border/70 bg-background/96 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-lg backdrop-blur">
              <span className="line-clamp-1">{title}</span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Full-size preview modal */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <div 
            className="relative max-w-2xl w-full animate-in zoom-in-95 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowPreview(false)}
              className="absolute -top-12 end-0 rounded-full bg-background/90 p-2 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-background"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="overflow-hidden rounded-2xl border-[8px] border-[#efe1ca] bg-[#efe1ca] shadow-2xl dark:border-[#2b221c] dark:bg-[#2b221c]">
              <img 
                src={image} 
                alt={title} 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.25),transparent_42%,rgba(0,0,0,0.05))] pointer-events-none" />
            </div>
            
            <p className="mt-4 text-center text-sm font-medium text-white/90">{title}</p>
          </div>
        </div>
      )}
    </>
  )
}
