import { cn } from '@/lib/utils'

export function FabricSwatchCard({
  image,
  title,
  subtitle,
  className,
  compact = false,
}: {
  image: string
  title: string
  subtitle?: string
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'fabric-swatch-card relative flex items-center gap-3 rounded-[1.45rem] border border-[#d8cab3] bg-[#f7efe1] p-3 text-[#3b2c1f] shadow-[0_16px_34px_rgba(84,61,37,0.18)] dark:border-white/10 dark:bg-[#221d19] dark:text-white',
        compact ? 'w-[148px]' : 'w-[168px]',
        className,
      )}
    >
      <div className={cn('relative shrink-0 rounded-[1.05rem] border border-black/5 bg-[#efe1c8] p-2 shadow-inner dark:border-white/10 dark:bg-white/5', compact ? 'h-14 w-14' : 'h-16 w-16')}>
        <div className="fabric-cutout fabric-grid h-full w-full overflow-hidden rounded-[0.8rem] ring-1 ring-black/5 dark:ring-white/10">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="min-w-0">
        {subtitle ? <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6e4d] dark:text-white/50">{subtitle}</p> : null}
        <p className={cn('mt-1 line-clamp-2 font-semibold leading-tight', compact ? 'text-xs' : 'text-sm')}>
          {title}
        </p>
      </div>
    </div>
  )
}
