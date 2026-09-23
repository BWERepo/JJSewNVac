import { brands, directionsUrl } from './business'

export type NavLink = { label: string; to: string; description?: string; external?: boolean }
export type NavItem = NavLink & { children?: NavLink[] }

export const mainNav: NavItem[] = [
  {
    label: 'Sewing & Quilting',
    to: '/sewing',
    children: [
      { label: 'Sewing & Embroidery Machines', to: '/sewing#machines', description: 'Husqvarna Viking, Pfaff & Singer' },
      { label: 'Quilting & Longarm', to: '/sewing#quilting', description: 'Including Handi Quilter' },
      { label: 'Fabrics & Notions', to: '/sewing#fabrics', description: 'Fabric, precuts, thread & supplies' },
      { label: 'Machine Service', to: '/sewing#service', description: 'In-store repair and cleaning' },
    ],
  },
  { label: 'Classes & Events', to: '/classes' },
  {
    label: 'Vacuums',
    to: '/vacuums',
    children: [
      { label: 'Miele', to: '/vacuums#miele', description: 'Premium home cleaning systems' },
      { label: 'Lindhaus', to: '/vacuums#lindhaus', description: 'Professional-quality performance' },
      { label: 'Bags, Filters & Parts', to: '/vacuums#supplies', description: 'Genuine replacements' },
      { label: 'Vacuum Service', to: '/vacuums#service', description: 'Repaired in-house' },
    ],
  },
  { label: 'Visit Us', to: '/visit' },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Sewing Machines', to: '/sewing#machines' },
      { label: 'Quilting', to: '/sewing#quilting' },
      { label: 'Fabrics & Notions', to: '/sewing#fabrics' },
      { label: 'Vacuums', to: '/vacuums' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Classes', to: '/classes#recent' },
      { label: 'Events', to: '/classes#events' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Service & Repairs', to: '/#service' },
      { label: 'Contact', to: '/visit#contact' },
      { label: 'Directions', to: directionsUrl, external: true },
    ],
  },
  {
    title: 'Brands',
    links: brands.map((b) => ({
      label: b.name,
      to: b.kind === 'vacuum' ? `/vacuums#${b.name.toLowerCase()}` : '/sewing#brands',
    })),
  },
]
