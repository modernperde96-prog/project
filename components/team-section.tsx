import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { teamMembers, Dictionary, Locale, localizePath } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

const portraits = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
]

export function TeamSection({ locale, dict, compact = false }: { locale: Locale; dict: Dictionary; compact?: boolean }) {
  const members = compact ? teamMembers.slice(0, 3) : teamMembers

  return (
    <section className="py-24" id="team">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{dict.home.team.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">{compact ? dict.home.team.title : dict.pages.team.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{compact ? dict.home.team.description : dict.pages.team.description}</p>
          </div>
          {compact ? (
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href={localizePath(locale, '/team')}>{dict.home.team.cta}</Link>
            </Button>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <article key={member.name} className="group overflow-hidden rounded-[1.9rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src={portraits[index % portraits.length]} alt={member.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{member.role[locale]}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{member.bio[locale]}</p>
                <div className="mt-5 flex items-center justify-between gap-3 rounded-[1.25rem] bg-secondary/60 px-4 py-3 text-sm">
                  <span>{member.role[locale]}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {!compact ? (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {dict.pages.team.values.map((value) => (
              <div key={value.title} className="rounded-[1.6rem] border border-border bg-secondary/55 p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
