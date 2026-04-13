import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { SiteShell } from '@/components/site-shell'
import { ProductsPageCatalog } from '@/components/products-page-catalog'
import { getDictionary, isLocale, localizePath, type Locale } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export default async function CollectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero
        eyebrow={dict.nav.collections}
        title={dict.pages.collections.title}
        description={dict.pages.collections.description}
        actions={
          <>
            <Button asChild className="rounded-full px-6"><Link href={localizePath(currentLocale, '/contact')}>{dict.home.cta.primary}</Link></Button>
            <Button asChild variant="outline" className="rounded-full px-6"><Link href={localizePath(currentLocale, '/rails')}>{dict.nav.rails}</Link></Button>
          </>
        }
      />

      <ProductsPageCatalog locale={currentLocale} />
    </SiteShell>
  )
}
