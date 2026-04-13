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

            <div className="hidden items-center gap-1 xl:flex">
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
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary',
                    pathname === link.href ? 'bg-secondary text-primary' : 'text-foreground/85',
                  )}
                >
                  {link.label}
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
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-x-0 top-full hidden pt-4 xl:block"
                >
                  <div className="overflow-hidden rounded-[2rem] border border-border bg-card/95 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
                    {activeMega === 'categories' ? (
                      <div className="grid gap-0 xl:grid-cols-[1.25fr_1.25fr_0.9fr]">
                        {megaGroups.map((group) => (
                          <div key={group.title} className="border-b border-border/70 p-6 last:border-b-0 xl:border-b-0 xl:border-e">
                            <div className="mb-5 flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Sparkles className="h-5 w-5" />
                              </span>
                              <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{group.title}</p>
                                <p className="text-xs text-muted-foreground">{lt(locale, 'Designed for a smoother shopping menu.', 'مصمم لقائمة تسوق أكثر سلاسة.', 'بۆ لیستی بازاڕکردنێکی نەرمتر.', 'Daha akıcı bir alışveriş menüsü için tasarlandı.')}</p>
                              </div>
                            </div>
                            <div className="grid gap-2">
                              {group.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={localizedHref(locale, item.href)}
                                  className="group rounded-[1.4rem] border border-transparent bg-background/70 px-4 py-4 transition-all hover:border-primary/20 hover:bg-secondary"
                                >
                                  <div className="flex items-start gap-4">
                                    <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                                      <CategoryGlyph name={item.icon} />
                                    </span>
                                    <div>
                                      <p className="font-semibold">{item.title}</p>
                                      <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="p-6">
                          <div className="rounded-[1.6rem] border border-border bg-background/75 p-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                              {lt(locale, 'Popular colours', 'الألوان الشائعة', 'ڕەنگە باوەکان', 'Popüler renkler')}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {lt(locale, 'Use a visual palette exactly like your reference idea, but cleaner and softer.', 'استخدم لوحة بصرية مثل المرجع لكن بشكل أنعم وأنظف.', 'پالێتی ڕەنگ وەک نموونەکە بەڵام پاکتر و نەرمتر.', 'Referans görsel gibi ama daha temiz ve yumuşak bir palet.')}
                            </p>
                            <div className="mt-5 grid grid-cols-2 gap-3">
                              {swatches.map((swatch) => (
                                <button
                                  key={swatch.key}
                                  type="button"
                                  className="flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 text-start text-sm transition-all hover:border-primary/25 hover:-translate-y-0.5"
                                >
                                  <span className="h-5 w-5 rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: swatch.hex }} />
                                  <span>{getSwatchLabel(locale, swatch.key)}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-4 p-6 lg:grid-cols-2">
                        <div className="rounded-[1.6rem] border border-border bg-background/70 p-6">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            {lt(locale, 'Design a fuller homepage', 'صمّم صفحة رئيسية أغنى', 'ماڵپەڕی سەرەکی پڕتر دروست بکە', 'Daha dolu bir ana sayfa tasarla')}
                          </p>
                          <h3 className="mt-3 text-2xl font-serif font-bold">
                            {lt(locale, 'Pages, trust, team and room inspiration in one system.', 'صفحات وثقة وفريق وإلهام للغرف في نظام واحد.', 'پەڕە و متمانە و تیم و ئیلهامی ژوور لە یەک سیستەمدا.', 'Sayfalar, güven, ekip ve oda ilhamı tek sistemde.')}
                          </h3>
                          <p className="mt-4 text-muted-foreground">
                            {lt(locale, 'This mega menu is prepared for future growth, not only a simple dropdown.', 'هذه القائمة مهيأة للتوسع المستقبلي وليست مجرد قائمة بسيطة.', 'ئەم مێگا مینیوە ئامادەی گەشەپێدانی داهاتووە، تەنها درۆپداون نییە.', 'Bu mega menü yalnızca basit bir dropdown değil, geleceğe hazırdır.')}
                          </p>
                        </div>
                        <div className="grid gap-3">
                          {discoverLinks.map((item) => (
                            <Link key={item.title} href={localizedHref(locale, item.href)} className="rounded-[1.4rem] border border-border bg-background/70 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-secondary">
                              <p className="font-semibold">{item.title}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
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
              className="overflow-hidden border-t border-border/60 xl:hidden"
            >
              <div className="container mx-auto space-y-6 px-4 py-5">
                <div className="rounded-[1.8rem] border border-border bg-card p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {lt(locale, 'Categories', 'الفئات', 'پۆلەکان', 'Kategoriler')}
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {megaGroups.flatMap((group) => group.items).map((item) => (
                      <Link
                        key={item.title}
                        href={localizedHref(locale, item.href)}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl border border-border bg-background px-4 py-3"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-foreground">
                            <CategoryGlyph name={item.icon} />
                          </span>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
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
                      className="rounded-2xl border border-border bg-card px-4 py-3 font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="rounded-[1.8rem] border border-border bg-card p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {lt(locale, 'Popular colours', 'الألوان الشائعة', 'ڕەنگە باوەکان', 'Popüler renkler')}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {swatches.map((swatch) => (
                      <div key={swatch.key} className="flex items-center gap-3 rounded-full border border-border bg-background px-3 py-2 text-sm">
                        <span className="h-5 w-5 rounded-full border border-black/10" style={{ backgroundColor: swatch.hex }} />
                        <span>{getSwatchLabel(locale, swatch.key)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <Button asChild variant="outline" className="rounded-2xl">
                    <Link href={localizedHref(locale, '/login')} onClick={() => setMobileOpen(false)}>
                      {dict.login}
                    </Link>
                  </Button>
                  <Button asChild className="rounded-2xl">
                    <Link href={localizedHref(locale, '/signup')} onClick={() => setMobileOpen(false)}>
                      {dict.signup}
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4">
                  {(Object.entries(localeInfo) as [Locale, (typeof localeInfo)[Locale]][]).map(([key, info]) => (
                    <Link
                      key={key}
                      href={switchLocalePath(pathname, key)}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded-full px-3 py-2 text-sm',
                        key === locale ? 'bg-primary text-primary-foreground' : 'bg-secondary',
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
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors',
        active ? 'bg-secondary text-primary' : 'text-foreground/85 hover:bg-secondary hover:text-primary',
      )}
    >
      {label}
      <ChevronDown className={cn('ms-2 h-4 w-4 transition-transform', active && 'rotate-180')} />
    </button>
  )
}
