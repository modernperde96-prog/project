import Link from 'next/link'
import { ArrowRight, MapPin, Ruler, Layers3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Locale, localizePath } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const projects = [
  {
    slug: 'villa-sunrise',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    size: '12 windows',
    scope: 'Blackout + sheer layering',
    location: 'Duhok',
  },
  {
    slug: 'salon-premium',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    size: 'Main hall styling',
    scope: 'Wave curtains + hidden rail',
    location: 'Zakho',
  },
  {
    slug: 'boutique-hotel',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    size: '24 rooms',
    scope: 'Room-by-room fitting',
    location: 'Erbil',
  },
]

const copy = {
  en: {
    eyebrow: 'Selected projects',
    title: 'Recent spaces we styled from concept to final fitting.',
    description: 'Show premium villas, halls and hospitality work with short details, visual mood and a simple view action.',
    view: 'View details',
    note: 'From measurement to install',
    slugs: {
      'villa-sunrise': { name: 'Villa Sunrise', sub: 'Soft beige layering, motor-ready rail plan and elegant natural textures.' },
      'salon-premium': { name: 'Salon Premium', sub: 'A dramatic event hall package with richer folds and warm lighting balance.' },
      'boutique-hotel': { name: 'Boutique Hotel', sub: 'Quiet blackout comfort with repeatable room styling for a clean luxury finish.' },
    },
  },
  ar: {
    eyebrow: 'مشاريع مختارة',
    title: 'أعمال حديثة قمنا بتنسيقها من الفكرة حتى التركيب النهائي.',
    description: 'اعرض الفلل والصالات ومشاريع الضيافة مع تفاصيل سريعة وصورة جذابة وزر مشاهدة واضح.',
    view: 'عرض التفاصيل',
    note: 'من القياس حتى التركيب',
    slugs: {
      'villa-sunrise': { name: 'فيلا صن رايز', sub: 'طبقات بيج هادئة مع تخطيط سكة جاهز للمحركات ولمسات طبيعية فاخرة.' },
      'salon-premium': { name: 'صالون بريميوم', sub: 'باقة قاعة مناسبات بطيات أعمق وتوازن دافئ مع الإضاءة.' },
      'boutique-hotel': { name: 'فندق بوتيك', sub: 'راحة تعتيم هادئة مع تنسيق متكرر للغرف ولمسة فاخرة نظيفة.' },
    },
  },
  ku: {
    eyebrow: 'پڕۆژە هەڵبژێردراوەکان',
    title: 'شوێنە نوێیەکانمان کە لە بیرۆکەوە تا دامەزراندنی کۆتایی ستایل کراون.',
    description: 'ڤیلا و هۆڵ و پڕۆژەی میوانداری پیشان بدە لەگەڵ وردەکاریی کورتی پێناسەدار و دوگمەی بینین.',
    view: 'بینینی وردەکاری',
    note: 'لە پێوانە تا دامەزراندن',
    slugs: {
      'villa-sunrise': { name: 'ڤیلای Sunrise', sub: 'توێژەی بیجی نەرم لەگەڵ پلانی ڕەیلی ئامادە بۆ ماتۆر و تێکستی سروشتی لوکس.' },
      'salon-premium': { name: 'هۆڵی Premium', sub: 'پاکێجێکی هۆڵی ئاهەنگ بە چینە دەرکەوتووتر و هاوسەنگی گەرم لەگەڵ ڕووناکی.' },
      'boutique-hotel': { name: 'هوتێلی Boutique', sub: 'ئاسودەیی بلەکاوت و ستایلی یەکسان بۆ ژوورەکان بە کۆتایییەکی پاک و لوکس.' },
    },
  },
  tr: {
    eyebrow: 'Öne çıkan projeler',
    title: 'Fikirden son montaja kadar şekillendirdiğimiz yeni mekanlar.',
    description: 'Villalar, salonlar ve otel işleri için kısa detay, güçlü görsel ve net bir görüntüleme aksiyonu ekleyin.',
    view: 'Detayı görüntüle',
    note: 'Ölçüden montaja',
    slugs: {
      'villa-sunrise': { name: 'Villa Sunrise', sub: 'Motor uyumlu ray planı, yumuşak bej katmanlar ve doğal lüks dokular.' },
      'salon-premium': { name: 'Salon Premium', sub: 'Daha güçlü pileler ve sıcak ışık dengesiyle etkileyici salon paketi.' },
      'boutique-hotel': { name: 'Butik Otel', sub: 'Sessiz blackout konforu ve tekrarlanabilir oda stiliyle temiz lüks görünüm.' },
    },
  },
} as const

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">{t.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>
          </div>
          <div className="rounded-full border border-border bg-secondary/70 px-5 py-3 text-sm font-medium text-muted-foreground">
            {t.note}
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => {
            const detail = t.slugs[project.slug as keyof typeof t.slugs]
            return (
              <article
                key={project.slug}
                className={cn(
                  'group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl',
                  index === 0 ? 'xl:col-span-2' : '',
                )}
              >
                <div className={cn('grid gap-0', index === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : '')}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={detail.name} className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/70">0{index + 1}</p>
                        <h3 className="mt-2 text-2xl font-semibold">{detail.name}</h3>
                      </div>
                      <span className="rounded-full bg-white/12 px-4 py-2 text-sm backdrop-blur-md">{project.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 lg:p-8">
                    <p className="text-muted-foreground">{detail.sub}</p>
                    <div className="mt-6 grid gap-3">
                      <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 px-4 py-3 text-sm">
                        <Ruler className="h-4 w-4 text-primary" />
                        <span>{project.size}</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 px-4 py-3 text-sm">
                        <Layers3 className="h-4 w-4 text-primary" />
                        <span>{project.scope}</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 px-4 py-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <Button asChild className="mt-6 rounded-full px-6">
                      <Link href={localizePath(locale, '/contact')}>
                        {t.view}
                        <ArrowRight className="ms-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
