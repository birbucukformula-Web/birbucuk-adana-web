import { Link } from 'react-router-dom'
import '../Araclarimiz.css'

export default function AraclarimizEng() {
  return (
    <>
      {/* ── SAYFA BAŞLIĞI VE YÖNLENDİRME MENÜSÜ ───────────────────────────── */}
      <section className="araclar-header-section" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="container">
          <p className="section-label reveal">// OUR VEHICLES</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1 mt-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
            FROM PAST TO PRESENT<br /><span className="text-red">OUR VEHICLES</span>
          </h1>
          <p className="text-secondary mt-16 reveal reveal-delay-2" style={{ maxWidth: '600px' }}>
            Welcome to our journey where we started with a dream and pushed the boundaries of engineering. In this story where the sweat poured in the workshop meets the speed on the tracks; that first bold step we took with BAF01-KOZA has today turned into a strong legacy we engraved on the asphalt with BAF02-METAMORF. With the inspiration we get from the past, we tighten every screw with more faith, and we gear up towards the future in every new season. You can examine these engineering masterpieces where we exceeded our own limits in detail below.
          </p>
          
          <div className="araclar-nav mt-32 reveal reveal-delay-3">
            <Link to="/2026arac" className="btn-primary">BAF02-METAMORF →</Link>
            <Link to="/2025arac" className="btn-outline">BAF01-KOZA →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
