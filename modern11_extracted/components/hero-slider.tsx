"use client"

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles, Wand as Wand2, GalleryVerticalEnd, Star, Ruler, Palette, Hop as Home, Building2, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { cn } from '@/lib/utils'
import { Dictionary, Locale, getDir, localizePath } from '@/lib/i18n'

interface HeroSliderProps {
  locale: Locale
  dict: Dictionary
}

type SlideType =
  | 'compare'
  | 'collection'
  | 'luxury'
  | 'custom'

type ShowcaseSlide = {
  id: string
  type: SlideType
  badge: string
  title: string
  description: string
  label: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
  chips: string[]
}

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export function HeroSlider({ locale, dict }: HeroSliderProps) {
  const slides = useMemo(() => buildSlides(locale, dict), [locale, dict])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [playing, setPlaying] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const dir = getDir(locale)

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (playing) {
      timerRef.current = setInterval(() => {
        setDirection(1)
        setCurrentSlide((value) => (value + 1) % slides.length)
      }, 6500)
    }
  }, [playing, slides.length])

  useEffect(() => {
    restart()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [restart])

  const current = slides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute end-0 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute start-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-8 lg:py-12">
        <div className="grid min-h-[calc(100vh-13rem)] items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id + '-content'}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 32 : -32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -32 : 32 }}
              transition={{ duration: 0.42 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {dict.hero.eyebrow}
              </span>

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{current.badge}</p>
                <h1 className="max-w-2xl text-4xl font-serif font-bold leading-tight md:text-5xl lg:text-6xl">{current.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{current.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {current.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild className="rounded-full px-6">
                  <Link href={localizePath(locale, current.primary.href)}>
                    {current.primary.label}
                    <ArrowRight className={cn('h-4 w-4', dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-6">
                  <Link href={localizePath(locale, current.secondary.href)}>{current.secondary.label}</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id + '-visual'}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? -32 : 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? 32 : -32 }}
              transition={{ duration: 0.42 }}
            >
              <SlideVisual locale={locale} dict={dict} slide={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="container relative mx-auto px-4 pb-10">
        <div className="rounded-[2rem] border border-border bg-background/80 p-4 shadow-lg backdrop-blur-xl">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => { setDirection(-1); setCurrentSlide((value) => (value - 1 + slides.length) % slides.length); restart() }} className="rounded-full p-2 hover:bg-secondary" aria-label="Previous slide">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setPlaying((value) => !value)} className="rounded-full p-2 hover:bg-secondary" aria-label="Toggle autoplay">
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button onClick={() => { setDirection(1); setCurrentSlide((value) => (value + 1) % slides.length); restart() }} className="rounded-full p-2 hover:bg-secondary" aria-label="Next slide">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 gap-2 overflow-x-auto pb-1 xl:justify-end">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => { setDirection(index > currentSlide ? 1 : -1); setCurrentSlide(index); restart() }}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-sm transition-all',
                    index === currentSlide ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'border-border bg-card hover:border-primary/30',
                  )}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function buildSlides(locale: Locale, dict: Dictionary): ShowcaseSlide[] {
  return [
    {
      id: 'compare',
      type: 'compare',
      label: lt(locale, 'Before / After', 'قبل / بعد', 'پێش / دوای', 'Önce / Sonra'),
      badge: lt(locale, 'Transformation slider', 'سلايدر التحول', 'سلایدی گۆڕانکاری', 'Dönüşüm sliderı'),
      title: lt(locale, 'Show a room transformation with a premium before-and-after experience.', 'اعرض تحول الغرفة بتجربة قبل وبعد فاخرة.', 'گۆڕانکاریی ژوور بنێرە بە ئەزموونی پێش و دوای لوکس.', 'Oda dönüşümünü premium bir önce-sonra deneyimiyle göster.'),
      description: lt(locale, 'This option is ideal when you want clients to immediately understand styling value.', 'هذا الخيار ممتاز عندما تريد أن يفهم العميل قيمة التنسيق فوراً.', 'ئەم هەڵبژاردنە باشە کاتێک دەتەوێت کڕیار خێرا نرخ و گرنگی ستایل تێبگات.', 'Müşteri stil değerini hızlıca anlasın istiyorsan bu seçenek güçlüdür.'),
      primary: { label: dict.home.cta.primary, href: '/collections' },
      secondary: { label: dict.nav.contact, href: '/contact' },
      chips: [lt(locale, 'Interactive drag', 'سحب تفاعلي', 'ڕاکێشانی کارلێک', 'Etkileşimli sürükleme'), lt(locale, 'Room upgrade', 'تطوير الغرفة', 'نوێکردنەوەی ژوور', 'Oda yenileme'), lt(locale, 'High impact', 'تأثير قوي', 'کاریگەری بەهێز', 'Yüksek etki')],
    },
    {
      id: 'collection',
      type: 'collection',
      label: lt(locale, 'Collections', 'المجموعات', 'کۆکراوەکان', 'Koleksiyonlar'),
      badge: lt(locale, 'Premium fabrics', 'أقمشة فاخرة', 'پارچەی لوکس', 'Premium kumaşlar'),
      title: lt(locale, 'Explore our exclusive curtain collections crafted for elegance.', 'استكشف مجموعات الستائر الحصرية المصممة بأناقة.', 'کۆکراوەکانی پردەی تایبەتمەندی ئێمە بکۆڵەرەوە.', 'Zarafet için tasarlanmış özel perde koleksiyonlarımızı keşfedin.'),
      description: lt(locale, 'From velvet to sheer, find the perfect fabric for every room in your home.', 'من المخمل إلى الشيفون، اعثر على القماش المثالي لكل غرفة.', 'لە قەدیفەوە بۆ شیەر، پارچەی تەواو بۆ هەموو ژوورێک بدۆزەرەوە.', 'Kadifeden tüle, evinizin her odası için mükemmel kumaşı bulun.'),
      primary: { label: dict.nav.collections, href: '/collections' },
      secondary: { label: dict.nav.contact, href: '/contact' },
      chips: [lt(locale, 'Velvet', 'مخمل', 'قەدیفە', 'Kadife'), lt(locale, 'Blackout', 'بلاك أوت', 'بلەکاوت', 'Blackout'), lt(locale, 'Sheer', 'شيفون', 'شیەر', 'Tül')],
    },
    {
      id: 'luxury',
      type: 'luxury',
      label: lt(locale, 'Luxury', 'فاخر', 'لوکس', 'Lüks'),
      badge: lt(locale, 'Premium experience', 'تجربة فاخرة', 'ئەزموونی لوکس', 'Premium deneyim'),
      title: lt(locale, 'Transform your space with our luxury curtain solutions.', 'حوّل مساحتك مع حلول الستائر الفاخرة لدينا.', 'شوێنەکەت بگۆڕە بە چارەسەری پردەی لوکسی ئێمە.', 'Lüks perde çözümlerimizle mekanınızı dönüştürün.'),
      description: lt(locale, 'Experience the finest materials and expert craftsmanship in every detail.', 'استمتع بأجود المواد وأفضل الحرفية في كل تفصيل.', 'باشترین ماددە و پیشەسازیی شارەزا لە هەموو وردەکارییەکدا ببینە.', 'Her detayda en kaliteli malzeme ve uzman işçiliği deneyimleyin.'),
      primary: { label: dict.nav.about, href: '/about' },
      secondary: { label: dict.nav.team, href: '/team' },
      chips: [lt(locale, 'Handcrafted', 'صنع يدوي', 'دەستکرد', 'El yapımı'), lt(locale, 'Premium', 'فاخر', 'لوکس', 'Premium'), lt(locale, 'Exclusive', 'حصري', 'تایبەت', 'Özel')],
    },
    {
      id: 'custom',
      type: 'custom',
      label: lt(locale, 'Custom', 'مخصص', 'تایبەت', 'Özel'),
      badge: lt(locale, 'Made for you', 'صنع لك', 'بۆ تۆ دروستکراوە', 'Sizin için üretildi'),
      title: lt(locale, 'Custom designs tailored perfectly to your unique space.', 'تصاميم مخصصة مصممة بشكل مثالي لمساحتك الفريدة.', 'دیزاینی تایبەت بە تەواوی بۆ شوێنی تایبەتی تۆ.', 'Benzersiz mekanınıza özel tasarlanmış özel tasarımlar.'),
      description: lt(locale, 'From measurement to installation, we handle everything with precision.', 'من القياس إلى التركيب، نتعامل مع كل شيء بدقة.', 'لە پێوانەوە بۆ دامەزراندن، هەموو شتێک بە وردی ئەنجام دەدەین.', 'Ölçümden montaja kadar her şeyi hassasiyetle ele alıyoruz.'),
      primary: { label: dict.nav.rails, href: '/rails' },
      secondary: { label: dict.nav.contact, href: '/contact' },
      chips: [lt(locale, 'Free measurement', 'قياس مجاني', 'پێوانەی بەخۆڕایی', 'Ücretsiz ölçüm'), lt(locale, 'Expert install', 'تركيب احترافي', 'دامەزراندنی پیشەیی', 'Uzman montaj'), lt(locale, 'Warranty', 'ضمان', 'گەرەنتی', 'Garanti')],
    },
  ]
}

function SlideVisual({ locale, dict, slide }: { locale: Locale; dict: Dictionary; slide: ShowcaseSlide }) {
  const compareWords = {
    layered: lt(locale, 'Layered', 'طبقات', 'توێژە', 'Katman'),
    balanced: lt(locale, 'Balanced', 'توازن', 'هاوسەنگ', 'Dengeli'),
    premium: lt(locale, 'Premium', 'فاخر', 'لوکس', 'Premium'),
  }

  if (slide.type === 'compare') {
    return (
      <div className="relative">
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
          beforeLabel={lt(locale, 'Before', 'قبل', 'پێش', 'Önce')}
          afterLabel={lt(locale, 'After', 'بعد', 'دوای', 'Sonra')}
          className="min-h-[24rem]"
        />
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-4 rounded-2xl border border-border bg-background/85 px-5 py-4 shadow-xl backdrop-blur-xl">
          {[
            { icon: Sparkles, label: compareWords.layered },
            { icon: Wand2, label: compareWords.balanced },
            { icon: GalleryVerticalEnd, label: compareWords.premium },
          ].map((item) => (
            <div key={item.label} className="min-w-[5rem] text-center">
              <item.icon className="mx-auto h-5 w-5 text-primary" />
              <span className="mt-2 block text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (slide.type === 'collection') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
        <div className="grid gap-4 p-6 md:grid-cols-2">
          {/* Main featured image */}
          <div className="relative overflow-hidden rounded-2xl md:row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" 
              alt="Luxury curtain collection"
              className="aspect-[3/4] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Star className="h-3 w-3" /> {lt(locale, 'Best Seller', 'الأكثر مبيعاً', 'فرۆشترین', 'En Çok Satan')}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{lt(locale, 'Royal Velvet', 'مخمل ملكي', 'قەدیفەی شاهانە', 'Royal Kadife')}</h3>
            </div>
          </div>
          
          {/* Smaller collection cards */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/60 p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80" alt="Sheer collection" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{lt(locale, 'Collection', 'مجموعة', 'کۆکراوە', 'Koleksiyon')}</p>
                  <h4 className="font-semibold">{lt(locale, 'Soft Sheers', 'شيفون ناعم', 'شیەری نەرم', 'Yumuşak Tüller')}</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-secondary/60 p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=200&q=80" alt="Blackout collection" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{lt(locale, 'Collection', 'مجموعة', 'کۆکراوە', 'Koleksiyon')}</p>
                  <h4 className="font-semibold">{lt(locale, 'Blackout Series', 'سلسلة بلاك أوت', 'زنجیرەی بلەکاوت', 'Blackout Serisi')}</h4>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="rounded-2xl bg-primary/10 p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground">{lt(locale, 'Fabrics', 'قماش', 'پارچە', 'Kumaş')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-muted-foreground">{lt(locale, 'Collections', 'مجموعة', 'کۆکراوە', 'Koleksiyon')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">{lt(locale, 'Quality', 'جودة', 'کوالیتی', 'Kalite')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (slide.type === 'luxury') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" 
            alt="Luxury interior"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating cards */}
          <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Award, title: lt(locale, 'Premium Quality', 'جودة فاخرة', 'کوالیتی لوکس', 'Premium Kalite'), desc: lt(locale, 'Finest materials', 'أجود المواد', 'باشترین ماددە', 'En iyi malzeme') },
              { icon: Home, title: lt(locale, 'Home Styling', 'تنسيق المنزل', 'ستایلی ماڵ', 'Ev Stili'), desc: lt(locale, 'Complete look', 'مظهر متكامل', 'ڕووکاری تەواو', 'Tam görünüm') },
              { icon: Building2, title: lt(locale, 'Commercial', 'تجاري', 'بازرگانی', 'Ticari'), desc: lt(locale, 'Office & hotels', 'مكاتب وفنادق', 'ئۆفیس و هوتێل', 'Ofis ve otel') },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-background/90 p-4 backdrop-blur-md">
                <item.icon className="h-5 w-5 text-primary" />
                <h4 className="mt-2 font-semibold">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (slide.type === 'custom') {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          {/* Process steps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{lt(locale, 'Our Process', 'عمليتنا', 'پڕۆسەی ئێمە', 'Sürecimiz')}</h3>
            {[
              { step: '01', icon: Ruler, title: lt(locale, 'Measure', 'قياس', 'پێوانە', 'Ölçüm'), desc: lt(locale, 'Free home visit', 'زيارة منزلية مجانية', 'سەردانی ماڵ بەخۆڕایی', 'Ücretsiz ev ziyareti') },
              { step: '02', icon: Palette, title: lt(locale, 'Design', 'تصميم', 'دیزاین', 'Tasarım'), desc: lt(locale, 'Choose fabrics', 'اختر الأقمشة', 'پارچە هەڵبژێرە', 'Kumaş seçin') },
              { step: '03', icon: Award, title: lt(locale, 'Install', 'تركيب', 'دامەزراندن', 'Montaj'), desc: lt(locale, 'Expert fitting', 'تركيب احترافي', 'دامەزراندنی پیشەیی', 'Uzman montaj') },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-xl bg-secondary/50 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80" 
              alt="Custom curtain installation"
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/90 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{lt(locale, 'Satisfaction', 'رضا العملاء', 'ڕازیبوون', 'Memnuniyet')}</p>
                  <p className="text-xl font-bold text-primary">98%</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-primary/20" />
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-primary-foreground">
                    +99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
