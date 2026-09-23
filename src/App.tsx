import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import PrototypeBar from './components/PrototypeBar'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import FeedbackButton from './components/FeedbackButton'
import { PrototypeNoticeProvider } from './components/PrototypeNotice'
import Home from './pages/Home'
import Sewing from './pages/Sewing'
import ClassesEvents from './pages/ClassesEvents'
import Vacuums from './pages/Vacuums'
import Visit from './pages/Visit'

// Scroll to the hash target (or top) on navigation, since the SPA router doesn't.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <PrototypeNoticeProvider>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollManager />
      <PrototypeBar />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sewing" element={<Sewing />} />
          <Route path="/classes" element={<ClassesEvents />} />
          <Route path="/vacuums" element={<Vacuums />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <MobileActionBar />
      <FeedbackButton />
    </PrototypeNoticeProvider>
  )
}
