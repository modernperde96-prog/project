import Link from 'next/link'
import { ArrowRight, Layers3, Ruler, Sofa, Sparkles } from 'lucide-react'
import { Locale, localizePath } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const roomIcons = [Sofa, Sparkles, Ruler, Layers3]

function getRooms(locale: Locale) {
  return [
    {
      title: lt(locale, 'Salon statement', 'لمسة الصالة', 'دەرکەوتنی هۆڵ', 'Salon görünümü'),
      text: lt(locale, 'Layered drapes, elegant sheers and warm folds for guest-facing spaces.', 'طبقات أنيقة وشفافيات وطيّات دافئة للمساحات الرسمية.', 'چینی جوان و شەفافی و چینی گەرم بۆ شوێنی میوانداری.', 'Misafir alanları için katmanlı drape, tül ve sıcak pileler.'),
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      tag: lt(locale, 'Premium living', 'معيشة فاخرة', 'ژیانی لوکس', 'Premium yaşam'),
    },
    {
      title: lt(locale, 'Bedroom calm', 'هدوء غرفة النوم', 'ئارامی ژووری نوستن', 'Yatak odası sakinliği'),
      text: lt(locale, 'Blackout, softer textures and privacy-focused layering for better rest.', 'بلاك أوت وملمس أنعم وطبقات للخصوصية والراحة.', 'بلەکاوت و نەرمیی زیاترو چینی تایبەتی بۆ حەسانەوە.', 'Daha iyi dinlenme için blackout ve daha yumuşak katmanlar.'),
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      tag: lt(locale, 'Blackout comfort', 'راحة البلاك أوت', 'ئاسوودەیی بلەکاوت', 'Blackout konforu'),
    },
    {
      title: lt(locale, 'Villa scale', 'حجم الفلل', 'قەبارەی ڤیلا', 'Villa ölçüsü'),
      text: lt(locale, 'Large spans, hidden tracks and motor-ready planning for taller glazing.', 'فتحات كبيرة ومسارات مخفية وتخطيط جاهز للموتور.', 'پەنجەرەی گەورە و ڕەیلی شاراوە و پلانی ماتۆر بۆ بەرزی زیاتر.', 'Büyük açıklıklar ve motor hazır ray planı.'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      tag: lt(locale, 'Motor ready', 'جاهز للموتور', 'ئامادەی ماتۆر', 'Motor hazır'),
    },
    {
      title: lt(locale, 'Hotel & office', 'الفنادق والمكاتب', 'هوتێل و ئۆفیس', 'Otel ve ofis'),
      text: lt(locale, 'Repeatable specifications, clean lines and durable hardware selections.', 'مواصفات قابلة للتكرار وخطوط نظيفة وإكسسوارات متينة.', 'ستانداردی دووبارەکرانەوە و هێڵی پاک و هاردوێری بەهێز.', 'Tekrarlanabilir detaylar ve dayanıklı donanımlar.'),
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
      tag: lt(locale, 'Project package', 'باقة مشاريع', 'پاکێجی پڕۆژە', 'Proje paketi'),
    },
  ]
}

export function RoomSolutionsSection({ locale }: { locale: Locale }) {
  const rooms = getRooms(locale)

  return (
    <section className="bg-secondary/35 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {lt(locale, 'Curtain ideas for rooms', 'أفكار الستائر للغرف', 'بیرۆکەی پەردە بۆ ژوورەکان', 'Odalar için perde fikirleri')}
          </p>
          <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
            {lt(locale, 'Add richer home-page sections about real curtain use, not only products.', 'أضف أقساماً أغنى في الصفحة الرئيسية عن استخدام الستائر الحقيقي.', 'بەشی زیاتر و دەوڵەمەندتر بۆ بەکارهێنانی ڕاستەقینەی پەردە زیاد بکە.', 'Ana sayfaya yalnız ürün değil gerçek perde kullanım senaryoları ekleyin.')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {lt(locale, 'These cards help clients imagine what works for salons, bedrooms, villas and project spaces.', 'هذه البطاقات تساعد العميل على تخيل ما يناسب الصالات وغرف النوم والفلل والمساحات الخاصة بالمشاريع.', 'ئەم کارتانه یارمەتی کڕیار دەدەن بۆ وێناکردنی گونجاوی هۆڵ و ژووری نوستن و ڤیلا و پڕۆژە.', 'Bu kartlar salon, yatak odası, villa ve proje alanları için doğru çözümü hayal etmeyi kolaylaştırır.')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {rooms.map((room, index) => {
            const Icon = roomIcons[index]
            return (
              <article key={room.title} className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative overflow-hidden">
                    <img src={room.image} alt={room.title} className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-sm">
                      {room.tag}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-6 lg:p-8">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold">{room.title}</h3>
                      <p className="mt-3 text-muted-foreground">{room.text}</p>
                    </div>
                    <Link href={localizePath(locale, '/contact')} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      {lt(locale, 'Request this style', 'اطلب هذا الأسلوب', 'ئەم ستایلە داوا بکە', 'Bu stili iste')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
