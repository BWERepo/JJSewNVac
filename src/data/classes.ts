// Source: https://www.jjsewnvac.com/classes/ and /joy-of-sewing-birds-eye-view/ (checked 2026-09-23).
// The class calendar on J & J's site lists November 2025 dates, so those classes are shown
// as "recent classes" with no dates. Only the Joy of Sewing event has confirmed 2026 dates.

export type FeaturedEvent = {
  title: string
  kind: string
  dates: string
  endsOn: string // ISO date; the event hides itself after this day
  time: string
  educator: string
  price: string
  includes: string
  rsvp: string
  image: string
}

export const featuredEvent: FeaturedEvent = {
  title: 'Joy of Sewing: Birds Eye View',
  kind: 'Two-day event',
  dates: 'Friday & Saturday, October 16–17, 2026',
  endsOn: '2026-10-17',
  time: '9:30 am – 4:00 pm',
  educator: 'Karen Charles, nationally recognized Husqvarna Viking & Pfaff educator',
  price: '$99',
  includes: 'Complete project kit and lunch',
  rsvp: 'RSVP by October 5, 2026',
  image: 'embroidery-hoop',
}

export type RecentClass = {
  title: string
  focus: 'Sewing' | 'Embroidery' | 'Quilting'
  summary: string
  cost: string
  image?: string
}

export const recentClasses: RecentClass[] = [
  {
    title: "Ali's Batik Quilt Class",
    focus: 'Quilting',
    summary: 'A two-day quilt class built around charm packs, a jelly roll and a yard of fabric.',
    cost: 'Free with fabric purchased at J & J, otherwise $75',
    image: 'quilt-blue',
  },
  {
    title: 'Beyond the Basics: Ribbon Embroidery',
    focus: 'Embroidery',
    summary: 'Add ribbon embroidery to a jacket, pillow or sweatshirt on an Epic 2 or Epic 3.',
    cost: 'Free with a J & J machine purchase',
    image: 'embroidery-stitch',
  },
  {
    title: 'Pfaff Expression 715 · 725 · 750 Sewing',
    focus: 'Sewing',
    summary: 'Get to know your machine and bring unfinished projects to sew along with friends.',
    cost: 'Free with a J & J machine purchase',
    image: 'learning-machine',
  },
  {
    title: 'Pfaff Expression 750 Embroidery',
    focus: 'Embroidery',
    summary: 'Hands-on time with the embroidery arm, threads and stabilizers.',
    cost: 'Free with a J & J machine purchase',
  },
  {
    title: 'Viking Topaz 55Q & 65Q Sewing',
    focus: 'Sewing',
    summary: 'Every feature of your Topaz, explained at the machine.',
    cost: 'Free with a J & J machine purchase',
  },
  {
    title: 'Viking Topaz 65Q Embroidery',
    focus: 'Embroidery',
    summary: 'Embroidery setup, hooping and stitch-out on the Topaz 65Q.',
    cost: 'Free with a J & J machine purchase',
  },
  {
    title: 'Viking Onyx 15, 25, 30 & Emerald 116, 118',
    focus: 'Sewing',
    summary: 'A class for owners of the Onyx and Emerald lines.',
    cost: 'Free with a J & J machine purchase',
  },
]

export const classPolicy = {
  registration: 'Call (865) 637-2338 to register',
  minimum: 'Each class needs three registered participants',
  payment: 'Payment is due at registration unless you have lifetime class access',
}

export function isEventUpcoming(event: FeaturedEvent, now = new Date()): boolean {
  return now <= new Date(`${event.endsOn}T23:59:59-04:00`)
}
