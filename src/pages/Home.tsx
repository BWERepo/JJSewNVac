import { usePageMeta } from '../lib/usePageMeta'
import Hero from '../sections/Hero'
import StoryScroll from '../sections/StoryScroll'
import LocalStory from '../sections/LocalStory'
import MachineFinder from '../sections/MachineFinder'
import ClassesSection from '../sections/ClassesSection'
import Brands from '../sections/Brands'
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
      <StoryScroll />
      <LocalStory />
      <MachineFinder />
      <ClassesSection />
      <Brands />
      <Service />
      <Reviews />
      <VisitSection />
      <FinalCta />
    </>
  )
}
