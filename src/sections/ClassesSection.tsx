import { Link } from 'react-router'
import ClassCalendar from '../components/ClassCalendar'
import { verified } from '../data/business'

export default function ClassesSection() {
  return (
    <section className="section classes" aria-labelledby="classes-title">
      <div className="container">
        <div className="classes__head">
          <h2 id="classes-title" className="h2 classes__title">
            Learn. Create. Connect.
          </h2>
          <div className="classes__intro">
            <p>
              From learning the basics to exploring advanced quilting and embroidery techniques, classes help customers
              get more from their machines while connecting with other makers.
            </p>
            <p className="lifetime-note">
              <strong>Lifetime classes included.</strong> {verified.lifetimeClasses}.
            </p>
          </div>
        </div>

        <ClassCalendar />

        <div className="classes__foot">
          <Link to="/classes" className="btn btn--outline btn--lg">
            Explore Classes &amp; Events
          </Link>
        </div>
      </div>
    </section>
  )
}
