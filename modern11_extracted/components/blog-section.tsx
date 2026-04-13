import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Locale, localizePath } from '@/lib/i18n'
import { blogPosts } from '@/lib/catalog-data'
import { cn } from '@/lib/utils'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export function BlogSection({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <section className={compact ? 'py-24' : 'py-20'} id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {lt(locale, 'Blog & styling journal', 'المدونة ويوميات التنسيق', 'بلۆگ و ڕۆژنامەی ستایل', 'Blog ve stil günlüğü')}
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold md:text-4xl">
              {lt(locale, 'Share tips, project stories and practical curtain ideas from the showroom.', 'شارك نصائح وقصص المشاريع وأفكار الستائر العملية من المعرض.', 'ئامۆژگاری و چیرۆکی پڕۆژە و بیرۆکەی کاریگەر لە پەردە لە شوورۆمەوە بڵاو بکەرەوە.', 'Showroomdan perde fikirleri, proje hikâyeleri ve pratik ipuçları paylaşın.')}
            </h2>
          </div>
          <Link
            href={localizePath(locale, '/blog')}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/25"
          >
            {lt(locale, 'Open blog page', 'افتح صفحة المدونة', 'پەڕەی بلۆگ بکەرەوە', 'Blog sayfasını aç')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className={cn(
                'group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl',
                index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]' : '',
              )}
            >
              <div className="overflow-hidden">
                <img src={post.coverImage} alt={post.title[locale]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1.5">{post.category[locale]}</span>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{post.title[locale]}</h3>
                <p className="mt-4 text-muted-foreground">{post.excerpt[locale]}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-primary">{post.readTime[locale]}</span>
                  <Link href={localizePath(locale, `/blog/${post.slug}`)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    {lt(locale, 'Read post', 'اقرأ المقال', 'بابەتەکە بخوێنەوە', 'Yazıyı oku')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
