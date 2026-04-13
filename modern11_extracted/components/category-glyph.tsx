import { cn } from '@/lib/utils'

export type CategoryGlyphName = 'rail' | 'blackout' | 'sheer' | 'fabric' | 'zebra' | 'jaluzi' | 'dk' | 'accessory'

export function CategoryGlyph({ name, className }: { name: CategoryGlyphName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-6 w-6', className)}
      aria-hidden="true"
    >
      {name === 'rail' && (
        <>
          <path d="M4 7h16" />
          <path d="M7 7v10" />
          <path d="M12 7v7" />
          <path d="M17 7v10" />
          <circle cx="7" cy="18" r="1.2" />
          <circle cx="17" cy="18" r="1.2" />
        </>
      )}

      {name === 'blackout' && (
        <>
          <path d="M6 4h10a2 2 0 0 1 2 2v14" />
          <path d="M6 4v16" />
          <path d="M6 20h12" />
          <path d="M9 7v10" />
          <path d="M12 7v10" />
          <path d="M15 7v10" />
        </>
      )}

      {name === 'sheer' && (
        <>
          <path d="M6 4h12" />
          <path d="M8 4v16" />
          <path d="M16 4v16" />
          <path d="M8 8c2.8 1.8 5.2 1.8 8 0" />
          <path d="M8 12c2.8 1.8 5.2 1.8 8 0" />
          <path d="M8 16c2.8 1.8 5.2 1.8 8 0" />
        </>
      )}

      {name === 'fabric' && (
        <>
          <path d="M6 6h12v12H6z" />
          <path d="M6 10c2-1.8 4-1.8 6 0s4 1.8 6 0" />
          <path d="M6 14c2-1.8 4-1.8 6 0s4 1.8 6 0" />
        </>
      )}

      {name === 'zebra' && (
        <>
          <path d="M6 4h12v16H6z" />
          <path d="M6 7h12" />
          <path d="M6 11h12" />
          <path d="M6 15h12" />
          <path d="M10 4v16" className="opacity-70" />
        </>
      )}

      {name === 'jaluzi' && (
        <>
          <path d="M6 6h12" />
          <path d="M7 9h10" />
          <path d="M6 12h12" />
          <path d="M7 15h10" />
          <path d="M6 18h12" />
          <path d="M18 6v12" />
        </>
      )}

      {name === 'dk' && (
        <>
          <path d="M6 4h12v16H6z" />
          <path d="M10 4v16" />
          <path d="M14 4v16" />
          <path d="M6 12h12" />
        </>
      )}

      {name === 'accessory' && (
        <>
          <circle cx="9" cy="9" r="2.2" />
          <circle cx="15" cy="15" r="2.2" />
          <path d="M10.7 10.7l2.6 2.6" />
          <path d="M14.5 7.5l2 2" />
          <path d="M7.5 14.5l2 2" />
        </>
      )}
    </svg>
  )
}
