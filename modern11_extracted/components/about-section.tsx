import Link from 'next/link'
import { Award, Layers as Layers3, Sparkles, LayoutGrid, Ruler, Scissors, Wrench, ShieldCheck, Sofa, SunMedium, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dictionary, Locale, localizePath } from '@/lib/i18n'

const icons = [Award, Layers3, Sparkles, LayoutGrid]
const serviceIcons = [Ruler, Scissors, Wrench]
const promiseIcons = [ShieldCheck, Sofa, SunMedium, Workflow]
const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export function AboutSection({ locale, dict, compact = false }: { locale: Locale; dict: Dictionary; compact?: boolean }) {
  const serviceSteps = [
    {
      title: lt(locale, 'Measure with care', 'قياس بعناية', 'پێوانەکردن بە وریایی', 'Özenli ölçü'),
      text: lt(locale, 'We check drop, width and rail direction before any final sewing starts.', 'نفحص الطول والعرض واتجاه القضيب قبل بدء الخياطة النهائية.', 'پێش دەستپێکردنی دروونی کۆتایی، درێژی و پانی و ئاراستەی ڕەیل دەپشکنین.', 'Son dikişten önce düşüş, genişlik ve ray yönünü kontrol ediyoruz.'),
    },
    {
      title: lt(locale, 'Fabric matching', 'مطابقة القماش', 'گونجاندنی پارچە', 'Kumaş eşleme'),
      text: lt(locale, 'Texture, lining and fold style are matched to the room mood and light level.', 'نطابق الملمس والبطانة ونمط الثنيات مع جو الغرفة ومستوى الإضاءة.', 'تەکسچەر و لاینینگ و شێوازی چین لەگەڵ هەوای ژوور و ئاستی ڕووناکی دەگونجێنرێت.', 'Doku, astar ve pile stili odanın havası ve ışığına göre eşleştirilir.'),
    },
    {
      title: lt(locale, 'Install and finish', 'تركيب ولمسة نهائية', 'دامەزراندن و تاچی کۆتایی', 'Montaj ve son dokunuş'),
      text: lt(locale, 'Rails, hooks and final styling are adjusted on site so the curtain sits correctly.', 'نضبط القضبان والخطافات واللمسات النهائية في الموقع ليجلس القماش بشكل صحيح.', 'ڕەیل و هۆک و ستایلی کۆتایی لە شوێنەکەدا ڕێکدەخرێن تاکو پەردەکە دروست دابنیشێت.', 'Ray, kanca ve son stil ayarları yerinde yapılır; perde doğru oturur.'),
    },
  ]

  const fullPagePromises = [
    {
      title: lt(locale, 'Showroom feeling, not only a product shelf', 'إحساس معرض متكامل وليس رف منتجات فقط', 'هەستی شۆڕۆم نەک تەنها ڕەفی بەرهەم', 'Sadece ürün rafı değil, showroom hissi'),
      text: lt(locale, 'We try to present each fabric with the right room mood, rail option and finishing idea so the client imagines the final result more easily.', 'نحاول عرض كل قماش مع جو الغرفة المناسب وخيار القضيب وفكرة التشطيب حتى يتخيل العميل النتيجة النهائية بسهولة أكبر.', 'هەوڵدەدەین هەر پارچەیەک لەگەڵ هەوای ژووری گونجاو و هەڵبژاردەی ڕەیل و بیری تەواوکاری نیشان بدەین تاکو کڕیار بتوانێت ئاسانتر ئەنجامی کۆتایی وێنابکات.', 'Her kumaşı doğru oda havası, ray seçeneği ve bitiş fikriyle sunarak müşterinin sonucu daha kolay hayal etmesini sağlıyoruz.'),
    },
    {
      title: lt(locale, 'Light control with style', 'التحكم بالضوء مع الأناقة', 'کۆنترۆڵی ڕووناکی لەگەڵ جوانکاری', 'Stille ışık kontrolü'),
      text: lt(locale, 'Some rooms need softness, some need privacy and some need blackout. We help clients balance all of that without losing the beauty of the window.', 'بعض الغرف تحتاج نعومة وبعضها يحتاج خصوصية وبعضها يحتاج تعتيماً. نحن نساعد العميل على موازنة ذلك كله دون خسارة جمال النافذة.', 'هەندێک ژوور نەرمی دەوێت و هەندێکیان تایبەتمەندی و هەندێکیان بلەکاوت. ئێمە یارمەتی کڕیار دەدەین هەموو ئەمانە هاوسەنگ بکات بەبێ لەدەستدانی جوانی پەنجەرەکە.', 'Bazı odalar yumuşaklık, bazıları mahremiyet, bazıları blackout ister. Pencerenin güzelliğini kaybetmeden bunları dengelemenize yardımcı oluyoruz.'),
    },
    {
      title: lt(locale, 'Measured for real use', 'قياس مبني على الاستخدام الحقيقي', 'پێوانەی لەسەر بەکارهێنانی ڕاستەقینە', 'Gerçek kullanım için ölçü'),
      text: lt(locale, 'Width, stacking space, ceiling level and opening direction affect the final look. That is why measurement is treated as part of design, not only as numbers.', 'العرض ومساحة التجميع وارتفاع السقف واتجاه الفتح تؤثر كلها في الشكل النهائي، لذلك نتعامل مع القياس كجزء من التصميم وليس مجرد أرقام.', 'پانی و شوێنی کۆبوونەوە و بەرزی سەقف و ئاراستەی کردنەوە هەموویان کاریگەرییان لە شێوەی کۆتایی هەیە، بۆیە پێوانە وەک بەشێک لە دیزاین مامەڵەی لەگەڵ دەکرێت نەک تەنها ژمارە.', 'Genişlik, toplanma alanı, tavan yüksekliği ve açılış yönü sonucu etkiler. Bu yüzden ölçü sadece rakam değil tasarımın parçasıdır.'),
    },
    {
      title: lt(locale, 'One process from idea to install', 'مسار واحد من الفكرة حتى التركيب', 'پرۆسەیەک لە بیرۆکەوە تا دامەزراندن', 'Fikirden montaja tek süreç'),
      text: lt(locale, 'Choosing fabric, checking rails, planning folds and final installation all move inside one connected process so the client does not feel lost between steps.', 'اختيار القماش وفحص القضبان وتخطيط الطيات والتركيب النهائي كلها تسير في مسار مترابط حتى لا يشعر العميل بالتشتت بين الخطوات.', 'هەڵبژاردنی پارچە و پشکنینی ڕەیل و پلانکردنی چین و دامەزراندنی کۆتایی هەموویان لە پرۆسەیەکی بەیەکەوە بەردەوام دەبن تاکو کڕیار لەنێوان هەنگاوەکاندا لەدەست نەچێت.', 'Kumaş seçimi, ray kontrolü, pile planı ve final montaj aynı bağlı sürecin parçası olur; müşteri adımlar arasında kaybolmaz.'),
    },
  ]

  const pageJourney = [
    {
      title: lt(locale, 'Consultation', 'الاستشارة', 'ڕاوێژکاری', 'Danışma'),
      text: lt(locale, 'We start with the room use, desired privacy level and the feeling you want the window to give.', 'نبدأ بوظيفة الغرفة ومستوى الخصوصية المطلوب والإحساس الذي تريد أن تعطيه النافذة.', 'بە دەستپێکردن لە بەکارهێنانی ژوور و ئاستی تایبەتمەندی و ئەو هەستەی کە دەتەوێت پەنجەرەکە بدات دەست پێدەکەین.', 'Sürece odanın kullanımı, istenen mahremiyet seviyesi ve pencerenin vereceği his ile başlıyoruz.'),
    },
    {
      title: lt(locale, 'Selection', 'الاختيار', 'هەڵبژاردن', 'Seçim'),
      text: lt(locale, 'Fabric direction, colour depth, fold style and lining are narrowed to the combinations that really fit the project.', 'يتم تضييق اتجاه القماش وعمق اللون ونوع الطية والبطانة إلى التركيبات التي تناسب المشروع فعلاً.', 'ئاراستەی پارچە و قووڵایی ڕەنگ و جۆری چین و لاینینگ بۆ ئەو تێکەڵانە کەم دەکرێنەوە کە بە ڕاستی گونجاون.', 'Kumaş yönü, renk derinliği, pile stili ve astar gerçekten projeye uyan seçeneklere indirilir.'),
    },
    {
      title: lt(locale, 'Delivery and finish', 'التنفيذ واللمسة النهائية', 'جێبەجێکردن و کۆتایی', 'Teslim ve bitiş'),
      text: lt(locale, 'After sewing and preparation, the final installation is adjusted on site so the drape sits cleanly and opens correctly.', 'بعد الخياطة والتجهيز يتم ضبط التركيب النهائي في الموقع حتى تستقر الستارة بشكل نظيف وتفتح بصورة صحيحة.', 'دوای دروون و ئامادەکاری، دامەزراندنی کۆتایی لە شوێنەکەدا ڕێکدەخرێت تاکو پەردەکە پاک دابنیشێت و دروست بکرێتەوە.', 'Dikiş ve hazırlıktan sonra final montaj yerinde ayarlanır; perde temiz oturur ve doğru açılır.'),
    },
  ]

  const storyItems = compact ? dict.pages.about.story.slice(0, 3) : dict.pages.about.story

  return (
    <section id="about" className="bg-secondary/35 py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
              alt="Modern curtain showroom"
              className="aspect-[4/5] h-full w-full rounded-[1.8rem] object-cover"
            />
            <div className="space-y-4 pt-10">
              <div className="rounded-[1.8rem] border border-border bg-card p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Modern Perde</p>
                <p className="mt-3 text-lg font-semibold">{dict.home.about.body1}</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
                alt="Fabric selection"
                className="aspect-[4/5] h-full w-full rounded-[1.8rem] object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{dict.home.about.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">{compact ? dict.home.about.title : dict.pages.about.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{compact ? dict.home.about.body1 : dict.pages.about.description}</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{compact ? dict.home.about.body2 : dict.pages.about.story[0]}</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{dict.pages.about.story[1]}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {dict.home.about.stats.map((stat, index) => {
                const Icon = icons[index] ?? Sparkles
                return (
                  <div key={stat.label} className="rounded-[1.4rem] border border-border bg-card p-5 shadow-sm">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="mt-4 block text-3xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {serviceSteps.map((step, index) => {
                const Icon = serviceIcons[index] ?? Sparkles
                return (
                  <div key={step.title} className="rounded-[1.35rem] border border-border bg-card p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full px-6">
                <Link href={localizePath(locale, '/contact')}>{dict.home.cta.primary}</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href={localizePath(locale, '/about')}>{dict.nav.about}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {storyItems.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
              <p className="leading-7 text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>

        {!compact ? (
          <>
            <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(locale, 'What makes the brand feel complete', 'ما الذي يجعل العلامة تبدو متكاملة', 'چی وای لێدەکات براندەکە تەواو هەست بکات', 'Markayı bütün hissettiren şeyler')}
                </p>
                <h3 className="mt-4 text-3xl font-serif font-bold">
                  {lt(locale, 'A longer story for the full about page.', 'قصة أطول للصفحة الكاملة من نحن.', 'چیرۆکێکی درێژتر بۆ پەڕەی تەواوی دەربارە.', 'Tam hakkımızda sayfası için daha uzun bir hikâye.')}
                </h3>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {lt(locale, 'The homepage only gives a quick introduction. Here, the goal is to show why Modern Perde is not only selling fabric, but shaping the final mood of the room through material, rails, fold direction and installation detail.', 'الصفحة الرئيسية تقدم تعريفاً سريعاً فقط. هنا الهدف هو توضيح أن مودرن پردە لا يبيع القماش فقط، بل يصنع المزاج النهائي للمكان عبر الخامة والقضيب واتجاه الطيات وتفاصيل التركيب.', 'ماڵپەڕی سەرەکی تەنها ناساندنێکی خێرا دەدات. لێرە ئامانج ئەوەیە پیشان بدرێت کە Modern Perde تەنها پارچە نافڕۆشێت، بەڵکو هەوای کۆتایی ژوور درووست دەکات لە ڕێگەی ماددە و ڕەیل و ئاراستەی چین و وردەکاریی دامەزراندنەوە.', 'Ana sayfa yalnızca kısa bir tanıtım verir. Burada amaç, Modern Perde’nin sadece kumaş satmadığını; malzeme, ray, pile yönü ve montaj detayıyla odanın son havasını kurduğunu göstermektir.')}
                </p>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {lt(locale, 'Clients usually arrive with one small question: “Which curtain is good for this room?” The real answer is bigger than one fabric. It depends on light, privacy, wall tone, ceiling height, window width and the feeling they want every day when they enter the room.', 'يأتي العملاء غالباً بسؤال صغير: «أي ستارة مناسبة لهذه الغرفة؟» لكن الجواب الحقيقي أكبر من نوع قماش واحد. فهو يعتمد على الضوء والخصوصية ولون الجدران وارتفاع السقف وعرض النافذة والإحساس الذي يريدونه كل يوم عند دخول الغرفة.', 'زۆرجار کڕیار بە پرسیارێکی بچووک دێت: «کام پەردە بۆ ئەم ژوورە باشە؟» بەڵام وەڵامی ڕاستەقینە گەورەترە لە یەک جۆر پارچە. ئەوە پەیوەستە بە ڕووناکی و تایبەتمەندی و تۆنی دیوار و بەرزی سەقف و پانی پەنجەرە و ئەو هەستەی کە هەموو ڕۆژێک لە کاتی چوونە ژوورەوە دەیانەوێت هەیانبێت.', 'Müşteriler çoğu zaman tek bir küçük soruyla gelir: “Bu odaya hangi perde gider?” Ama gerçek cevap tek bir kumaştan daha büyüktür. Işık, mahremiyet, duvar tonu, tavan yüksekliği, pencere genişliği ve odaya her gün girildiğinde hissedilmek istenen duyguya bağlıdır.')}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {fullPagePromises.map((item, index) => {
                  const Icon = promiseIcons[index] ?? Sparkles
                  return (
                    <div key={item.title} className="rounded-[1.7rem] border border-border bg-card p-6 shadow-sm">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-14 rounded-[2rem] border border-border bg-card p-7 shadow-sm">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(locale, 'How a project moves', 'كيف يتحرك المشروع', 'پرۆژەکە چۆن دەجوڵێت', 'Bir proje nasıl ilerler')}
                </p>
                <h3 className="mt-4 text-3xl font-serif font-bold">
                  {lt(locale, 'More detail on the full about page than the home section.', 'تفاصيل أكثر في صفحة من نحن مقارنة بقسم الصفحة الرئيسية.', 'زانیاریی زیاتر لە پەڕەی دەربارە وەک بەراورد بە بەشی ماڵپەڕی سەرەکی.', 'Ana sayfadaki bölümden daha detaylı bir hakkımızda akışı.')}
                </h3>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {pageJourney.map((step, index) => (
                  <div key={step.title} className="rounded-[1.5rem] border border-border bg-secondary/40 p-5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">0{index + 1}</span>
                    <h4 className="mt-4 text-lg font-semibold">{step.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
