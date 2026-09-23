import { Link } from 'react-router'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { business } from '../data/business'
import type { PhotoName } from '../data/photos'

const kinds: { title: string; text: string; photo: PhotoName; to: string }[] = [
  {
    title: 'Sewing & Embroidery',
    text: 'Husqvarna Viking, Pfaff and Singer, from dependable everyday machines to full embroidery systems.',
    photo: 'embroidery-stitch',
    to: '/sewing#machines',
  },
  {
    title: 'Quilting & Longarm',
    text: 'Room to quilt bigger projects, including Handi Quilter.',
    photo: 'quilt-stitching',
    to: '/sewing#quilting',
  },
  {
    title: 'Serger & Overlock',
    text: 'Clean, professional seams and finished edges.',
    photo: 'serger-dials',
    to: '/sewing#machines',
  },
]

export default function SewingFeature() {
  return (
    <section className="section sewing-feature" aria-labelledby="sewing-feature-title">
      <div className="container sewing-feature__grid">
        <div className="sewing-feature__copy">
          <h2 id="sewing-feature-title" className="h2">
            Find a Machine You’ll Love Using
          </h2>
          <p>
            A sewing machine isn’t just another online purchase. The right machine depends on what you want to create,
            your experience and where you want your sewing journey to go.
          </p>
          <p>
            At J & J you can try machines side by side, ask every question you have and leave knowing you chose the
            right one, with lifetime classes to help you get the most out of it.
          </p>
          <div className="sewing-feature__actions">
            <Link to="/sewing" className="btn btn--primary btn--lg">
              Explore Sewing Machines
            </Link>
            <a href={business.phoneHref} className="btn btn--ghost-light btn--lg">
              Talk With an Expert
            </a>
          </div>
        </div>

        <ul className="machine-kinds">
          {kinds.map((k, i) => (
            <Reveal as="li" key={k.title} className={`machine-kind machine-kind--${i + 1}`}>
              <Link to={k.to} className="machine-kind__link">
                <div className="machine-kind__media">
                  <Photo name={k.photo} sizes="(min-width: 900px) 22vw, 90vw" alt="" />
                </div>
                <h3>{k.title}</h3>
                <p>{k.text}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
