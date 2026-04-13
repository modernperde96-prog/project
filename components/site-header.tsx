"use client"

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Clock3, Globe, MapPin, Menu, Moon, Sparkles, Sun, UserRound, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { BrandLogo } from '@/components/brand-logo'
import { CategoryGlyph, type CategoryGlyphName } from '@/components/category-glyph'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Dictionary, Locale, getDir, localeInfo, localizePath } from '@/lib/i18n'
import { SHOP_MAP_LINK } from '@/lib/site-links'

interface SiteHeaderProps {
  locale: Locale
  dict: Dictionary
}

type MegaKey = 'categories' | 'discover' | null

function localizedHref(locale: Locale, href: string) {
  if (href.startsWith('/#')) return localizePath(locale) + href.slice(1)
  if (href === '/') return localizePath(locale)
  return localizePath(locale, href)
}

function switchLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return `/${nextLocale}`
  segments[0] = nextLocale
  return `/${segments.join('/')}`
}

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])


function getShopStatus(locale: Locale) {
  const now = new Date()
  const weekday = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Baghdad', weekday: 'long' }).format(now)
  const hour = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Baghdad', hour: '2-digit', hour12: false }).format(now))
  const isFriday = weekday === 'Friday'
  const isOpen = !isFriday && hour >= 9 && hour < 23

  return {
    isOpen,
    label: isOpen
      ? lt(locale, 'Shop open now', 'المحل مفتوح الآن', 'فرۆشگا ئێستا کراوەیە', 'Mağaza şu an açık')
      : isFriday
        ? lt(locale, 'Shop closed today', 'المحل مغلق اليوم', 'فرۆشگا ئەمڕۆ داخراوە', 'Mağaza bugün kapalı')
        : lt(locale, 'Shop closed now', 'المحل مغلق الآن', 'فرۆشگا ئێستا داخراوە', 'Mağaza şu an kapalı'),
    hours: lt(locale, '9:00 AM - 11:00 PM • Friday closed', '9:00 ص - 11:00 م • الجمعة مغلق', '9:00 بەیانی - 11:00 شەو • هەینی داخراوە', '09:00 - 23:00 • Cuma kapalı'),
    mapLabel: lt(locale, 'Open map', 'افتح الخريطة', 'نەخشە بکەرەوە', 'Haritayı aç'),
  }
}

const swatches = [
  { key: 'white', hex: '#F6F3EE' },
  { key: 'beige', hex: '#C8BEA3' },
  { key: 'brown', hex: '#6F5E53' },
  { key: 'grey', hex: '#A6A4A4' },
  { key: 'blue', hex: '#5674D7' },
  { key: 'red', hex: '#C93B3B' },
  { key: 'purple', hex: '#7C679D' },
  { key: 'black', hex: '#111111' },
  { key: 'green', hex: '#7A9A49' },
  { key: 'pink', hex: '#DD708E' },
  { key: 'gold', hex: '#D5C86B' },
  { key: 'orange', hex: '#E67A34' },
] as const

function getSwatchLabel(locale: Locale, key: (typeof swatches)[number]['key']) {
  return {
    white: lt(locale, 'White', 'أبيض', 'سپی', 'Beyaz'),
    beige: lt(locale, 'Beige / Natural', 'بيج / طبيعي', 'بیج / سروشتی', 'Bej / Doğal'),
    brown: lt(locale, 'Brown', 'بني', 'قاوەیی', 'Kahverengi'),
    grey: lt(locale, 'Grey / Silver', 'رمادي / فضي', 'خۆڵەمێشی / زیوی', 'Gri / Gümüş'),
    blue: lt(locale, 'Blue', 'أزرق', 'شین', 'Mavi'),
    red: lt(locale, 'Red', 'أحمر', 'سور', 'Kırmızı'),
    purple: lt(locale, 'Purple', 'بنفسجي', 'مۆر', 'Mor'),
    black: lt(locale, 'Black', 'أسود', 'ڕەش', 'Siyah'),
    green: lt(locale, 'Green', 'أخضر', 'سەوز', 'Yeşil'),
    pink: lt(locale, 'Pink', 'وردي', 'پەمەیی', 'Pembe'),
    gold: lt(locale, 'Yellow / Gold', 'أصفر / ذهبي', 'زەرد / زێڕی', 'Sarı / Altın'),
    orange: lt(locale, 'Orange', 'برتقالي', 'پرتەقاڵی', 'Turuncu'),
  }[key]
}

function getMegaGroups(locale: Locale) {
  return [
    {
      title: lt(locale, 'Curtain types', 'أنواع الستائر', 'جۆرەکانی پەردە', 'Perde tipleri'),
      items: [
        { icon: 'sheer', href: '/collections', title: lt(locale, 'Sheer curtains', 'ستائر شفافة', 'پەردەی شەفاف', 'Tül perdeler'), text: lt(locale, 'Soft daylight and elegant privacy.', 'ضوء ناعم وخصوصية أنيقة.', 'ڕووناکیی نەرم و تایبەتمەندیی جوان.', 'Yumuşak gün ışığı ve zarif mahremiyet.') },
        { icon: 'blackout', href: '/collections', title: lt(locale, 'Blackout curtains', 'ستائر بلاك أوت', 'پەردەی بلەکاوت', 'Blackout perdeler'), text: lt(locale, 'Bedroom comfort and hotel finish.', 'راحة غرف النوم ولمسة فندقية.', 'ئاسوودەیی ژووری نوستن و فینیشی هوتێلی.', 'Yatak odası konforu ve otel görünümü.') },
        { icon: 'fabric', href: '/collections', title: lt(locale, 'Fabric collection', 'مجموعة الأقمشة', 'کۆمەڵە پارچە', 'Kumaş koleksiyonu'), text: lt(locale, 'Textures, velvets and plains.', 'ملامس ومخمل وأقمشة سادة.', 'تەکسچەر و مەخمەل و سادە.', 'Dokular, kadifeler ve düzler.') },
        { icon: 'rail', href: '/rails', title: lt(locale, 'Rail systems', 'أنظمة القضبان', 'سیستەمی ڕەیل', 'Ray sistemleri'), text: lt(locale, 'Wave, hidden and motor-ready tracks.', 'مسارات ويف ومخفية وجاهزة للموتور.', 'ڕەیلی وەیڤ و شاراوە و ئامادەی ماتۆر.', 'Wave, gizli ve motor hazır raylar.') },
      ] as const,
    },
    {
      title: lt(locale, 'Blind systems', 'أنظمة البلاندات', 'سیستەمی بڵایند', 'Jaluzi sistemleri'),
      items: [
        { icon: 'zebra', href: '/collections', title: lt(locale, 'Zebra blinds', 'زِبرا', 'زیبرا', 'Zebra perdeler'), text: lt(locale, 'Day and night layers in one clean look.', 'طبقات ليل ونهار في شكل نظيف.', 'چینی شەو و ڕۆژ لە یەک دیزایندا.', 'Tek görünümde gece ve gündüz katmanları.') },
        { icon: 'jaluzi', href: '/collections', title: lt(locale, 'Jaluzi blinds', 'جالوزي', 'جالووزی', 'Jaluzi'), text: lt(locale, 'Simple control for offices and homes.', 'تحكم بسيط للمكاتب والمنازل.', 'کۆنترۆڵی سادە بۆ ئۆفیس و ماڵ.', 'Ev ve ofis için kolay kontrol.') },
        { icon: 'dk', href: '/collections', title: lt(locale, 'DK systems', 'أنظمة DK', 'سیستەمی DK', 'DK sistemleri'), text: lt(locale, 'Practical coverage with neat lines.', 'تغطية عملية بخطوط مرتبة.', 'داپۆشینی کارا لەگەڵ هێڵی پاک.', 'Temiz çizgilerle pratik kaplama.') },
        { icon: 'accessory', href: '/collections', title: lt(locale, 'Accessories', 'إكسسوارات', 'ئاکسسوارات', 'Aksesuarlar'), text: lt(locale, 'Hooks, brackets and finishing details.', 'خطافات وحوامل ولمسات نهائية.', 'هۆک و براکێت و تاچی کۆتایی.', 'Kanca, ayak ve bitiş detayları.') },
      ] as const,
    },
  ]
}

function getDiscoverLinks(locale: Locale) {
  return [
    {
      title: lt(locale, 'Projects & villas', 'المشاريع والفلل', 'پڕۆژە و ڤیلاکان', 'Projeler ve villalar'),
      href: '/#projects',
      text: lt(locale, 'See layered styling ideas for salons, villas and hotels.', 'شاهد أفكار التنسيق للصالات والفلل والفنادق.', 'بیرۆکەی ستایل بۆ هۆڵ و ڤیلا و هوتێل ببینە.', 'Salon, villa ve otel stil fikirlerini görün.'),
    },
    {
      title: lt(locale, 'Team & service', 'الفريق والخدمة', 'تیم و خزمەتگوزاری', 'Ekip ve hizmet'),
      href: '/team',
      text: lt(locale, 'Meet the people behind measuring, advising and installation.', 'تعرّف على فريق القياس والاستشارة والتركيب.', 'تیمی پێوانە و ڕاوێژ و دامەزراندن بناسە.', 'Ölçü, danışmanlık ve montaj ekibini tanıyın.'),
    },
    {
      title: lt(locale, 'Partner brands', 'العلامات الشريكة', 'براندە هاوبەشەکان', 'Partner markalar'),
      href: '/partners',
      text: lt(locale, 'A cleaner logo wall for trusted suppliers and collaborators.', 'جدار شعارات أنظف للموردين والشركاء.', 'دیوارێکی پاکتر بۆ لۆگۆی هاوبەشەکان.', 'Güvenilen tedarikçiler için daha temiz logo alanı.'),
    },
    {
      title: lt(locale, 'Contact & measuring', 'التواصل والقياس', 'پەیوەندی و پێوانە', 'İletişim ve ölçü'),
      href: '/contact',
      text: lt(locale, 'Send room photos and get a curated recommendation.', 'أرسل صور الغرفة واحصل على توصية مناسبة.', 'وێنەی ژوور بنێرە و ڕاسپاردەی گونجاو وەربگرە.', 'Oda fotoğrafı gönderin ve öneri alın.'),
    },
  ]
}

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<MegaKey>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const dir = getDir(locale)

  useEffect(() => {
    setMounted(true)
  }, [])

  const directLinks = useMemo(
    () => [
      { label: dict.nav.home, href: localizePath(locale) },
      { label: dict.nav.collections, href: localizedHref(locale, '/collections') },
      { label: dict.nav.rails, href: localizedHref(locale, '/rails') },
      { label: lt(locale, 'Blog', 'المدونة', 'بلۆگ', 'Blog'), href: localizedHref(locale, '/blog') },
      { label: dict.nav.partners, href: localizedHref(locale, '/partners') },
      { label: dict.nav.team, href: localizedHref(locale, '/team') },
      { label: dict.nav.about, href: localizedHref(locale, '/about') },
      { label: dict.nav.contact, href: localizedHref(locale, '/contact') },
    ],
    [dict, locale],
  )

  const megaGroups = useMemo(() => getMegaGroups(locale), [locale])
  const discoverLinks = useMemo(() => getDiscoverLinks(locale), [locale])
  const shopStatus = useMemo(() => getShopStatus(locale), [locale])

  return (
    <>
      <div className="bg-foreground text-background">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className={cn('h-2.5 w-2.5 rounded-full', shopStatus.isOpen ? 'bg-emerald-400' : 'bg-red-400')} />
              <span className="font-medium text-background/92">{shopStatus.label}</span>
              <span className="hidden items-center gap-2 text-background/60 lg:inline-flex"><Clock3 className="h-3.5 w-3.5" />{shopStatus.hours}</span>
              <a href={SHOP_MAP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1 text-xs text-background/85 transition-colors hover:bg-white/12">
                <MapPin className="h-3.5 w-3.5" />
                {shopStatus.mapLabel}
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Globe className="h-4 w-4 text-background/70" />
            <span className="text-background/70">{dict.languageLabel}</span>
            <div className="flex items-center gap-1">
              {(Object.entries(localeInfo) as [Locale, (typeof localeInfo)[Locale]][]).map(([key, info]) => (
                <Link
                  key={key}
                  href={switchLocalePath(pathname, key)}
                  className={cn(
                    'rounded-full px-3 py-1 text-xs transition-colors',
                    key === locale ? 'bg-primary text-primary-foreground' : 'bg-white/5 hover:bg-white/10',
                  )}
                >
                  {info.nativeLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <nav className="relative flex min-h-20 items-center justify-between gap-4" onMouseLeave={() => setActiveMega(null)}>
            <BrandLogo href={localizePath(locale)} compact />

            <div className="hidden items-center gap-0.5 xl:flex">
              <MegaTrigger
                active={activeMega === 'categories'}
                label={lt(locale, 'Categories', 'الفئات', 'پۆلەکان', 'Kategoriler')}
                onOpen={() => setActiveMega('categories')}
                onToggle={() => setActiveMega((prev) => (prev === 'categories' ? null : 'categories'))}
              />
              <MegaTrigger
                active={activeMega === 'discover'}
                label={lt(locale, 'Discover', 'اكتشف', 'بدۆزەوە', 'Keşfet')}
                onOpen={() => setActiveMega('discover')}
                onToggle={() => setActiveMega((prev) => (prev === 'discover' ? null : 'discover'))}
              />

              {directLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'bg-secondary text-primary shadow-sm'
                      : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50',
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label={dict.accountLabel}>
                    <UserRound className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={dir === 'rtl' ? 'start' : 'end'} className="w-56 rounded-2xl p-2">
                  <DropdownMenuLabel>{dict.accountLabel}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={localizedHref(locale, '/login')} className="cursor-pointer rounded-xl">
                      {dict.login}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={localizedHref(locale, '/signup')} className="cursor-pointer rounded-xl">
                      {dict.signup}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {mounted ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              ) : null}

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full xl:hidden"
                onClick={() => setMobileOpen((value) => !value)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            <AnimatePresence>
              {activeMega && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 top-full hidden pt-3 xl:block"
                >
                  <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-lg backdrop-blur-xl">
                    {activeMega === 'categories' ? (
                      <div className="grid gap-0 xl:grid-cols-[1.2fr_1.2fr_1fr]">
                        {megaGroups.map((group, idx) => (
                          <div key={group.title} className={cn('border-b border-border/40 p-7 last:border-b-0 xl:border-b-0', idx > 0 && 'xl:border-s')}>
                            <div className="mb-6 flex items-start gap-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary flex-shrink-0">
                                <Sparkles className="h-4.5 w-4.5" />
                              </span>
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-primary">{group.title}</p>
                                <p className="mt-1 text-xs text-muted-foreground">{lt(locale, 'Smooth shopping experience', 'تجربة تسوق سلسة', 'تجربەی بازاڕکردنی نەرم', 'Akıcı alışveriş deneyimi')}</p>
                              </div>
                            </div>
                            <div className="grid gap-2.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={localizedHref(locale, item.href)}
                                  className="group rounded-xl border border-border/40 bg-background/40 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-secondary/50"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60 text-foreground transition-all duration-200 group-hover:bg-primary/12 group-hover:text-primary flex-shrink-0">
                                      <CategoryGlyph name={item.icon} />
                                    </span>
                                    <div className="flex-1">
                                      <p className="font-semibold text-foreground leading-tight">{item.title}</p>
                                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="border-t border-border/40 p-7 xl:border-t-0 xl:border-s">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                            {lt(locale, 'Popular colours', 'الألوان الشائعة', 'ڕەنگە باوەکان', 'Popüler renkler')}
                          </p>
                          <p className="text-xs text-muted-foreground mb-4">
                            {lt(locale, 'Visual palette inspiration', 'إلهام لوحة بصرية', 'ئیلهامی پالێتی ڕەنگ', 'Görsel palet ilhamı')}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {swatches.map((swatch) => (
                              <button
                                key={swatch.key}
                                type="button"
                                className="flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/40 px-3 py-2 text-start text-xs transition-all duration-200 hover:border-primary/40 hover:bg-secondary/40"
                              >
                                <span className="h-4 w-4 rounded-full border border-black/10 shadow-sm flex-shrink-0" style={{ backgroundColor: swatch.hex }} />
                                <span className="font-medium">{getSwatchLabel(locale, swatch.key)}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-5 p-7 lg:grid-cols-[1.3fr_1.3fr]">
                        <div className="rounded-xl border border-border/40 bg-background/40 p-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary">
                            {lt(locale, 'Explore & discover', 'اكتشف وتصفح', 'ڕوونکردنەوە و بدۆزەوە', 'Keşfet ve göz at')}
                          </p>
                          <h3 className="mt-3 text-lg font-serif font-bold leading-snug">
                            {lt(locale, 'Pages, trust & team inspiration', 'صفحات وثقة وإلهام الفريق', 'پەڕە و متمانە و ئیلهامی تیم', 'Sayfalar, güven & ekip ilhamı')}
                          </h3>
                          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            {lt(locale, 'Grow with projects, team profiles and room inspiration in one unified system.', 'نمِّ أعمالك مع المشاريع والفريق والإلهام.', 'بە پڕۆژە و تیم و ئیلهام گەشە بکە.', 'Projeler, ekip ve ilham ile büyüyün.')}
                          </p>
                        </div>
                        <div className="grid gap-2.5">
                          {discoverLinks.map((item) => (
                            <Link key={item.title} href={localizedHref(locale, item.href)} className="rounded-lg border border-border/40 bg-background/40 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary/50">
                              <p className="font-semibold text-sm">{item.title}</p>
                              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border/40 xl:hidden"
            >
              <div className="container mx-auto space-y-5 px-4 py-6">
                <div className="rounded-xl border border-border/40 bg-card/30 p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {lt(locale, 'Categories', 'الفئات', 'پۆلەکان', 'Kategoriler')}
                  </h3>
                  <div className="mt-4 grid gap-2.5">
                    {megaGroups.flatMap((group) => group.items).map((item) => (
                      <Link
                        key={item.title}
                        href={localizedHref(locale, item.href)}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg border border-border/40 bg-background/40 px-4 py-3 transition-all duration-200 active:bg-secondary/50"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/60 text-foreground flex-shrink-0">
                            <CategoryGlyph name={item.icon} />
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{item.text}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  {directLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded-lg border px-4 py-3 font-medium text-sm transition-all duration-200',
                        pathname === link.href
                          ? 'border-primary/30 bg-secondary text-primary'
                          : 'border-border/40 bg-card/30 text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="rounded-xl border border-border/40 bg-card/30 p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {lt(locale, 'Popular colours', 'الألوان الشائعة', 'ڕەنگە باوەکان', 'Popüler renkler')}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {swatches.map((swatch) => (
                      <div key={swatch.key} className="flex items-center gap-2.5 rounded-lg border border-border/40 bg-background/40 px-3 py-2 text-xs">
                        <span className="h-4 w-4 rounded-full border border-black/10 flex-shrink-0" style={{ backgroundColor: swatch.hex }} />
                        <span className="font-medium">{getSwatchLabel(locale, swatch.key)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Button asChild variant="outline" className="rounded-lg">
                    <Link href={localizedHref(locale, '/login')} onClick={() => setMobileOpen(false)}>
                      {dict.login}
                    </Link>
                  </Button>
                  <Button asChild className="rounded-lg">
                    <Link href={localizedHref(locale, '/signup')} onClick={() => setMobileOpen(false)}>
                      {dict.signup}
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-border/40 pt-5">
                  {(Object.entries(localeInfo) as [Locale, (typeof localeInfo)[Locale]][]).map(([key, info]) => (
                    <Link
                      key={key}
                      href={switchLocalePath(pathname, key)}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                        key === locale ? 'bg-primary text-primary-foreground' : 'bg-secondary/60',
                      )}
                    >
                      {info.nativeLabel}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

function MegaTrigger({
  label,
  active,
  onOpen,
  onToggle,
}: {
  label: string
  active: boolean
  onOpen: () => void
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onToggle}
      className={cn(
        'relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
        active
          ? 'bg-secondary text-primary shadow-sm'
          : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50',
      )}
    >
      {label}
      <ChevronDown className={cn('ms-2 h-4 w-4 transition-transform duration-300', active && 'rotate-180')} />
      {active && (
        <span className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-primary" />
      )}
    </button>
  )
}
