import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import ResearchPage from './pages/ResearchPage'
import AboutDiengPage from './pages/AboutDiengPage'
import AboutTeamPage from './pages/AboutTeamPage'
import GalleryPage from './pages/GalleryPage'
import FAQPage from './pages/FAQPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="riset" element={<ResearchPage />} />
          <Route path="tentang-dieng" element={<AboutDiengPage />} />
          <Route path="tentang-tim" element={<AboutTeamPage />} />
          <Route path="galeri" element={<GalleryPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App