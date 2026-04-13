import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getDictionary, getDir, isLocale, localeInfo, locales, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const currentLocale = locale as Locale

  const info = localeInfo[currentLocale]
  getDictionary(currentLocale)

  return (
    <div lang={info.htmlLang} dir={getDir(currentLocale)} className={currentLocale === 'ar' ? 'font-arabic' : currentLocale === 'ku' ? 'font-kurdish' : 'font-latin'}>
      {children}
    </div>
  )
}
