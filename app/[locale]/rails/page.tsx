import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { getDictionary, isLocale, localizePath, type Locale } from '@/lib/i18n'

export default async function RailsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero
        eyebrow={dict.nav.rails}
        title={dict.pages.rails.title}
        description={dict.pages.rails.description}
        actions={<Button asChild className="rounded-full px-6"><Link href={localizePath(currentLocale, '/contact')}>{dict.home.cta.primary}</Link></Button>}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dict.pages.rails.highlights.map((item, index) => (
              <article key={item.title} className="rounded-[1.8rem] border border-border bg-card p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">0{index + 1}</p>
                <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80" alt="Rail and curtain detail" className="aspect-[16/7] w-full object-cover" />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
