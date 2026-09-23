import { Link } from 'react-router'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { featuredEvent, isEventUpcoming, recentClasses } from '../data/classes'
import { business, verified } from '../data/business'
import type { PhotoName } from '../data/photos'

export default function ClassesSection() {
  const showEvent = isEventUpcoming(featuredEvent)
  const examples = recentClasses.filter((c) => c.image).slice(0, showEvent ? 2 : 3)

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

        <div className={`classes__list ${showEvent ? 'has-event' : ''}`}>
          {showEvent && (
            <article className="event-card">
              <div className="event-card__media">
                <Photo name={featuredEvent.image as PhotoName} sizes="(min-width: 900px) 45vw, 100vw" alt="" />
              </div>
              <div className="event-card__body">
                <p className="event-card__kind">
                  <Icon name="calendar" size={16} /> {featuredEvent.kind} · {featuredEvent.dates}
                </p>
                <h3 className="event-card__title">{featuredEvent.title}</h3>
                <p>With {featuredEvent.educator}.</p>
                <p className="event-card__meta">
                  {featuredEvent.time} · {featuredEvent.price}, {featuredEvent.includes.toLowerCase()} ·{' '}
                  {featuredEvent.rsvp}
                </p>
                <a className="btn btn--primary" href={business.phoneHref}>
                  Call to reserve a spot
                </a>
              </div>
            </article>
          )}

          {examples.map((c) => (
            <article key={c.title} className="class-card">
              <div className="class-card__media">
                <Photo name={c.image as PhotoName} sizes="(min-width: 900px) 25vw, 100vw" alt="" />
              </div>
              <p className="class-card__focus">{c.focus} class</p>
              <h3 className="class-card__title">{c.title}</h3>
              <p>{c.summary}</p>
              <p className="class-card__cost">{c.cost}</p>
            </article>
          ))}
        </div>

        <div className="classes__foot">
          <p className="classes__disclaimer">
            Class examples come from J & J’s recent class calendar. Call for upcoming dates.
          </p>
          <Link to="/classes" className="btn btn--outline btn--lg">
            Explore Classes &amp; Events
          </Link>
        </div>
      </div>
    </section>
  )
}
