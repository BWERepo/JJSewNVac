import { useEffect, useState } from 'react'
import { business } from '../data/business'

function to12h(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 || 12
  return m ? `${hour}:${String(m).padStart(2, '0')} ${suffix}` : `${hour} ${suffix}`
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/** "Open until 5 pm" / "Closed · opens Monday 9 am", computed in Knoxville time. */
export function getStoreStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: business.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const time = `${get('hour')}:${get('minute')}`

  const today = business.hours[day]
  if (today && time >= today[0] && time < today[1]) {
    return { open: true, label: `Open today until ${to12h(today[1])}` }
  }
  if (today && time < today[0]) {
    return { open: false, label: `Closed now · opens today at ${to12h(today[0])}` }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    const hours = business.hours[d]
    if (hours) {
      const when = i === 1 ? 'tomorrow' : DAY_NAMES[d]
      return { open: false, label: `Closed now · opens ${when} at ${to12h(hours[0])}` }
    }
  }
  return { open: false, label: 'Closed' }
}

export function useStoreStatus() {
  const [status, setStatus] = useState(() => getStoreStatus())
  useEffect(() => {
    const id = window.setInterval(() => setStatus(getStoreStatus()), 60_000)
    return () => window.clearInterval(id)
  }, [])
  return status
}
