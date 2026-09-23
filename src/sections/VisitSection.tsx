import { Link } from 'react-router'
import Icon from '../components/Icon'
import { business, directionsUrl, mapEmbedUrl } from '../data/business'
import { useStoreStatus } from '../lib/useStoreStatus'

export default function VisitSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const status = useStoreStatus()
  const Heading = headingLevel

  return (
    <section className="section visit" aria-labelledby="visit-title">
      <div className="container visit__grid">
        <div className="visit__info">
          <Heading id="visit-title" className={headingLevel === 'h1' ? 'h1' : 'h2'}>
            Come See Us in Knoxville
          </Heading>

          <p className={`visit__status ${status.open ? 'is-open' : ''}`}>
            <span className="visit__dot" aria-hidden="true" />
            {status.label}
          </p>

          <address className="visit__address">
            <strong>{business.name}</strong>
            <br />
            {business.street}
            <br />
            {business.city}, {business.state} {business.zip}
            <br />
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </address>

          <table className="hours">
            <caption className="visually-hidden">Store hours</caption>
            <tbody>
              {business.hoursSummary.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="visit__actions">
            <a className="btn btn--primary btn--lg" href={directionsUrl} target="_blank" rel="noopener">
              <Icon name="pin" size={18} /> Get Directions
            </a>
            <a className="btn btn--outline btn--lg" href={business.phoneHref}>
              <Icon name="phone" size={18} /> Call J & J
            </a>
            <Link className="visit__contact" to="/visit#contact">
              Contact Us <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>

        <div className="visit__map">
          <iframe
            title="Map showing J & J Sew N Vac at 5425 N Broadway St, Knoxville"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
