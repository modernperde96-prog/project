import { ReactNode } from 'react'
import { Dictionary, Locale } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'

export function SiteShell({ locale, dict, children }: { locale: Locale; dict: Dictionary; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader locale={locale} dict={dict} />
      {children}
      <SiteFooter locale={locale} dict={dict} />
      <FloatingActions locale={locale} />
    </main>
  )
}
