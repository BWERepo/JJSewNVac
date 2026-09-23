import { Link } from 'react-router'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import type { PhotoName } from '../data/photos'

type Tile = { title: string; text: string; cta: string; to: string; photo: PhotoName; variant: string }

const tiles: Tile[] = [
  {
    title: 'Sewing & Embroidery',
    text: 'Find the right machine for everything from everyday sewing to advanced embroidery.',
    cta: 'Explore Machines',
    to: '/sewing#machines',
    photo: 'sewing-hands',
    variant: 'tall',
  },
  {
    title: 'Quilting & Fabrics',
    text: 'Machines, fabrics, notions and supplies to bring your next project to life.',
    cta: 'Explore Quilting',
    to: '/sewing#quilting',
    photo: 'fabric-shelves',
    variant: 'wide',
  },
  {
    title: 'Classes & Events',
    text: 'Learn new techniques, get more from your machine and create alongside Knoxville’s sewing community.',
    cta: 'View Classes',
    to: '/classes',
    photo: 'quilt-cathedral',
    variant: 'square',
  },
  {
    title: 'Vacuums',
    text: 'Premium cleaning systems backed by knowledgeable local service.',
    cta: 'Explore Vacuums',
    to: '/vacuums',
    photo: 'vacuum-home',
    variant: 'square cool',
  },
]

export default function CategoryGrid() {
  return (
    <section className="section categories" aria-labelledby="categories-title">
      <div className="container">
        <div className="categories__head">
          <h2 id="categories-title" className="h2">
            What Brings You In Today?
          </h2>
          <p className="categories__intro">
            Machines, fabric, classes and vacuums, all under one roof on North Broadway.
          </p>
        </div>
        <div className="categories__grid">
          {tiles.map((t) => (
            <Link key={t.title} to={t.to} className={`tile tile--${t.variant.split(' ').join(' tile--')}`}>
              <Photo
                name={t.photo}
                className="tile__img"
                alt=""
                sizes={t.variant === 'tall' ? '(min-width: 900px) 40vw, 100vw' : '(min-width: 900px) 30vw, 100vw'}
              />
              <div className="tile__body">
                <h3 className="tile__title">{t.title}</h3>
                <p className="tile__text">{t.text}</p>
                <span className="tile__cta">
                  {t.cta} <Icon name="arrow" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
