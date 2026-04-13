import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { getDictionary, isLocale, localizePath, type Locale } from '@/lib/i18n'

export default async function SignupPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <section className="py-24">
        <div className="container mx-auto max-w-xl px-4">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Modern Perde</p>
            <h1 className="mt-3 text-3xl font-serif font-bold">{dict.pages.auth.signupTitle}</h1>
            <p className="mt-3 text-muted-foreground">{dict.pages.auth.signupDescription}</p>
            <form className="mt-8 grid gap-4">
              <input className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.auth.fullName} />
              <input className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.auth.email} />
              <input type="password" className="h-12 rounded-2xl border border-input bg-background px-4" placeholder={dict.pages.auth.password} />
              <button className="h-12 rounded-full bg-primary px-6 font-semibold text-primary-foreground">{dict.pages.auth.actionSignup}</button>
            </form>
            <p className="mt-6 text-sm text-muted-foreground">
              <Link href={localizePath(currentLocale, '/login')} className="text-primary hover:underline">{dict.pages.auth.switchToLogin}</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
