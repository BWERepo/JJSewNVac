import { photos, type PhotoName } from '../data/photos'

type Props = {
  name: PhotoName
  sizes: string
  className?: string
  alt?: string
  priority?: boolean
}

export default function Photo({ name, sizes, className, alt, priority = false }: Props) {
  const info = photos[name]
  const srcSet = info.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')
  const fallback = info.widths[Math.min(1, info.widths.length - 1)]
  return (
    <img
      className={className}
      src={`/images/${name}-${fallback}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt ?? info.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
