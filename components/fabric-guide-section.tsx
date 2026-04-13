import Link from 'next/link'
import { ArrowRight, Layers3, Ruler, SwatchBook } from 'lucide-react'
import { Locale, localizePath } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

const icons = [Layers3, SwatchBook, Ruler]

function getGuides(locale: Locale) {
  return [
    {
      title: lt(locale, 'Layering logic', 'منطق الطبقات', 'لۆجیکی چینەکان', 'Katman mantığı'),
      text: lt(locale, 'Pair sheer, blackout and decorative fabric in one package so the room works day and night.', 'اجمع الشفاف والبلاك أوت والقماش الزخرفي في باقة واحدة.', 'شەفاف و بلەکاوت و پارچەی دیزاین لە یەک پاکێجدا کۆبکەوە.', 'Tül, blackout ve dekoratif kumaşı tek pakette birleştirin.'),
      points: [
        lt(locale, 'Soft daylight front layer', 'طبقة ضوء أمامية ناعمة', 'چینی پێشەوەی ڕووناکیی نەرم', 'Yumuşak gün ışığı katmanı'),
        lt(locale, 'Privacy and thermal lining', 'بطانة للخصوصية والحرارة', 'لاینینگی تایبەتی و گەرما', 'Mahremiyet ve ısı astarı'),
      ],
    },
    {
      title: lt(locale, 'Colour direction', 'اتجاه الألوان', 'ئاراستەی ڕەنگ', 'Renk yönü'),
      text: lt(locale, 'Use calmer beige, brown, white and grey bases, then lift the room with one accent tone.', 'استخدم أساسات هادئة ثم أضف لوناً واحداً بارزاً.', 'بناغەی هێمن بەکاربهێنە و دواتر یەک ڕەنگی سەرنجڕاکێش زیاد بکە.', 'Sakin baz renkler kullanıp tek bir vurgu rengi ekleyin.'),
      points: [
        lt(locale, 'Neutral-first palette', 'لوحة محايدة أولاً', 'پالێتی هێمن یەکەم', 'Nötr öncelikli palet'),
        lt(locale, 'Accent from cushions or trims', 'لمسة من الوسائد أو الحواف', 'ئاکسێنت لە بالین یان تریم', 'Vurgu yastık veya trimden'),
      ],
    },
    {
      title: lt(locale, 'Measure before style', 'القياس قبل الأسلوب', 'پێوانە پێش ستایل', 'Stilden önce ölçü'),
      text: lt(locale, 'Better folds come from correct drop, rail extension and stack-back planning.', 'الطيّات الأفضل تبدأ من طول صحيح وتمديد القضيب والتخطيط.', 'چینی باش لە درووستبوونی درێژی دروست و پلانی ڕەیل دەستپێدەکات.', 'Daha iyi pileler doğru ölçü ve ray planıyla başlar.'),
      points: [
        lt(locale, 'Ceiling or wall mount decision', 'قرار السقف أو الجدار', 'بڕیاری سەقف یان دیوار', 'Tavan veya duvar montajı'),
        lt(locale, 'Full-width fullness planning', 'تخطيط الامتلاء الكامل', 'پلانی پڕبوونی تەواو', 'Tam dolgunluk planı'),
      ],
    },
  ]
}

export function FabricGuideSection({ locale }: { locale: Locale }) {
  const guides = getGuides(locale)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {lt(locale, 'Curtain guide', 'دليل الستائر', 'ڕێنمایی پەردە', 'Perde rehberi')}
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
              {lt(locale, 'Add a helpful section that teaches clients how to choose curtain combinations.', 'أضف قسماً مفيداً يشرح للعميل كيف يختار تركيبة الستائر.', 'بەشێکی بەسوود زیاد بکە کە فێری کڕیار بکات چۆن تێکەڵی پەردە هەڵبژێرێت.', 'Müşteriye perde kombinasyonu seçmeyi anlatan faydalı bir bölüm ekleyin.')}
            </h2>
          </div>
          <Link href={localizePath(locale, '/contact')} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
            {lt(locale, 'Ask for advice', 'اطلب استشارة', 'ڕاوێژ وەربگرە', 'Danışmanlık iste')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {guides.map((guide, index) => {
            const Icon = icons[index]
            return (
              <article key={guide.title} className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{guide.title}</h3>
                <p className="mt-3 text-muted-foreground">{guide.text}</p>
                <div className="mt-5 grid gap-3">
                  {guide.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
