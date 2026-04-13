import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { BlogSection } from '@/components/blog-section'
import { SiteShell } from '@/components/site-shell'
import { getDictionary, isLocale, type Locale } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero
        eyebrow={lt(currentLocale, 'Blog', 'المدونة', 'بلۆگ', 'Blog')}
        title={lt(currentLocale, 'Curtain stories, styling notes and showroom ideas', 'قصص الستائر وملاحظات التنسيق وأفكار الشوروم', 'چیرۆکی پەردە و تێبینی ستایل و بیرۆکەی شوورۆم', 'Perde hikâyeleri, stil notları ve showroom fikirleri')}
        description={lt(currentLocale, 'A full blog page for project updates, curtain tips and practical inspiration your visitors can open and read.', 'صفحة مدونة كاملة لتحديثات المشاريع ونصائح الستائر والإلهام العملي الذي يمكن للزائر فتحه وقراءته.', 'پەڕەیەکی تەواوی بلۆگ بۆ نوێکاریی پڕۆژە و ئامۆژگاری پەردە و ئیلهامی کارا کە سەردانکەر دەتوانێت بیکاتەوە و بیخوێنێتەوە.', 'Ziyaretçilerin açıp okuyabileceği proje güncellemeleri, perde ipuçları ve pratik ilham için tam bir blog sayfası.')}
      />
      <BlogSection locale={currentLocale} />
    </SiteShell>
  )
}
