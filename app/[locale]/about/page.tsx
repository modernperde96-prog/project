import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { AboutSection } from '@/components/about-section'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { getDictionary, isLocale, localizePath, type Locale } from '@/lib/i18n'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero
        eyebrow={dict.nav.about}
        title={dict.pages.about.title}
        description={dict.pages.about.description}
        actions={<Button asChild className="rounded-full px-6"><Link href={localizePath(currentLocale, '/contact')}>{dict.home.cta.primary}</Link></Button>}
      />
      <AboutSection locale={currentLocale} dict={dict} />
    </SiteShell>
  )
}
