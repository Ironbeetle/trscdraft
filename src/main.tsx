import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollToSection from './components/ScrollToSection.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorldViewHome from './pages/WorldViewHome.tsx';
import ChallengesHome from './pages/ChallengesHome.tsx';
import CRD from './pages/CRD.tsx';
import KeeyaskDam from './pages/KeeyaskDam.tsx';
import ImpoundmentTimeline from './pages/ImpoundmentTimeline.tsx';
import ModernDevImpact from './pages/ModernDevImpact.tsx';
import NRDrainageBasin from './pages/NRDrainageBasin.tsx';
import StewardshipHome from './pages/StewardshipHome.tsx';
import TRSCP from './pages/TRSCPrograms.tsx';
import TRSCnewupdates from './pages/TRSCnewupdates.tsx';
import NewsPage from './pages/NewsPage.tsx';
import App from './App.tsx'
import './App.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToSection />
      <Routes>
          <Route path="pages/WorldViewHome" element={<WorldViewHome />} />         
          <Route path="pages/ChallengesHome" element={<ChallengesHome />} />
          <Route path="pages/CRD" element={<CRD />} />
          <Route path="pages/KeeyaskDam" element={<KeeyaskDam />} />
          <Route path="pages/ImpoundmentTimeline" element={<ImpoundmentTimeline />} />
          <Route path="pages/ModernDevImpact" element={<ModernDevImpact />} />
          <Route path="pages/NRDrainageBasin" element={<NRDrainageBasin />} />
          <Route path="pages/StewardshipHome" element={<StewardshipHome />} />
          <Route path="pages/TRSCPrograms" element={<TRSCP />} />
          <Route path="pages/TRSCnewupdates" element={<TRSCnewupdates />} />
          <Route path="pages/NewsPage" element={<NewsPage />} />
          <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
