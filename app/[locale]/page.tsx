import { notFound } from 'next/navigation'
import { HeroSlider } from '@/components/hero-slider'
import { CurtainMarquee } from '@/components/curtain-marquee'
import { CurtainFocusSection } from '@/components/curtain-focus-section'
import { CollectionsShowcase } from '@/components/collections-showcase'
import { ProductsPreviewSection } from '@/components/products-preview-section'
import { RoomSolutionsSection } from '@/components/room-solutions-section'
import { FabricGuideSection } from '@/components/fabric-guide-section'
import { ProjectsSection } from '@/components/projects-section'
import { ProcessSection } from '@/components/process-section'
import { GlobalReachSection } from '@/components/global-reach-section'
import { PartnersSection } from '@/components/partners-section'
import { TeamSection } from '@/components/team-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { BlogSection } from '@/components/blog-section'
import { SiteShell } from '@/components/site-shell'
import { getDictionary, isLocale, type Locale } from '@/lib/i18n'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale

  const dict = getDictionary(currentLocale)

  return (
    <SiteShell locale={currentLocale} dict={dict}>
      <HeroSlider locale={currentLocale} dict={dict} />
      <CurtainMarquee locale={currentLocale} />
      <CurtainFocusSection locale={currentLocale} />
      <CollectionsShowcase locale={currentLocale} dict={dict} />
      <RoomSolutionsSection locale={currentLocale} />
      <ProductsPreviewSection locale={currentLocale} />
      <FabricGuideSection locale={currentLocale} />
      <ProjectsSection locale={currentLocale} />
      <ProcessSection locale={currentLocale} />
      <GlobalReachSection locale={currentLocale} />
      <BlogSection locale={currentLocale} compact />
      <PartnersSection locale={currentLocale} dict={dict} compact />
      <TeamSection locale={currentLocale} dict={dict} compact />
      <AboutSection locale={currentLocale} dict={dict} compact />
      <ContactSection locale={currentLocale} dict={dict} />
    </SiteShell>
  )
}
