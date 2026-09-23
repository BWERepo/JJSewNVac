import { Link } from 'react-router'

/** Typeset version of J & J's existing red wordmark on a white label, kept recognizable on purpose. */
export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="J & J Sew N Vac, home">
      <span className="logo__jj" aria-hidden="true">
        J&nbsp;&amp;&nbsp;J
      </span>
      <span className="logo__name" aria-hidden="true">
        Sew N Vac
      </span>
    </Link>
  )
}
