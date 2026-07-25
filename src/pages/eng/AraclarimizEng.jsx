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
            As the Çukurova University Formula Student team, we improve ourselves every year, 
            making our vehicles that represent us on the tracks stronger and more innovative.
            You can select the vehicle you want to examine in detail from below.
          </p>
          
          <div className="araclar-nav mt-32 reveal reveal-delay-3">
            <Link to="/2026arac" className="btn-primary">OUR 2025-2026 VEHICLE →</Link>
            <Link to="/2025arac" className="btn-outline">OUR 2024-2025 VEHICLE →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
