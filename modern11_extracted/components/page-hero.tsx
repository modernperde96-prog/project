import { ReactNode } from 'react'

export function PageHero({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-secondary/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute end-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute start-0 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container relative mx-auto px-4 py-20 md:py-24">
        <span className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-serif font-bold tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  )
}
