import { Link } from 'react-router'
import { brands } from '../data/business'

export default function Brands() {
  const groups = [
    { title: 'Sewing, embroidery & quilting', items: brands.filter((b) => b.kind === 'sewing') },
    { title: 'Floor care', items: brands.filter((b) => b.kind === 'vacuum') },
  ]

  return (
    <section className="section brands" aria-labelledby="brands-title">
      <div className="container brands__grid">
        <div className="brands__head">
          <h2 id="brands-title" className="h2">
            Trusted Brands. Local Expertise.
          </h2>
          <p>
            J & J carries a focused lineup of names they know inside and out, so the advice you get comes from
            hands-on experience with every machine on the floor.
          </p>
        </div>

        <div className="brands__groups">
          {groups.map((g) => (
            <div key={g.title} className="brands__group">
              <h3 className="brands__group-title">{g.title}</h3>
              <ul className="brand-list">
                {g.items.map((b) => (
                  <li key={b.name}>
                    <Link
                      to={b.kind === 'vacuum' ? `/vacuums#${b.name.toLowerCase()}` : '/sewing#brands'}
                      className="brand-row"
                    >
                      <span className={`brand-row__name brand-row__name--${b.name.split(' ')[0].toLowerCase()}`}>
                        {b.name}
                      </span>
                      <span className="brand-row__line">{b.line}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
