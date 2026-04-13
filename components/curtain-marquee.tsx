"use client"

import { Sparkles, Layers, Palette, Ruler, Home, Star } from 'lucide-react'
import { Locale } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const icons = [Sparkles, Layers, Palette, Ruler, Home, Star]

export function CurtainMarquee({ locale }: { locale: Locale }) {
  const primary = [
    lt(locale, 'Sheer + blackout layers', 'طبقات شفاف + بلاك أوت', 'توێژی شیەر + بلەکاوت', 'Tül + blackout katmanları'),
    lt(locale, 'Wave rails', 'ريل ويف', 'ڕەیلی وێڤ', 'Wave raylar'),
    lt(locale, 'Salon curtains', 'ستائر الصالات', 'پەردەی هۆڵ', 'Salon perdeleri'),
    lt(locale, 'Villa styling', 'تنسيق الفلل', 'ستایلی ڤیلا', 'Villa stili'),
    lt(locale, 'Fabric moodboards', 'لوحات القماش', 'موودبۆردی پارچە', 'Kumaş moodboardları'),
    lt(locale, 'Measure & install', 'القياس والتركيب', 'پێوانە و دامەزراندن', 'Ölçü ve montaj'),
  ]

  const secondary = [
    lt(locale, 'Soft luxury look', 'إطلالة لوكس ناعمة', 'ڕووکارێکی لوکسی نەرم', 'Yumuşak lüks görünüm'),
    lt(locale, 'Layer planning', 'تخطيط الطبقات', 'پلانی توێژەکان', 'Katman planı'),
    lt(locale, 'Hotel finish', 'تشطيب فندقي', 'فینیشی هوتێلی', 'Otel bitişi'),
    lt(locale, 'Custom rails', 'قضبان مخصصة', 'ڕەیلی تایبەتی', 'Özel raylar'),
    lt(locale, 'Room-by-room advice', 'نصيحة لكل غرفة', 'ڕاوێژ بۆ هەر ژوورێک', 'Oda bazlı öneri'),
    lt(locale, 'Modern folds', 'طيات عصرية', 'چینی مۆدێرن', 'Modern pileler'),
  ]

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-gradient-to-b from-secondary/60 via-secondary/30 to-background py-6 dark:from-secondary/30 dark:via-secondary/10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background via-background/90 to-transparent" />

      <div className="flex flex-col gap-4">
        <div className="flex animate-[marquee_32s_linear_infinite] gap-5">
          {[...primary, ...primary, ...primary].map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={`primary-${index}`}
                className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border/60 bg-card/90 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            )
          })}
        </div>

        <div className="flex animate-[marquee_38s_linear_infinite] gap-5 [animation-direction:reverse]">
          {[...secondary, ...secondary, ...secondary].map((item, index) => (
            <div
              key={`secondary-${index}`}
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border/40 bg-background/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-sm shadow-primary/30" />
              <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
