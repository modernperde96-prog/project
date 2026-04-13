import { CheckCircle2, Handshake, Layers3, PackageCheck, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { Dictionary, Locale, partnerCards } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const partnerIcons = [Handshake, Layers3, PackageCheck, CheckCircle2, ShieldCheck, Sparkles]

const partnerImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
]

export function PartnersSection({ locale, dict, compact = false }: { locale: Locale; dict: Dictionary; compact?: boolean }) {
  const eyebrow = lt(locale, 'Our partners', 'شركاؤنا', 'هاوبەشەکانمان', 'Partnerlerimiz')
  const headline = compact
    ? lt(locale, 'A cleaner partner presentation with space for real supplier media.', 'عرض أنظف للشركاء مع مساحة لوسائط الموردين الحقيقية.', 'پێشاندانی پاکتر بۆ هاوبەشەکان لەگەڵ شوێن بۆ میدیای ڕاستەقینەی دابینکەر.', 'Gerçek tedarikçi medyası için alan bırakan daha temiz partner sunumu.')
    : dict.pages.partners.title
  const intro = compact
    ? lt(
        locale,
        'The home section now feels like a curated network instead of a heavy logo wall. Each card can later hold a real supplier logo, product photo or brand mark.',
        'قسم الصفحة الرئيسية أصبح أقرب إلى شبكة منسقة بدلاً من جدار شعارات ثقيل. يمكن لكل بطاقة لاحقاً أن تحمل شعاراً حقيقياً أو صورة منتج أو هوية العلامة.',
        'بەشی سەرەکییەکە ئێستا زیاتر وەک تۆڕێکی هەڵبژێردراو وایە نەک دیوارێکی قورس لە لۆگۆ. هەر کارتێک دواتر دەتوانێت لۆگۆی ڕاستەقینە یان وێنەی بەرهەم هەڵگرێت.',
        'Ana sayfa bölümü artık ağır bir logo duvarı yerine seçilmiş bir ağ gibi hissediyor. Her kart daha sonra gerçek logo, ürün fotoğrafı veya marka işareti taşıyabilir.',
      )
    : dict.pages.partners.description

  const highlights = [
    lt(locale, 'Rail systems', 'أنظمة القضبان', 'سیستەمی ڕەیل', 'Ray sistemleri'),
    lt(locale, 'Fabric mills', 'مصانع الأقمشة', 'کارگەکانی پارچە', 'Kumaş üreticileri'),
    lt(locale, 'Motor support', 'دعم المحركات', 'پشتیوانی ماتۆر', 'Motor desteği'),
    lt(locale, 'Project finishing', 'تشطيبات المشاريع', 'تەواوکردنی پڕۆژە', 'Proje bitişleri'),
    lt(locale, 'Custom installation', 'تركيب مخصص', 'دامەزراندنی تایبەتی', 'Özel montaj'),
    lt(locale, 'Luxury styling', 'تنسيق فاخر', 'ستایلکردنی لوکس', 'Lüks stil'),
  ]

  const workflow = [
    {
      title: lt(locale, 'Supplier selection', 'اختيار المورد', 'هەڵبژاردنی دابینکەر', 'Tedarikçi seçimi'),
      text: lt(locale, 'We match each room type with the right fabric or rail partner before final recommendation.', 'نطابق كل نوع غرفة مع شريك القماش أو القضبان المناسب قبل التوصية النهائية.', 'هەر جۆرە ژوورێک لەگەڵ دابینکەری گونجاوی پارچە یان ڕەیل تێکدەخەین پێش پێشنیاری کۆتایی.', 'Her oda tipini son öneriden önce doğru kumaş veya ray partneriyle eşleştiriyoruz.'),
    },
    {
      title: lt(locale, 'Presentation & samples', 'العرض والعينات', 'پێشاندان و سامپلەکان', 'Sunum ve numuneler'),
      text: lt(locale, 'Real fabric photos, swatches and videos can be shown inside the partner presentation flow.', 'يمكن عرض صور الأقمشة الحقيقية والعينات والفيديوهات داخل مسار عرض الشركاء.', 'وێنەی ڕاستەقینەی پارچە و سامپل و ڤیدیۆ دەتوانرێت لە ناو فلووی پێشاندانی هاوبەشەکان نیشان بدرێت.', 'Gerçek kumaş fotoğrafları, numuneler ve videolar partner sunum akışında gösterilebilir.'),
    },
    {
      title: lt(locale, 'Project follow-through', 'متابعة المشروع', 'شوێنکەوتنی پڕۆژە', 'Proje takibi'),
      text: lt(locale, 'After approval, we keep the chain clear from sourcing to styling to installation.', 'بعد الموافقة نحافظ على السلسلة واضحة من التوريد إلى التنسيق ثم التركيب.', 'دوای پەسەندکردن زنجیرەکە لە دابینکردنەوە تا ستایلکردن و دامەزراندن ڕوون دەهێڵین.', 'Onaydan sonra tedarikten stile ve montaja kadar zinciri net tutuyoruz.'),
    },
  ]

  return (
    <section className={cn(compact ? 'py-24' : 'py-20')} id="partners">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2.4rem] border border-border bg-card shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(192,32,38,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.55))] p-8 dark:bg-[radial-gradient(circle_at_top_left,rgba(192,32,38,0.18),transparent_45%),linear-gradient(180deg,rgba(18,18,26,0.88),rgba(18,18,26,0.72))] xl:border-b-0 xl:border-e xl:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
              <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">{headline}</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{intro}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[1.7rem] border border-border/70 bg-background/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-primary">
                    {lt(locale, 'Ready for real logos, photos and media', 'جاهز للشعارات والصور والوسائط الحقيقية', 'ئامادەی لۆگۆ و وێنە و میدیای ڕاستەقینە', 'Gerçek logo, fotoğraf ve medya için hazır')}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {lt(locale, 'This layout is designed so each partner block can later receive its real brand asset without breaking the design.', 'تم تصميم هذا التخطيط بحيث يمكن لكل كتلة شريك أن تستقبل أصول العلامة الحقيقية لاحقاً دون كسر التصميم.', 'ئەم لایەوتە ئاوا دیزاین کراوە کە هەر بلۆکی هاوبەشێک دواتر دەتوانێت ئەسەتی ڕاستەقینەی براندەکە وەربگرێت بەبێ تێکشکاندنی دیزاین.', 'Bu düzen her partner bloğunun daha sonra gerçek marka varlığını tasarımı bozmadan alabilmesi için hazırlandı.')}
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-border/70 bg-background/90 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-primary">
                    {lt(locale, 'Good for showroom, website and project pitch', 'مناسب للمعرض والموقع وعرض المشاريع', 'گونجاو بۆ شۆڕۆم و ماڵپەڕ و پێشکەشکردنی پڕۆژە', 'Showroom, web sitesi ve proje sunumu için uygun')}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {lt(locale, 'The same partner presentation style can be reused in a dedicated page, inside proposals or in project stories.', 'يمكن إعادة استخدام نفس أسلوب عرض الشركاء في صفحة مستقلة أو داخل العروض أو قصص المشاريع.', 'هەمان ستایلی پێشاندانی هاوبەش دەتوانرێت لە پەڕەیەکی جیاواز یان ناو پێشنیار و چیرۆکی پڕۆژە بەکاربهێندرێت.', 'Aynı partner sunum stili ayrı sayfada, tekliflerde veya proje hikâyelerinde tekrar kullanılabilir.')}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background/90 px-4 py-2 text-sm shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-8 xl:p-10">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {partnerCards.map((partner, index) => {
                  const Icon = partnerIcons[index % partnerIcons.length]
                  return (
                    <article key={partner.name} className="group overflow-hidden rounded-[1.8rem] border border-border/80 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                      <div className="relative h-24 overflow-hidden border-b border-border/70 bg-[linear-gradient(135deg,rgba(192,32,38,0.14),rgba(192,32,38,0.02),rgba(214,191,162,0.22))]">
                        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:16px_16px]" />
                        <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-3">
                          <div className="rounded-[1.1rem] border border-white/60 bg-white/75 px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                            {partner.name}
                          </div>
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                            <Icon className="h-5 w-5" />
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                          {lt(locale, 'Partner role', 'دور الشريك', 'ڕۆڵی هاوبەش', 'Partner rolü')}
                        </p>
                        <p className="mt-2 text-sm font-semibold">{partner.tag}</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {lt(locale, 'Place a real supplier logo, a fabric shot or a collaboration image inside this media area later.', 'يمكنك لاحقاً وضع شعار المورد الحقيقي أو صورة قماش أو صورة تعاون داخل هذه المساحة.', 'دەتوانیت دواتر لۆگۆی ڕاستەقینەی دابینکەر یان وێنەی پارچە یان وێنەی هاوکاری لە ناو ئەم شوێنە دابنێیت.', 'Daha sonra bu alana gerçek tedarikçi logosu, kumaş fotoğrafı veya iş birliği görseli ekleyebilirsiniz.')}
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>

              {!compact ? (
                <div className="mt-8 grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
                  <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary/35">
                    <div className="border-b border-border/70 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        {lt(locale, 'Partner reel', 'ريل الشركاء', 'ڕیلی هاوبەشەکان', 'Partner reelsi')}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {lt(locale, 'Use this area for collaboration videos, supplier stories or installation clips.', 'استخدم هذه المساحة لفيديوهات التعاون أو قصص الموردين أو لقطات التركيب.', 'ئەم شوێنە بەکاربهێنە بۆ ڤیدیۆی هاوکاری یان چیرۆکی دابینکەر یان کلیپی دامەزراندن.', 'Bu alanı iş birliği videoları, tedarikçi hikâyeleri veya montaj klipleri için kullanın.')}
                      </p>
                    </div>
                    <div className="p-5">
                      <div className="relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card">
                        <video controls poster={partnerImages[0]} className="aspect-[16/10] w-full object-cover">
                          <source src="/videos/modern-perde-brand.mp4" />
                        </video>
                        <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/92 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur">
                          <PlayCircle className="h-4 w-4 text-primary" />
                          {lt(locale, 'Partner presentation reel', 'ريل عرض الشركاء', 'ڕیلی پێشاندانی هاوبەشەکان', 'Partner sunum reelsi')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {partnerImages.slice(0, 2).map((image, index) => (
                      <article key={image} className="overflow-hidden rounded-[1.8rem] border border-border bg-background shadow-sm">
                        <img src={image} alt="Partner showcase" className="aspect-[16/9] w-full object-cover" />
                        <div className="p-4">
                          <h3 className="text-base font-semibold">
                            {index === 0
                              ? lt(locale, 'Supplier moodboard presentation', 'عرض مودبورد المورد', 'پێشاندانی موودبۆردی دابینکەر', 'Tedarikçi moodboard sunumu')
                              : lt(locale, 'Installed result overview', 'نظرة على النتيجة بعد التركيب', 'نێوانێک لە ئەنجامی دوای دامەزراندن', 'Kurulum sonrası sonuç görünümü')}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {index === 0
                              ? lt(locale, 'Great place for sample photos, fabric closeups and references from the partner side.', 'مكان ممتاز لصور العينات ولقطات القماش والمراجع من جهة الشريك.', 'شوێنێکی باشە بۆ وێنەی سامپل و نزیکەوەی پارچە و مەرجه‌کانی لای هاوبەش.', 'Numune fotoğrafları, kumaş yakın çekimleri ve partner referansları için iyi bir alan.')
                              : lt(locale, 'Show the final room, hardware finish and the quality level delivered by the network.', 'أظهر الغرفة النهائية وتشطيب الإكسسوار ومستوى الجودة الذي تقدمه الشبكة.', 'ژووری کۆتایی و فینیشی ئاکسسواری و ئاستی کوالیتییەکەی تۆڕەکە پیشان بدە.', 'Nihai oda, donanım bitişi ve ağın sunduğu kalite seviyesini gösterin.')}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-6 rounded-[1.8rem] border border-border bg-secondary/35 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(locale, 'Support workflow', 'مسار الدعم', 'فلووی پشتیوانی', 'Destek akışı')}
                </p>
                <div className={cn('mt-4 grid gap-3', compact ? 'md:grid-cols-3' : 'lg:grid-cols-3')}>
                  {workflow.map((item, index) => (
                    <div key={item.title} className="rounded-[1.4rem] border border-border bg-background p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{index + 1}</span>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
