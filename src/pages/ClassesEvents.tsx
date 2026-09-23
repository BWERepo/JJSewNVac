import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { usePrototypeNotice } from '../components/PrototypeNotice'
import { usePageMeta } from '../lib/usePageMeta'
import { classPolicy, featuredEvent, isEventUpcoming, recentClasses } from '../data/classes'
import { business, verified } from '../data/business'
import type { PhotoName } from '../data/photos'

const steps = [
  { title: 'Call to register', text: classPolicy.registration + '. The team will help you pick the right class for your machine.' },
  { title: 'Reserve your seat', text: classPolicy.payment + '. ' + classPolicy.minimum + '.' },
  { title: 'Bring your machine', text: 'Each class has a short supply list, usually your machine, its accessories, thread and scissors. Pack a lunch for longer classes.' },
]

export default function ClassesEvents() {
  const notice = usePrototypeNotice()
  const showEvent = isEventUpcoming(featuredEvent)
  usePageMeta(
    'Sewing, Quilting & Embroidery Classes in Knoxville | J & J Sew N Vac',
    'Hands-on sewing, embroidery and quilting classes and events at J & J Sew N Vac in Knoxville, with lifetime classes included when you buy your machine here.',
    '/classes',
  )

  return (
    <>
      <PageHero
        title="Classes & Events"
        lead="Master your machine, pick up new techniques and spend the day sewing with people who love it as much as you do."
        photo="learning-machine"
      >
        <p className="page-hero__lifetime">
          <strong>Lifetime classes:</strong> {verified.lifetimeClasses}.
        </p>
      </PageHero>

      <section id="events" className="section" aria-labelledby="events-title">
        <div className="container">
          <h2 id="events-title" className="h2">
            Upcoming event
          </h2>
          {showEvent ? (
            <article className="event-feature">
              <div className="event-feature__media">
                <Photo name={featuredEvent.image as PhotoName} sizes="(min-width: 900px) 50vw, 100vw" alt="" />
              </div>
              <div className="event-feature__body">
                <p className="event-card__kind">
                  <Icon name="calendar" size={16} /> {featuredEvent.kind}
                </p>
                <h3 className="event-feature__title">{featuredEvent.title}</h3>
                <p>A special two-day event with {featuredEvent.educator}.</p>
                <dl className="event-feature__facts">
                  <div>
                    <dt>When</dt>
                    <dd>{featuredEvent.dates}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{featuredEvent.time}</dd>
                  </div>
                  <div>
                    <dt>Cost</dt>
                    <dd>
                      {featuredEvent.price}, includes {featuredEvent.includes.toLowerCase()}
                    </dd>
                  </div>
                  <div>
                    <dt>Reserve</dt>
                    <dd>Call Jackie or Steve · {featuredEvent.rsvp}</dd>
                  </div>
                </dl>
                <div className="stack-actions stack-actions--row">
                  <a href={business.phoneHref} className="btn btn--primary btn--lg">
                    <Icon name="phone" size={18} /> Call to reserve
                  </a>
                  <button type="button" className="btn btn--outline btn--lg" onClick={() => notice('Online event registration')}>
                    Register online
                  </button>
                </div>
              </div>
            </article>
          ) : (
            <p className="lead-muted">New events are posted regularly. Call {business.phoneDisplay} to hear what’s next.</p>
          )}
        </div>
      </section>

      <section id="recent" className="section recent-classes" aria-labelledby="recent-title">
        <div className="container">
          <div className="split-head">
            <h2 id="recent-title" className="h2">
              A look at recent classes
            </h2>
            <p>
              These are examples from J & J’s recent class calendar, covering machine-specific sewing and embroidery
              classes and project-based quilting. Call for the current schedule.
            </p>
          </div>
          <ul className="class-rows">
            {recentClasses.map((c) => (
              <li key={c.title} className="class-row">
                <span className={`class-row__focus class-row__focus--${c.focus.toLowerCase()}`}>{c.focus}</span>
                <h3 className="class-row__title">{c.title}</h3>
                <p className="class-row__summary">{c.summary}</p>
                <p className="class-row__cost">{c.cost}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section how-classes" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="h2">
            How classes work
          </h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <a href={business.phoneHref} className="btn btn--primary btn--lg">
            <Icon name="phone" size={18} /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  )
}
