import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dictionary, Locale, localizePath } from '@/lib/i18n'

export function ContactSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary to-primary/85 text-primary-foreground shadow-2xl">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80">Modern Perde</p>
              <h2 className="mt-4 text-3xl font-serif font-bold md:text-4xl">{dict.home.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">{dict.home.cta.description}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button asChild variant="secondary" className="rounded-full px-6 text-foreground">
                <Link href={localizePath(locale, '/contact')}>{dict.home.cta.primary}</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/15">
                <Link href={localizePath(locale, '/signup')}>{dict.home.cta.secondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
