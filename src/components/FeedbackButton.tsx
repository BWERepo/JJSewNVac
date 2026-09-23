import { useState } from 'react'
import Modal from './Modal'
import { bwe } from '../data/business'

/** Wide desktop only (hidden by CSS below 1200px so it never covers J & J's customer actions). */
export default function FeedbackButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" className="feedback-button" onClick={() => setOpen(true)}>
        Like this direction?
      </button>
      <Modal open={open} onClose={() => setOpen(false)} labelledBy="feedback-title" className="modal--feedback">
        <h2 id="feedback-title" className="modal__title">
          Imagine this as your new website.
        </h2>
        <p className="modal__body">
          This prototype was created to show what J & J Sew N Vac could look like with a modern, mobile-friendly
          website designed around your customers.
        </p>
        <div className="modal__actions">
          <a className="btn btn--primary" href={bwe.url} target="_blank" rel="noopener">
            I'm Interested
          </a>
          <a className="btn btn--outline" href={bwe.url} target="_blank" rel="noopener">
            Request Changes
          </a>
        </div>
        <p className="modal__foot">
          {bwe.name} · <a href={bwe.phoneHref}>{bwe.phoneDisplay}</a>
        </p>
      </Modal>
    </>
  )
}
