import { usePageMeta } from '../lib/usePageMeta'
import Hero from '../sections/Hero'
import CategoryGrid from '../sections/CategoryGrid'
import LocalStory from '../sections/LocalStory'
import Brands from '../sections/Brands'
import SewingFeature from '../sections/SewingFeature'
import ClassesSection from '../sections/ClassesSection'
import VacuumTransition from '../sections/VacuumTransition'
import Service from '../sections/Service'
import Reviews from '../sections/Reviews'
import VisitSection from '../sections/VisitSection'
import FinalCta from '../sections/FinalCta'

export default function Home() {
  usePageMeta(
    'J & J Sew N Vac | Sewing, Quilting & Vacuums in Knoxville, TN',
    'Discover sewing and quilting machines, fabrics, classes, service and premium vacuums at J & J Sew N Vac in Knoxville, Tennessee.',
    '/',
  )
  return (
    <>
      <Hero />
      <CategoryGrid />
      <LocalStory />
      <Brands />
      <SewingFeature />
      <ClassesSection />
      <VacuumTransition />
      <Service />
      <Reviews />
      <VisitSection />
      <FinalCta />
    </>
  )
}
