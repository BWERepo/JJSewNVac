import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import Modal from './Modal'
import { business } from '../data/business'

type NoticeFn = (feature: string) => void

const NoticeContext = createContext<NoticeFn>(() => {})

/** Shown when a visitor tries something that would only be wired up in the production site. */
export function PrototypeNoticeProvider({ children }: { children: ReactNode }) {
  const [feature, setFeature] = useState<string | null>(null)
  const show = useCallback<NoticeFn>((f) => setFeature(f), [])

  return (
    <NoticeContext.Provider value={show}>
      {children}
      <Modal open={feature !== null} onClose={() => setFeature(null)} labelledBy="notice-title" className="modal--notice">
        <p className="modal__kicker">{feature}</p>
        <h2 id="notice-title" className="modal__title">
          This feature would be connected during final website development.
        </h2>
        <p className="modal__body">
          In the meantime, the J & J team is happy to help by phone at{' '}
          <a href={business.phoneHref}>{business.phoneDisplay}</a>.
        </p>
        <button type="button" className="btn btn--primary" onClick={() => setFeature(null)}>
          Continue browsing
        </button>
      </Modal>
    </NoticeContext.Provider>
  )
}

export function usePrototypeNotice() {
  return useContext(NoticeContext)
}
