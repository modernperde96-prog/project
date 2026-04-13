import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { SiteShell } from '@/components/site-shell'
import { getDictionary, isLocale, type Locale } from '@/lib/i18n'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  const labels = {
    visit: currentLocale === 'ar' ? 'زيارة' : currentLocale === 'ku' ? 'سەردان' : currentLocale === 'tr' ? 'Ziyaret' : 'Visit',
    call: currentLocale === 'ar' ? 'اتصال' : currentLocale === 'ku' ? 'پەیوەندی' : currentLocale === 'tr' ? 'Ara' : 'Call',
    email: currentLocale === 'ar' ? 'البريد' : currentLocale === 'ku' ? 'ئیمەیڵ' : currentLocale === 'tr' ? 'E-posta' : 'Email',
    hours: currentLocale === 'ar' ? 'الأوقات' : currentLocale === 'ku' ? 'کاتەکان' : currentLocale === 'tr' ? 'Saatler' : 'Hours',
  }

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero eyebrow={dict.nav.contact} title={dict.pages.contact.title} description={dict.pages.contact.description} />

      <section className="py-20">
        <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold">{dict.pages.contact.formTitle}</h2>
            <p className="mt-3 text-muted-foreground">{dict.pages.contact.formSubtitle}</p>
            <form className="mt-8 grid gap-4">
              <input className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.contact.fields.name} />
              <input className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.contact.fields.phone} />
              <input className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.contact.fields.email} />
              <textarea className="min-h-36 rounded-2xl border border-input bg-background px-4 py-3" placeholder={dict.pages.contact.fields.message} />
              <button className="h-12 rounded-full bg-primary px-6 font-semibold text-primary-foreground">{dict.pages.contact.fields.submit}</button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-bold">{dict.pages.contact.detailsTitle}</h2>
              <div className="mt-6 grid gap-5 text-muted-foreground">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{labels.visit}</p>
                  <p className="mt-2">{dict.pages.contact.visit}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{labels.call}</p>
                  <p className="mt-2">{dict.pages.contact.call}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{labels.email}</p>
                  <p className="mt-2">{dict.pages.contact.email}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{labels.hours}</p>
                  <p className="mt-2">{dict.pages.contact.hours}</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80" alt="Showroom meeting" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
