import { Link } from 'react-router'
import Photo from '../components/Photo'
import { verified } from '../data/business'

export default function VacuumTransition() {
  return (
    <section className="section vacuums-feature" aria-labelledby="vacuums-title">
      <div className="vacuums-feature__media">
        <Photo name="living-room-rug" sizes="(min-width: 900px) 55vw, 100vw" />
      </div>
      <div className="container vacuums-feature__inner">
        <div className="vacuums-feature__copy">
          <h2 id="vacuums-title" className="h2">
            The Right Vacuum Makes a Difference
          </h2>
          <p>
            Skip the guesswork of buying online. Get knowledgeable local help finding a vacuum suited to your home,
            floors, rugs, pets and cleaning needs.
          </p>

          <div className="vac-brands">
            <Link to="/vacuums#miele" className="vac-brand">
              <span className="vac-brand__name">Miele</span>
              <span>Premium home cleaning systems.</span>
            </Link>
            <Link to="/vacuums#lindhaus" className="vac-brand">
              <span className="vac-brand__name">Lindhaus</span>
              <span>Professional-quality cleaning performance.</span>
            </Link>
          </div>

          <p className="vacuums-feature__note">{verified.vacuumWarranty}.</p>

          <div className="vacuums-feature__actions">
            <Link to="/vacuums" className="btn btn--ink btn--lg">
              Explore Vacuums
            </Link>
            <Link to="/visit" className="btn btn--outline btn--lg">
              Visit the Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
