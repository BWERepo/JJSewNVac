import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { usePrototypeNotice } from '../components/PrototypeNotice'
import { usePageMeta } from '../lib/usePageMeta'
import { business, verified } from '../data/business'

// From J & J's vacuum page.
const types = ['Upright', 'Canister', 'Handheld', 'Central vacuums', 'Domestic', 'Commercial', 'Industrial']

const questions = [
  'What kinds of floors do you have: carpet, hardwood, tile or a mix?',
  'Are there rugs, stairs or upholstery you want to clean?',
  'Do pets or allergies make filtration a priority?',
  'Would you rather empty a bag or a bin?',
]

export default function Vacuums() {
  const notice = usePrototypeNotice()
  usePageMeta(
    'Miele & Lindhaus Vacuums in Knoxville | J & J Sew N Vac',
    'Premium Miele and Lindhaus vacuums with a lifetime warranty, in-house repair, and genuine bags and filters at J & J Sew N Vac in Knoxville, TN.',
    '/vacuums',
  )

  return (
    <div className="vacuum-page">
      <PageHero
        title="Premium Vacuums, Chosen With Care"
        lead="Get local, hands-on help finding a vacuum suited to your floors, rugs, pets and the way you clean, from a store that repairs what it sells."
        photo="bright-living-room"
        tone="cool"
      >
        <ul className="page-hero__points">
          <li>Lifetime warranty on vacuums purchased here</li>
          <li>Repaired in-house, never sent out</li>
          <li>Shipping &amp; delivery on some products</li>
        </ul>
      </PageHero>

      <section className="section vac-brand-panels" aria-label="Vacuum brands">
        <div className="container vac-brand-panels__grid">
          <article id="miele" className="vac-panel">
            <h2 className="vac-panel__name">Miele</h2>
            <p className="vac-panel__tag">Premium home cleaning systems</p>
            <p>
              German precision and innovative design. Miele’s advanced filtration captures 99.9% of allergens and dust
              particles, with intuitive controls and quiet operation that make cleaning feel less like a chore.
            </p>
          </article>
          <article id="lindhaus" className="vac-panel">
            <h2 className="vac-panel__name">Lindhaus</h2>
            <p className="vac-panel__tag">Professional-quality cleaning performance</p>
            <p>
              High-performance vacuums trusted by healthcare and cleaning professionals around the world. Sealed
              filtration, lasting build quality and the maneuverability for homes and businesses alike.
            </p>
          </article>
        </div>
      </section>

      <section className="section feature-split" aria-labelledby="choose-title">
        <div className="container feature-split__grid">
          <div className="feature-split__media">
            <Photo name="vacuum-home" sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
          <div className="feature-split__copy">
            <h2 id="choose-title" className="h2">
              Skip the guesswork of buying online
            </h2>
            <p>A few questions go a long way toward the right vacuum. Expect to talk through things like:</p>
            <ul className="check-list">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="fine-print">{verified.specialOrder}.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="types-title">
        <div className="container split-head">
          <h2 id="types-title" className="h2">
            Vacuum types available
          </h2>
          <ul className="tag-list tag-list--lg">
            {types.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="supplies" className="section supplies" aria-labelledby="supplies-title">
        <div className="container split-head split-head--cta">
          <div>
            <h2 id="supplies-title" className="h2">
              Bags, filters &amp; parts
            </h2>
            <p>{verified.bagsFilters}, so your vacuum keeps performing the way it did on day one.</p>
          </div>
          <button type="button" className="btn btn--outline btn--lg" onClick={() => notice('Online bag & filter ordering')}>
            Order bags &amp; filters online
          </button>
        </div>
      </section>

      <section id="service" className="section vac-service" aria-labelledby="vac-service-title">
        <div className="container split-head split-head--cta">
          <div>
            <h2 id="vac-service-title" className="h2">
              Vacuum repair, done here
            </h2>
            <p>
              {verified.vacuumWarranty}, as an authorized Miele and Lindhaus dealer. When a vacuum needs repair, call to
              schedule. The service tech works on it in-house, so your vacuum is never sent out.
            </p>
          </div>
          <a href={business.phoneHref} className="btn btn--ink btn--lg">
            <Icon name="phone" size={18} /> Schedule a repair
          </a>
        </div>
      </section>
    </div>
  )
}
