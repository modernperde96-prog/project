"use client"

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MessageCircleMore, Search, SlidersHorizontal, Heart, Eye, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Locale, localizePath } from '@/lib/i18n'
import { buildProductWhatsAppLink } from '@/lib/site-links'
import { catalogProducts, colorSwatches } from '@/lib/catalog-data'
import { cn } from '@/lib/utils'

const copy = {
  en: {
    eyebrow: 'Products preview',
    title: 'Premium Curtain Collection',
    description: 'Discover our exclusive range of luxury curtains, handcrafted with the finest fabrics for your perfect home.',
    openAll: 'View Full Catalog',
    filterTitle: 'Quick filters',
    search: 'Search fabric, color or style',
    preview: 'Preview',
    ask: 'Ask on WhatsApp',
    from: 'from',
    fabricSample: 'Fabric Sample',
    quickView: 'View Details',
    save: 'Save',
    newBadge: 'New',
    colors: { all: 'All', orange: 'Orange', beige: 'Beige', brown: 'Brown', pink: 'Rose' },
  },
  ar: {
    eyebrow: 'معاينة المنتجات',
    title: 'مجموعة الستائر الفاخرة',
    description: 'اكتشف مجموعتنا الحصرية من الستائر الفاخرة، المصنوعة يدوياً من أجود الأقمشة لمنزلك المثالي.',
    openAll: 'عرض الكتالوج الكامل',
    filterTitle: 'فلاتر سريعة',
    search: 'ابحث عن القماش أو اللون أو النمط',
    preview: 'معاينة',
    ask: 'اسأل على واتساب',
    from: 'من',
    fabricSample: 'عينة القماش',
    quickView: 'عرض التفاصيل',
    save: 'وفر',
    newBadge: 'جديد',
    colors: { all: 'الكل', orange: 'برتقالي', beige: 'بيج', brown: 'بني', pink: 'وردي' },
  },
  ku: {
    eyebrow: 'پێشبینینی بەرهەم',
    title: 'کۆمەڵەی پەردەی لوکس',
    description: 'کۆمەڵەی تایبەتی پەردەی لوکسمان بدۆزەوە، بە دەستی دروستکراوە لە باشترین پارچەکان بۆ ماڵی تەواوت.',
    openAll: 'بینینی کاتەلۆگی تەواو',
    filterTitle: 'فلتەری خێرا',
    search: 'گەڕان بە دوای پارچە یان ڕەنگ یان ستایل',
    preview: 'پێشبینین',
    ask: 'پرسیار لە واتساپ',
    from: 'لە',
    fabricSample: 'نمونەی پارچە',
    quickView: 'بینینی وردەکاری',
    save: 'داشکان',
    newBadge: 'نوێ',
    colors: { all: 'هەموو', orange: 'پرتەقاڵی', beige: 'بیج', brown: 'قاوەیی', pink: 'گوڵاوی' },
  },
  tr: {
    eyebrow: 'Ürün önizlemesi',
    title: 'Premium Perde Koleksiyonu',
    description: 'Mükemmel eviniz için en kaliteli kumaşlarla el yapımı özel lüks perde koleksiyonumuzu keşfedin.',
    openAll: 'Tam Kataloğu Görüntüle',
    filterTitle: 'Hızlı filtreler',
    search: 'Kumaş, renk veya stil ara',
    preview: 'Önizleme',
    ask: 'WhatsApp\'ta Sor',
    from: 'başlayan',
    fabricSample: 'Kumaş Örneği',
    quickView: 'Detayları Gör',
    save: 'Tasarruf',
    newBadge: 'Yeni',
    colors: { all: 'Tümü', orange: 'Turuncu', beige: 'Bej', brown: 'Kahverengi', pink: 'Pembe' },
  },
} as const

// Fabric swatch component with zigzag pinking shears edge on all 4 sides - matches collection page style
function FabricSwatchPremium({ image, id, isHovered, onClickPreview }: { image: string; id: string; isHovered: boolean; onClickPreview?: () => void }) {
  const clipId = `zigzag-preview-${id}`
  
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
      
      {/* Fabric swatch container */}
      <div 
        className="relative w-16 h-20 overflow-hidden"
        style={{
          clipPath: `url(#${clipId})`
        }}
      >
        <img 
          src={image} 
          alt="Fabric sample"
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
  const clipId = "zigzag-modal-preview"
  
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

export function ProductsPreviewSection({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [activeColor, setActiveColor] = useState<'all' | 'orange' | 'beige' | 'brown' | 'pink'>('all')
  const [query, setQuery] = useState('')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [previewSwatch, setPreviewSwatch] = useState<{ src: string; alt: string } | null>(null)

  const filtered = useMemo(() => {
    return catalogProducts
      .filter((item) => {
        const byColor = activeColor === 'all' || item.color === activeColor
        const label = `${item.name[locale]} ${item.tag[locale]} ${item.materialName[locale]}`.toLowerCase()
        const byQuery = !query.trim() || label.includes(query.toLowerCase())
        return byColor && byQuery
      })
      .slice(0, 4)
  }, [activeColor, locale, query])

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background" id="products">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 xl:grid-cols-[0.34fr_0.66fr]">
          {/* Sidebar */}
          <aside className="rounded-3xl border-2 border-border bg-card p-8 shadow-xl xl:sticky xl:top-28 xl:h-fit">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-serif font-bold leading-tight">{t.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.description}</p>

            <div className="mt-8 rounded-2xl border border-border/70 bg-secondary/50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <SlidersHorizontal className="h-4 w-4 text-primary" />
                {t.filterTitle}
              </div>
              <div className="relative mt-4">
                <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.search}
                  className="w-full rounded-full border-2 border-border bg-background py-3 ps-11 pe-4 text-sm outline-none transition-all focus:border-primary focus:shadow-md"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(['all', 'orange', 'beige', 'brown', 'pink'] as const).map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setActiveColor(color)}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all',
                      activeColor === color 
                        ? 'border-primary bg-primary text-primary-foreground shadow-md' 
                        : 'border-border bg-background hover:border-primary/50 hover:shadow-sm',
                    )}
                  >
                    {color === 'all' ? null : <span className="h-3 w-3 rounded-full border border-black/10 shadow-inner" style={{ backgroundColor: colorSwatches[color] }} />}
                    {t.colors[color]}
                  </button>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 w-full rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
              <Link href={localizePath(locale, '/collections')}>{t.openAll}</Link>
            </Button>
          </aside>

          {/* Product Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((item) => {
              const askLink = buildProductWhatsAppLink({
                name: item.name[locale],
                material: item.materialName[locale],
                price: item.price,
                category: item.tag[locale],
                pagePath: `/collections/${item.slug}`,
                image: item.heroImage,
              })

              const originalPrice = item.originalPrice || Math.round(item.price * 1.25)
              const savings = Math.round((1 - item.price / originalPrice) * 100)
              const isHovered = hoveredCard === item.id

              return (
                <article 
                  key={item.id} 
                  className="group"
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-2xl border-2 bg-card transition-all duration-500",
                    isHovered 
                      ? "border-primary shadow-2xl shadow-primary/20 -translate-y-3" 
                      : "border-border/60 shadow-lg hover:border-primary/50"
                  )}>
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.heroImage} 
                        alt={item.name[locale]} 
                        className={cn(
                          "aspect-[4/5] w-full object-cover transition-all duration-700",
                          isHovered ? "scale-110 brightness-[0.85]" : "scale-100"
                        )}
                      />
                      
                      {/* Overlay gradient */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500",
                        isHovered ? "opacity-100" : "opacity-40"
                      )} />
                      
                      {/* Badge */}
                      <span className={cn(
                        "absolute top-4 start-4 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg transform -rotate-6",
                        "bg-primary text-primary-foreground"
                      )}>
                        {t.newBadge}
                      </span>

                      {/* Action buttons on hover */}
                      <div className={cn(
                        "absolute top-4 end-4 flex flex-col gap-2 transition-all duration-500",
                        isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      )}>
                        <button className="p-2.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                          <Heart className="h-4 w-4" />
                        </button>
                        <Link 
                          href={localizePath(locale, `/collections/${item.slug}`)}
                          className="p-2.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                      </div>

                      {/* Fabric Swatch - Real fabric sample look with zigzag edge */}
                      <div className={cn(
                        "absolute bottom-4 end-4 transition-all duration-500"
                      )}>
                        <FabricSwatchPremium 
                          image={item.swatchImage} 
                          id={item.id} 
                          isHovered={isHovered}
                          onClickPreview={() => setPreviewSwatch({ src: item.swatchImage, alt: `${item.name[locale]} fabric sample` })}
                        />
                        <p className={cn(
                          "absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-white bg-black/80 px-2.5 py-1 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20",
                          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        )}>
                          {t.fabricSample}
                        </p>
                      </div>

                      {/* Quick add button */}
                      <div className={cn(
                        "absolute bottom-4 start-4 transition-all duration-500",
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}>
                        <Link 
                          href={localizePath(locale, `/collections/${item.slug}`)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-xl text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <ShoppingBag className="h-4 w-4" />
                          {t.quickView}
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-gradient-to-b from-card to-card/95">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {item.brand}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-1">
                        {item.name[locale]}
                      </h3>
                      
                      {/* Price */}
                      <div className="mt-3 flex items-baseline gap-3">
                        <span className="text-2xl font-black text-primary">${item.price}</span>
                        <span className="text-sm text-muted-foreground line-through decoration-2">${originalPrice}</span>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {t.save} {savings}%
                        </span>
                      </div>
                      
                      {/* WhatsApp CTA */}
                      <a
                        href={askLink}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300",
                          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30",
                          "hover:bg-[#128C7E] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
                        )}
                      >
                        <MessageCircleMore className="h-5 w-5" />
                        {t.ask}
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
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
