import { Locale } from '@/lib/i18n'

export type LocalizedText = Record<Locale, string>

type ProductMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string; alt: string }

export type CatalogProduct = {
  id: number
  slug: string
  name: LocalizedText
  tag: LocalizedText
  brand: string
  category: 'rail' | 'blackout' | 'sheer' | 'fabric' | 'zebra' | 'jaluzi' | 'dk' | 'accessory'
  color: 'white' | 'beige' | 'brown' | 'grey' | 'blue' | 'red' | 'purple' | 'black' | 'green' | 'pink' | 'gold' | 'orange'
  style: 'patterned' | 'striped' | 'plain' | 'textured'
  room: 'living' | 'dining' | 'bedroom' | 'hall' | 'office'
  lining: 'blackout_lining' | 'standard' | 'thermal' | 'day_night'
  price: string
  discount?: string
  heroImage: string
  swatchImage: string
  materialName: LocalizedText
  overview: LocalizedText
  detail: LocalizedText
  features: LocalizedText[]
  media: ProductMedia[]
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    slug: 'aurora-wave-linen',
    name: { en: 'Aurora Wave Linen', ar: 'أورورا ويف لينن', ku: 'Aurora Wave Linen', tr: 'Aurora Wave Linen' },
    tag: { en: 'Soft daylight sheer', ar: 'شيفون نهاري ناعم', ku: 'شیەری ڕۆژانەی نەرم', tr: 'Yumuşak gün ışığı tülü' },
    brand: 'Modern Perde',
    category: 'sheer',
    color: 'beige',
    style: 'plain',
    room: 'living',
    lining: 'standard',
    price: '£21.90',
    discount: '10% off',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Natural linen blend', ar: 'خليط لينن طبيعي', ku: 'تێکەڵەی لینەنی سروشتی', tr: 'Doğal keten karışımı' },
    overview: {
      en: 'A calm sheer curtain for bright salons and elegant family rooms.',
      ar: 'ستارة شفافة هادئة للصالات المضيئة وغرف العائلة الأنيقة.',
      ku: 'پەردەیەکی شەفافی ئارام بۆ هۆڵە ڕووناک و ژووری خێزانی جوان.',
      tr: 'Aydınlık salonlar ve zarif aile odaları için sakin bir tül perde.',
    },
    detail: {
      en: 'Aurora Wave Linen gives a floating look with soft folds, warm beige colour and a clean wave heading that works beautifully with hidden rails.',
      ar: 'تمنح أورورا ويف لينن شكلاً عائماً بطيات ناعمة ولون بيج دافئ ورأس ويف نظيف يعمل بشكل رائع مع القضبان المخفية.',
      ku: 'Aurora Wave Linen دیمەنێکی هەڵفڕاو بە چینی نەرم و ڕەنگی بیجی گەرم و سەری وێڤی پاک پێشکەش دەکات کە لەگەڵ ڕەیلی شاراوە زۆر جوان کار دەکات.',
      tr: 'Aurora Wave Linen, yumuşak kıvrımlar, sıcak bej ton ve gizli raylarla çok uyumlu temiz bir wave başlık ile hafif bir görünüm sunar.',
    },
    features: [
      { en: 'Best for living rooms with full-height windows.', ar: 'مثالي لغرف المعيشة ذات النوافذ الكاملة الارتفاع.', ku: 'باشترینە بۆ ژووری دانیشتن لەگەڵ پەنجەرەی بەرزی تەواو.', tr: 'Tam boy pencereli oturma odaları için ideal.' },
      { en: 'Looks premium with bronze accessories and double layers.', ar: 'يبدو فاخراً مع الإكسسوارات البرونزية والطبقات المزدوجة.', ku: 'لەگەڵ ئاکسسواری برۆنزی و دوو چین لوکس دەردەکەوێت.', tr: 'Bronz aksesuar ve çift katmanla premium görünür.' },
      { en: 'Easy to pair with blackout behind the sheer.', ar: 'سهل الدمج مع بلاك أوت خلف الشفاف.', ku: 'بە ئاسانی لەگەڵ بلەکاوت لە پشت شیەر تێکدەکرێت.', tr: 'Arkasına blackout eklemek kolaydır.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', alt: 'Aurora Wave Linen in a bright salon' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80', alt: 'Aurora Wave Linen layered in dining room' },
      { type: 'video', src: '/videos/modern-perde-brand.mp4', poster: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', alt: 'Aurora styling reel' },
    ],
  },
  {
    id: 2,
    slug: 'midnight-blackout-fold',
    name: { en: 'Midnight Blackout Fold', ar: 'ميدنايت بلاك أوت فولد', ku: 'Midnight Blackout Fold', tr: 'Midnight Blackout Fold' },
    tag: { en: 'Hotel-style blackout', ar: 'بلاك أوت بنمط فندقي', ku: 'بلەکاوتی ستایلی هوتێلی', tr: 'Otel tarzı blackout' },
    brand: 'Studio Drapes',
    category: 'blackout',
    color: 'black',
    style: 'plain',
    room: 'bedroom',
    lining: 'blackout_lining',
    price: '£29.40',
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Dense blackout weave', ar: 'نسيج تعتيم كثيف', ku: 'چنینی چڕی بلەکاوت', tr: 'Yoğun blackout dokuma' },
    overview: {
      en: 'Dark, smooth and perfect for bedrooms that need deep rest.',
      ar: 'داكن وناعم ومثالي لغرف النوم التي تحتاج راحة عميقة.',
      ku: 'تاریک و نەرم و گونجاو بۆ ژووری نوستن کە پێویستی بە پشوووی قووڵ هەیە.',
      tr: 'Derin dinlenme isteyen yatak odaları için koyu ve yumuşak.',
    },
    detail: {
      en: 'This blackout option has a dense weave, clean folds and a tailored hotel feeling that blocks light and adds privacy immediately.',
      ar: 'هذا الخيار يأتي بنسيج كثيف وطيات نظيفة وإحساس فندقي مفصل يحجب الضوء ويضيف الخصوصية فوراً.',
      ku: 'ئەم هەڵبژاردنە چنینێکی چڕ و چینی پاک و هەستی هوتێلی تایبەتی هەیە کە خێرا ڕووناکی دەگرێت و تایبەتمەندی زیاد دەکات.',
      tr: 'Yoğun dokulu bu seçenek, temiz kıvrımlar ve ışığı kesen özel bir otel hissi sunar.',
    },
    features: [
      { en: 'Blocks harsh morning light.', ar: 'يحجب ضوء الصباح القوي.', ku: 'ڕووناکیی توندی بەیانی دەگرێت.', tr: 'Sert sabah ışığını keser.' },
      { en: 'Works well with thermal lining.', ar: 'يعمل جيداً مع البطانة الحرارية.', ku: 'لەگەڵ لاینینگی گەرمایی باش کار دەکات.', tr: 'Termal astarla iyi çalışır.' },
      { en: 'Great for master bedrooms and hotels.', ar: 'ممتاز لغرف النوم الرئيسية والفنادق.', ku: 'باشە بۆ ژووری نوستنی سەرەکی و هوتێل.', tr: 'Ebeveyn odası ve oteller için uygundur.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80', alt: 'Midnight Blackout Fold in bedroom' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80', alt: 'Dark drapes with luxury lighting' },
      { type: 'video', src: '/videos/modern-perde-brand.mp4', poster: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80', alt: 'Blackout styling reel' },
    ],
  },
  {
    id: 3,
    slug: 'zebra-horizon',
    name: { en: 'Zebra Horizon', ar: 'زيبرا هورايزون', ku: 'Zebra Horizon', tr: 'Zebra Horizon' },
    tag: { en: 'Day & night rhythm', ar: 'إيقاع ليل ونهار', ku: 'ڕیتمی شەو و ڕۆژ', tr: 'Gece & gündüz ritmi' },
    brand: 'Modern Perde',
    category: 'zebra',
    color: 'grey',
    style: 'striped',
    room: 'office',
    lining: 'day_night',
    price: '£24.60',
    discount: '15% off',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Grey day-night bands', ar: 'شرائط رمادية ليل نهار', ku: 'باندی شەو و ڕۆژی خۆڵەمێشی', tr: 'Gri gece-gündüz bantları' },
    overview: {
      en: 'A neat zebra blind that moves from privacy to daylight in one gesture.',
      ar: 'بلاند زِبرا أنيق ينتقل من الخصوصية إلى ضوء النهار بحركة واحدة.',
      ku: 'زیبرایەکی پاک کە بە یەک جووڵە لە تایبەتمەندی بۆ ڕووناکیی ڕۆژ دەگوازێتەوە.',
      tr: 'Tek hareketle mahremiyetten gün ışığına geçen düzenli bir zebra perde.',
    },
    detail: {
      en: 'Zebra Horizon is perfect for offices and study rooms where you need quick light control and a very clean modern face.',
      ar: 'زيبرا هورايزون مثالي للمكاتب وغرف الدراسة حيث تحتاج تحكماً سريعاً بالضوء وواجهة عصرية نظيفة جداً.',
      ku: 'Zebra Horizon بۆ ئۆفیس و ژووری خوێندن گونجاوە کە پێویستت بە کۆنترۆڵی خێرای ڕووناکی و دیمەنێکی مۆدێرنی پاک هەیە.',
      tr: 'Zebra Horizon, hızlı ışık kontrolü ve çok temiz modern görünüm isteyen ofis ve çalışma odaları için idealdir.',
    },
    features: [
      { en: 'Quick day / night control.', ar: 'تحكم سريع ليل / نهار.', ku: 'کۆنترۆڵی خێرای شەو / ڕۆژ.', tr: 'Hızlı gece / gündüz kontrolü.' },
      { en: 'Slim profile for office windows.', ar: 'مظهر نحيف لنوافذ المكاتب.', ku: 'پڕۆفایلی باریک بۆ پەنجەرەی ئۆفیس.', tr: 'Ofis pencereleri için ince profil.' },
      { en: 'Easy to maintain and wipe clean.', ar: 'سهل الصيانة والتنظيف.', ku: 'ئاسانە بۆ چاکسازی و پاککردنەوە.', tr: 'Bakımı ve temizliği kolaydır.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80', alt: 'Zebra Horizon blind in office' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80', alt: 'Grey striped blind detail' },
    ],
  },
  {
    id: 4,
    slug: 'royal-dk-panel',
    name: { en: 'Royal DK Panel', ar: 'رويال DK بانل', ku: 'Royal DK Panel', tr: 'Royal DK Panel' },
    tag: { en: 'Structured hall coverage', ar: 'تغطية منظمة للهول', ku: 'داپۆشینی ڕێکخراوی هۆڵ', tr: 'Düzenli salon kaplama' },
    brand: 'Decorline',
    category: 'dk',
    color: 'brown',
    style: 'textured',
    room: 'hall',
    lining: 'thermal',
    price: '£27.10',
    heroImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Textured DK weave', ar: 'نسيج DK ملمسي', ku: 'چنینی تەکسچەری DK', tr: 'Dokulu DK örgü' },
    overview: {
      en: 'Strong geometry with warm texture for halls and feature windows.',
      ar: 'هندسة قوية مع ملمس دافئ للهولات والنوافذ المميزة.',
      ku: 'هەندەسەیەکی بەهێز لەگەڵ تەکسچەری گەرم بۆ هۆڵ و پەنجەرەی تایبەت.',
      tr: 'Salonlar ve vurgu pencereleri için sıcak dokulu güçlü geometri.',
    },
    detail: {
      en: 'Royal DK Panel gives stronger visual lines and practical coverage when you want the window to feel tailored and architectural.',
      ar: 'يوفر رويال DK بانل خطوطاً بصرية أقوى وتغطية عملية عندما تريد أن تبدو النافذة مفصلة ومعمارية.',
      ku: 'Royal DK Panel هێڵی بینەری بەهێزتر و داپۆشینی کارا دەدات کاتێک دەتەوێت پەنجەرەکە تایبەت و تەلاراو هەست پێبکات.',
      tr: 'Royal DK Panel, pencerenin daha özel ve mimari hissetmesini istediğinizde güçlü çizgiler ve pratik kaplama sağlar.',
    },
    features: [
      { en: 'Warm brown texture.', ar: 'ملمس بني دافئ.', ku: 'تەکسچەری قاوەیی گەرم.', tr: 'Sıcak kahve doku.' },
      { en: 'Thermal support for larger spaces.', ar: 'دعم حراري للمساحات الكبيرة.', ku: 'پشتیوانی گەرمایی بۆ بۆشایی گەورە.', tr: 'Geniş alanlar için termal destek.' },
      { en: 'Ideal for halls and statement windows.', ar: 'مثالي للهول والنوافذ اللافتة.', ku: 'باشترینە بۆ هۆڵ و پەنجەرەی سەرنجڕاکێش.', tr: 'Salon ve vurgu pencereleri için ideal.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80', alt: 'Royal DK panel in hall' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', alt: 'Textured brown panel detail' },
    ],
  },
  {
    id: 5,
    slug: 'gallery-rail-pro',
    name: { en: 'Gallery Rail Pro', ar: 'غاليري ريل برو', ku: 'Gallery Rail Pro', tr: 'Gallery Rail Pro' },
    tag: { en: 'Smooth hidden movement', ar: 'حركة مخفية ناعمة', ku: 'جووڵەی شاراوەی نەرم', tr: 'Yumuşak gizli hareket' },
    brand: 'Forest Group',
    category: 'rail',
    color: 'white',
    style: 'plain',
    room: 'living',
    lining: 'standard',
    price: '£18.20',
    heroImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Powder-coated rail finish', ar: 'تشطيب ريل مطلي', ku: 'فینیشی ڕەیلی پاودەرکراو', tr: 'Boyalı ray yüzeyi' },
    overview: {
      en: 'A clean rail system for wave curtains, hidden pockets and premium installs.',
      ar: 'نظام ريل نظيف لستائر الويف والجيوب المخفية والتركيب الفاخر.',
      ku: 'سیستەمێکی پاکی ڕەیل بۆ پەردەی وێڤ و پاکێتی شاراوە و دامەزراندنی لوکس.',
      tr: 'Wave perdeler, gizli nişler ve premium uygulamalar için temiz bir ray sistemi.',
    },
    detail: {
      en: 'Gallery Rail Pro focuses on movement quality. It is quiet, smooth and ideal for luxury homes that want the fabric to glide perfectly.',
      ar: 'يركز غاليري ريل برو على جودة الحركة. إنه هادئ وناعم ومثالي للمنازل الفاخرة التي تريد انزلاق القماش بشكل مثالي.',
      ku: 'Gallery Rail Pro سەرنجی خۆی دەخاتە سەر کوالێتی جووڵە. بێدەنگە و نەرمە و گونجاوە بۆ ماڵە لوکسەکان کە دەتەوێن پارچەکە بە تەواوی بخزلێت.',
      tr: 'Gallery Rail Pro hareket kalitesine odaklanır. Sessiz, pürüzsüz ve kumaşın çok iyi kaymasını isteyen lüks evler için uygundur.',
    },
    features: [
      { en: 'Quiet gliding rail.', ar: 'ريل انزلاق هادئ.', ku: 'ڕەیلی خزلانەوەی بێدەنگ.', tr: 'Sessiz kayan ray.' },
      { en: 'Perfect with wave headings.', ar: 'مثالي مع الويف.', ku: 'لەگەڵ سەری وێڤ تەواوە.', tr: 'Wave başlıkla mükemmel.' },
      { en: 'Prepared for premium installations.', ar: 'مجهز للتركيبات الفاخرة.', ku: 'ئامادەی دامەزراندنی لوکس.', tr: 'Premium montaj için hazır.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80', alt: 'Gallery Rail Pro detail' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80', alt: 'Wave curtains on a hidden rail' },
    ],
  },
  {
    id: 6,
    slug: 'rose-sheer-whisper',
    name: { en: 'Rose Sheer Whisper', ar: 'روز شير ويسبر', ku: 'Rose Sheer Whisper', tr: 'Rose Sheer Whisper' },
    tag: { en: 'Soft blush elegance', ar: 'أناقة وردية ناعمة', ku: 'جوانیی گوڵاوێکی نەرم', tr: 'Yumuşak pudra zarafeti' },
    brand: 'Modern Perde',
    category: 'sheer',
    color: 'pink',
    style: 'plain',
    room: 'dining',
    lining: 'standard',
    price: '£20.50',
    heroImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Blush sheer voile', ar: 'فوال شفاف وردي', ku: 'ڤۆیڵی شەفافی گوڵاوی', tr: 'Pudra tül voil' },
    overview: {
      en: 'Romantic, soft and elegant for dining corners or bridal-inspired salons.',
      ar: 'رومانسي وناعم وأنيق لزوايا الطعام أو الصالات المستوحاة من الأعراس.',
      ku: 'رۆمانسی و نەرم و جوان بۆ کەناری نانخواردن یان هۆڵی هاوشێوەی عەروسی.',
      tr: 'Yemek alanları ve düğün hissi veren salonlar için romantik ve yumuşak.',
    },
    detail: {
      en: 'Rose Sheer Whisper adds a blush tone without feeling heavy, so the room stays light but still special and feminine.',
      ar: 'يضيف روز شير ويسبر لمسة وردية دون ثقل، لذلك تبقى الغرفة خفيفة ولكن خاصة وأنثوية.',
      ku: 'Rose Sheer Whisper تۆنێکی گوڵاوی زیاد دەکات بەبێ ئەوەی قورس بێت، بۆیە ژوورەکە سووک دەمێنێت بەڵام هێشتا تایبەت و ناسکە.',
      tr: 'Rose Sheer Whisper, ağırlık vermeden pudra tonu katar; oda hafif ama özel kalır.',
    },
    features: [
      { en: 'Gentle blush tone.', ar: 'لون وردي لطيف.', ku: 'تۆنی گوڵاوی نەرم.', tr: 'Nazik pudra tonu.' },
      { en: 'Beautiful in dining spaces.', ar: 'جميل في مساحات الطعام.', ku: 'لە بۆشایی نانخواردندا زۆر جوانە.', tr: 'Yemek alanlarında çok güzel durur.' },
      { en: 'Pairs nicely with white rails.', ar: 'يناسب القضبان البيضاء.', ku: 'لەگەڵ ڕەیلی سپی دەگونجێت.', tr: 'Beyaz raylarla uyumludur.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80', alt: 'Rose Sheer Whisper in dining room' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', alt: 'Pink sheer curtain detail' },
    ],
  },
  {
    id: 7,
    slug: 'amber-fabric-story',
    name: { en: 'Amber Fabric Story', ar: 'آمبر فابريك ستوري', ku: 'Amber Fabric Story', tr: 'Amber Fabric Story' },
    tag: { en: 'Pattern with warm energy', ar: 'نقشة بطاقة دافئة', ku: 'نەخشەیەک بە وزەی گەرم', tr: 'Sıcak enerjili desen' },
    brand: 'Luxe Living',
    category: 'fabric',
    color: 'orange',
    style: 'patterned',
    room: 'hall',
    lining: 'thermal',
    price: '£26.20',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Patterned jacquard fabric', ar: 'قماش جاكار مزخرف', ku: 'پارچەی جاکاردی نەخشەدار', tr: 'Desenli jakar kumaş' },
    overview: {
      en: 'A rich patterned fabric for statement halls and warm family spaces.',
      ar: 'قماش غني مزخرف للهولات المميزة والمساحات العائلية الدافئة.',
      ku: 'پارچەیەکی دەوڵەمەند و نەخشەدار بۆ هۆڵە سەرنجڕاکێش و بۆشایی خێزانی گەرم.',
      tr: 'Vurgu isteyen salonlar ve sıcak aile alanları için zengin desenli kumaş.',
    },
    detail: {
      en: 'Amber Fabric Story brings movement and colour depth, especially when you want the window treatment to become part of the room identity.',
      ar: 'يجلب آمبر فابريك ستوري حركة وعمقاً لونياً خاصة عندما تريد للنافذة أن تصبح جزءاً من هوية الغرفة.',
      ku: 'Amber Fabric Story جووڵە و قوڵایی ڕەنگ دێنێت، بە تایبەتی کاتێک دەتەوێت چارەسەری پەنجەرە بەشێک بێت لە ناسنامەی ژوور.',
      tr: 'Amber Fabric Story, özellikle pencerenin odanın kimliğinin parçası olmasını istediğinizde hareket ve renk derinliği getirir.',
    },
    features: [
      { en: 'Patterned jacquard face.', ar: 'واجهة جاكار مزخرفة.', ku: 'ڕووکارێکی جاکاردی نەخشەدار.', tr: 'Desenli jakar yüzey.' },
      { en: 'Warm orange character.', ar: 'شخصية برتقالية دافئة.', ku: 'کاراکتێری پرتەقاڵی گەرم.', tr: 'Sıcak turuncu karakter.' },
      { en: 'Strong for salons and halls.', ar: 'قوي للصالات والهولات.', ku: 'بەهێزە بۆ هۆڵ و سالۆن.', tr: 'Salonlar için güçlü bir seçim.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80', alt: 'Amber Fabric Story in hall' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80', alt: 'Pattern fabric close up' },
    ],
  },
  {
    id: 8,
    slug: 'emerald-jaluzi-office',
    name: { en: 'Emerald Jaluzi Office', ar: 'إيميرالد جالوزي أوفيس', ku: 'Emerald Jaluzi Office', tr: 'Emerald Jaluzi Office' },
    tag: { en: 'Sharp office control', ar: 'تحكم مكتبي حاد', ku: 'کۆنترۆڵی توندی ئۆفیس', tr: 'Keskin ofis kontrolü' },
    brand: 'Vista Shade',
    category: 'jaluzi',
    color: 'green',
    style: 'plain',
    room: 'office',
    lining: 'standard',
    price: '£22.80',
    heroImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    swatchImage: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=500&q=80',
    materialName: { en: 'Satin-finish slats', ar: 'شرائح بساتان ناعم', ku: 'سڵاتی ساتینی نەرم', tr: 'Saten yüzeyli lameller' },
    overview: {
      en: 'Clean control for office windows, studios and work corners.',
      ar: 'تحكم نظيف لنوافذ المكاتب والاستوديوهات وزوايا العمل.',
      ku: 'کۆنترۆڵی پاک بۆ پەنجەرەی ئۆفیس و ستۆدیۆ و کەناری کار.',
      tr: 'Ofis, stüdyo ve çalışma alanları için temiz kontrol.',
    },
    detail: {
      en: 'Emerald Jaluzi Office keeps the window neat and adjustable, giving you easy privacy and glare control without heavy fabric volume.',
      ar: 'يحافظ إيميرالد جالوزي أوفيس على نافذة مرتبة وقابلة للتعديل، ويمنحك خصوصية وسهولة تحكم بالانعكاس دون حجم قماش ثقيل.',
      ku: 'Emerald Jaluzi Office پەنجەرەکە ڕێکخراو و ڕێکخراو دەهێڵێت و بە ئاسانی کۆنترۆڵی تایبەتمەندی و گڵێر پێدەدات بەبێ قەبارەی قورسی پارچە.',
      tr: 'Emerald Jaluzi Office, pencereyi düzenli tutar; ağır kumaş olmadan kolay mahremiyet ve parlama kontrolü sağlar.',
    },
    features: [
      { en: 'Clean office look.', ar: 'مظهر مكتبي نظيف.', ku: 'ڕووکارێکی پاکی ئۆفیس.', tr: 'Temiz ofis görünümü.' },
      { en: 'Adjustable slat direction.', ar: 'اتجاه شرائح قابل للتعديل.', ku: 'ئاراستەی سڵات قابل بۆ ڕێکخستن.', tr: 'Ayarlanabilir lamel yönü.' },
      { en: 'Low-volume practical solution.', ar: 'حل عملي بحجم بصري قليل.', ku: 'چارەسەرێکی کارا بە حەجمی کەم.', tr: 'Düşük hacimli pratik çözüm.' },
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80', alt: 'Emerald Jaluzi Office' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80', alt: 'Office blind with controlled daylight' },
    ],
  },
]

export const colorSwatches = {
  white: '#F5F1EB',
  beige: '#C6BCA2',
  brown: '#6F5D52',
  grey: '#A8A7A7',
  blue: '#5673D6',
  red: '#C53B3B',
  purple: '#7B679B',
  black: '#111111',
  green: '#7B994A',
  pink: '#DD7190',
  gold: '#D8CA70',
  orange: '#E67A34',
} as const

export type BlogPost = {
  slug: string
  title: LocalizedText
  excerpt: LocalizedText
  content: LocalizedText[]
  category: LocalizedText
  author: string
  date: string
  readTime: LocalizedText
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-layer-sheer-and-blackout-curtains',
    title: {
      en: 'How to layer sheer and blackout curtains beautifully',
      ar: 'كيف تنسق الشفاف مع البلاك أوت بشكل جميل',
      ku: 'چۆن شیەر و بلەکاوت بە جوانی توێژ بکەین',
      tr: 'Tül ve blackout perdeler nasıl güzel katmanlanır',
    },
    excerpt: {
      en: 'A simple guide for choosing front and back layers without making the window heavy.',
      ar: 'دليل بسيط لاختيار الطبقات الأمامية والخلفية دون جعل النافذة ثقيلة.',
      ku: 'ڕێنماییەکی سادە بۆ هەڵبژاردنی چینی پێش و پشت بەبێ قورسکردنی پەنجەرە.',
      tr: 'Pencereyi ağırlaştırmadan ön ve arka katman seçmek için sade bir rehber.',
    },
    content: [
      {
        en: 'Start with the room goal. If the room needs privacy all day, let the sheer stay visible for softness and add blackout behind it for evening comfort.',
        ar: 'ابدأ بهدف الغرفة. إذا كانت الغرفة تحتاج خصوصية طوال اليوم فدع الشفاف في الواجهة للنعومة وأضف البلاك أوت خلفه لراحة المساء.',
        ku: 'لە ئامانجی ژوورەکە دەست پێبکە. ئەگەر ژوورەکە پێویستی بە تایبەتمەندی هەموو ڕۆژ هەیە، با شیەرەکە لە پێشەوە بێت بۆ نەرمی و بلەکاوتەکە لە پشت بۆ ئاسوودەیی ئێواران.',
        tr: 'Odanın ihtiyacıyla başlayın. Tüm gün mahremiyet gerekiyorsa önde tül yumuşaklık versin, arkada blackout akşam konforunu sağlasın.',
      },
      {
        en: 'Keep the colours close to each other. Beige with ivory, warm grey with stone, or soft white with champagne usually feels premium.',
        ar: 'حافظ على تقارب الألوان. البيج مع العاجي أو الرمادي الدافئ مع الحجري أو الأبيض الناعم مع الشامبانيا يعطي عادة إحساساً فاخراً.',
        ku: 'ڕەنگەکان لە یەکتر نزیک بەهێڵە. بیج لەگەڵ عەجزی، یان خۆڵەمێشی گەرم لەگەڵ بەردی، یان سپیی نەرم لەگەڵ شامپاین زۆرجار هەستی لوکس دەدات.',
        tr: 'Renkleri birbirine yakın tutun. Bej ile ekru, sıcak gri ile taş tonu ya da yumuşak beyaz ile şampanya genelde premium görünür.',
      },
      {
        en: 'Use the rail height to make the window feel taller. A little extra height always improves the final look.',
        ar: 'استخدم ارتفاع القضيب لجعل النافذة أطول بصرياً. ارتفاع إضافي بسيط يحسن النتيجة دائماً.',
        ku: 'بەرزیی ڕەیل بەکاربهێنە تاکو پەنجەرەکە بەرزتر دەربکەوێت. زیادکردنی کەمێک بەرزی هەمیشە دیمەنەکە باشتر دەکات.',
        tr: 'Pencereyi daha uzun göstermek için ray yüksekliğini kullanın. Biraz ekstra yükseklik sonucu her zaman iyileştirir.',
      },
    ],
    category: { en: 'Curtain tips', ar: 'نصائح الستائر', ku: 'ئامۆژگاری پەردە', tr: 'Perde ipuçları' },
    author: 'Sara Karim',
    date: '2026-04-09',
    readTime: { en: '4 min read', ar: '4 دقائق', ku: '4 خولەک', tr: '4 dk okuma' },
    coverImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'best-curtain-ideas-for-halls-and-villas',
    title: {
      en: 'Best curtain ideas for halls and villas',
      ar: 'أفضل أفكار الستائر للهولات والفلل',
      ku: 'باشترین بیرۆکەی پەردە بۆ هۆڵ و ڤیلا',
      tr: 'Salon ve villalar için en iyi perde fikirleri',
    },
    excerpt: {
      en: 'What works when the room is large, formal and meant to impress visitors.',
      ar: 'ما الذي ينجح عندما تكون الغرفة كبيرة ورسمية ومخصصة لإبهار الزوار.',
      ku: 'چی باش کار دەکات کاتێک ژوورەکە گەورە و فەرمی و بۆ سەرنجڕاکێشانی میوانانە.',
      tr: 'Oda büyük, resmi ve etkileyici olduğunda hangi fikirler iyi çalışır.',
    },
    content: [
      {
        en: 'Large halls need rhythm more than they need complexity. Repeating one fabric across wide windows usually looks better than mixing too many different faces.',
        ar: 'الهولات الكبيرة تحتاج إيقاعاً أكثر من تعقيد. تكرار قماش واحد عبر النوافذ الواسعة يبدو عادة أفضل من خلط خامات كثيرة.',
        ku: 'هۆڵە گەورەکان زیاتر پێویستیان بە ڕیتم هەیە تا ئاڵۆزی. دووبارەکردنەوەی یەک پارچە لەسەر پەنجەرە فراوانەکان زۆرجار باشتر دەردەکەوێت لە تێکەڵکردنی زۆر ڕووکار.',
        tr: 'Büyük salonlar karmaşıklıktan çok ritme ihtiyaç duyar. Geniş pencerelerde aynı kumaşı tekrar etmek, çok farklı yüzeyleri karıştırmaktan daha iyi görünür.',
      },
      {
        en: 'For villas, use a premium rail and let the curtain break softly onto the floor. This small detail makes the room feel finished.',
        ar: 'بالنسبة للفلل استخدم ريل فاخر ودع الستارة تلامس الأرض بنعومة. هذه اللمسة الصغيرة تجعل الغرفة مكتملة.',
        ku: 'بۆ ڤیلا ڕەیلێکی لوکس بەکاربهێنە و با پەردەکە بە نرمی لەسەر زەوی بشکێت. ئەم ��ردەکارییە بچووکە ژوورەکە تەواو هەست پێدەکات.',
        tr: 'Villalarda premium bir ray kullanın ve perdenin zemine yumuşakça değmesine izin verin. Bu küçük detay odayı tamamlanmış hissettirir.',
      },
      {
        en: 'Warm metallic accessories and layered sheer behind the main fabric help the project feel custom rather than standard.',
        ar: 'الإكسسوارات المعدنية الدافئة والشفاف الخلفي يساعدان المشروع على أن يبدو مخصصاً لا عادياً.',
        ku: 'ئاکسسواری فلزی گەرم و شیەری لە پشت پارچەی سەرەکی یارمەتی دەدەن پڕۆژەکە تایبەتتر هەست پێبکات نەک ئاسایی.',
        tr: 'Sıcak metal aksesuarlar ve ana kumaşın arkasındaki tül, projeyi standarttan çok özel hissettirir.',
      },
    ],
    category: { en: 'Villa styling', ar: 'تنسيق الفلل', ku: 'ستایلی ڤیلا', tr: 'Villa stili' },
    author: 'Baran Haji',
    date: '2026-04-08',
    readTime: { en: '5 min read', ar: '5 دقائق', ku: '5 خولەک', tr: '5 dk okuma' },
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'how-to-choose-fabric-from-a-small-swatch',
    title: {
      en: 'How to choose fabric from a small swatch',
      ar: 'كيف تختار القماش من عينة صغيرة',
      ku: 'چۆن پارچە لە سامپلێکی بچووک هەڵبژێرین',
      tr: 'Küçük bir numuneden kumaş nasıl seçilir',
    },
    excerpt: {
      en: 'A practical method to avoid surprises when the real curtain is much bigger than the sample.',
      ar: 'طريقة عملية لتجنب المفاجآت عندما تكون الستارة الفعلية أكبر بكثير من العينة.',
      ku: 'ڕێگایەکی کارا بۆ دوورکەوتنەوە لە سەرسوڕمان کاتێک پەردەی ڕاستەقینە زۆر گەورەترە لە سامپلەکە.',
      tr: 'Gerçek perde numuneden çok daha büyük olduğunda sürprizleri önlemek için pratik yöntem.',
    },
    content: [
      {
        en: 'Always look at the swatch in morning light and in warm evening light. Some fabrics become colder or stronger after sunset.',
        ar: 'انظر دائماً إلى العينة في ضوء الصباح وفي ضوء المساء الدافئ. بعض الأقمشة تصبح أبرد أو أقوى بعد الغروب.',
        ku: 'هەمیشە سامپلەکە لە ڕووناکیی بەیانی و ڕووناکیی گەرمی ئێوارەدا ببینە. هەندێک پارچە دوای ئاوابوون ساردتر یان بەهێزتر دەردەکەون.',
        tr: 'Numuneye her zaman sabah ışığında ve sıcak akşam ışığında bakın. Bazı kumaşlar gün batımından sonra daha soğuk veya daha güçlü görünür.',
      },
      {
        en: 'Check the back side and the edge. The edge tells you whether the fabric will keep a clean fold or a softer, more relaxed drop.',
        ar: 'افحص الجهة الخلفية والحافة. الحافة تخبرك هل سيحافظ القماش على طية نظيفة أم سقوط أكثر راحة ونعومة.',
        ku: 'پشتی پارچەکە و کەنارەکەی پشکنە. کەنارەکە پێت دەڵێت ئایا پارچەکە چینێکی پاک دەهێڵێت یان داکەوتنێکی نەرم و ئارامتر.',
        tr: 'Arka yüzüne ve kenarına bakın. Kenar, kumaşın temiz kıvrım mı yoksa daha yumuşak bir düşüş mü vereceğini anlatır.',
      },
      {
        en: 'Ask for a room visual or send a photo of the window. It is the fastest way to match the fabric with the wall, floor and furniture.',
        ar: 'اطلب تصوراً للغرفة أو أرسل صورة للنافذة. هذه أسرع طريقة لمطابقة القماش مع الجدار والأرضية والأثاث.',
        ku: 'داوای ڕەخنەیەکی ژوور بکە یان وێنەی پەنجەرەکە بنێرە. ئەوە خێراترین ڕێگایە بۆ گونجاندنی پارچەکە لەگەڵ دیوار و زەوی و موبلیا.',
        tr: 'Bir oda görseli isteyin ya da pencerenin fotoğrafını gönderin. Kumaşı duvar, zemin ve mobilyayla eşleştirmenin en hızlı yolu budur.',
      },
    ],
    category: { en: 'Fabric guide', ar: 'دليل القماش', ku: 'ڕێنمایی پارچە', tr: 'Kumaş rehberi' },
    author: 'Rojin Azad',
    date: '2026-04-07',
    readTime: { en: '3 min read', ar: '3 دقائق', ku: '3 خولەک', tr: '3 dk okuma' },
    coverImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
  },
]

export function getProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
