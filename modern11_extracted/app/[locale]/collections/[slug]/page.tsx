import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { ProductDetailShowcase } from '@/components/product-detail-showcase'
import { SiteShell } from '@/components/site-shell'
import { getDictionary, isLocale, type Locale } from '@/lib/i18n'
import { getProductBySlug } from '@/lib/catalog-data'

export default async function CollectionDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero
        eyebrow={product.tag[currentLocale]}
        title={product.name[currentLocale]}
        description={product.overview[currentLocale]}
      />
      <ProductDetailShowcase locale={currentLocale} product={product} />
    </SiteShell>
  )
}
