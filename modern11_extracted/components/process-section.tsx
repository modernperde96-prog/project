import { ClipboardList, DraftingCompass, Ruler, ShieldCheck } from 'lucide-react'
import { Locale } from '@/lib/i18n'

const copy = {
  en: {
    eyebrow: 'How it works',
    title: 'A cleaner client journey for the home page.',
    description: 'This section helps visitors understand the buying process quickly and makes the website feel more complete.',
    steps: [
      { title: 'Share your room', text: 'Send photos, measurements or inspiration so the team can guide style and fabric direction.' },
      { title: 'Get a curated plan', text: 'Receive fabric ideas, rail suggestions, blackout options and a mood-focused proposal.' },
      { title: 'Measure and prepare', text: 'Confirm dimensions, lining and installation details with a polished production checklist.' },
      { title: 'Install with confidence', text: 'Final fitting, finishing touches and a more premium presentation for the complete space.' },
    ],
  },
  ar: {
    eyebrow: 'كيف نعمل',
    title: 'رحلة عميل أوضح وأكثر ترتيباً في الصفحة الرئيسية.',
    description: 'هذا القسم يشرح خطوات الشراء بسرعة ويجعل الموقع يبدو أكثر اكتمالاً واحترافية.',
    steps: [
      { title: 'شاركنا الغرفة', text: 'أرسل الصور أو القياسات أو الإلهام ليتم توجيهك نحو النمط والقماش المناسب.' },
      { title: 'استلم خطة منسقة', text: 'تحصل على أفكار أقمشة واقتراحات سكة وخيارات تعتيم ومقترح بصري متناسق.' },
      { title: 'القياس والتحضير', text: 'تأكيد المقاسات والبطانة وتفاصيل التركيب مع قائمة تجهيز واضحة.' },
      { title: 'تركيب بثقة', text: 'تركيب نهائي ولمسات ختامية وعرض أكثر فخامة للمكان الكامل.' },
    ],
  },
  ku: {
    eyebrow: 'چۆنیەتی کارکردن',
    title: 'گەشتێکی پاکتر بۆ کڕیار لە پەڕەی سەرەکی.',
    description: 'ئەم بەشە هەنگاوەکانی کڕین بە خێرایی ڕووندەکاتەوە و وێبسایتەکە تەواوتر دەکات.',
    steps: [
      { title: 'ژوورەکەت بنێرە', text: 'وێنە و پێوانە یان ئیلهام بنێرە تاکو تیمەکە ئاراستەی ستایل و پارچەت بدات.' },
      { title: 'پلانی هەڵبژێردراو وەربگرە', text: 'بیرۆکەی پارچە و ڕەیل و هەڵبژاردنی بلەکاوت و پێشنیاری هاوسەنگ وەردەگریت.' },
      { title: 'پێوانە و ئامادەکاری', text: 'قەبارە و لاینینگ و وردەکاری دامەزراندن پشتڕاست دەکرێتەوە لەگەڵ چێکلستی ڕێکخراو.' },
      { title: 'دامەزراندن بە دڵنیایی', text: 'دامەزراندنی کۆتایی و تاچە لوکسەکان بۆ تەواوبوونی شوێنەکە.' },
    ],
  },
  tr: {
    eyebrow: 'Nasıl çalışıyoruz',
    title: 'Ana sayfa için daha net bir müşteri yolculuğu.',
    description: 'Bu bölüm satın alma sürecini hızlı anlatır ve siteyi daha dolu, daha profesyonel gösterir.',
    steps: [
      { title: 'Odanızı paylaşın', text: 'Ekip doğru stil ve kumaşı yönlendirsin diye fotoğraf, ölçü veya ilham gönderin.' },
      { title: 'Özel plan alın', text: 'Kumaş fikirleri, ray önerileri, blackout seçenekleri ve dengeli bir görsel plan alın.' },
      { title: 'Ölçü ve hazırlık', text: 'Ölçüler, astar ve montaj detayları temiz bir üretim kontrol listesiyle netleşsin.' },
      { title: 'Güvenle montaj', text: 'Son dokunuşlar ve mekanın tamamı için daha premium bir teslim görünümü.' },
    ],
  },
} as const

const icons = [ClipboardList, DraftingCompass, Ruler, ShieldCheck]

export function ProcessSection({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <section className="bg-secondary/35 py-24" id="process">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {t.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <article key={step.title} className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
