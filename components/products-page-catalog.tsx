"use client"

import Link from 'next/link'
import { type ReactNode, useMemo, useState } from 'react'
import { Heart, Eye, MessageCircleMore, Search, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { CategoryGlyph, type CategoryGlyphName } from '@/components/category-glyph'
import { Locale, localizePath } from '@/lib/i18n'
import { buildProductWhatsAppLink } from '@/lib/site-links'
import { catalogProducts, colorSwatches } from '@/lib/catalog-data'
import { cn } from '@/lib/utils'

type FilterValue =
  | 'all'
  | 'rail'
  | 'blackout'
  | 'sheer'
  | 'fabric'
  | 'zebra'
  | 'jaluzi'
  | 'dk'
  | 'accessory'
  | 'white'
  | 'beige'
  | 'brown'
  | 'grey'
  | 'blue'
  | 'red'
  | 'purple'
  | 'black'
  | 'green'
  | 'pink'
  | 'gold'
  | 'orange'
  | 'patterned'
  | 'striped'
  | 'plain'
  | 'textured'
  | 'living'
  | 'dining'
  | 'bedroom'
  | 'hall'
  | 'office'
  | 'blackout_lining'
  | 'standard'
  | 'thermal'
  | 'day_night'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

function getCopy(locale: Locale) {
  return {
    results: lt(locale, 'products', 'منتج', 'بەرهەم', 'ürün'),
    from: lt(locale, 'from', 'من', 'لە', 'başlayan'),
    perMeter: lt(locale, '/m', '/م', '/م', '/m'),
    search: lt(locale, 'Search products, fabrics or systems', 'ابحث في المنتجات أو الأقمشة أو الأنظمة', 'گەڕان بە دوای بەرهەم یان پارچە یان سیستەم', 'Ürün, kumaş veya sistem ara'),
    filters: lt(locale, 'Filters', 'الفلاتر', 'فلتەرەکان', 'Filtreler'),
    helper: lt(locale, 'Find the perfect curtain for your space', 'اعثر على الستارة المثالية لمساحتك', 'پەردەی گونجاو بۆ شوێنەکەت بدۆزەرەوە', 'Alanınız için mükemmel perdeyi bulun'),
    clear: lt(locale, 'Clear all', 'مسح الكل', 'هەمووی بسڕەوە', 'Tümünü temizle'),
    preview: lt(locale, 'Details', 'التفاصيل', 'وردەکاری', 'Detaylar'),
    ask: lt(locale, 'WhatsApp', 'واتساب', 'واتساپ', 'WhatsApp'),
    quickView: lt(locale, 'View Details', 'عرض التفاصيل', 'بینینی وردەکاری', 'Detayları Gör'),
    sections: {
      category: lt(locale, 'Category', 'الفئة', 'پۆل', 'Kategori'),
      color: lt(locale, 'Colour', 'اللون', 'ڕەنگ', 'Renk'),
      style: lt(locale, 'Design style', 'نمط التصميم', 'ستایلی دیزاین', 'Tasarım stili'),
      room: lt(locale, 'Room', 'الغرفة', 'ژوور', 'Oda'),
      lining: lt(locale, 'Lining', 'البطانة', 'لاینینگ', 'Astar'),
    },
    values: {
      all: lt(locale, 'All', 'الكل', 'هەموو', 'Tümü'),
      rail: lt(locale, 'Rail', 'ريل', 'ڕەیل', 'Ray'),
      blackout: lt(locale, 'Blackout', 'بلاك أوت', 'بلەکاوت', 'Blackout'),
      sheer: lt(locale, 'Sheer', 'شفاف', 'شەفاف', 'Tül'),
      fabric: lt(locale, 'Fabric', 'قماش', 'پارچە', 'Kumaş'),
      zebra: lt(locale, 'Zebra', 'زِبرا', 'زیبرا', 'Zebra'),
      jaluzi: lt(locale, 'Jaluzi', 'جالوزي', 'جالووزی', 'Jaluzi'),
      dk: 'DK',
      accessory: lt(locale, 'Accessory', 'إكسسوار', 'ئاکسسواری', 'Aksesuar'),
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
      patterned: lt(locale, 'Patterned', 'مزخرف', 'نەخشەدار', 'Desenli'),
      striped: lt(locale, 'Striped', 'مخطط', 'هێڵدار', 'Çizgili'),
      plain: lt(locale, 'Plain', 'سادة', 'سادە', 'Düz'),
      textured: lt(locale, 'Textured', 'ملمسي', 'تەکسچەر', 'Dokulu'),
      living: lt(locale, 'Living room', 'غرفة المعيشة', 'ژووری دانیشتن', 'Oturma odası'),
      dining: lt(locale, 'Dining', 'سفرة', 'نانخواردن', 'Yemek alanı'),
      bedroom: lt(locale, 'Bedroom', 'غرفة النوم', 'ژووری نوستن', 'Yatak odası'),
      hall: lt(locale, 'Hall', 'صالة', 'هۆڵ', 'Salon'),
      office: lt(locale, 'Office', 'مكتب', 'ئۆفیس', 'Ofis'),
      blackout_lining: lt(locale, 'Blackout lining', 'بطانة بلاك أوت', 'لاینینگی بلەکاوت', 'Blackout astar'),
      standard: lt(locale, 'Standard', 'عادي', 'ئاسایی', 'Standart'),
      thermal: lt(locale, 'Thermal', 'حراري', 'گەرمایی', 'Termal'),
      day_night: lt(locale, 'Day / night', 'ليل / نهار', 'شەو / ڕۆژ', 'Gece / gündüz'),
    } as Record<FilterValue, string>,
    active: lt(locale, 'Active filters', 'الفلاتر النشطة', 'فلتەرە چالاکەکان', 'Aktif filtreler'),
    empty: lt(locale, 'No products match this filter yet.', 'لا توجد منتجات مطابقة لهذه الفلاتر حالياً.', 'ئەم فلتەرانە هێشتا بەرهەمی گونجاویان نییە.', 'Bu filtreler için ürün bulunamadı.'),
    freeLining: lt(locale, 'New', 'جديد', 'نوێ', 'Yeni'),
    fabricSample: lt(locale, 'Fabric Sample', 'عينة القماش', 'نموونەی پارچە', 'Kumaş Örneği'),
    addToCart: lt(locale, 'Add to Cart', 'أضف للسلة', 'زیادبکە بۆ سەبەتە', 'Sepete Ekle'),
  }
}

// Fabric swatch component with zigzag pinking shears edge on all 4 sides - matches ProductsSection style
function FabricSwatchPremium({ image, id, onClickPreview }: { image: string; id: string; onClickPreview?: () => void }) {
  const clipId = `zigzag-catalog-${id}`
  
  return (
    <div 
      className="relative transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-[-3deg] cursor-pointer"
      style={{
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.35))"
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
      
      {/* Fabric swatch container - no white border, image fills zigzag */}
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
  const clipId = "zigzag-modal-catalog"
  
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

export function ProductsPageCatalog({ locale }: { locale: Locale }) {
  const t = getCopy(locale)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<{ category: FilterValue; color: FilterValue; style: FilterValue; room: FilterValue; lining: FilterValue }>({
    category: 'all',
    color: 'all',
    style: 'all',
    room: 'all',
    lining: 'all',
  })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [previewSwatch, setPreviewSwatch] = useState<{ src: string; alt: string } | null>(null)

  const groups = {
    category: ['all', 'rail', 'blackout', 'sheer', 'fabric', 'zebra', 'jaluzi', 'dk', 'accessory'] as FilterValue[],
    color: ['all', 'beige', 'white', 'brown', 'grey', 'blue', 'red', 'purple', 'black', 'green', 'pink', 'gold', 'orange'] as FilterValue[],
    style: ['all', 'plain', 'textured', 'striped', 'patterned'] as FilterValue[],
    room: ['all', 'living', 'bedroom', 'hall', 'dining', 'office'] as FilterValue[],
    lining: ['all', 'standard', 'blackout_lining', 'thermal', 'day_night'] as FilterValue[],
  }

  const filtered = useMemo(() => {
    return catalogProducts.filter((item) => {
      const label = `${item.name[locale]} ${item.brand} ${item.category} ${item.materialName[locale]}`.toLowerCase()
      return (
        (!query.trim() || label.includes(query.toLowerCase())) &&
        (filters.category === 'all' || item.category === filters.category) &&
        (filters.color === 'all' || item.color === filters.color) &&
        (filters.style === 'all' || item.style === filters.style) &&
        (filters.room === 'all' || item.room === filters.room) &&
        (filters.lining === 'all' || item.lining === filters.lining)
      )
    })
  }, [filters, locale, query])

  const count = (key: keyof typeof filters, value: FilterValue) => {
    if (value === 'all') return catalogProducts.length
    return catalogProducts.filter((item) => item[key] === value).length
  }

  const activeFilters = (['category', 'color', 'style', 'room', 'lining'] as const)
    .map((key) => [key, filters[key]] as const)
    .filter(([, value]) => value !== 'all')

  // Parse price for calculations
  const parsePrice = (price: string) => {
    const match = price.match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border-2 border-border bg-card p-6 shadow-lg xl:sticky xl:top-28 xl:h-fit">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  <SlidersHorizontal className="h-4 w-4" />
                  {t.filters}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.helper}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">{filtered.length} {t.results}</span>
            </div>

            <div className="relative mt-5">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.search}
                className="w-full rounded-full border-2 border-border bg-background py-3 ps-10 pe-4 text-sm outline-none transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/10"
              />
            </div>

            <FilterGroup title={t.sections.category} className="mt-6 border-t border-border/80 pt-6">
              <div className="grid gap-2">
                {groups.category.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilters((prev) => ({ ...prev, category: value }))}
                    className={cn(
                      'flex items-center justify-between rounded-[1.2rem] border-2 px-4 py-3 text-sm transition-all',
                      filters.category === value ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'border-border bg-background hover:border-primary/40 hover:shadow-md',
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {value !== 'all' ? (
                        <span className={cn('flex h-9 w-9 items-center justify-center rounded-full', filters.category === value ? 'bg-white/15' : 'bg-secondary')}>
                          <CategoryGlyph name={value as CategoryGlyphName} className="h-4 w-4" />
                        </span>
                      ) : null}
                      {t.values[value]}
                    </span>
                    <span className={cn('text-xs', filters.category === value ? 'text-primary-foreground/80' : 'text-muted-foreground')}>({count('category', value)})</span>
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title={t.sections.color} className="mt-6 border-t border-border/80 pt-6">
              <div className="grid grid-cols-2 gap-2">
                {groups.color.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilters((prev) => ({ ...prev, color: value }))}
                    className={cn(
                      'flex items-center gap-3 rounded-full border-2 px-3 py-2 text-start text-sm transition-all',
                      filters.color === value ? 'border-primary bg-primary/10 shadow-md' : 'border-border bg-background hover:border-primary/40 hover:shadow-sm',
                    )}
                  >
                    {value === 'all' ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-border text-[10px] font-bold">A</span>
                    ) : (
                      <span className="h-5 w-5 rounded-full border-2 border-black/10 shadow-sm" style={{ backgroundColor: colorSwatches[value as keyof typeof colorSwatches] }} />
                    )}
                    <span className="truncate">{t.values[value]}</span>
                  </button>
                ))}
              </div>
            </FilterGroup>

            {(['style', 'room', 'lining'] as const).map((key) => (
              <FilterGroup key={key} title={t.sections[key]} className="mt-6 border-t border-border/80 pt-6">
                <div className="flex flex-wrap gap-2">
                  {groups[key].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFilters((prev) => ({ ...prev, [key]: value }))}
                      className={cn(
                        'rounded-full border-2 px-4 py-2 text-sm transition-all',
                        filters[key] === value ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'border-border bg-background hover:border-primary/40 hover:shadow-sm',
                      )}
                    >
                      {t.values[value]} <span className={cn('text-xs', filters[key] === value ? 'text-primary-foreground/80' : 'text-muted-foreground')}>({count(key, value)})</span>
                    </button>
                  ))}
                </div>
              </FilterGroup>
            ))}
          </aside>

          <div>
            <div className="rounded-[2rem] border-2 border-border bg-card p-5 shadow-lg">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{t.active}</p>
                  <p className="mt-2 text-muted-foreground">{filtered.length} {t.results}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setFilters({ category: 'all', color: 'all', style: 'all', room: 'all', lining: 'all' })
                  }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-border px-4 py-2 text-sm font-medium transition-all hover:border-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                  {t.clear}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.length === 0 && !query.trim() ? (
                  <span className="rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground">{t.values.all}</span>
                ) : (
                  <>
                    {query.trim() ? <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">&quot;{query.trim()}&quot;</span> : null}
                    {activeFilters.map(([key, value]) => (
                      <span key={`${key}-${value}`} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                        {t.sections[key]}: {t.values[value]}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item, index) => {
                const askLink = buildProductWhatsAppLink({
                  name: item.name[locale],
                  material: item.materialName[locale],
                  price: item.price,
                  category: t.values[item.category],
                  pagePath: `/collections/${item.slug}`,
                  image: item.heroImage,
                })
                const currentPrice = parsePrice(item.price)
                const originalPrice = currentPrice * 1.25 // Show 25% off
                const savings = Math.round((1 - currentPrice / originalPrice) * 100)
                const isHovered = hoveredCard === item.id
                
                return (
                  <article 
                    key={item.id} 
                    className="group"
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ animationDelay: `${index * 50}ms` }}
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
                          {t.freeLining}
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
                          <span className="text-2xl font-black text-primary">{item.price}</span>
                          <span className="text-sm text-muted-foreground line-through decoration-2">${originalPrice.toFixed(0)}</span>
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                            Save {savings}%
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

            {filtered.length === 0 ? (
              <div className="mt-8 rounded-3xl border-2 border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                {t.empty}
              </div>
            ) : null}
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

function FilterGroup({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}
