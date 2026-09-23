import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { verified } from '../data/business'

const advantages = [
  { title: 'See it in person', text: 'Sit down at a machine, feel the fabric and compare models side by side before you decide.' },
  { title: 'Guidance that fits you', text: 'Talk through what you want to make with people who sew, quilt and service machines every day.' },
  { title: 'Classes for life', text: verified.lifetimeClasses + '.' },
  { title: 'Service down the road', text: verified.inStoreRepair + '.' },
]

export default function LocalStory() {
  return (
    <section className="section story" aria-labelledby="story-title">
      <div className="container story__grid">
        <Reveal className="story__media">
          <div className="seam-frame">
            <Photo name="thread-wall" sizes="(min-width: 900px) 45vw, 100vw" className="story__img" />
          </div>
          <p className="story__caption">{verified.husqvarnaTop10}.</p>
        </Reveal>

        <div className="story__content">
          <h2 id="story-title" className="h2">
            More Than a Store. A Knoxville Sewing Tradition.
          </h2>
          <p className="story__lead">
            A sewing machine or a good vacuum is something you live with for years. Buying it from a family that’s been
            part of Knoxville for more than half a century means you get more than a box on your doorstep: you get
            people who know your name, your machine and what you’re working on next.
          </p>

          <dl className="story__stats">
            <div>
              <dt>50+</dt>
              <dd>Years serving Knoxville</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>Knowledge &amp; support</dd>
            </div>
            <div>
              <dt>Hands-On</dt>
              <dd>Classes &amp; learning</dd>
            </div>
          </dl>

          <ul className="story__list">
            {advantages.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
