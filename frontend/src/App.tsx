import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppLayout from "./layouts/AppLayout";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ResearchPage = React.lazy(() => import("./pages/ResearchPage"));
const AboutDiengPage = React.lazy(() => import("./pages/AboutDiengPage"));
const AboutTeamPage = React.lazy(() => import("./pages/AboutTeamPage"));
const GalleryPage = React.lazy(() => import("./pages/GalleryPage"));

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
