"use client"

import { useMemo, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Minus, Plus, MessageCircleMore, PlayCircle, RotateCcw, Move } from 'lucide-react'
import type { CatalogProduct } from '@/lib/catalog-data'
import { colorSwatches } from '@/lib/catalog-data'
import { buildProductWhatsAppLink } from '@/lib/site-links'
import { Locale, localizePath } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { ProductSwatchTile } from '@/components/product-swatch-tile'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const roomLabels = {
  living: { en: 'Living room', ar: 'غرفة المعيشة', ku: 'ژووری دانیشتن', tr: 'Oturma odası' },
  dining: { en: 'Dining', ar: 'سفرة', ku: 'نانخواردن', tr: 'Yemek alanı' },
  bedroom: { en: 'Bedroom', ar: 'غرفة النوم', ku: 'ژووری نوستن', tr: 'Yatak odası' },
  hall: { en: 'Hall', ar: 'صالة', ku: 'هۆڵ', tr: 'Salon' },
  office: { en: 'Office', ar: 'مكتب', ku: 'ئۆفیس', tr: 'Ofis' },
} as const

export function ProductDetailShowcase({ locale, product }: { locale: Locale; product: CatalogProduct }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const panStart = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const activeMedia = product.media[activeIndex]

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    panStart.current = { x: pan.x, y: pan.y }
  }, [zoom, pan])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    
    // Calculate max pan based on zoom level
    const maxPan = (zoom - 1) * 150
    
    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, panStart.current.x + dx)),
      y: Math.max(-maxPan, Math.min(maxPan, panStart.current.y + dy)),
    })
  }, [isDragging, zoom])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (zoom <= 1) return
    const touch = e.touches[0]
    setIsDragging(true)
    dragStart.current = { x: touch.clientX, y: touch.clientY }
    panStart.current = { x: pan.x, y: pan.y }
  }, [zoom, pan])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || zoom <= 1) return
    const touch = e.touches[0]
    const dx = touch.clientX - dragStart.current.x
    const dy = touch.clientY - dragStart.current.y
    
    const maxPan = (zoom - 1) * 150
    
    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, panStart.current.x + dx)),
      y: Math.max(-maxPan, Math.min(maxPan, panStart.current.y + dy)),
    })
  }, [isDragging, zoom])

  const resetView = useCallback(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [])

  const messageLink = useMemo(
    () =>
      buildProductWhatsAppLink({
        name: product.name[locale],
        material: product.materialName[locale],
        price: product.price,
        category: product.tag[locale],
        pagePath: `/collections/${product.slug}`,
        image: product.heroImage,
      }),
    [locale, product],
  )

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(locale, 'Preview gallery', 'معرض المعاينة', 'گەلەری پێشبینین', 'Önizleme galerisi')}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {lt(locale, 'Open images or reel, then use zoom for fabric and fold details.', 'افتح الصور أو الريل ثم استخدم الزوم لرؤية تفاصيل القماش والطيات.', 'وێنە یان ڕیل بکەرەوە، پاشان زووم بەکاربهێنە بۆ بینینی وردەکاریی پارچە و چین.', 'Görsel veya reel açın, sonra kumaş ve kat detayları için zoom kullanın.')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  type="button" 
                  onClick={() => {
                    const newZoom = Math.max(1, +(zoom - 0.3).toFixed(1))
                    setZoom(newZoom)
                    if (newZoom <= 1) setPan({ x: 0, y: 0 })
                  }} 
                  className="rounded-full border border-border p-2 transition-colors hover:border-primary/30 hover:text-primary" 
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-14 text-center text-sm font-medium">{Math.round(zoom * 100)}%</span>
                <button 
                  type="button" 
                  onClick={() => setZoom((value) => Math.min(3, +(value + 0.3).toFixed(1)))} 
                  className="rounded-full border border-border p-2 transition-colors hover:border-primary/30 hover:text-primary" 
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </button>
                {zoom > 1 && (
                  <button 
                    type="button" 
                    onClick={resetView} 
                    className="rounded-full border border-border p-2 transition-colors hover:border-primary/30 hover:text-primary" 
                    aria-label="Reset view"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-secondary/40">
              {activeMedia.type === 'video' ? (
                <video controls poster={activeMedia.poster} className="aspect-[16/10] w-full object-cover">
                  <source src={activeMedia.src} />
                </video>
              ) : (
                <div 
                  ref={containerRef}
                  className={`aspect-[16/10] overflow-hidden select-none ${zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in'} ${isDragging ? 'cursor-grabbing' : ''}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                  onClick={() => {
                    if (zoom === 1) setZoom(1.6)
                  }}
                >
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    className="h-full w-full object-cover transition-transform duration-200 pointer-events-none"
                    style={{ 
                      transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                      transformOrigin: 'center center' 
                    }}
                    draggable={false}
                  />
                </div>
              )}
              
              {/* Pan indicator when zoomed */}
              {zoom > 1 && activeMedia.type !== 'video' && (
                <div className="absolute bottom-3 start-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur shadow-sm">
                  <Move className="h-3.5 w-3.5" />
                  {lt(locale, 'Drag to pan', 'اسحب للتحريك', 'ڕاکێشە بۆ جوڵان', 'Kaydırmak için sürükle')}
                </div>
              )}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {product.media.map((media, index) => (
                <button
                  key={`${media.src}-${index}`}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index)
                    setZoom(1)
                    setPan({ x: 0, y: 0 })
                  }}
                  className={`group relative overflow-hidden rounded-[1.3rem] border ${index === activeIndex ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'} bg-background text-start transition-all hover:-translate-y-0.5`}
                >
                  {media.type === 'video' ? (
                    <div className="relative">
                      <img src={media.poster || product.heroImage} alt={media.alt} className="aspect-[4/3] w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                        <PlayCircle className="h-11 w-11" />
                      </div>
                    </div>
                  ) : (
                    <img src={media.src} alt={media.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div className="p-3 text-sm font-medium line-clamp-2">{media.alt}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex items-center gap-3 rounded-[1.4rem] border border-border/70 bg-secondary/55 px-3 py-3">
                <div className="rounded-[1rem] border border-border/70 bg-background/90 p-1.5 shadow-sm">
                  <img src={product.swatchImage} alt={product.materialName[locale]} className="h-12 w-12 rounded-[0.8rem] object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{lt(locale, 'Fabric sample', 'عينة القماش', 'سامپلی پارچە', 'Kumaş örneği')}</p>
                  <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                    <span className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: colorSwatches[product.color] }} />
                    {product.materialName[locale]}
                  </div>
                </div>
              </div>
              <h1 className="mt-4 text-4xl font-serif font-bold">{product.name[locale]}</h1>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{product.detail[locale]}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] bg-secondary/60 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{lt(locale, 'Price', 'السعر', 'نرخ', 'Fiyat')}</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">{product.price}</p>
                </div>
                <div className="rounded-[1.4rem] bg-secondary/60 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{lt(locale, 'Best use', 'أفضل استخدام', 'باشترین بەکارهێنان', 'En iyi kullanım')}</p>
                  <p className="mt-2 text-lg font-semibold">{roomLabels[product.room][locale]}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-6">
                  <a href={messageLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <MessageCircleMore className="h-4 w-4" />
                    {lt(locale, 'Ask Whatsapp', 'اسأل واتساب', 'اسأل واتساپ', 'Ask Whatsapp')}
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href={localizePath(locale, '/collections')}>
                    {lt(locale, 'Back to catalog', 'العودة للكتالوج', 'گەڕانەوە بۆ کاتەلۆگ', 'Kataloğa dön')}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {lt(locale, 'Why this style works', 'لماذا ينجح هذا الستايل', 'بۆچی ئەم ستایلە کار دەکات', 'Bu stil neden iyi çalışır')}
              </p>
              <div className="mt-5 grid gap-3">
                {product.features.map((feature) => (
                  <div key={feature.en} className="rounded-[1.3rem] border border-border bg-secondary/50 px-4 py-4 text-sm leading-7">
                    {feature[locale]}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {lt(locale, 'Fabric sample detail', 'تفاصيل عينة القماش', 'وردەکاریی سامپلی پارچە', 'Kumaş numunesi detayı')}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-5 rounded-[1.5rem] border border-border bg-secondary/50 p-4">
                <ProductSwatchTile image={product.swatchImage} title={product.materialName[locale]} large className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold">{product.materialName[locale]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.overview[locale]}</p>
                  <p className="mt-3 text-sm text-primary">
                    {lt(locale, 'The Ask Whatsapp button now sends the product details with the image preview link on its own line for a cleaner WhatsApp message.', 'زر اسأل واتساب يرسل الآن تفاصيل المنتج مع رابط معاينة الصورة في سطر مستقل لرسالة أوضح داخل واتساب.', 'دوگمەی Ask Whatsapp ئێستا وردەکاریی بەرهەم لەگەڵ لینکی پێشبینینی وێنە لە هێڵێکی سەربەخۆ دەنێرێت بۆ نامەیەکی پاکتر لە واتساپ.', 'Ask Whatsapp düğmesi artık ürün detaylarını daha temiz bir WhatsApp mesajı için görsel önizleme bağlantısıyla ayrı satırda gönderiyor.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
