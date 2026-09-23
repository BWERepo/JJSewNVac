import { Link } from 'react-router'
import Photo from '../components/Photo'
import Icon from '../components/Icon'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo name="hero-quilt" sizes="100vw" priority className="hero__img" />
      </div>
      <div className="container hero__inner">
        <div className="hero__label">
          <h1 id="hero-title" className="hero__title">
            Where Knoxville Comes to Sew, Quilt &amp; Create
          </h1>
          <p className="hero__lead">
            Discover premium sewing and quilting machines, beautiful fabrics, expert guidance, hands-on classes and
            dependable local service—all from a Knoxville business that’s been helping East Tennessee create for more
            than 50 years.
          </p>
          <div className="hero__actions">
            <Link to="/sewing" className="btn btn--primary btn--lg">
              Explore Sewing &amp; Quilting
            </Link>
            <Link to="/classes" className="btn btn--outline btn--lg">
              Classes &amp; Events
            </Link>
          </div>
          <Link to="/vacuums" className="hero__vac">
            Looking for a vacuum? <span>Explore Vacuums</span> <Icon name="arrow" size={16} />
          </Link>
          <ul className="hero__trust" aria-label="Why J & J">
            <li>50+ Years in Knoxville</li>
            <li>Expert Sales &amp; Service</li>
            <li>Classes &amp; Support</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
