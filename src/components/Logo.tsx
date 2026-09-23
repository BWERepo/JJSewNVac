import { Link } from 'react-router'

/** Typeset version of J & J's existing red wordmark, kept recognizable on purpose. */
export default function Logo({ tone = 'red' }: { tone?: 'red' | 'light' }) {
  return (
    <Link to="/" className={`logo logo--${tone}`} aria-label="J & J Sew N Vac, home">
      <span className="logo__jj" aria-hidden="true">
        J&nbsp;&amp;&nbsp;J
      </span>
      <span className="logo__name" aria-hidden="true">
        Sew N Vac
      </span>
    </Link>
  )
}
