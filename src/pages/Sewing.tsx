import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import MachineFinder from '../sections/MachineFinder'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { usePrototypeNotice } from '../components/PrototypeNotice'
import { usePageMeta } from '../lib/usePageMeta'
import { brands, business, verified } from '../data/business'
import type { PhotoName } from '../data/photos'

const machineTypes: { title: string; text: string; photo: PhotoName }[] = [
  {
    title: 'Sewing & Embroidery',
    text: 'From simple mechanical models to combination machines with large embroidery fields and built-in design libraries.',
    photo: 'embroidery-stitch',
  },
  {
    title: 'Quilting & Longarm',
    text: 'Extra throat space, stitch regulation and frames for quilts of every size.',
    photo: 'quilt-stitching',
  },
  {
    title: 'Serger & Overlock',
    text: 'Trim, stitch and finish seams in one pass for garments that look store-bought.',
    photo: 'serger-dials',
  },
]

// Brand descriptions condensed from J & J's sewing machine page.
const brandDetail: Record<string, string> = {
  'Husqvarna Viking':
    'Swedish innovation with intuitive design. Advanced technology simplifies complex techniques so sewists of every skill level get professional results. J & J are certified education specialists for Husqvarna Viking.',
  Pfaff: 'Precision German engineering. The exclusive Integrated Dual Feed feeds any fabric evenly, with sewing and embroidery models built for creative freedom.',
  Singer:
    'An iconic name for reliable, accessible sewing, from simple mechanical models to computerized machines with extensive stitch libraries.',
  'Handi Quilter': 'Quilting machines designed for quilters, for when your projects outgrow a domestic machine.',
}

export default function Sewing() {
  const notice = usePrototypeNotice()
  usePageMeta(
    'Sewing, Embroidery & Quilting Machines in Knoxville | J & J Sew N Vac',
    'Husqvarna Viking, Pfaff, Singer and Handi Quilter machines, fabrics, notions and in-store service in Knoxville, TN, with lifetime classes on machine purchases.',
    '/sewing',
  )

  return (
    <>
      <PageHero
        title="Sewing, Embroidery & Quilting Machines"
        lead="Try machines side by side, get honest advice from people who sew, and go home with lifetime classes to help you use every feature."
        photo="machine-moody"
      >
        <ul className="page-hero__points">
          <li>Lifetime classes with machine purchase</li>
          <li>Warranty on every machine sold</li>
          <li>Shipping &amp; delivery on some products</li>
        </ul>
      </PageHero>

      <section id="machines" className="section" aria-labelledby="machines-title">
        <div className="container">
          <div className="split-head">
            <h2 id="machines-title" className="h2">
              Machines for every kind of maker
            </h2>
            <p>
              Tell the team what you like to make, how often you sew and where you’d like to grow. They’ll narrow the
              choices down to the machines that actually fit.
            </p>
          </div>
          <div className="type-grid">
            {machineTypes.map((m) => (
              <article key={m.title} className="type-card">
                <div className="type-card__media">
                  <Photo name={m.photo} sizes="(min-width: 900px) 30vw, 100vw" alt="" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MachineFinder id="sewing-finder" />

      <section className="spotlight" aria-labelledby="spotlight-title">
        <div className="container spotlight__grid">
          <div>
            <p className="spotlight__kicker">Ask to see it in the store</p>
            <h2 id="spotlight-title" className="h2">
              Husqvarna Viking Designer Epic 3
            </h2>
          </div>
          <ul className="spotlight__features">
            <li>Quieter embroidery unit with a 460 × 450 mm embroidery area</li>
            <li>Free-arm embroidery for hard-to-reach projects</li>
            <li>Reversible hoop and stitch preview projection</li>
            <li>AI-assisted presser foot selection and WiFi design access</li>
          </ul>
        </div>
      </section>

      <section id="brands" className="section" aria-labelledby="sewing-brands-title">
        <div className="container">
          <h2 id="sewing-brands-title" className="h2">
            The brands J & J knows best
          </h2>
          <dl className="brand-detail">
            {brands
              .filter((b) => b.kind === 'sewing')
              .map((b) => (
                <div key={b.name} className="brand-detail__row">
                  <dt className="brand-detail__name">{b.name}</dt>
                  <dd>{brandDetail[b.name]}</dd>
                </div>
              ))}
          </dl>
          <p className="fine-print">{verified.specialOrder}.</p>
        </div>
      </section>

      <section id="quilting" className="section feature-split" aria-labelledby="quilting-title">
        <div className="container feature-split__grid">
          <div className="feature-split__media seam-frame">
            <Photo name="quilt-fence" sizes="(min-width: 900px) 40vw, 100vw" />
          </div>
          <div className="feature-split__copy">
            <h2 id="quilting-title" className="h2">
              Quilting, from first block to final binding
            </h2>
            <p>
              Whether you’re piecing your first charm-pack quilt or ready for a longarm, J & J pairs the machines with the
              fabric, precuts and know-how to finish the job, plus quilt classes where you can learn alongside other
              quilters.
            </p>
            <Link to="/classes" className="text-link">
              See quilting classes <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="fabrics" className="section fabrics" aria-labelledby="fabrics-title">
        <div className="container fabrics__grid">
          <div className="fabrics__copy">
            <h2 id="fabrics-title" className="h2">
              Fabrics &amp; Notions
            </h2>
            <p>
              A one-stop shop for your next project: quilting fabric and precuts, threads and stabilizers, needles and
              the notions you run out of right when you need them.
            </p>
            <ul className="tag-list">
              <li>Quilting fabric</li>
              <li>Precuts</li>
              <li>Threads</li>
              <li>Stabilizers</li>
              <li>Needles</li>
              <li>Notions</li>
            </ul>
            <button type="button" className="btn btn--outline" onClick={() => notice('Online fabric shop')}>
              Browse fabrics online
            </button>
          </div>
          <div className="fabrics__media">
            <Photo name="fabric-shelves" sizes="(min-width: 900px) 30vw, 50vw" className="fabrics__img fabrics__img--a" />
            <Photo name="fabric-rolls" sizes="(min-width: 900px) 25vw, 50vw" className="fabrics__img fabrics__img--b" />
          </div>
        </div>
      </section>

      <section className="lifetime-band" aria-labelledby="lifetime-title">
        <div className="container lifetime-band__inner">
          <h2 id="lifetime-title" className="lifetime-band__title">
            Buy your machine here and the classes are included, for life.
          </h2>
          <Link to="/classes" className="btn btn--ink btn--lg">
            How classes work
          </Link>
        </div>
      </section>

      <section id="service" className="section" aria-labelledby="sewing-service-title">
        <div className="container split-head split-head--cta">
          <div>
            <h2 id="sewing-service-title" className="h2">
              Sewing machine service &amp; repair
            </h2>
            <p>
              {verified.machineWarranty}. When yours needs maintenance or a repair, bring it in. A certified service
              technician does the work right here in the store rather than sending your machine away.
            </p>
          </div>
          <div className="stack-actions">
            <a href={business.phoneHref} className="btn btn--primary btn--lg">
              <Icon name="phone" size={18} /> Call {business.phoneDisplay}
            </a>
            <button type="button" className="btn btn--outline btn--lg" onClick={() => notice('Online service request')}>
              Request service online
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
