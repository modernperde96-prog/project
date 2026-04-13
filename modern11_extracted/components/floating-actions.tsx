"use client"

import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircleMore } from 'lucide-react'
import { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { buildWhatsAppLink } from '@/lib/site-links'

export function FloatingActions({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const backLabel = locale === 'ar' ? 'العودة للأعلى' : locale === 'ku' ? 'گەڕانەوە بۆ سەرەوە' : locale === 'tr' ? 'Yukarı dön' : 'Back to top'
  const whatsappLabel = locale === 'ar' ? 'اسأل واتساب' : locale === 'ku' ? 'واتساپ بپرسە' : locale === 'tr' ? 'WhatsApp sor' : 'Ask Whatsapp'

  return (
    <div className="fixed bottom-5 end-5 z-[60] flex flex-col items-end gap-3">
      <a
        href={buildWhatsAppLink('Hello Modern Perde, I want more information about your curtains.')}
        target="_blank"
        rel="noreferrer"
        aria-label={whatsappLabel}
        className="group inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-background/95 px-3 py-2 text-[#138a44] shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/40 dark:bg-card"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/12">
          <MessageCircleMore className="h-4 w-4" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px] group-hover:pe-1">
          {whatsappLabel}
        </span>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={backLabel}
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/95 text-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary dark:bg-card',
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}
