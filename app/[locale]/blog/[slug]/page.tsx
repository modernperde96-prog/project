import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { SiteShell } from '@/components/site-shell'
import { getBlogPostBySlug } from '@/lib/catalog-data'
import { getDictionary, isLocale, localizePath, type Locale } from '@/lib/i18n'

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export default async function BlogDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale
  const dict = getDictionary(currentLocale)
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <PageHero eyebrow={post.category[currentLocale]} title={post.title[currentLocale]} description={post.excerpt[currentLocale]} />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[0.72fr_0.28fr]">
            <article className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <img src={post.coverImage} alt={post.title[currentLocale]} className="aspect-[16/7] w-full object-cover" />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1.5">{post.category[currentLocale]}</span>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime[currentLocale]}</span>
                </div>
                <div className="mt-8 grid gap-6 text-base leading-8 text-muted-foreground">
                  {post.content.map((paragraph) => (
                    <p key={paragraph.en}>{paragraph[currentLocale]}</p>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6 xl:sticky xl:top-28 xl:h-fit">
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(currentLocale, 'Post details', 'تفاصيل المقال', 'وردەکاری بابەت', 'Yazı detayları')}
                </p>
                <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                  <div className="rounded-[1.3rem] bg-secondary/60 px-4 py-3"><strong className="text-foreground">{lt(currentLocale, 'Author', 'الكاتب', 'نووسەر', 'Yazar')}:</strong> {post.author}</div>
                  <div className="rounded-[1.3rem] bg-secondary/60 px-4 py-3"><strong className="text-foreground">{lt(currentLocale, 'Date', 'التاريخ', 'بەروار', 'Tarih')}:</strong> {post.date}</div>
                  <div className="rounded-[1.3rem] bg-secondary/60 px-4 py-3"><strong className="text-foreground">{lt(currentLocale, 'Reading time', 'وقت القراءة', 'کاتی خوێندنەوە', 'Okuma süresi')}:</strong> {post.readTime[currentLocale]}</div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {lt(currentLocale, 'Continue reading', 'أكمل القراءة', 'بەردەوام بە لە خوێندنەوە', 'Okumaya devam et')}
                </p>
                <Link href={localizePath(currentLocale, '/blog')} className="mt-5 inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold transition-all hover:border-primary/25 hover:text-primary">
                  {lt(currentLocale, 'Back to blog page', 'العودة إلى صفحة المدونة', 'گەڕانەوە بۆ پەڕەی بلۆگ', 'Blog sayfasına dön')}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
