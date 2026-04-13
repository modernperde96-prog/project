"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SiteLoaderVisual } from '@/components/site-loader-visual'

function shouldShowLoader(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute('href')
  if (!href) return false
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) return false

  const url = new URL(href, window.location.href)
  if (url.origin !== window.location.origin) return false

  const samePath = url.pathname === window.location.pathname && url.search === window.location.search
  if (samePath && url.hash) return false

  return !(samePath && !url.hash)
}

export function PageTransitionLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentLocation = useMemo(() => `${pathname}?${searchParams.toString()}`, [pathname, searchParams])
  const [isLoading, setIsLoading] = useState(true)
  const hasMountedRef = useRef(false)
  const previousLocationRef = useRef(currentLocation)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = (delay: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsLoading(false), delay)
  }

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      previousLocationRef.current = currentLocation
      scheduleHide(2900)
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    if (previousLocationRef.current !== currentLocation) {
      previousLocationRef.current = currentLocation
      setIsLoading(true)
      scheduleHide(1450)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentLocation])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      if (!shouldShowLoader(anchor)) return

      setIsLoading(true)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[120]"
        >
          <SiteLoaderVisual />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
