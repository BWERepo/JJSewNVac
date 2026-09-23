import { Link } from 'react-router'
import Icon from './Icon'
import { business, directionsUrl } from '../data/business'

export default function MobileActionBar() {
  return (
    <nav className="action-bar" aria-label="Quick actions">
      <a href={business.phoneHref}>
        <Icon name="phone" size={18} />
        Call
      </a>
      <a href={directionsUrl} target="_blank" rel="noopener">
        <Icon name="pin" size={18} />
        Directions
      </a>
      <Link to="/classes">
        <Icon name="calendar" size={18} />
        Classes
      </Link>
    </nav>
  )
}
