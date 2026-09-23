import { bwe } from '../data/business'

export default function PrototypeBar() {
  return (
    <div className="proto-bar" role="note">
      <div className="container proto-bar__inner">
        <p>
          <span className="proto-bar__long">Website redesign preview</span>
          <span className="proto-bar__short">Redesign preview</span>
          <span className="proto-bar__for">
            {' '}
            <span className="proto-bar__sep">—</span> prepared for J & J Sew N Vac
          </span>
        </p>
        <p className="proto-bar__by">
          <span className="proto-bar__long">Presented </span>by{' '}
          <a href={bwe.url} target="_blank" rel="noopener">
            Business Web Express
          </a>
        </p>
      </div>
    </div>
  )
}
