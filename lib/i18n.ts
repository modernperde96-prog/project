export const locales = ['en', 'ar', 'ku', 'tr'] as const
export type Locale = (typeof locales)[number]

type Direction = 'ltr' | 'rtl'

export const localeInfo: Record<Locale, { label: string; nativeLabel: string; dir: Direction; htmlLang: string }> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr', htmlLang: 'en' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  ku: { label: 'Kurdish', nativeLabel: 'کوردی', dir: 'rtl', htmlLang: 'ckb' },
  tr: { label: 'Turkish', nativeLabel: 'Türkçe', dir: 'ltr', htmlLang: 'tr' },
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getDir(locale: Locale): Direction {
  return localeInfo[locale].dir
}

export function localizePath(locale: Locale, path = '') {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${clean === '/' ? '' : clean}`
}

export type NavItem = {
  label: string
  href?: string
  items?: { label: string; href: string; description: string }[]
}

export type Dictionary = {
  localeName: string
  brandTagline: string
  topBar: string
  languageLabel: string
  accountLabel: string
  login: string
  signup: string
  searchPlaceholder: string
  nav: {
    home: string
    collections: string
    rails: string
    partners: string
    team: string
    about: string
    contact: string
    shopDropdown: string
    pagesDropdown: string
  }
  menu: {
    shop: NavItem
    pages: NavItem
  }
  hero: {
    eyebrow: string
    slides: {
      id: string
      type: 'compare' | 'video' | 'rails' | 'brand'
      badge: string
      title: string
      description: string
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
      chips: string[]
    }[]
  }
  home: {
    collections: {
      eyebrow: string
      title: string
      description: string
      cards: { title: string; desc: string; href: string }[]
    }
    partners: {
      eyebrow: string
      title: string
      description: string
    }
    team: {
      eyebrow: string
      title: string
      description: string
      cta: string
    }
    about: {
      eyebrow: string
      title: string
      body1: string
      body2: string
      stats: { value: string; label: string }[]
    }
    cta: {
      title: string
      description: string
      primary: string
      secondary: string
    }
  }
  pages: {
    collections: {
      title: string
      description: string
      sections: {
        title: string
        items: { title: string; text: string }[]
      }[]
    }
    rails: {
      title: string
      description: string
      highlights: { title: string; text: string }[]
    }
    partners: {
      title: string
      description: string
    }
    team: {
      title: string
      description: string
      values: { title: string; text: string }[]
    }
    about: {
      title: string
      description: string
      story: string[]
    }
    contact: {
      title: string
      description: string
      formTitle: string
      formSubtitle: string
      fields: {
        name: string
        phone: string
        email: string
        message: string
        submit: string
      }
      detailsTitle: string
      visit: string
      call: string
      email: string
      hours: string
    }
    auth: {
      loginTitle: string
      loginDescription: string
      signupTitle: string
      signupDescription: string
      email: string
      password: string
      fullName: string
      actionLogin: string
      actionSignup: string
      switchToLogin: string
      switchToSignup: string
    }
  }
  footer: {
    newsletterTitle: string
    newsletterDescription: string
    subscribePlaceholder: string
    subscribeButton: string
    quickLinks: string
    contact: string
    rights: string
    privacy: string
    terms: string
  }
}

const sharedPartnerNames = [
  { name: 'Somfy', tag: 'Smart motors' },
  { name: 'Forest Group', tag: 'Rail systems' },
  { name: 'Villa Decor', tag: 'Interior projects' },
  { name: 'Premium Fabric House', tag: 'Fabric partner' },
  { name: 'Luxe Living', tag: 'Home styling' },
  { name: 'Noor Build', tag: 'Contract partner' },
]

export const partnerCards = sharedPartnerNames.map((item) => ({
  ...item,
  initials: item.name
    .split(' ')
    .slice(0, 2)
    .map((piece) => piece[0])
    .join('')
    .toUpperCase(),
}))

export const teamMembers = [
  {
    name: 'Sara Karim',
    role: {
      en: 'Creative Director',
      ar: 'المديرة الإبداعية',
      ku: 'بەڕێوەبەری داهێنان',
      tr: 'Yaratıcı Direktör',
    },
    bio: {
      en: 'Leads moodboards, fabric curation and premium styling direction.',
      ar: 'تقود لوحات الإلهام واختيار الأقمشة واتجاهات التنسيق الفاخر.',
      ku: 'سەرپەرشتی بوردی ئیلهام و هەڵبژاردنی پارچە و ئاراستەی دیزاینی لوکس دەکات.',
      tr: 'Moodboard, kumaş seçimi ve premium stil yönünü yönetir.',
    },
  },
  {
    name: 'Omar Rashid',
    role: {
      en: 'Rail & Installation Lead',
      ar: 'مسؤول القضبان والتركيب',
      ku: 'سەرپەرشتی ڕەیل و دامەزراندن',
      tr: 'Ray ve Montaj Lideri',
    },
    bio: {
      en: 'Handles measuring, rail planning and smooth on-site execution.',
      ar: 'يتولى القياسات وتخطيط القضبان والتنفيذ السلس في الموقع.',
      ku: 'پێوانە و پلانی ڕەیل و جێبەجێکردنی نەرم لە شوێنەکەدا بەڕێوە دەبات.',
      tr: 'Ölçü, ray planlama ve sahadaki düzgün uygulamayı yürütür.',
    },
  },
  {
    name: 'Rojin Azad',
    role: {
      en: 'Client Advisor',
      ar: 'مستشارة العملاء',
      ku: 'ڕاوێژکاری کڕیار',
      tr: 'Müşteri Danışmanı',
    },
    bio: {
      en: 'Helps families choose fabrics, linings and room-by-room combinations.',
      ar: 'تساعد العائلات في اختيار الأقمشة والبطانات وتنسيق كل غرفة.',
      ku: 'یارمەتی خێزانەکان دەدات بۆ هەڵبژاردنی پارچە و لاپەڕە و تێکەڵکردنی ژوور بە ژوور.',
      tr: 'Ailelerin kumaş, astar ve oda bazlı kombin seçimlerine yardımcı olur.',
    },
  },
  {
    name: 'Baran Haji',
    role: {
      en: 'Project Coordinator',
      ar: 'منسق المشاريع',
      ku: 'ڕێکخەری پڕۆژە',
      tr: 'Proje Koordinatörü',
    },
    bio: {
      en: 'Coordinates villas, salons and hotel window packages from quote to finish.',
      ar: 'ينسق مشاريع الفلل والصالات والفنادق من التسعير حتى التسليم.',
      ku: 'پڕۆژەی ڤیلا و هۆڵ و هوتێل لە نرخی پێشکەشکراوەوە تا تەواوبوون ڕێکدەخات.',
      tr: 'Villa, salon ve otel projelerini tekliften teslimata kadar koordine eder.',
    },
  },
] as const

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    localeName: 'English',
    brandTagline: 'Curtains • Rails • Custom Design',
    topBar: 'Luxury curtains, rails and custom window styling for modern homes.',
    languageLabel: 'Language',
    accountLabel: 'My account',
    login: 'Login',
    signup: 'Sign up',
    searchPlaceholder: 'Search collections, rails or pages',
    nav: {
      home: 'Home',
      collections: 'Collections',
      rails: 'Rails',
      partners: 'Partners',
      team: 'Our Team',
      about: 'About',
      contact: 'Contact',
      shopDropdown: 'Shop',
      pagesDropdown: 'Pages',
    },
    menu: {
      shop: {
        label: 'Shop',
        items: [
          { label: 'Luxury curtains', href: '/collections#curtains', description: 'Layered drapes, sheers and blackout options.' },
          { label: 'Sheers & voiles', href: '/collections#sheers', description: 'Soft daylight filtering fabrics.' },
          { label: 'Blackout & lining', href: '/collections#blackout', description: 'Privacy, thermal and hotel-ready solutions.' },
          { label: 'Rails & hardware', href: '/rails', description: 'Wave tracks, motorised rails and accessories.' },
        ],
      },
      pages: {
        label: 'Pages',
        items: [
          { label: 'Partner brands', href: '/partners', description: 'A modern showcase for brands and collaborators.' },
          { label: 'Our team', href: '/team', description: 'Meet the design, advisory and installation team.' },
          { label: 'About Modern Perde', href: '/about', description: 'Our story, quality promise and process.' },
          { label: 'Contact page', href: '/contact', description: 'Phone, showroom and request form.' },
        ],
      },
    },
    hero: {
      eyebrow: 'Premium window styling',
      slides: [
        {
          id: 'compare',
          type: 'compare',
          badge: 'Before & after concept',
          title: 'Transform the room with layered curtains that feel premium.',
          description: 'A brighter hero direction that shows how sheers, blackout fabrics and balanced folds can change the whole mood of the space.',
          primary: { label: 'Browse collections', href: '/collections' },
          secondary: { label: 'Talk to our team', href: '/contact' },
          chips: ['Sheers', 'Blackout', 'Luxury finish'],
        },
        {
          id: 'video',
          type: 'video',
          badge: 'Video hero concept',
          title: 'Use a branded video slide to introduce your style and showroom feel.',
          description: 'This slider now supports video style storytelling, so you can later replace the sample reel with your real showroom or installation footage.',
          primary: { label: 'See partner brands', href: '/partners' },
          secondary: { label: 'Open team page', href: '/team' },
          chips: ['Video ready', 'Muted autoplay', 'Brand splash'],
        },
        {
          id: 'rails',
          type: 'rails',
          badge: 'Rail systems',
          title: 'Premium rails, motor options and cleaner installation details.',
          description: 'The site now includes a dedicated rails page and dropdown navigation so hardware becomes a real part of the product experience.',
          primary: { label: 'Open rails page', href: '/rails' },
          secondary: { label: 'Contact for measuring', href: '/contact' },
          chips: ['Wave rails', 'Motor ready', 'Smooth movement'],
        },
        {
          id: 'brand',
          type: 'brand',
          badge: 'Brand signature',
          title: 'Build trust through partner brands, team presentation and strong page structure.',
          description: 'Inspired by modern curtain commerce layouts, the homepage now balances category discovery, brand proof and service guidance.',
          primary: { label: 'Visit about page', href: '/about' },
          secondary: { label: 'Send a request', href: '/contact' },
          chips: ['Modern menu', 'Own pages', 'Multi-language'],
        },
      ],
    },
    home: {
      collections: {
        eyebrow: 'Shop by category',
        title: 'A stronger shop area with pages for curtains, rails and service direction.',
        description: 'The menu is now ready for dropdown behavior, and each main item can lead to its own page instead of only scrolling inside one homepage.',
        cards: [
          { title: 'Luxury curtains', desc: 'Layered drapes for villas, salons and bedrooms.', href: '/collections#curtains' },
          { title: 'Sheers & voiles', desc: 'Light filtering fabrics for soft daytime privacy.', href: '/collections#sheers' },
          { title: 'Blackout & hotel', desc: 'Room darkening options for comfort and privacy.', href: '/collections#blackout' },
          { title: 'Rails & systems', desc: 'Wave rails, hidden tracks, motors and accessories.', href: '/rails' },
        ],
      },
      partners: {
        eyebrow: 'Partner brands',
        title: 'A cleaner and more modern partner section.',
        description: 'Brand cards use bold initials today, but the layout is ready for your real partner names and logos whenever you want to replace them.',
      },
      team: {
        eyebrow: 'Our team',
        title: 'Show the people behind measurement, design and installation.',
        description: 'The homepage now introduces your team, and there is also a full team page for more detail and trust.',
        cta: 'Open full team page',
      },
      about: {
        eyebrow: 'About Modern Perde',
        title: 'A refined curtain brand for homes, salons, villas and commercial spaces.',
        body1: 'Modern Perde combines elegant fabric selection, custom advice and installation planning to create complete window styling instead of just selling a single curtain product.',
        body2: 'The new structure focuses on brand clarity, service trust and product discovery, so visitors can move from inspiration to inquiry much faster.',
        stats: [
          { value: '10+', label: 'Years of experience' },
          { value: '120+', label: 'Fabric directions' },
          { value: '2500+', label: 'Projects completed' },
          { value: '4', label: 'Languages ready' },
        ],
      },
      cta: {
        title: 'Ready to style your windows?',
        description: 'Send your room photo, fabric preference or rail idea and let the team guide you to the right combination.',
        primary: 'Contact us',
        secondary: 'Create account',
      },
    },
    pages: {
      collections: {
        title: 'Curtain Collections',
        description: 'Explore fabric direction, heading styles and room-ready solutions through a dedicated collections page.',
        sections: [
          {
            title: 'Fabric direction',
            items: [
              { title: 'Sheers & voiles', text: 'Soft privacy with lighter folds and elegant layering.' },
              { title: 'Velvet & textured plains', text: 'Richer drape and warmer room mood.' },
              { title: 'Blackout lining', text: 'Comfort, privacy and thermal control for bedrooms and hotels.' },
            ],
          },
          {
            title: 'Heading & style',
            items: [
              { title: 'Wave', text: 'Contemporary folds for premium clean lines.' },
              { title: 'Eyelet & pleat', text: 'Classic headings with strong volume and depth.' },
              { title: 'Motor-ready options', text: 'Prepared for hidden rails and smart movement.' },
            ],
          },
        ],
      },
      rails: {
        title: 'Rails & Hardware',
        description: 'Give rails their own page so customers see them as a premium product, not an afterthought.',
        highlights: [
          { title: 'Wave tracks', text: 'Smooth, modern rail lines for contemporary interiors.' },
          { title: 'Motorised systems', text: 'Quiet operation for large windows and smart homes.' },
          { title: 'Hidden ceiling rails', text: 'Minimal detailing for cleaner luxury finishes.' },
          { title: 'Accessories', text: 'Brackets, hooks, gliders and finishing components.' },
        ],
      },
      partners: {
        title: 'Partner Brands',
        description: 'A full page dedicated to collaborators, supplier brands and premium project partners.',
      },
      team: {
        title: 'Meet Our Team',
        description: 'Design, fabric advice, rail planning and installation all come together through the people behind Modern Perde.',
        values: [
          { title: 'Design guidance', text: 'We help clients choose mood, fold and fabric direction.' },
          { title: 'Measurement clarity', text: 'Window planning is handled with practical installation thinking.' },
          { title: 'Project follow-through', text: 'From quote to finish, the team keeps the process coordinated.' },
        ],
      },
      about: {
        title: 'About Modern Perde',
        description: 'A brand-first page for your story, promise and process.',
        story: [
          'Modern Perde was built around the idea that window styling should feel complete: fabric, rail, light control and final finishing all working together.',
          'Instead of showing only products, the site now introduces services, team expertise and brand trust in a clearer way.',
          'This structure gives you room to grow with more pages, dropdown categories and real partner logos later on.',
        ],
      },
      contact: {
        title: 'Contact Modern Perde',
        description: 'Use this page for showroom visits, pricing requests, room photos and project discussions.',
        formTitle: 'Send your request',
        formSubtitle: 'Tell us about the room, fabric style or rail system you need.',
        fields: {
          name: 'Full name',
          phone: 'Phone number',
          email: 'Email address',
          message: 'Your message',
          submit: 'Send request',
        },
        detailsTitle: 'Contact details',
        visit: 'Empire area, Duhok, Iraq',
        call: '+964 750 123 4567',
        email: 'hello@modernperde.com',
        hours: 'Saturday to Thursday • 10:00 AM – 8:00 PM',
      },
      auth: {
        loginTitle: 'Welcome back',
        loginDescription: 'Login to save your favourite collections and track future requests.',
        signupTitle: 'Create your account',
        signupDescription: 'Sign up to store preferences, room notes and project follow-ups.',
        email: 'Email address',
        password: 'Password',
        fullName: 'Full name',
        actionLogin: 'Login',
        actionSignup: 'Create account',
        switchToLogin: 'Already have an account? Login',
        switchToSignup: 'Need an account? Sign up',
      },
    },
    footer: {
      newsletterTitle: 'Stay updated with new arrivals',
      newsletterDescription: 'Subscribe for style ideas, fabric updates and special offers.',
      subscribePlaceholder: 'Enter your email',
      subscribeButton: 'Subscribe',
      quickLinks: 'Quick links',
      contact: 'Contact',
      rights: '© 2026 Modern Perde. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  ar: {
    localeName: 'العربية',
    brandTagline: 'ستائر • قضبان • تصميم مخصص',
    topBar: 'ستائر فاخرة وقضبان وتصميم نوافذ مخصص للمنازل العصرية.',
    languageLabel: 'اللغة',
    accountLabel: 'حسابي',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    searchPlaceholder: 'ابحث في المجموعات أو القضبان أو الصفحات',
    nav: {
      home: 'الرئيسية',
      collections: 'المجموعات',
      rails: 'القضبان',
      partners: 'الشركاء',
      team: 'فريقنا',
      about: 'من نحن',
      contact: 'اتصل بنا',
      shopDropdown: 'التسوق',
      pagesDropdown: 'الصفحات',
    },
    menu: {
      shop: {
        label: 'التسوق',
        items: [
          { label: 'ستائر فاخرة', href: '/collections#curtains', description: 'طبقات أنيقة وخيارات شفافة وبلاك أوت.' },
          { label: 'شفافيات وفويل', href: '/collections#sheers', description: 'أقمشة ناعمة لفلترة الضوء.' },
          { label: 'بلاك أوت وبطانة', href: '/collections#blackout', description: 'حلول للخصوصية والحرارة والفنادق.' },
          { label: 'قضبان وإكسسوارات', href: '/rails', description: 'مسارات ويف وقضبان كهربائية وإكسسوارات.' },
        ],
      },
      pages: {
        label: 'الصفحات',
        items: [
          { label: 'علامات الشركاء', href: '/partners', description: 'عرض حديث للعلامات والمتعاونين.' },
          { label: 'فريقنا', href: '/team', description: 'تعرف على فريق التصميم والاستشارة والتركيب.' },
          { label: 'عن مودرن پردە', href: '/about', description: 'قصتنا ووعد الجودة وطريقة العمل.' },
          { label: 'صفحة التواصل', href: '/contact', description: 'الهاتف والمعرض ونموذج الطلب.' },
        ],
      },
    },
    hero: {
      eyebrow: 'تنسيق نوافذ فاخر',
      slides: [
        {
          id: 'compare',
          type: 'compare',
          badge: 'فكرة قبل وبعد',
          title: 'حوّل الغرفة بستائر طبقية تمنح إحساساً فاخراً.',
          description: 'اتجاه بصري أكثر إشراقاً يوضح كيف يمكن للشفافيات والبلاك أوت والطيّات المتوازنة أن تغيّر مزاج المكان بالكامل.',
          primary: { label: 'تصفح المجموعات', href: '/collections' },
          secondary: { label: 'تحدث مع الفريق', href: '/contact' },
          chips: ['شفاف', 'بلاك أوت', 'تشطيب فاخر'],
        },
        {
          id: 'video',
          type: 'video',
          badge: 'فكرة سلايدر فيديو',
          title: 'استخدم شريحة فيديو تحمل هويتك لتقديم أسلوب المعرض.',
          description: 'السلايدر يدعم الآن أسلوب الفيديو، ويمكنك لاحقاً استبدال العينة الحالية بلقطات حقيقية من المعرض أو التركيب.',
          primary: { label: 'شاهد الشركاء', href: '/partners' },
          secondary: { label: 'افتح صفحة الفريق', href: '/team' },
          chips: ['جاهز للفيديو', 'تشغيل صامت', 'هوية العلامة'],
        },
        {
          id: 'rails',
          type: 'rails',
          badge: 'أنظمة القضبان',
          title: 'قضبان فاخرة وخيارات كهربائية وتفاصيل تركيب أنظف.',
          description: 'الموقع يتضمن الآن صفحة مستقلة للقضبان وقائمة منسدلة حتى تصبح الإكسسوارات جزءاً واضحاً من تجربة المنتج.',
          primary: { label: 'افتح صفحة القضبان', href: '/rails' },
          secondary: { label: 'تواصل للقياس', href: '/contact' },
          chips: ['ويف', 'جاهز للموتور', 'حركة ناعمة'],
        },
        {
          id: 'brand',
          type: 'brand',
          badge: 'بصمة العلامة',
          title: 'ابنِ الثقة عبر علامات الشركاء والفريق وهيكل صفحات أقوى.',
          description: 'استلهمت البنية الجديدة من مواقع الستائر الحديثة التي توازن بين اكتشاف الأقسام وإثبات العلامة وإرشاد الخدمة.',
          primary: { label: 'زيارة صفحة من نحن', href: '/about' },
          secondary: { label: 'أرسل طلباً', href: '/contact' },
          chips: ['قائمة حديثة', 'صفحات مستقلة', 'متعدد اللغات'],
        },
      ],
    },
    home: {
      collections: {
        eyebrow: 'تسوق حسب القسم',
        title: 'منطقة عرض أقوى مع صفحات مستقلة للستائر والقضبان والخدمات.',
        description: 'القائمة أصبحت جاهزة للعرض المنسدل، وكل عنصر رئيسي يمكنه الذهاب إلى صفحته الخاصة بدلاً من الاكتفاء بالتمرير داخل الصفحة.',
        cards: [
          { title: 'ستائر فاخرة', desc: 'طبقات أنيقة للفلل والصالات وغرف النوم.', href: '/collections#curtains' },
          { title: 'شفافيات وفويل', desc: 'أقمشة تسمح بمرور الضوء مع خصوصية ناعمة.', href: '/collections#sheers' },
          { title: 'بلاك أوت وفنادق', desc: 'خيارات تعتيم للراحة والخصوصية.', href: '/collections#blackout' },
          { title: 'قضبان وأنظمة', desc: 'ويف، مسارات مخفية، مواتير وإكسسوارات.', href: '/rails' },
        ],
      },
      partners: {
        eyebrow: 'العلامات الشريكة',
        title: 'قسم شركاء أنظف وأكثر حداثة.',
        description: 'بطاقات العلامات تستخدم حالياً الأحرف الأولى، لكن التصميم جاهز لإضافة الأسماء والشعارات الحقيقية لاحقاً.',
      },
      team: {
        eyebrow: 'فريقنا',
        title: 'اعرض الأشخاص المسؤولين عن القياس والتصميم والتركيب.',
        description: 'الصفحة الرئيسية تقدم الفريق، وهناك أيضاً صفحة كاملة للفريق لزيادة الثقة والتفاصيل.',
        cta: 'افتح صفحة الفريق كاملة',
      },
      about: {
        eyebrow: 'عن مودرن پردە',
        title: 'علامة ستائر راقية للمنازل والصالات والفلل والمساحات التجارية.',
        body1: 'يجمع مودرن پردە بين اختيار الأقمشة الأنيق والاستشارة المخصصة وتخطيط التركيب لصنع تجربة متكاملة للنوافذ، وليس مجرد بيع منتج واحد.',
        body2: 'الهيكل الجديد يركز على وضوح العلامة والثقة بالخدمة واكتشاف المنتجات حتى ينتقل الزائر من الإلهام إلى التواصل بشكل أسرع.',
        stats: [
          { value: '10+', label: 'سنوات خبرة' },
          { value: '120+', label: 'اتجاهات أقمشة' },
          { value: '2500+', label: 'مشروع مكتمل' },
          { value: '4', label: 'لغات جاهزة' },
        ],
      },
      cta: {
        title: 'جاهز لتنسيق نوافذك؟',
        description: 'أرسل صورة الغرفة أو نوع القماش أو فكرة القضبان، وسيرشدك الفريق إلى التركيبة المناسبة.',
        primary: 'اتصل بنا',
        secondary: 'أنشئ حساباً',
      },
    },
    pages: {
      collections: {
        title: 'مجموعات الستائر',
        description: 'استكشف اتجاهات الأقمشة وأنواع التعليق والحلول المناسبة للغرف من خلال صفحة مخصصة للمجموعات.',
        sections: [
          {
            title: 'اتجاهات الأقمشة',
            items: [
              { title: 'شفافيات وفويل', text: 'خصوصية ناعمة مع طبقات خفيفة أنيقة.' },
              { title: 'مخمل وملامس سادة', text: 'ستارة أغنى ومزاج أكثر دفئاً للمكان.' },
              { title: 'بطانة بلاك أوت', text: 'راحة وخصوصية وتحكم حراري لغرف النوم والفنادق.' },
            ],
          },
          {
            title: 'أنواع التعليق والأسلوب',
            items: [
              { title: 'ويف', text: 'طيّات عصرية بخطوط نظيفة وفاخرة.' },
              { title: 'عينات وبليت', text: 'أنماط كلاسيكية بحجم وعمق واضح.' },
              { title: 'خيارات جاهزة للموتور', text: 'مناسبة للقضبان المخفية والحركة الذكية.' },
            ],
          },
        ],
      },
      rails: {
        title: 'القضبان والإكسسوارات',
        description: 'امنح القضبان صفحة مستقلة حتى يراها العملاء كمنتج فاخر وليس كإضافة ثانوية.',
        highlights: [
          { title: 'مسارات ويف', text: 'خطوط حديثة وحركة ناعمة للمساحات المعاصرة.' },
          { title: 'أنظمة كهربائية', text: 'تشغيل هادئ للنوافذ الكبيرة والمنازل الذكية.' },
          { title: 'قضبان سقفية مخفية', text: 'تفاصيل أقل ومظهر فاخر أنظف.' },
          { title: 'إكسسوارات', text: 'حوامل، خطافات، جلادرز وقطع نهائية.' },
        ],
      },
      partners: {
        title: 'علامات الشركاء',
        description: 'صفحة كاملة مخصصة للمتعاونين والموردين وشركاء المشاريع المميزة.',
      },
      team: {
        title: 'تعرف على فريقنا',
        description: 'التصميم والاستشارة وتخطيط القضبان والتركيب تجتمع كلها عبر الأشخاص وراء مودرن پردە.',
        values: [
          { title: 'إرشاد تصميمي', text: 'نساعد العميل في اختيار الجو العام والقماش ونوع الطية.' },
          { title: 'وضوح في القياس', text: 'تخطيط النوافذ يتم بعقلية تركيب عملية.' },
          { title: 'متابعة المشروع', text: 'من العرض السعري حتى النهاية يبقى العمل منسقاً.' },
        ],
      },
      about: {
        title: 'عن مودرن پردە',
        description: 'صفحة تعكس قصة العلامة ووعدها وطريقة عملها.',
        story: [
          'تم بناء مودرن پردە على فكرة أن تنسيق النوافذ يجب أن يكون متكاملاً: قماش، قضبان، تحكم بالضوء وتشطيب نهائي.',
          'بدلاً من عرض المنتجات فقط، يقدم الموقع الآن الخدمات وخبرة الفريق وثقة العلامة بطريقة أوضح.',
          'هذا الهيكل يمنحك مساحة للنمو لاحقاً مع صفحات إضافية وفئات منسدلة وشعارات شركاء حقيقية.',
        ],
      },
      contact: {
        title: 'تواصل مع مودرن پردە',
        description: 'استخدم هذه الصفحة لزيارات المعرض أو طلبات الأسعار أو صور الغرف أو مناقشة المشاريع.',
        formTitle: 'أرسل طلبك',
        formSubtitle: 'أخبرنا عن الغرفة أو نوع القماش أو نظام القضبان الذي تحتاجه.',
        fields: {
          name: 'الاسم الكامل',
          phone: 'رقم الهاتف',
          email: 'البريد الإلكتروني',
          message: 'رسالتك',
          submit: 'إرسال الطلب',
        },
        detailsTitle: 'بيانات التواصل',
        visit: 'منطقة إمباير، دهوك، العراق',
        call: '+964 750 123 4567',
        email: 'hello@modernperde.com',
        hours: 'السبت إلى الخميس • 10:00 صباحاً – 8:00 مساءً',
      },
      auth: {
        loginTitle: 'مرحباً بعودتك',
        loginDescription: 'سجّل الدخول لحفظ المجموعات المفضلة ومتابعة الطلبات لاحقاً.',
        signupTitle: 'أنشئ حسابك',
        signupDescription: 'سجّل للحصول على حفظ التفضيلات وملاحظات الغرف ومتابعة المشاريع.',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        fullName: 'الاسم الكامل',
        actionLogin: 'تسجيل الدخول',
        actionSignup: 'إنشاء حساب',
        switchToLogin: 'لديك حساب بالفعل؟ سجّل الدخول',
        switchToSignup: 'تحتاج حساباً؟ أنشئ حساباً',
      },
    },
    footer: {
      newsletterTitle: 'ابقَ على اطلاع بأحدث الوصولات',
      newsletterDescription: 'اشترك للحصول على أفكار التصميم وتحديثات الأقمشة والعروض الخاصة.',
      subscribePlaceholder: 'أدخل بريدك الإلكتروني',
      subscribeButton: 'اشتراك',
      quickLinks: 'روابط سريعة',
      contact: 'التواصل',
      rights: '© 2026 مودرن پردە. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
  },
  ku: {
    localeName: 'کوردی',
    brandTagline: 'پەردە • ڕەیل • دیزاینی تایبەت',
    topBar: 'پەردەی لوکس و ڕەیل و دیزاینی تایبەتی پەنجەرە بۆ ماڵە مۆدێرنەکان.',
    languageLabel: 'زمان',
    accountLabel: 'هەژماری من',
    login: 'چوونەژوورەوە',
    signup: 'دروستکردنی هەژمار',
    searchPlaceholder: 'گەڕان لە کۆلێکشن یان ڕەیل یان پەڕەکان',
    nav: {
      home: 'سەرەکی',
      collections: 'کۆلێکشنەکان',
      rails: 'ڕەیل',
      partners: 'هاوبەشەکان',
      team: 'تیمەکەمان',
      about: 'دەربارە',
      contact: 'پەیوەندی',
      shopDropdown: 'فرۆشتن',
      pagesDropdown: 'پەڕەکان',
    },
    menu: {
      shop: {
        label: 'فرۆشتن',
        items: [
          { label: 'پەردەی لوکس', href: '/collections#curtains', description: 'توێژە توێژەی جوان و شیەر و بلاک‌ئاوت.' },
          { label: 'شیەر و ڤۆیل', href: '/collections#sheers', description: 'پارچەی نەرم بۆ ڕووناکیی نرمتربوو.' },
          { label: 'بلاک‌ئاوت و لاپەڕە', href: '/collections#blackout', description: 'چارەسەری تایبەت بۆ نهێنی و گەرما.' },
          { label: 'ڕەیل و ئاکسسوارات', href: '/rails', description: 'ڕێڵی وێڤ و ڕەیلی کارەبایی و کەرەستە.' },
        ],
      },
      pages: {
        label: 'پەڕەکان',
        items: [
          { label: 'براندە هاوبەشەکان', href: '/partners', description: 'پیشاندانی نوێی براند و هاوکاران.' },
          { label: 'تیمەکەمان', href: '/team', description: 'ناسین بە تیمی دیزاین و ڕاوێژ و دامەزراندن.' },
          { label: 'دەربارەی مۆدێرن پەردە', href: '/about', description: 'چیرۆک و بەڵێنی کوالێتی و شێوازی کار.' },
          { label: 'پەڕەی پەیوەندی', href: '/contact', description: 'ژمارەی تەلەفۆن و شۆڕووم و فۆڕمی داواکاری.' },
        ],
      },
    },
    hero: {
      eyebrow: 'ئاراستەکردنی لوکسی پەنجەرە',
      slides: [
        {
          id: 'compare',
          type: 'compare',
          badge: 'بیری قبل و بعد',
          title: 'ژوورەکە بگۆڕە بە پەردەی توێژە توێژەی لوکس.',
          description: 'ئەم هێرویە پیشان دەدات چۆن شیەر و بلاک‌ئاوت و تێکچوونی ڕێکوپێک دەتوانێت هەموو هەوای شوێنەکە بگۆڕێت.',
          primary: { label: 'بینینی کۆلێکشنەکان', href: '/collections' },
          secondary: { label: 'قسه‌کردن لەگەڵ تیمەکە', href: '/contact' },
          chips: ['شیەر', 'بلاک‌ئاوت', 'کۆتایی لوکس'],
        },
        {
          id: 'video',
          type: 'video',
          badge: 'بیری سلایدی ڤیدیۆ',
          title: 'سلایدی ڤیدیۆ بەکاربهێنە بۆ ناساندنی ستایل و هەستی شۆڕوومەکەت.',
          description: 'ئێستا سلایدەرەکە پشتگیریی چیرۆکی ڤیدیۆ دەکات، و دواتر دەتوانیت نمونەکە بگۆڕیت بۆ ڤیدیۆی ڕاستەقینەی شۆڕووم یان دامەزراندن.',
          primary: { label: 'بینینی هاوبەشەکان', href: '/partners' },
          secondary: { label: 'کردنەوەی پەڕەی تیم', href: '/team' },
          chips: ['ئامادە بۆ ڤیدیۆ', 'ئۆتۆپلەی بێدەنگ', 'سپلاش براند'],
        },
        {
          id: 'rails',
          type: 'rails',
          badge: 'سیستەمی ڕەیل',
          title: 'ڕەیلی لوکس و هەڵبژاردنی کارەبایی و دامەزراندنی پاکتر.',
          description: 'ئێستا ماڵپەڕەکە پەڕەی تایبەتی ڕەیلی هەیە و منیوی دابەزێنراو، بۆ ئەوەی ئامرازەکانیش بەشێکی گرنگ بن لە ئەزموونی بەرهەم.',
          primary: { label: 'کردنەوەی پەڕەی ڕەیل', href: '/rails' },
          secondary: { label: 'پەیوەندی بۆ پێوانە', href: '/contact' },
          chips: ['وێڤ', 'ئامادە بۆ مۆتۆر', 'جوڵەی نەرم'],
        },
        {
          id: 'brand',
          type: 'brand',
          badge: 'ناسنامەی براند',
          title: 'متمانە دروست بکە بە براندی هاوبەش و پیشاندانی تیم و ڕێکخستنی باشتر.',
          description: 'شێوازی نوێی وێبسایتەکە لە ماڵپەڕی کورتەنەی مۆدێرن وەرگیراوە بۆ هاوسەنگکردنی دۆزینەوەی بەشەکان و سەلماندنی براند و ڕێنمایی خزمەتگوزاری.',
          primary: { label: 'سەردانی پەڕەی دەربارە بکە', href: '/about' },
          secondary: { label: 'داواکاری بنێرە', href: '/contact' },
          chips: ['مێنوی نوێ', 'پەڕەی جیاواز', 'چەند زمان'],
        },
      ],
    },
    home: {
      collections: {
        eyebrow: 'بازاڕکردن بەسەر بەشەکاندا',
        title: 'شوێنێکی باشتر بۆ فرۆشتن بە پەڕەی تایبەت بۆ پەردە و ڕەیل و خزمەتگوزاری.',
        description: 'ئێستا مێنیوەکە ئامادەی دابەزینە و هەر بەشێکی سەرەکی دەتوانێت بچێتە پەڕەی خۆی.',
        cards: [
          { title: 'پەردەی لوکس', desc: 'توێژە توێژەی جوان بۆ ڤیلا و هۆڵ و ژووری خەو.', href: '/collections#curtains' },
          { title: 'شیەر و ڤۆیل', desc: 'پارچەی ڕووناکی‌هێنەر بە نهێنیی نەرمدان.', href: '/collections#sheers' },
          { title: 'بلاک‌ئاوت و هوتێل', desc: 'هەڵبژاردنی تاریککردن بۆ ئاسوودەیی و نهێنی.', href: '/collections#blackout' },
          { title: 'ڕەیل و سیستەم', desc: 'وێڤ و ڕێڵی شاراوە و مۆتۆر و کەرەستە.', href: '/rails' },
        ],
      },
      partners: {
        eyebrow: 'براندە هاوبەشەکان',
        title: 'بەشی هاوبەشەکان پاکتر و مۆدێرنتر بووە.',
        description: 'ئێستا کارتەکان بە پیتی سەرەتا نیشان دەدرێن، بەڵام دیزاینەکە ئامادەی دانانی ناو و لۆگۆی ڕاستەقینەی هاوبەشەکانە.',
      },
      team: {
        eyebrow: 'تیمەکەمان',
        title: 'ئەو کەسانە پیشان بدە کە لە پێوانە و دیزاین و دامەزراندندا پشت گوڵدەن.',
        description: 'لە پەڕەی سەرەکی تیمەکەت ناسێندراوە و هەروەها پەڕەی تایبەت بۆ تیم هەیە بۆ وردەکاری زیاتر.',
        cta: 'کردنەوەی پەڕەی تەواوی تیم',
      },
      about: {
        eyebrow: 'دەربارەی مۆدێرن پەردە',
        title: 'براندێکی پەردەی ناسراو بۆ ماڵ و هۆڵ و ڤیلا و شوێنی بازرگانی.',
        body1: 'مۆدێرن پەردە هەڵبژاردنی پارچەی جوان و ڕاوێژی تایبەت و پلانی دامەزراندن تێکدەکات بۆ دروستکردنی ئەزموونی تەواوی پەنجەرە.',
        body2: 'ڕێکخستنی نوێ گرنگی بە ڕوونکردنەوەی براند و متمانەی خزمەتگوزاری و ناساندنی بەرهەمەکان دەدات.',
        stats: [
          { value: '10+', label: 'ساڵی ئەزموون' },
          { value: '120+', label: 'ئاڕاستەی پارچە' },
          { value: '2500+', label: 'پڕۆژەی تەواوبوو' },
          { value: '4', label: 'زمانی ئامادە' },
        ],
      },
      cta: {
        title: 'ئامادەیت پەنجەرەکانت ئاراستە بکەیت؟',
        description: 'وێنەی ژوور یاخود دڵخوازت لە پارچە یان بیری ڕەیل بنێرە، تیمەکە ڕێنماییت دەکات.',
        primary: 'پەیوەندیمان پێوە بکە',
        secondary: 'هەژمار دروست بکە',
      },
    },
    pages: {
      collections: {
        title: 'کۆلێکشنەکانی پەردە',
        description: 'ئاڕاستەی پارچە و جۆری هێڵکردن و چارەسەرە گونجاوەکان بۆ ژوورەکان لە پەڕەی تایبەتدا ببینە.',
        sections: [
          {
            title: 'ئاڕاستەی پارچە',
            items: [
              { title: 'شیەر و ڤۆیل', text: 'نهێنیی نەرمدان لەگەڵ چینە خفیف و جوان.' },
              { title: 'مخمل و پارچەی سادە', text: 'داڕشتنێکی گەورەتر و هەوای گەرمتر بۆ ژوورەکە.' },
              { title: 'لاپەڕەی بلاک‌ئاوت', text: 'ئاسوودەیی و نهێنی و کۆنترۆڵی گەرمی بۆ ژووری خەو و هوتێل.' },
            ],
          },
          {
            title: 'شێواز و هێڵکردن',
            items: [
              { title: 'وێڤ', text: 'توێژەی هاوچەرخ بە هێڵی پاک و لوکس.' },
              { title: 'ئایڵێت و پلیت', text: 'شێوازە کلاسیکییەکان بە قەبارە و قووڵایی.' },
              { title: 'ئامادەی مۆتۆر', text: 'گونجاو بۆ ڕەیلی شاراوە و جوڵەی زیرەک.' },
            ],
          },
        ],
      },
      rails: {
        title: 'ڕەیل و کەرەستە',
        description: 'ڕەیلەکان پەڕەی خۆیان هەبن بۆ ئەوەی کڕیار وەک بەرهەمێکی لوکس سەیریان بکات.',
        highlights: [
          { title: 'ڕێڵی وێڤ', text: 'هێڵی هاوچەرخ و جوڵەی نەرم بۆ ناوەڕۆکی مۆدێرن.' },
          { title: 'سیستەمی کارەبایی', text: 'کارکردنی بێدەنگ بۆ پەنجەرەی گەورە و ماڵی زیرەک.' },
          { title: 'ڕەیلی سەقفی شاراوە', text: 'وردەکاری کەمتر و کۆتایی پاکتر.' },
          { title: 'ئاکسسوارات', text: 'براکێت و هووک و گلایدەر و پارچەی تەواوکاری.' },
        ],
      },
      partners: {
        title: 'براندە هاوبەشەکان',
        description: 'پەڕەیەکی تەواو بۆ هاوکار و دابینکەر و براندە گرنگەکان.',
      },
      team: {
        title: 'تیمەکەمان بناسە',
        description: 'دیزاین و ڕاوێژ و پلانی ڕەیل و دامەزراندن هەموویان بەهۆی ئەو کەسانەوەی پشتی مۆدێرن پەردەن.',
        values: [
          { title: 'ڕێنمایی دیزاین', text: 'یارمەتی کڕیار دەدەین بۆ هەڵبژاردنی مۆد و پارچە و جۆری توێژە.' },
          { title: 'ڕوونی پێوانە', text: 'پلانی پەنجەرە بە بیرکردنەوەی پراکتیکی دامەزراندن ئەنجام دەدرێت.' },
          { title: 'بەدواداچوونی پڕۆژە', text: 'لە نرخی پێشکەشکراوەوە تا کۆتایی کار، پڕۆژە ڕێکخراو دەبێت.' },
        ],
      },
      about: {
        title: 'دەربارەی مۆدێرن پەردە',
        description: 'پەڕەیەک بۆ چیرۆک و بەڵێن و ڕێگای کاری براندەکەت.',
        story: [
          'مۆدێرن پەردە لەسەر ئەو بیرۆکەیە دروستبووە کە ئاراستەکردنی پەنجەرە دەبێت تەواو بێت: پارچە و ڕەیل و کۆنترۆڵی ڕووناکی و کۆتایی جوان.',
          'لە بری پیشاندانی بەرهەم تەنها، وێبسایتەکە ئێستا خزمەتگوزاری و شارەزایی تیم و متمانەی براند بە شێوەیەکی ڕوونتر پیشان دەدات.',
          'ئەم ڕێکخستنە شوێن بۆ گەشەدان دەهێڵێتەوە بۆ پەڕەی زیاتر و بەشە دابەزێنراوەکان و لۆگۆی ڕاستەقینەی هاوبەشەکان.',
        ],
      },
      contact: {
        title: 'پەیوەندی بکە بە مۆدێرن پەردە',
        description: 'ئەم پەڕەیە بەکاربهێنە بۆ سەردانی شۆڕووم و داواکاری نرخ و وێنەی ژوور و گفتوگۆی پڕۆژە.',
        formTitle: 'داواکارییەکەت بنێرە',
        formSubtitle: 'پێمان بڵێ ژوورەکە چۆنە یان چ جۆر پارچە یان ڕەیلت پێویستە.',
        fields: {
          name: 'ناوی تەواو',
          phone: 'ژمارەی مۆبایل',
          email: 'ئیمەیڵ',
          message: 'نامەکەت',
          submit: 'ناردنی داواکاری',
        },
        detailsTitle: 'زانیاری پەیوەندی',
        visit: 'ناوچەی ئیمپایەر، دهۆک، عێراق',
        call: '+964 750 123 4567',
        email: 'hello@modernperde.com',
        hours: 'شەممە تا پێنجشەممە • 10:00 بەیانی – 8:00 ئێوارە',
      },
      auth: {
        loginTitle: 'بەخێربێیتەوە',
        loginDescription: 'چوونەژوورەوە بۆ پاراستنی کۆلێکشنە دڵخوازەکانت و بەدواداچوونی داواکارییەکان.',
        signupTitle: 'هەژمارت دروست بکە',
        signupDescription: 'تۆمار بکە بۆ پاراستنی هەڵبژاردنەکان و تێبینیی ژوور و بەدواداچوونی پڕۆژە.',
        email: 'ئیمەیڵ',
        password: 'وشەی نهێنی',
        fullName: 'ناوی تەواو',
        actionLogin: 'چوونەژوورەوە',
        actionSignup: 'دروستکردنی هەژمار',
        switchToLogin: 'هەژمارت هەیە؟ بچۆ ژوورەوە',
        switchToSignup: 'هەژمارت نییە؟ دروستی بکە',
      },
    },
    footer: {
      newsletterTitle: 'ئاگاداری هاتنە ناوەوەی نوێ بمێنەوە',
      newsletterDescription: 'بۆ بیرۆکەی ستایل و نوێکاری پارچە و ئۆفەری تایبەت تۆمار بکە.',
      subscribePlaceholder: 'ئیمەیڵەکەت بنووسە',
      subscribeButton: 'تۆماربوون',
      quickLinks: 'بەستەرە خێراکان',
      contact: 'پەیوەندی',
      rights: '© 2026 مۆدێرن پەردە. هەموو مافەکان پارێزراون.',
      privacy: 'سیاسەتی نهێنی',
      terms: 'مەرجەکانی خزمەتگوزاری',
    },
  },
  tr: {
    localeName: 'Türkçe',
    brandTagline: 'Perde • Ray • Özel Tasarım',
    topBar: 'Modern evler için lüks perdeler, raylar ve özel pencere tasarımı.',
    languageLabel: 'Dil',
    accountLabel: 'Hesabım',
    login: 'Giriş yap',
    signup: 'Kayıt ol',
    searchPlaceholder: 'Koleksiyon, ray veya sayfa ara',
    nav: {
      home: 'Ana Sayfa',
      collections: 'Koleksiyonlar',
      rails: 'Raylar',
      partners: 'Partnerler',
      team: 'Ekibimiz',
      about: 'Hakkımızda',
      contact: 'İletişim',
      shopDropdown: 'Mağaza',
      pagesDropdown: 'Sayfalar',
    },
    menu: {
      shop: {
        label: 'Mağaza',
        items: [
          { label: 'Lüks perdeler', href: '/collections#curtains', description: 'Katmanlı drapeler, tüller ve blackout seçenekleri.' },
          { label: 'Tül & voile', href: '/collections#sheers', description: 'Yumuşak gün ışığı filtreleyen kumaşlar.' },
          { label: 'Blackout & astar', href: '/collections#blackout', description: 'Gizlilik, ısı ve otel çözümleri.' },
          { label: 'Ray & aksesuar', href: '/rails', description: 'Wave raylar, motorlu sistemler ve aksesuarlar.' },
        ],
      },
      pages: {
        label: 'Sayfalar',
        items: [
          { label: 'Partner markalar', href: '/partners', description: 'Markalar ve iş ortakları için modern vitrin.' },
          { label: 'Ekibimiz', href: '/team', description: 'Tasarım, danışmanlık ve montaj ekibini tanıyın.' },
          { label: 'Modern Perde hakkında', href: '/about', description: 'Hikâyemiz, kalite sözümüz ve süreç.' },
          { label: 'İletişim sayfası', href: '/contact', description: 'Telefon, showroom ve talep formu.' },
        ],
      },
    },
    hero: {
      eyebrow: 'Premium pencere tasarımı',
      slides: [
        {
          id: 'compare',
          type: 'compare',
          badge: 'Önce & sonra konsepti',
          title: 'Odayı premium hissettiren katmanlı perdelerle dönüştürün.',
          description: 'Tül, blackout ve dengeli pilelerin mekânın tüm atmosferini nasıl değiştirdiğini gösteren daha aydınlık bir kahraman alanı.',
          primary: { label: 'Koleksiyonları incele', href: '/collections' },
          secondary: { label: 'Ekibimizle konuş', href: '/contact' },
          chips: ['Tül', 'Blackout', 'Lüks bitiş'],
        },
        {
          id: 'video',
          type: 'video',
          badge: 'Video slider konsepti',
          title: 'Stilinizi ve showroom hissini anlatmak için markalı video kullanın.',
          description: 'Slider artık video tarzı hikâye anlatımını destekliyor; daha sonra örnek videoyu gerçek showroom veya montaj görüntülerinizle değiştirebilirsiniz.',
          primary: { label: 'Partner markaları gör', href: '/partners' },
          secondary: { label: 'Ekip sayfasını aç', href: '/team' },
          chips: ['Video hazır', 'Sessiz oynatma', 'Marka splash'],
        },
        {
          id: 'rails',
          type: 'rails',
          badge: 'Ray sistemleri',
          title: 'Premium raylar, motor seçenekleri ve daha temiz montaj detayları.',
          description: 'Site artık ayrı bir ray sayfası ve açılır menü içeriyor; böylece donanım ürün deneyiminin gerçek bir parçası oluyor.',
          primary: { label: 'Ray sayfasını aç', href: '/rails' },
          secondary: { label: 'Ölçü için iletişim', href: '/contact' },
          chips: ['Wave ray', 'Motor hazır', 'Yumuşak hareket'],
        },
        {
          id: 'brand',
          type: 'brand',
          badge: 'Marka imzası',
          title: 'Partner markalar, ekip sunumu ve güçlü sayfa yapısıyla güven oluşturun.',
          description: 'Yeni yapı, modern perde e-ticaret düzenlerinden ilham alarak kategori keşfi, marka güveni ve hizmet yönlendirmesini dengeler.',
          primary: { label: 'Hakkımızda sayfasına git', href: '/about' },
          secondary: { label: 'Talep gönder', href: '/contact' },
          chips: ['Modern menü', 'Ayrı sayfalar', 'Çok dil'],
        },
      ],
    },
    home: {
      collections: {
        eyebrow: 'Kategoriye göre alışveriş',
        title: 'Perde, ray ve hizmet yönü için ayrı sayfalarla daha güçlü mağaza alanı.',
        description: 'Menü artık açılır yapıya hazır ve her ana öğe yalnızca ana sayfa içinde kaydırmak yerine kendi sayfasına gidebilir.',
        cards: [
          { title: 'Lüks perdeler', desc: 'Villa, salon ve yatak odaları için katmanlı drapeler.', href: '/collections#curtains' },
          { title: 'Tül & voile', desc: 'Gündüz için yumuşak mahremiyet sağlayan kumaşlar.', href: '/collections#sheers' },
          { title: 'Blackout & otel', desc: 'Konfor ve mahremiyet için karartma seçenekleri.', href: '/collections#blackout' },
          { title: 'Ray & sistemler', desc: 'Wave raylar, gizli raylar, motorlar ve aksesuarlar.', href: '/rails' },
        ],
      },
      partners: {
        eyebrow: 'Partner markalar',
        title: 'Daha temiz ve modern bir partner bölümü.',
        description: 'Kartlar şu anda güçlü baş harflerle görünüyor; daha sonra gerçek isim ve logolarınızla kolayca değiştirebilirsiniz.',
      },
      team: {
        eyebrow: 'Ekibimiz',
        title: 'Ölçü, tasarım ve montajın arkasındaki insanları gösterin.',
        description: 'Ana sayfa artık ekibinizi tanıtıyor ve daha fazla detay için tam bir ekip sayfası da içeriyor.',
        cta: 'Tam ekip sayfasını aç',
      },
      about: {
        eyebrow: 'Modern Perde hakkında',
        title: 'Evler, salonlar, villalar ve ticari alanlar için rafine bir perde markası.',
        body1: 'Modern Perde, pencere tasarımını tek bir ürün satışı yerine; kumaş seçimi, özel danışmanlık ve montaj planlamasıyla tamamlanmış bir deneyime dönüştürür.',
        body2: 'Yeni yapı, ziyaretçilerin ilhamdan talebe daha hızlı geçebilmesi için marka netliği, hizmet güveni ve ürün keşfine odaklanır.',
        stats: [
          { value: '10+', label: 'Yıllık deneyim' },
          { value: '120+', label: 'Kumaş yönü' },
          { value: '2500+', label: 'Tamamlanan proje' },
          { value: '4', label: 'Hazır dil' },
        ],
      },
      cta: {
        title: 'Pencerelerinizi şekillendirmeye hazır mısınız?',
        description: 'Oda fotoğrafınızı, kumaş tercihinizi veya ray fikrinizi gönderin; ekibimiz doğru kombinasyonu önersin.',
        primary: 'Bize ulaşın',
        secondary: 'Hesap oluştur',
      },
    },
    pages: {
      collections: {
        title: 'Perde Koleksiyonları',
        description: 'Kumaş yönünü, başlık stillerini ve oda odaklı çözümleri ayrı bir koleksiyon sayfasında keşfedin.',
        sections: [
          {
            title: 'Kumaş yönü',
            items: [
              { title: 'Tül & voile', text: 'Daha hafif katmanlar ve zarif gizlilik.' },
              { title: 'Kadife & dokulu düzler', text: 'Daha zengin dökümlü ve sıcak bir oda hissi.' },
              { title: 'Blackout astar', text: 'Yatak odaları ve oteller için konfor, mahremiyet ve ısı kontrolü.' },
            ],
          },
          {
            title: 'Başlık & stil',
            items: [
              { title: 'Wave', text: 'Temiz premium çizgiler için çağdaş pileler.' },
              { title: 'Eyelet & pile', text: 'Güçlü hacim ve derinlik veren klasik başlıklar.' },
              { title: 'Motor hazır', text: 'Gizli raylar ve akıllı hareket için hazırlanmış.' },
            ],
          },
        ],
      },
      rails: {
        title: 'Raylar & Donanım',
        description: 'Raylara ayrı bir sayfa verin; müşteriler onları sonradan eklenen bir unsur değil, premium ürün olarak görsün.',
        highlights: [
          { title: 'Wave raylar', text: 'Çağdaş iç mekânlar için modern çizgi ve akıcı hareket.' },
          { title: 'Motorlu sistemler', text: 'Büyük pencereler ve akıllı evler için sessiz kullanım.' },
          { title: 'Gizli tavan rayları', text: 'Daha minimal detay ve temiz lüks bitiş.' },
          { title: 'Aksesuarlar', text: 'Aparatlar, kancalar, gliderlar ve bitiş parçaları.' },
        ],
      },
      partners: {
        title: 'Partner Markalar',
        description: 'İş ortakları, tedarikçiler ve premium proje markaları için özel bir sayfa.',
      },
      team: {
        title: 'Ekibimizi Tanıyın',
        description: 'Tasarım, kumaş danışmanlığı, ray planlama ve montaj Modern Perde ekibinde birleşir.',
        values: [
          { title: 'Tasarım yönlendirmesi', text: 'Müşterilere mood, pile ve kumaş yönü seçmede yardımcı oluruz.' },
          { title: 'Ölçü netliği', text: 'Pencere planlaması pratik montaj düşüncesiyle yapılır.' },
          { title: 'Proje takibi', text: 'Tekliften bitişe kadar süreç koordineli ilerler.' },
        ],
      },
      about: {
        title: 'Modern Perde Hakkında',
        description: 'Hikâyeniz, sözünüz ve süreciniz için marka odaklı bir sayfa.',
        story: [
          'Modern Perde, pencere tasarımının eksiksiz olması gerektiği fikri üzerine kuruldu: kumaş, ray, ışık kontrolü ve son dokunuş birlikte çalışmalı.',
          'Site artık sadece ürün göstermiyor; hizmetleri, ekip uzmanlığını ve marka güvenini daha net bir şekilde sunuyor.',
          'Bu yapı, ileride daha fazla sayfa, açılır kategoriler ve gerçek partner logolarıyla büyümenize alan bırakır.',
        ],
      },
      contact: {
        title: 'Modern Perde ile İletişim',
        description: 'Showroom ziyareti, fiyat talebi, oda fotoğrafı veya proje görüşmesi için bu sayfayı kullanın.',
        formTitle: 'Talebinizi gönderin',
        formSubtitle: 'Oda, kumaş stili veya ihtiyacınız olan ray sistemi hakkında bize yazın.',
        fields: {
          name: 'Ad soyad',
          phone: 'Telefon numarası',
          email: 'E-posta adresi',
          message: 'Mesajınız',
          submit: 'Talep gönder',
        },
        detailsTitle: 'İletişim bilgileri',
        visit: 'Empire bölgesi, Duhok, Irak',
        call: '+964 750 123 4567',
        email: 'hello@modernperde.com',
        hours: 'Cumartesi - Perşembe • 10:00 – 20:00',
      },
      auth: {
        loginTitle: 'Tekrar hoş geldiniz',
        loginDescription: 'Favori koleksiyonlarınızı kaydetmek ve ileride taleplerinizi takip etmek için giriş yapın.',
        signupTitle: 'Hesabınızı oluşturun',
        signupDescription: 'Tercihlerinizi, oda notlarınızı ve proje takibini saklamak için kayıt olun.',
        email: 'E-posta adresi',
        password: 'Şifre',
        fullName: 'Ad soyad',
        actionLogin: 'Giriş yap',
        actionSignup: 'Hesap oluştur',
        switchToLogin: 'Zaten hesabınız var mı? Giriş yapın',
        switchToSignup: 'Hesabınız yok mu? Kayıt olun',
      },
    },
    footer: {
      newsletterTitle: 'Yeni gelenlerden haberdar olun',
      newsletterDescription: 'Stil fikirleri, kumaş güncellemeleri ve özel fırsatlar için abone olun.',
      subscribePlaceholder: 'E-posta adresinizi girin',
      subscribeButton: 'Abone ol',
      quickLinks: 'Hızlı bağlantılar',
      contact: 'İletişim',
      rights: '© 2026 Modern Perde. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
    },
  },
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
