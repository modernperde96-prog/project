"use client"

import { motion } from 'framer-motion'
import { Globe2, MapPinned, Palette, PackageCheck } from 'lucide-react'
import { Locale } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const pins = [
  { id: 'duhok', x: 390, y: 154 },
  { id: 'istanbul', x: 362, y: 136 },
  { id: 'dubai', x: 430, y: 185 },
  { id: 'london', x: 301, y: 112 },
  { id: 'toronto', x: 162, y: 122 },
  { id: 'sydney', x: 646, y: 292 },
]

export function GlobalReachSection({ locale }: { locale: Locale }) {
  const stats = [
    {
      icon: Globe2,
      title: lt(locale, 'Remote design support', 'دعم تصميم عن بُعد', 'پشتیوانی دیزاینی دوورەوە', 'Uzaktan tasarım desteği'),
      text: lt(locale, 'Send room photos, measurements and style references from anywhere.', 'أرسل صور الغرفة والقياسات والمراجع من أي مكان.', 'لە هەر شوێنێکەوە وێنەی ژوور و پێوانە و نموونەی ستایل بنێرە.', 'Her yerden oda fotoğrafları, ölçüler ve stil referansları gönderin.'),
    },
    {
      icon: Palette,
      title: lt(locale, 'Fabric curation', 'تنسيق الأقمشة', 'هەڵبژاردنی پارچە', 'Kumaş seçimi'),
      text: lt(locale, 'We match sheers, blackout layers and rails into one finished look.', 'ننسق الشيفون والبلاك أوت والقضبان في مظهر واحد متكامل.', 'شیەر و بلەکاوت و ڕەیل لە یەک دیمەنی تەواودا ڕێکدەخەین.', 'Tül, blackout ve rayları tek bitmiş görünümde eşleştiriyoruz.'),
    },
    {
      icon: PackageCheck,
      title: lt(locale, 'Project-ready workflow', 'سير عمل جاهز للمشاريع', 'فلووی ئامادەی پڕۆژە', 'Projeye hazır süreç'),
      text: lt(locale, 'Homes, villas and hospitality spaces can all start with one consultation.', 'المنازل والفلل والضيافة كلها يمكن أن تبدأ باستشارة واحدة.', 'ماڵ و ڤیلا و شوێنەکانی میوانداری هەموویان دەتوانن بە یەک ڕاوێژ دەست پێبکەن.', 'Evler, villalar ve konaklama alanları tek bir danışmayla başlayabilir.'),
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2.4rem] border border-border bg-card shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(192,32,38,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.55))] p-8 dark:bg-[radial-gradient(circle_at_top_left,rgba(192,32,38,0.18),transparent_45%),linear-gradient(180deg,rgba(17,17,24,0.85),rgba(17,17,24,0.72))] xl:border-b-0 xl:border-e xl:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {lt(locale, 'Worldwide service', 'خدمة حول العالم', 'خزمەتگوزاری بۆ هەموو جیهان', 'Dünya çapında hizmet')}
              </p>
              <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
                {lt(locale, 'Modern Perde can style rooms beyond one city.', 'Modern Perde يمكنه تنسيق الغرف خارج مدينة واحدة.', 'Modern Perde دەتوانێت ژوورەکان لە دەرەوەی یەک شاریش ستایل بکات.', 'Modern Perde tek bir şehrin ötesindeki odaları da tasarlayabilir.')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {lt(
                  locale,
                  'From Duhok to international projects, the process can start with room photos, dimensions and a fabric direction. We build the concept, prepare the combination and guide the next step clearly.',
                  'من دهوك إلى المشاريع الدولية، يمكن أن تبدأ العملية بصور الغرفة والأبعاد واتجاه القماش. نبني الفكرة ونجهز التركيبة ونوضح الخطوة التالية.',
                  'لە دهۆکەوە بۆ پڕۆژە نێودەوڵەتییەکان، پڕۆسەکە دەتوانێت بە وێنەی ژوور و قەبارە و ئاراستەی پارچە دەست پێبکات. ئێمە بیرۆکەکە دروست دەکەین و تێکەڵەکە ئامادە دەکەین و هەنگاوی داهاتوو ڕوون دەکەینەوە.',
                  'Duhok’tan uluslararası projelere kadar süreç oda fotoğrafları, ölçüler ve kumaş yönü ile başlayabilir. Konsepti kurar, kombinasyonu hazırlar ve sonraki adımı netleştiririz.',
                )}
              </p>

              <div className="mt-8 grid gap-4">
                {stats.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="rounded-[1.6rem] border border-border/70 bg-background/80 p-5 shadow-sm backdrop-blur"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="relative overflow-hidden bg-secondary/35 p-6 sm:p-8 xl:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,32,38,0.08),transparent_52%)]" />
              <div className="relative rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-[0_20px_50px_rgba(26,20,18,0.08)] backdrop-blur sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      {lt(locale, 'Animated reach map', 'خريطة الانتشار المتحركة', 'نەخشەی بڵاوبوونەوەی جوڵاو', 'Hareketli erişim haritası')}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {lt(locale, 'Consultation, moodboard and selection can begin online.', 'الاستشارة ولوحة الإلهام والاختيار يمكن أن تبدأ أونلاين.', 'ڕاوێژکاری و موودبۆرد و هەڵبژاردن دەتوانێت ئۆنلاین دەست پێبکات.', 'Danışma, moodboard ve seçim online başlayabilir.')}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm shadow-sm">
                    <MapPinned className="h-4 w-4 text-primary" />
                    {lt(locale, 'Based in Duhok', 'الأساس في دهوك', 'بنەما لە دهۆک', 'Duhok merkezli')}
                  </span>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-[1.8rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(245,239,232,0.94))] p-4 dark:bg-[linear-gradient(180deg,rgba(24,24,32,0.9),rgba(18,18,24,0.95))]">
                  <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(120,120,120,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />
                  <svg viewBox="0 0 800 420" className="relative z-10 w-full">
                    <g fill="currentColor" className="text-foreground/8 dark:text-white/10">
                      <path d="M82 111c14-21 31-36 58-37 27-1 47 10 62 27 16 17 38 22 61 19 18-2 31 5 41 18 16 22 12 44-11 56-18 9-40 10-59 4-26-8-45-1-61 18-14 16-31 27-53 31-30 5-57-8-70-33-14-28-2-54 13-79 6-10 14-17 19-24Z" />
                      <path d="M281 93c31-22 64-31 102-21 20 6 39 4 58-4 34-15 69-13 102 3 33 15 56 41 63 78 3 16-5 28-20 33-15 6-32 4-47 0-27-8-53-8-80 2-18 7-39 10-58 7-23-5-38-18-54-34-11-11-23-18-40-21-31-7-43-27-26-43Z" />
                      <path d="M562 255c18-17 38-24 63-22 22 2 43-4 61-17 25-17 50-11 71 10 17 17 30 37 22 63-9 26-32 36-58 38-23 2-43-6-62-17-16-9-33-10-50-2-19 9-39 12-59 3-16-7-20-21-13-39 5-12 14-22 25-30Z" />
                      <path d="M615 102c11-8 21-8 30 1 11 10 23 12 37 12 24 0 40 16 44 39 4 24-6 42-27 52-18 9-38 9-54-5-17-15-31-19-53-12-27 8-51-4-60-24-10-21-2-43 20-54 24-13 44-15 63-9Z" />
                      <path d="M333 285c17-16 37-24 60-25 19-1 36 3 51 16 12 11 28 15 44 16 29 1 49 24 49 52 0 27-20 49-48 52-15 2-29-1-42-10-17-11-33-12-53-5-30 10-58 6-82-16-24-22-28-55-9-80 9-12 18-21 30-30Z" />
                    </g>

                    <g fill="none" stroke="currentColor" className="text-primary/35 dark:text-primary/45">
                      <path d="M390 154C360 162 338 151 301 112" strokeWidth="2.5" strokeDasharray="8 8" />
                      <path d="M390 154C403 157 418 166 430 185" strokeWidth="2.5" strokeDasharray="8 8" />
                      <path d="M390 154C349 151 240 138 162 122" strokeWidth="2.5" strokeDasharray="8 8" />
                      <path d="M390 154C451 168 554 228 646 292" strokeWidth="2.5" strokeDasharray="8 8" />
                    </g>

                    {pins.map((pin, index) => (
                      <g key={pin.id}>
                        <motion.circle
                          cx={pin.x}
                          cy={pin.y}
                          r="11"
                          fill="currentColor"
                          className="text-primary/18"
                          animate={{ scale: [1, 1.7, 1] }}
                          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25 }}
                          style={{ transformOrigin: `${pin.x}px ${pin.y}px` }}
                        />
                        <circle cx={pin.x} cy={pin.y} r="4.5" fill="currentColor" className="text-primary" />
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    lt(locale, 'Middle East', 'الشرق الأوسط', 'ڕۆژهەڵاتی ناوەڕاست', 'Orta Doğu'),
                    lt(locale, 'Europe', 'أوروبا', 'ئەورووپا', 'Avrupa'),
                    lt(locale, 'Remote planning', 'تخطيط عن بُعد', 'پلاندانانی دوورەوە', 'Uzaktan planlama'),
                    lt(locale, 'Project follow-up', 'متابعة المشاريع', 'شوێنکەوتنی پڕۆژە', 'Proje takibi'),
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-border bg-background/90 px-4 py-2 text-sm shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
