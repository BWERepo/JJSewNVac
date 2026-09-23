import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { business, verified } from '../data/business'

const areas = [
  { title: 'Sewing Machine Service', text: 'Maintenance, cleaning and repairs, handled in-store by a certified technician.' },
  { title: 'Vacuum Service', text: 'Vacuum repairs are done in-house. Your vacuum is never sent out.' },
  { title: 'Product Support', text: 'Questions after the sale? The same people who helped you choose are a call away.' },
  { title: 'Parts & Accessories', text: 'Genuine bags, filters and attachments, plus special orders for what’s not in stock.' },
]

export default function Service() {
  return (
    <section id="service" className="section service" aria-labelledby="service-title">
      <div className="container service__grid">
        <div className="service__intro">
          <h2 id="service-title" className="h2">
            Service Doesn’t End at the Sale
          </h2>
          <p>
            Buying locally means having somewhere to go when your machine needs attention. {verified.machineWarranty}, and
            the team is here to keep it running for years.
          </p>
          <div className="service__media">
            <Photo name="presser-foot" sizes="(min-width: 900px) 35vw, 100vw" />
          </div>
        </div>

        <div className="service__detail">
          <ul className="service__list">
            {areas.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
          <div className="service__cta">
            <a href={business.phoneHref} className="btn btn--primary btn--lg">
              Ask About Service
            </a>
            <a href={business.phoneHref} className="service__phone">
              <Icon name="phone" size={20} />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
