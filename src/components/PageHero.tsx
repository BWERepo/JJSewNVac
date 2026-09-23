import type { ReactNode } from 'react'
import Photo from './Photo'
import type { PhotoName } from '../data/photos'

type Props = {
  title: string
  lead: string
  photo: PhotoName
  children?: ReactNode
}

/** Full-bleed cinematic page opener, same language as the home hero at a shorter height. */
export default function PageHero({ title, lead, photo, children }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__media">
        <Photo name={photo} sizes="100vw" priority />
      </div>
      <div className="container page-hero__inner">
        <h1 id="page-title" className="page-hero__title">
          {title}
        </h1>
        <p className="page-hero__lead">{lead}</p>
        {children}
      </div>
    </section>
  )
}
