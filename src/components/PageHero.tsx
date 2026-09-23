import type { ReactNode } from 'react'
import Photo from './Photo'
import type { PhotoName } from '../data/photos'

type Props = {
  title: string
  lead: string
  photo: PhotoName
  tone?: 'warm' | 'cool'
  children?: ReactNode
}

export default function PageHero({ title, lead, photo, tone = 'warm', children }: Props) {
  return (
    <section className={`page-hero page-hero--${tone}`} aria-labelledby="page-title">
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <h1 id="page-title" className="h1">
            {title}
          </h1>
          <p className="page-hero__lead">{lead}</p>
          {children}
        </div>
        <div className="page-hero__media">
          <Photo name={photo} sizes="(min-width: 900px) 50vw, 100vw" priority />
        </div>
      </div>
    </section>
  )
}
