import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimizda from './pages/Hakkimizda'
import Araclarimiz from './pages/Araclarimiz'
import Arac2025 from './pages/Arac2025'
import Arac2026 from './pages/Arac2026'
import FormulaStudent from './pages/FormulaStudent'; 
import Surdurulebilirlik from './pages/Surdurulebilirlik'
import Sponsorlar from './pages/Sponsorlar'
import Oyun from './pages/Oyun'
import Iletisim from './pages/Iletisim'
import Galeri from './pages/Galeri'
import EkipUyeleri from './pages/EkipUyeleri'
import HomeEng from './pages/eng/HomeEng'
import HakkimizdaEng from './pages/eng/HakkimizdaEng'
import AraclarimizEng from './pages/eng/AraclarimizEng'
import Arac2025Eng from './pages/eng/Arac2025Eng'
import Arac2026Eng from './pages/eng/Arac2026Eng'
import FormulaStudentEng from './pages/eng/FormulaStudentEng'
import SurdurulebilirlikEng from './pages/eng/SurdurulebilirlikEng'
import SponsorlarEng from './pages/eng/SponsorlarEng'
import OyunEng from './pages/eng/OyunEng'
import IletisimEng from './pages/eng/IletisimEng'
import GaleriEng from './pages/eng/GaleriEng'
import EkipUyeleriEng from './pages/eng/EkipUyeleriEng'
import useScrollReveal from './hooks/useScrollReveal'
import { useLanguage } from './contexts/LanguageContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { 
    // smooth scroll açıksa bile sayfa değiştiğinde anında (instant) yukarı çıksın
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) 
  }, [pathname])
  return null
}

export default function App() {
  useScrollReveal()
  const { language } = useLanguage()

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={language === 'en' ? <HomeEng /> : <Home />} />
          <Route path="/hakkimizda" element={language === 'en' ? <HakkimizdaEng /> : <Hakkimizda />} />
          <Route path="/araclarimiz" element={language === 'en' ? <AraclarimizEng /> : <Araclarimiz />} />
          <Route path="/2025arac" element={language === 'en' ? <Arac2025Eng /> : <Arac2025 />} />
          <Route path="/2026arac" element={language === 'en' ? <Arac2026Eng /> : <Arac2026 />} />
          <Route path="/formulastudent" element={language === 'en' ? <FormulaStudentEng /> : <FormulaStudent />} />
          <Route path="/surdurulebilirlik" element={language === 'en' ? <SurdurulebilirlikEng /> : <Surdurulebilirlik />} />
          <Route path="/sponsorlar" element={language === 'en' ? <SponsorlarEng /> : <Sponsorlar />} />
          <Route path="/oyun" element={language === 'en' ? <OyunEng /> : <Oyun />} />
          <Route path="/iletisim" element={language === 'en' ? <IletisimEng /> : <Iletisim />} />
          <Route path="/galeri" element={language === 'en' ? <GaleriEng /> : <Galeri />} />
          <Route path="/ekip-uyeleri" element={language === 'en' ? <EkipUyeleriEng /> : <EkipUyeleri />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}