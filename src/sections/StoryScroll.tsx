import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import type { PhotoName } from '../data/photos'

type Chapter = {
  title: string
  text: string
  points: string[]
  cta: string
  to: string
  photo: PhotoName
}

const chapters: Chapter[] = [
  {
    title: 'Sewing & Embroidery',
    text: 'Find the right machine for everything from everyday sewing to advanced embroidery, and try it before you take it home.',
    points: ['Husqvarna Viking, Pfaff & Singer', 'Lifetime classes with your machine', 'Warranty on every machine sold'],
    cta: 'Explore Machines',
    to: '/sewing#machines',
    photo: 'embroidery-stitch',
  },
  {
    title: 'Quilting & Fabrics',
    text: 'Machines, fabrics, notions and supplies to bring your next project to life, from the first charm pack to the final binding.',
    points: ['Handi Quilter longarm quilting', 'Quilting fabric & precuts', 'Threads, stabilizers & notions'],
    cta: 'Explore Quilting',
    to: '/sewing#quilting',
    photo: 'fabric-shelves',
  },
  {
    title: 'Classes & Events',
    text: 'Learn new techniques, get more from your machine and create alongside Knoxville’s sewing community.',
    points: ['Machine-specific sewing & embroidery classes', 'Project quilting classes', 'Special events with visiting educators'],
    cta: 'View Classes',
    to: '/classes',
    photo: 'quilt-cathedral',
  },
  {
    title: 'Vacuums',
    text: 'Premium cleaning systems backed by knowledgeable local service. Get help choosing for your floors, rugs and pets.',
    points: ['Miele & Lindhaus', 'Lifetime warranty on vacuums bought here', 'Repaired in-house, never sent out'],
    cta: 'Explore Vacuums',
    to: '/vacuums',
    photo: 'living-room-rug',
  },
]

/**
 * Scroll-driven chapters: text scrolls on the left while a sticky photo stage on the right
 * cross-fades to match. On narrow screens each chapter simply carries its own photo.
 */
export default function StoryScroll() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="story" className="story-scroll" aria-labelledby="story-scroll-title">
      <div className="container story-scroll__grid">
        <div className="story-scroll__text">
          <h2 id="story-scroll-title" className="h2 story-scroll__title">
            What Brings You In Today?
          </h2>
          {chapters.map((c, i) => (
            <article
              key={c.title}
              ref={(el) => {
                refs.current[i] = el
              }}
              data-index={i}
              className={`chapter ${active === i ? 'is-active' : ''}`}
            >
              <div className="chapter__media">
                <Photo name={c.photo} sizes="100vw" alt="" />
              </div>
              <p className="chapter__num" aria-hidden="true">
                0{i + 1}
              </p>
              <h3 className="chapter__title">{c.title}</h3>
              <p className="chapter__text">{c.text}</p>
              <ul className="chapter__points">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link to={c.to} className="chapter__cta">
                {c.cta} <Icon name="arrow" size={18} />
              </Link>
            </article>
          ))}
        </div>

        <div className="story-scroll__stage" aria-hidden="true">
          <div className="stage">
            {chapters.map((c, i) => (
              <div key={c.title} className={`stage__frame ${active === i ? 'is-active' : ''}`}>
                <Photo name={c.photo} sizes="(min-width: 900px) 55vw, 1px" alt="" />
              </div>
            ))}
            <ol className="stage__index">
              {chapters.map((c, i) => (
                <li key={c.title} className={active === i ? 'is-active' : ''}>
                  <span>0{i + 1}</span> {c.title}
                </li>
              ))}
            </ol>
            <div className="stage__progress">
              <span style={{ transform: `scaleX(${(active + 1) / chapters.length})` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
