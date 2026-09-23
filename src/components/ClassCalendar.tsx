import { useMemo, useState } from 'react'
import Icon from './Icon'
import { calendarEvents, recentClasses, type ClassFocus, type FeaturedEvent } from '../data/classes'
import { business } from '../data/business'
import { usePrototypeNotice } from './PrototypeNotice'

const FILTERS: ('All' | ClassFocus)[] = ['All', 'Sewing', 'Embroidery', 'Quilting']
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function eventOn(day: string, events: FeaturedEvent[]) {
  return events.find((e) => day >= e.startsOn && day <= e.endsOn)
}

/** Opens on the month of the next published event (or this month if there is none). */
function initialMonth() {
  const today = iso(new Date())
  const next = calendarEvents.filter((e) => e.endsOn >= today).sort((a, b) => a.startsOn.localeCompare(b.startsOn))[0]
  const d = next ? new Date(`${next.startsOn}T12:00:00`) : new Date()
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

export default function ClassCalendar({ showExamples = true }: { showExamples?: boolean }) {
  const notice = usePrototypeNotice()
  const [month, setMonth] = useState(initialMonth)
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const events = useMemo(
    () => calendarEvents.filter((e) => filter === 'All' || e.focus === filter),
    [filter],
  )
  const [selected, setSelected] = useState<FeaturedEvent | null>(() => eventOn(iso(initialMonth()), events) ?? null)
  const today = iso(new Date())

  const cells = useMemo(() => {
    const first = new Date(month)
    const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
    return [
      ...Array.from({ length: first.getDay() }, () => null),
      ...Array.from({ length: days }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
    ]
  }, [month])

  const monthEvents = events.filter((e) => cells.some((c) => c && eventOn(iso(c), [e])))
  const examples = recentClasses.filter((c) => filter === 'All' || c.focus === filter)
  const label = month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div className="calendar">
      <div className="calendar__toolbar">
        <div className="calendar__filters" role="group" aria-label="Filter classes">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`chip ${filter === f ? 'is-active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="calendar__nav">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
          >
            <Icon name="chevron" size={22} className="calendar__prev" />
          </button>
          <h3 className="calendar__month" aria-live="polite">
            {label}
          </h3>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
          >
            <Icon name="chevron" size={22} className="calendar__next" />
          </button>
        </div>
      </div>

      <div className="calendar__body">
        <div className="calendar__grid" aria-label={`${label} class calendar`} role="group">
          {WEEKDAYS.map((d) => (
            <div key={d} className="calendar__weekday" aria-hidden="true">
              {d}
            </div>
          ))}
          {cells.map((c, i) => {
            if (!c) return <div key={`blank-${i}`} className="calendar__cell is-blank" />
            const day = iso(c)
            const ev = eventOn(day, events)
            const content = (
              <>
                <span className="calendar__date">{c.getDate()}</span>
                {ev && <span className="calendar__pill">{ev.title}</span>}
              </>
            )
            return ev ? (
              <button
                key={day}
                type="button"
                className={`calendar__cell has-event ${selected === ev ? 'is-selected' : ''}`}
                onClick={() => setSelected(ev)}
                aria-label={`${c.toDateString()}: ${ev.title}`}
              >
                {content}
              </button>
            ) : (
              <div key={day} className={`calendar__cell ${day === today ? 'is-today' : ''}`}>
                {content}
              </div>
            )
          })}
        </div>

        <aside className="calendar__side">
          {monthEvents.length > 0 ? (
            monthEvents.map((e) => (
              <article key={e.title} className={`cal-event ${selected === e ? 'is-selected' : ''}`}>
                <p className="cal-event__when">
                  <Icon name="calendar" size={16} /> {e.dates}
                </p>
                <h4 className="cal-event__title">{e.title}</h4>
                <p>With {e.educator}.</p>
                <p className="cal-event__meta">
                  {e.time} · {e.price}, includes {e.includes.toLowerCase()} · {e.rsvp}
                </p>
                <div className="cal-event__actions">
                  <a href={business.phoneHref} className="btn btn--primary">
                    <Icon name="phone" size={16} /> Call to reserve
                  </a>
                  <button type="button" className="btn btn--outline" onClick={() => notice('Online class registration')}>
                    Register online
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="cal-empty">
              <p className="cal-empty__title">No published dates this month</p>
              <p>
                J & J posts classes as they’re scheduled. Call <a href={business.phoneHref}>{business.phoneDisplay}</a> to
                hear what’s coming up.
              </p>
            </div>
          )}

          {showExamples && examples.length > 0 && (
            <div className="cal-examples">
              <p className="cal-examples__label">Recent {filter === 'All' ? '' : filter.toLowerCase() + ' '}classes</p>
              <ul>
                {examples.slice(0, 4).map((c) => (
                  <li key={c.title}>
                    <span className={`focus-dot focus-dot--${c.focus.toLowerCase()}`} aria-hidden="true" />
                    {c.title}
                  </li>
                ))}
              </ul>
              <p className="cal-examples__note">From J & J’s recent calendar. Call for upcoming dates.</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
