import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CategoryGlyph, type CategoryGlyphName } from '@/components/category-glyph'
import { Locale, localizePath } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

function getItems(locale: Locale) {
  return [
    {
      id: 'rail',
      icon: 'rail' as CategoryGlyphName,
      href: '/rails',
      title: lt(locale, 'Rails', 'القضبان', 'ڕەیل', 'Raylar'),
      text: lt(locale, 'Wave, hidden and motor-ready systems.', 'ويف ومخفية وجاهزة للموتور.', 'وەیڤ و شاراوە و ئامادەی ماتۆر.', 'Wave, gizli ve motor hazır sistemler.'),
      accent: 'from-[#6d1f1f]/12 via-primary/10 to-transparent',
    },
    {
      id: 'blackout',
      icon: 'blackout' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Blackout', 'بلاك أوت', 'بلەکاوت', 'Blackout'),
      text: lt(locale, 'Bedroom privacy and hotel-level comfort.', 'خصوصية غرف النوم وراحة فندقية.', 'تایبەتمەندی ژووری نوستن و ئاسوودەیی هوتێلی.', 'Yatak odası gizliliği ve otel konforu.'),
      accent: 'from-[#3f3245]/12 via-[#3f3245]/8 to-transparent',
    },
    {
      id: 'sheer',
      icon: 'sheer' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Sheer', 'شفاف', 'شەفاف', 'Tül'),
      text: lt(locale, 'A soft daylight layer for elegant rooms.', 'طبقة ضوء ناعمة للغرف الأنيقة.', 'چینی ڕووناکیی نەرم بۆ ژوورە جوانەکان.', 'Zarif odalar için yumuşak gün ışığı katmanı.'),
      accent: 'from-[#c8bea3]/18 via-[#c8bea3]/10 to-transparent',
    },
    {
      id: 'fabric',
      icon: 'fabric' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Fabric', 'القماش', 'پارچە', 'Kumaş'),
      text: lt(locale, 'Textures, plains and statement drapery.', 'ملامس وأقمشة سادة وستائر مميزة.', 'تەکسچەر و سادە و پەردەی تایبەت.', 'Dokular, düz kumaşlar ve vurucu drapeler.'),
      accent: 'from-[#9d7d53]/14 via-[#9d7d53]/7 to-transparent',
    },
    {
      id: 'zebra',
      icon: 'zebra' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Zebra', 'زِبرا', 'زیبرا', 'Zebra'),
      text: lt(locale, 'Day-night control in one modern blind.', 'تحكم ليل ونهار في بلاند عصري.', 'کۆنترۆڵی شەو و ڕۆژ لە یەک بڵایندی مۆدێرندا.', 'Tek modern stor içinde gece-gündüz kontrolü.'),
      accent: 'from-[#5b74c8]/12 via-[#5b74c8]/8 to-transparent',
    },
    {
      id: 'jaluzi',
      icon: 'jaluzi' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Jaluzi', 'جالوزي', 'جالووزی', 'Jaluzi'),
      text: lt(locale, 'Clean lines for offices and kitchens.', 'خطوط نظيفة للمكاتب والمطابخ.', 'هێڵی پاک بۆ ئۆفیس و چێشتخانە.', 'Ofis ve mutfaklar için temiz çizgiler.'),
      accent: 'from-[#9aa0a8]/16 via-[#9aa0a8]/8 to-transparent',
    },
    {
      id: 'dk',
      icon: 'dk' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'DK', 'DK', 'DK', 'DK'),
      text: lt(locale, 'Practical blind coverage with strong geometry.', 'تغطية عملية بخطوط هندسية قوية.', 'داپۆشینی کارا لەگەڵ هێڵی هەندەسی بەهێز.', 'Güçlü geometri ile pratik kaplama.'),
      accent: 'from-[#b56e6e]/14 via-[#b56e6e]/8 to-transparent',
    },
    {
      id: 'accessory',
      icon: 'accessory' as CategoryGlyphName,
      href: '/collections',
      title: lt(locale, 'Accessories', 'الإكسسوارات', 'ئاکسسوارات', 'Aksesuarlar'),
      text: lt(locale, 'Hooks, rings, brackets and finishing parts.', 'خطافات وحلقات وحوامل وقطع نهائية.', 'هۆک و ئەڵقە و براکێت و پارچە کۆتاییەکان.', 'Kanca, halka, ayak ve bitiş parçaları.'),
      accent: 'from-[#7a9a49]/16 via-[#7a9a49]/8 to-transparent',
    },
  ]
}

export function CategoriesSection({ locale }: { locale: Locale }) {
  const items = getItems(locale)

  return (
    <section id="categories" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {lt(locale, 'Category overview', 'نظرة على الفئات', 'پوختەی پۆلەکان', 'Kategori görünümü')}
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
              {lt(locale, 'Shop by product type with cleaner icons and stronger category logic.', 'تسوق حسب نوع المنتج مع أيقونات أنظف ومنطق أقوى للفئات.', 'بەپێی جۆری بەرهەم بازاڕ بکە لەگەڵ ئایکۆنی پاکتر و ڕێکخستنی باشتر.', 'Daha temiz ikonlar ve daha güçlü kategori yapısıyla ürüne göre alışveriş yapın.')}
            </h2>
          </div>
          <Link
            href={localizePath(locale, '/collections')}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/25"
          >
            {lt(locale, 'Browse all categories', 'تصفح كل الفئات', 'هەموو پۆلەکان ببینە', 'Tüm kategorileri görüntüle')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Link
              key={item.id}
              href={localizePath(locale, item.href)}
              className={cn(
                'group relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl',
                index === 0 ? 'xl:col-span-2' : '',
              )}
            >
              <div className={cn('absolute inset-0 bg-gradient-to-br opacity-100 transition-opacity group-hover:opacity-90', item.accent)} />
              <div className="relative z-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-primary/10 bg-background/85 text-primary shadow-sm">
                  <CategoryGlyph name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{item.text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                  {lt(locale, 'Open category', 'افتح الفئة', 'پۆلەکە بکەرەوە', 'Kategoriyi aç')}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
