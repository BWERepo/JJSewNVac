import { Link } from 'react-router'
import Logo from './Logo'
import { footerNav } from '../data/navigation'
import { business, bwe, directionsUrl, fullAddress } from '../data/business'
import { photos } from '../data/photos'
import version from '../../version.json'

const credits = [...new Set(Object.values(photos).map((p) => p.credit))].join(', ')

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Logo tone="light" />
          <address>
            {business.street}
            <br />
            {business.city}, {business.state} {business.zip}
            <br />
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </address>
          <dl className="site-footer__hours">
            {business.hoursSummary.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <a className="site-footer__directions" href={directionsUrl} target="_blank" rel="noopener">
            Directions to {fullAddress}
          </a>
        </div>

        {footerNav.map((col) => (
          <nav key={col.title} className="site-footer__col" aria-label={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.to} target="_blank" rel="noopener">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container">
        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. Family-owned in Knoxville for over 50 years.
          </p>
          <p className="site-footer__credit">
            Website redesign preview prepared by{' '}
            <a href={bwe.url} target="_blank" rel="noopener">
              Business Web Express
            </a>
            <span className="site-footer__meta" title={`Photos: ${credits}`}>
              {' '}
              · Stock photography via Unsplash · v{version.version}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
