// Every fact here was verified against https://www.jjsewnvac.com on 2026-09-23.
// Do not add claims that aren't on J & J's own site.

export const business = {
  name: 'J & J Sew N Vac',
  street: '5425 N Broadway St',
  city: 'Knoxville',
  state: 'TN',
  zip: '37918',
  phoneDisplay: '(865) 637-2338',
  phoneHref: 'tel:+18656372338',
  sourceSite: 'https://www.jjsewnvac.com/',
  facebook: 'https://www.facebook.com/p/J-J-Sew-N-Vac-61573074961526/',
  googleReviews: 'https://www.google.com/maps/place/J+%26+J+Sewing+Vacuums/',
  yearsLabel: '50+',
  // Hours use 24h "HH:MM"; null = closed. Index 0 = Sunday, matching Date#getDay.
  hours: [
    null,
    ['09:00', '17:00'],
    ['09:00', '17:00'],
    ['09:00', '17:00'],
    ['09:00', '17:00'],
    ['09:00', '17:00'],
    ['09:00', '15:00'],
  ] as const satisfies readonly (readonly [string, string] | null)[],
  hoursSummary: [
    { days: 'Monday – Friday', time: '9:00 am – 5:00 pm' },
    { days: 'Saturday', time: '9:00 am – 3:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  timeZone: 'America/New_York',
} as const

export const fullAddress = `${business.street}, ${business.city}, ${business.state} ${business.zip}`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${business.name}, ${fullAddress}`,
)}`

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${business.name}, ${fullAddress}`,
)}&z=15&output=embed`

export const bwe = {
  name: 'Business Web Express',
  url: 'https://businesswebexpress.com',
  phoneDisplay: '(888) 902-5111',
  phoneHref: 'tel:+18889025111',
}

export type Brand = {
  name: string
  kind: 'sewing' | 'vacuum'
  line: string
}

// One-line descriptions are condensed from J & J's own brand copy.
export const brands: Brand[] = [
  { name: 'Husqvarna Viking', kind: 'sewing', line: 'Swedish innovation, exceptional stitch quality' },
  { name: 'Pfaff', kind: 'sewing', line: 'German engineering with Integrated Dual Feed' },
  { name: 'Singer', kind: 'sewing', line: 'Trusted everyday sewing, mechanical to computerized' },
  { name: 'Handi Quilter', kind: 'sewing', line: 'Quilting machines for bigger projects' },
  { name: 'Miele', kind: 'vacuum', line: 'German precision and advanced filtration' },
  { name: 'Lindhaus', kind: 'vacuum', line: 'Professional-grade power and sealed filtration' },
]

// Verified statements quoted or closely paraphrased from J & J's site.
export const verified = {
  familyOwned: 'Family-owned and operated for over 50 years',
  husqvarnaTop10: 'Named one of the Top 10 Husqvarna dealerships in the area for 15 years',
  lifetimeClasses:
    'Lifetime access to classes when you purchase your sewing or embroidery machine from J & J',
  educationSpecialists: 'Certified education specialists for Husqvarna Viking machines',
  inStoreRepair: 'Repairs are done in-store by a certified technician — your machine is never sent away',
  machineWarranty: 'Every sewing and embroidery machine sold at J & J comes with a warranty',
  vacuumWarranty: 'Vacuums purchased from J & J include a lifetime warranty',
  specialOrder: "Looking for a specific model? J & J can special order it if it isn't in stock",
  shipping: 'Shipping and delivery available on some products',
  bagsFilters: 'Genuine replacement bags, filters and attachments',
}
