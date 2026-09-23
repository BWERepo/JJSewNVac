import { Link } from 'react-router'
import Photo from '../components/Photo'
import { business } from '../data/business'

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <Photo name="quilt-railing" sizes="100vw" className="final-cta__img" alt="" />
      <div className="container final-cta__inner">
        <h2 id="final-cta-title" className="final-cta__title">
          Your Next Project Starts Here
        </h2>
        <p>
          Whether you’re choosing your next sewing machine, planning a quilting project, learning a new technique or
          looking for a better vacuum, knowledgeable local help is just a visit away.
        </p>
        <div className="final-cta__actions">
          <Link to="/visit" className="btn btn--primary btn--lg">
            Visit J & J Sew N Vac
          </Link>
          <a href={business.phoneHref} className="btn btn--ghost-light btn--lg">
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
