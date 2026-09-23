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
        <h1 id="hero-title" className="hero__title">
          Where Knoxville Comes to Sew, Quilt &amp; Create
        </h1>
        <div className="hero__bottom">
          <div className="hero__copy">
            <p className="hero__lead">
              Discover premium sewing and quilting machines, beautiful fabrics, expert guidance, hands-on classes and
              dependable local service—all from a Knoxville business that’s been helping East Tennessee create for more
              than 50 years.
            </p>
            <div className="hero__actions">
              <Link to="/sewing" className="btn btn--primary btn--lg">
                Explore Sewing &amp; Quilting
              </Link>
              <Link to="/classes" className="btn btn--ghost-light btn--lg">
                Classes &amp; Events
              </Link>
            </div>
            <Link to="/vacuums" className="hero__vac">
              Looking for a vacuum? <span>Explore Vacuums</span> <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ul className="hero__trust" aria-label="Why J & J">
            <li>
              <strong>50+ Years</strong> in Knoxville
            </li>
            <li>
              <strong>Expert</strong> Sales &amp; Service
            </li>
            <li>
              <strong>Classes</strong> &amp; Support
            </li>
          </ul>
        </div>
      </div>
      <a href="#story" className="hero__scroll" aria-label="Scroll to explore">
        <span />
      </a>
    </section>
  )
}
