import Link from 'next/link'
import { Facebook, Instagram, MapPin, MessageCircleMore, Music2 } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { Locale, Dictionary, localizePath } from '@/lib/i18n'
import { SHOP_MAP_LINK, socialLinks } from '@/lib/site-links'

interface SiteFooterProps {
  locale: Locale
  dict: Dictionary
}

const lt = (locale: Locale, en: string, ar: string, ku: string, tr: string) => ({ en, ar, ku, tr }[locale])

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  const socialItems = [
    { label: 'WhatsApp', href: socialLinks.whatsapp, icon: MessageCircleMore },
    { label: 'Instagram', href: socialLinks.instagram, icon: Instagram },
    { label: 'Facebook', href: socialLinks.facebook, icon: Facebook },
    { label: 'TikTok', href: socialLinks.tiktok, icon: Music2 },
    { label: lt(locale, 'Map', 'الخريطة', 'نەخشە', 'Harita'), href: SHOP_MAP_LINK, icon: MapPin },
  ]

  const footerIntro = lt(
    locale,
    'Custom curtains, rails and room styling prepared with measurement, fabric guidance and cleaner finishing details.',
    'ستائر وقضبان وتنسيق غرف حسب الطلب مع القياس واختيار القماش ولمسات نهائية أنظف.',
    'پەردە و ڕەیل و ستایلکردنی ژوور بە پێوانە و ڕێنمایی پارچە و وردەکاریی پاکتری کۆتایی.',
    'Ölçü, kumaş yönlendirmesi ve temiz bitiş detaylarıyla hazırlanan özel perdeler, raylar ve oda stili.',
  )

  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="border-b border-white/10">
        <div className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Modern Perde</p>
            <h3 className="mt-3 text-3xl font-serif font-bold">{dict.footer.newsletterTitle}</h3>
            <p className="mt-3 max-w-2xl text-background/70">{dict.footer.newsletterDescription}</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={dict.footer.subscribePlaceholder}
              className="h-12 flex-1 rounded-full border border-white/10 bg-white/10 px-5 text-background placeholder:text-background/45 focus:outline-none"
            />
            <button className="h-12 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              {dict.footer.subscribeButton}
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto grid gap-12 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo href={localizePath(locale)} tagline={dict.brandTagline} className="[&_span]:text-background [&_span:last-child]:text-background/60" />
          <p className="mt-5 max-w-sm text-background/65">{footerIntro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm transition-colors hover:bg-white/12">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">{dict.footer.quickLinks}</h4>
          <div className="mt-5 grid gap-3 text-background/70">
            <Link href={localizePath(locale)}>{dict.nav.home}</Link>
            <Link href={localizePath(locale, '/collections')}>{dict.nav.collections}</Link>
            <Link href={localizePath(locale, '/rails')}>{dict.nav.rails}</Link>
            <Link href={localizePath(locale, '/blog')}>{lt(locale, 'Blog', 'المدونة', 'بلۆگ', 'Blog')}</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">{dict.nav.pagesDropdown}</h4>
          <div className="mt-5 grid gap-3 text-background/70">
            <Link href={localizePath(locale, '/team')}>{dict.nav.team}</Link>
            <Link href={localizePath(locale, '/about')}>{dict.nav.about}</Link>
            <Link href={localizePath(locale, '/contact')}>{dict.nav.contact}</Link>
            <Link href={localizePath(locale, '/login')}>{dict.login}</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">{dict.footer.contact}</h4>
          <div className="mt-5 grid gap-3 text-background/70">
            <p>{dict.pages.contact.visit}</p>
            <p>{dict.pages.contact.call}</p>
            <p>{dict.pages.contact.email}</p>
            <a href={SHOP_MAP_LINK} target="_blank" rel="noreferrer" className="text-background/80 hover:text-background">
              {lt(locale, 'Open shop map', 'افتح خريطة المحل', 'نەخشەی فرۆشگا بکەرەوە', 'Mağaza haritasını aç')}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-5 text-sm text-background/55 md:flex-row md:items-center md:justify-between">
          <p>{dict.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#">{dict.footer.privacy}</a>
            <a href="#">{dict.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
