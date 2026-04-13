import Link from 'next/link'
import { Layers as Layers3, SunMedium, ShieldHalf, Sparkles, Star } from 'lucide-react'
import { Dictionary, Locale, localizePath } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const featureIcons = [SunMedium, Layers3, ShieldHalf, Sparkles]

const cardImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
]

export function CollectionsShowcase({ locale }: { locale: Locale; dict: Dictionary }) {
  const cards = [
    {
      title: lt(locale, 'Sunscreen curtains', 'ستائر صن سكرين', 'پەردەی سانسکرین', 'Sunscreen perdeler'),
      desc: lt(
        locale,
        'Keep the daylight, soften the heat and still protect your privacy in living spaces and offices.',
        'تحافظ على ضوء النهار وتخفف الحرارة وتمنح خصوصية أنيقة في المعيشة والمكاتب.',
        'ڕووناکی ڕۆژ پارێزراو دەهێڵێت، گەرما نرمدەکات و هێشتا تایبەتمەندیی جوان دەدات لە ژووری دانیشتن و ئۆفیس.',
        'Gün ışığını korur, ısıyı yumuşatır ve yaşam alanları ile ofislerde zarif mahremiyet sunar.',
      ),
      href: '/collections#sheers',
      badge: lt(locale, 'Popular', 'شائع', 'باو', 'Popüler'),
    },
    {
      title: lt(locale, 'Layered curtain styling', 'تنسيق الستائر الطبقية', 'ستایلکردنی پەردەی چینی', 'Katmanlı perde stili'),
      desc: lt(
        locale,
        'Combine sheer, fabric and blackout in one fuller window design that feels rich day and night.',
        'ادمج الشفاف والقماش والبلاك أوت في نافذة واحدة تبدو أغنى نهاراً وليلاً.',
        'شیەر و پارچە و بلاک‌ئاوت پێکەوە بکە لە یەک دیزاینی پڕتری پەنجەرەدا کە شەو و ڕۆژ دەوڵەمەند هەست بکات.',
        'Tül, kumaş ve blackout katmanlarını bir araya getirerek gece gündüz zengin bir pencere görünümü oluşturun.',
      ),
      href: '/collections#curtains',
      badge: null,
    },
    {
      title: lt(locale, 'Blackout comfort', 'راحة البلاك أوت', 'ئاسوودەیی بلەکاوت', 'Blackout konforu'),
      desc: lt(
        locale,
        'Bedroom comfort, cinema darkness and softer temperature control for private rooms.',
        'راحة غرف النوم وتعتيم قوي وتحكم ألطف بالحرارة للغرف الخاصة.',
        'ئاسوودەیی ژووری نوستن و تاریککردنی باش و کۆنترۆڵی نەرمتری پلەی گەرما بۆ ژوورە تایبەتەکان.',
        'Yatak odası konforu, güçlü karartma ve özel odalar için daha yumuşak ısı kontrolü sağlar.',
      ),
      href: '/collections#blackout',
      badge: lt(locale, 'Best Seller', 'الأكثر مبيعاً', 'فرۆشترین', 'En Çok Satan'),
    },
    {
      title: lt(locale, 'Custom sewing details', 'تفاصيل خياطة حسب الطلب', 'وردەکاریی دروونی تاڵبکراو', 'Özel dikiş detayları'),
      desc: lt(
        locale,
        'Pleats, wave headings, trims and fabric direction can all be tailored for your exact room style.',
        'الثنيات والويف والحواف واتجاه القماش كلها يمكن تفصيلها بحسب الغرفة.',
        'چین و وێڤ و لێوار و ئاراستەی پارچە هەموویان دەتوانرێت بۆ ستایلی تایبەتی ژوورەکەت ڕێکبخرێت.',
        'Pile, wave başlık, biyeler ve kumaş yönü odanıza göre tamamen uyarlanabilir.',
      ),
      href: '/contact',
      badge: null,
    },
  ]

  const primaryLink = lt(locale, 'See curtain catalog', 'شاهد كتالوج الستائر', 'کاتەلۆگی پەردە ببینە', 'Perde kataloğunu gör')

  return (
    <section className="py-24" id="curtain-solutions">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2.4rem] border border-border bg-card shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-border bg-secondary/35 p-8 xl:border-b-0 xl:border-e xl:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {lt(locale, 'Curtain directions', 'اتجاهات الستائر', 'ئاراستەکانی پەردە', 'Perde yönleri')}
              </p>
              <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
                {lt(
                  locale,
                  'Instead of a generic collections block, show practical curtain solutions for real rooms.',
                  'بدلاً من قسم مجموعات عام، اعرض حلول ستائر عملية لغرف حقيقية.',
                  'لە جیاتی بەشی گشتیی کۆلێکشن، چارەسەری پەردەی کارا بۆ ژووری ڕاستەقینە پیشان بدە.',
                  'Genel bir koleksiyon alanı yerine gerçek odalar için pratik perde çözümleri gösterin.',
                )}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {lt(
                  locale,
                  'This refreshed section focuses on sunscreen curtains, layered softness and room-ready comfort so visitors understand the use before opening the full catalog.',
                  'هذا القسم الجديد يركز على ستائر الصن سكرين والطبقات الناعمة وراحة الغرف حتى يفهم الزائر الاستخدام قبل فتح الكتالوج الكامل.',
                  'ئەم بەشە نوێیە سەرنج دەدات بە پەردەی سانسکرین و نرمیی چینەکان و ئاسوودەیی ئامادەی ژوور تاکو سەردانکەر پێش کردنەوەی کاتەلۆگ تێبگات لە بەکارهێنان.',
                  'Bu yenilenen alan sunscreen perdeler, katmanlı yumuşaklık ve oda hazır konfora odaklanır; ziyaretçi tam kataloğu açmadan önce kullanımı anlar.',
                )}
              </p>

              <Link
                href={localizePath(locale, '/collections')}
                className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {primaryLink}
              </Link>
            </div>

            <div className="grid gap-5 p-6 lg:grid-cols-2 lg:p-8 xl:p-10">
              {cards.map((card, index) => {
                const Icon = featureIcons[index] ?? Sparkles
                return (
                  <Link
                    key={card.title}
                    href={localizePath(locale, card.href)}
                    className="group relative overflow-hidden rounded-[1.8rem] border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    {/* Image Header */}
                    <div className="relative h-36 overflow-hidden">
                      <img 
                        src={cardImages[index]} 
                        alt={card.title ?? ''} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      {/* Badge */}
                      {card.badge && (
                        <span className="absolute top-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground shadow-lg">
                          <Star className="h-3 w-3" /> {card.badge}
                        </span>
                      )}
                      
                      {/* Icon overlay */}
                      <div className="absolute -bottom-5 end-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background shadow-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 pt-3">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">{card.desc}</p>
                      <span className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {lt(locale, 'Open section', 'افتح القسم', 'بەشەکە بکەرەوە', 'Bölümü aç')}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
