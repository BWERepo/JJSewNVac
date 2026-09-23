import { useState, type FormEvent } from 'react'
import VisitSection from '../sections/VisitSection'
import { usePrototypeNotice } from '../components/PrototypeNotice'
import { usePageMeta } from '../lib/usePageMeta'
import { business } from '../data/business'

type Errors = Partial<Record<'name' | 'contact' | 'message', string>>

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const email = String(data.get('email') ?? '').trim()
  const phone = String(data.get('phone') ?? '').trim()
  if (!String(data.get('name') ?? '').trim()) errors.name = 'Enter your name.'
  if (!email && !phone) errors.contact = 'Enter an email or phone number so J & J can reply.'
  else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.contact = 'Enter a valid email address.'
  if (String(data.get('message') ?? '').trim().length < 5) errors.message = 'Tell J & J how they can help.'
  return errors
}

export default function Visit() {
  const notice = usePrototypeNotice()
  const [errors, setErrors] = useState<Errors>({})
  usePageMeta(
    'Visit & Contact J & J Sew N Vac | 5425 N Broadway St, Knoxville',
    'Directions, hours and contact details for J & J Sew N Vac, 5425 N Broadway St, Knoxville, TN 37918. Call (865) 637-2338.',
    '/visit',
  )

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(new FormData(e.currentTarget))
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // Prototype: nothing is sent or stored.
      notice('Contact form')
    }
  }

  return (
    <>
      <VisitSection headingLevel="h1" />

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="container contact__grid">
          <div className="contact__intro">
            <h2 id="contact-title" className="h2">
              Send J & J a message
            </h2>
            <p>
              Questions about a machine, a class or a repair? Send a note and the team will get back to you. For the
              quickest answer, call <a href={business.phoneHref}>{business.phoneDisplay}</a>.
            </p>
          </div>

          <form className="contact-form" noValidate onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-error" />
              {errors.name && (
                <p className="field__error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.contact}
                  aria-describedby="contact-error"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">
                  Phone <span className="field__opt">(optional if email given)</span>
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" aria-describedby="contact-error" />
              </div>
            </div>
            {errors.contact && (
              <p className="field__error" id="contact-error">
                {errors.contact}
              </p>
            )}
            <div className="field">
              <label htmlFor="topic">What’s it about?</label>
              <select id="topic" name="topic" defaultValue="Sewing machines">
                <option>Sewing machines</option>
                <option>Quilting &amp; fabrics</option>
                <option>Classes &amp; events</option>
                <option>Vacuums</option>
                <option>Service &amp; repair</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && (
                <p className="field__error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn btn--primary btn--lg">
              Send message
            </button>
            <p className="fine-print">Preview only: messages from this form are not sent or stored.</p>
          </form>
        </div>
      </section>
    </>
  )
}
