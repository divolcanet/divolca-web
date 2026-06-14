import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import ResearchPage from './pages/ResearchPage'
import AboutDiengPage from './pages/AboutDiengPage'
import AboutTeamPage from './pages/AboutTeamPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="riset" element={<ResearchPage />} />
        <Route path="tentang-dieng" element={<AboutDiengPage />} />
        <Route path="tentang-tim" element={<AboutTeamPage />} />
      </Route>
    </Routes>
  )
}

export default App
