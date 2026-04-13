import Link from 'next/link'
import { ArrowRight, GalleryVerticalEnd, Layers as Layers3, Sparkles, Wand as Wand2 } from 'lucide-react'
import { Locale, localizePath } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const cards = [
  {
    key: 'layering',
    icon: Layers3,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    key: 'rail',
    icon: GalleryVerticalEnd,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    key: 'styling',
    icon: Wand2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
] as const

function cardCopy(locale: Locale, key: (typeof cards)[number]['key']) {
  switch (key) {
    case 'layering':
      return {
        title: lt(locale, 'Layered curtain sets', 'مجموعات الستائر المطبقة', 'کۆمەڵە پەردەی توێژکراو', 'Katmanlı perde setleri'),
        text: lt(locale, 'Use sheer in front and blackout behind for calm daylight and privacy at night.', 'استخدم الشفاف في الأمام والبلاك أوت في الخلف لضوء هادئ وخصوصية ليلاً.', 'شیەر لە پێش و بلەکاوت لە پشت بەکاربهێنە بۆ ڕووناکیی ئارام و تایبەتمەندی لە شەودا.', 'Önde tül, arkada blackout kullanarak sakin gün ışığı ve gece mahremiyeti sağlayın.'),
      }
    case 'rail':
      return {
        title: lt(locale, 'Hidden rail solutions', 'حلول القضبان المخفية', 'چارەسەری ڕەیلی شاراوە', 'Gizli ray çözümleri'),
        text: lt(locale, 'A clean top line keeps the curtain premium and makes long windows feel taller.', 'خط علوي نظيف يجعل الستارة أفخم ويجعل النوافذ الطويلة أعلى بصرياً.', 'هێڵێکی سەرەوەی پاک پەردەکە لوکس دەکات و پەنجەرە درێژەکان بەرزتر پیشان دەدات.', 'Temiz bir üst çizgi perdeyi premium gösterir ve uzun pencereleri daha yüksek hissettirir.'),
      }
    default:
      return {
        title: lt(locale, 'Styling for villas and halls', 'تنسيق للفلل والهولات', 'ستایل بۆ ڤیلا و هۆڵ', 'Villa ve salon stili'),
        text: lt(locale, 'Warm metals, fuller fabric and a soft floor break create a stronger luxury finish.', 'المعادن الدافئة والقماش الأكثر امتلاءً ولمسة الأرضية الناعمة تصنع نهاية أفخم.', 'فلزی گەرم و پارچەی پڕتر و شکستی نەرم لەسەر زەوی فینیشێکی لوکس‌تر دروست دەکات.', 'Sıcak metaller, daha dolgun kumaş ve zemine yumuşak kırılma daha lüks bir bitiş oluşturur.'),
      }
  }
}

export function CurtainFocusSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-24" id="curtains">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {lt(locale, 'About curtains', 'عن الستائر', 'دەربارەی پەردە', 'Perdeler hakkında')}
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
              {lt(locale, 'Replace the old category block with a richer section that explains how your curtains actually work in real rooms.', 'استبدل كتلة الفئات القديمة بقسم أغنى يشرح كيف تعمل الستائر فعلياً داخل الغرف الحقيقية.', 'بەشی کۆنی پۆلەکان بگۆڕە بە بەشێکی دەوڵەمەندتر کە ڕوون دەکات پەردەکانت چۆن لە ژوورە ڕاستەقینەکاندا کار دەکەن.', 'Eski kategori alanını, perdelerin gerçek odalarda nasıl çalıştığını anlatan daha zengin bir bölümle değiştirin.')}
            </h2>
          </div>
          <Link
            href={localizePath(locale, '/collections')}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/25"
          >
            {lt(locale, 'Explore curtain styles', 'استكشف ستايلات الستائر', 'ستایلی پەردەکان بگەڕێ', 'Perde stillerini keşfet')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
          <div className="overflow-hidden rounded-[2.3rem] border border-border bg-card shadow-sm">
            <div className="grid gap-0 md:grid-cols-[0.58fr_0.42fr]">
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80" alt="Curtain room styling" className="h-full w-full object-cover" />
              <div className="p-7 lg:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  {lt(locale, 'Showroom formula', 'معادلة الشوروم', 'فۆرمولای شوورۆم', 'Showroom formülü')}
                </div>
                <h3 className="mt-5 text-3xl font-serif font-bold">
                  {lt(locale, 'Soft daylight + privacy + fabric identity.', 'ضوء ناعم + خصوصية + هوية للقماش.', 'ڕووناکیی نەرم + تایبەتمەندی + ناسنامەی پارچە.', 'Yumuşak gün ışığı + mahremiyet + kumaş kimliği.')}
                </h3>
                <p className="mt-4 text-muted-foreground leading-8">
                  {lt(locale, 'This new section talks about the curtain itself instead of repeating category buttons. It helps customers understand layering, rails and luxury finishing before they start filtering products.', 'هذا القسم الجديد يتحدث عن الستارة نفسها بدلاً من تكرار أزرار الفئات. يساعد العميل على فهم الطبقات والقضبان والإنهاء الفاخر قبل أن يبدأ بتصفية المنتجات.', 'ئەم بەشەی نوێیە دەربارەی پەردەکە خۆی قسە دەکات لە جیاتی دووبارەکردنەوەی دوگمەی پۆلەکان. یارمەتی کڕیار دەدات تێبگات لە توێژ و ڕەیل و فینیشی لوکس پێش ئەوەی دەست بە فلتەرکردنی بەرهەم بکات.', 'Bu yeni bölüm kategori düğmelerini tekrarlamak yerine doğrudan perdenin kendisini anlatır. Müşteri ürün filtrelemeye başlamadan önce katman, ray ve lüks bitiş mantığını anlar.')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {cards.map((card, index) => {
              const Icon = card.icon
              const copy = cardCopy(locale, card.key)
              return (
                <article key={card.key} className={cn('group grid gap-4 overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl', index === 2 ? 'md:grid-cols-[0.92fr_1.08fr]' : 'md:grid-cols-[1.08fr_0.92fr]')}>
                  {index === 2 ? (
                    <>
                      <div className="rounded-[1.5rem] border border-border bg-secondary/45 p-5">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-5 text-xl font-semibold">{copy.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.text}</p>
                      </div>
                      <img src={card.image} alt={copy.title} className="h-full w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105" />
                    </>
                  ) : (
                    <>
                      <img src={card.image} alt={copy.title} className="h-full w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="rounded-[1.5rem] border border-border bg-secondary/45 p-5">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-5 text-xl font-semibold">{copy.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.text}</p>
                      </div>
                    </>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
