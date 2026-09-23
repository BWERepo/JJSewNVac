import { useRef, useState } from 'react'
import { Link } from 'react-router'
import Icon from '../components/Icon'
import { questions, recommend, type Answers } from '../data/machineFinder'
import { business, verified } from '../data/business'

export default function MachineFinder({ id = 'finder' }: { id?: string }) {
  const [answers, setAnswers] = useState<Answers>({})
  const [step, setStep] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const done = step >= questions.length
  const q = questions[Math.min(step, questions.length - 1)]

  function choose(value: string) {
    setAnswers((a) => ({ ...a, [q.id]: value }))
    setStep((s) => s + 1)
    // Keep keyboard and screen-reader users oriented as the panel content changes.
    requestAnimationFrame(() => panelRef.current?.focus())
  }

  function restart() {
    setAnswers({})
    setStep(0)
    requestAnimationFrame(() => panelRef.current?.focus())
  }

  const result = done ? recommend(answers) : null

  return (
    <section id={id} className="section finder" aria-labelledby={`${id}-title`}>
      <div className="container finder__grid">
        <div className="finder__intro">
          <h2 id={`${id}-title`} className="h2">
            Find a Machine You’ll Love Using
          </h2>
          <p>
            A sewing machine isn’t just another online purchase. The right machine depends on what you want to create,
            your experience and where you want your sewing journey to go.
          </p>
          <p>Answer three quick questions for a starting point, then come try it with the J & J team.</p>
        </div>

        <div className="finder__panel" ref={panelRef} tabIndex={-1} aria-live="polite">
          <div className="finder__progress" aria-hidden="true">
            {questions.map((qq, i) => (
              <span key={qq.id} className={i < step ? 'is-done' : i === step ? 'is-current' : ''} />
            ))}
          </div>

          {!done ? (
            <fieldset className="finder__question">
              <legend>
                <span className="finder__step">
                  Question {step + 1} of {questions.length}
                </span>
                <span className="finder__prompt">{q.prompt}</span>
              </legend>
              <div className="finder__answers">
                {q.answers.map((a) => (
                  <button key={a.value} type="button" className="finder__answer" onClick={() => choose(a.value)}>
                    <span>{a.label}</span>
                    {a.hint && <small>{a.hint}</small>}
                    <Icon name="arrow" size={18} />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button type="button" className="finder__back" onClick={() => setStep((s) => s - 1)}>
                  Back
                </button>
              )}
            </fieldset>
          ) : (
            result && (
              <div className="finder__result">
                <p className="finder__step">A good place to start</p>
                <h3 className="finder__result-title">{result.title}</h3>
                <p>{result.summary}</p>
                <p className="finder__brands-label">Brands J & J carries for this:</p>
                <ul className="finder__brands">
                  {result.brands.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {result.askAbout && <p className="finder__ask">{result.askAbout}</p>}
                <p className="finder__lifetime">{verified.lifetimeClasses}.</p>
                <div className="finder__actions">
                  <a href={business.phoneHref} className="btn btn--primary btn--lg">
                    <Icon name="phone" size={18} /> Talk With an Expert
                  </a>
                  <Link to={result.link} className="btn btn--outline btn--lg">
                    Explore Sewing Machines
                  </Link>
                </div>
                <button type="button" className="finder__back" onClick={restart}>
                  Start over
                </button>
                <p className="finder__note">
                  A starting point for your visit, not a specific model recommendation. The team will help you compare
                  machines in person.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
