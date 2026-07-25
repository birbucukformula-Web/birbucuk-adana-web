import '../Araclarimiz.css'

const base = import.meta.env.BASE_URL

// ─── TEKNİK VERİLER ──────────────────────────────────────────────────────────
const specs2026 = [
  { key: 'Motor Type',      value: 'Electric' },
  { key: 'Chassis',            value: 'Steel Tube Spaceframe' },
  { key: 'Total Weight',  value: '~230 kg' },
  { key: 'Power',             value: '80 kW' },
  { key: 'Acceleration',       value: '3.9s (0-100)' },
  { key: 'Wheelbase', value: '1530 mm' },
]

// ─── YAPIM AŞAMASI FOTOĞRAFLARI ──────────────────────────────────────────────
// 2025-2026 Sezonu Yapım aşaması fotoğrafları (Henüz yok)
const buildPhotos2026 = [ 
  { src: `${base}images/2025-arac-images/made-progress/0.JPG`, caption: 'Welding Process' },
  { src: `${base}images/2025-arac-images/made-progress/1.JPG`, caption: 'Metal Cutting' },
  { src: `${base}images/2025-arac-images/made-progress/2.JPG`, caption: 'Chassis Detail' },
  { src: `${base}images/2025-arac-images/made-progress/3.JPG`, caption: 'Assembly Phase' },
]

export default function Arac2026Eng() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="season-section">
        <div className="container">
          <div className="season-title-box reveal">
            <h2>2025-2026 <span className="text-red">SEASON VEHICLE</span></h2>
          </div>
          
<div className="season-main-img is-assembly-placeholder reveal">
  <div className="assembly-container">
    
    {/* OYUNDAKİ ARAÇLA BİREBİR AYNI ÇİZGİLERE SAHİP BİRLEŞEN SVG */}
    <div className="assembly-car-wrapper">
      <svg viewBox="0 0 100 36" fill="currentColor" className="f1-assembly-svg">
        
        {/* PARÇA 1: SOLDAN GELEN ARKA KANAT (Oyun ile Birebir Aynı) */}
        <g className="part-back">
          <path d="M 4 8 L 18 8 L 15 22 L 4 22 Z" />
          <path d="M 2 8 L 18 8" stroke="currentColor" strokeWidth="2" />
        </g>

        {/* PARÇA 2: YUKARIDAN GELEN ŞASİ, KOKPİT VE HALO (Oyun ile Birebir Aynı) */}
        <g className="part-body">
          <path d="M 12 22 L 20 18 L 38 17 C 42 12, 52 12, 56 17 L 72 20 L 92 26 L 98 28 L 98 30 L 88 30 L 76 29 L 58 28 L 22 28 Z" />
          <path d="M 46 17 C 48 14, 54 14, 57 17 Z" fill="#0d0d0d" />
          <circle cx="49" cy="15.5" r="1.8" />
        </g>

        {/* PARÇA 3: SAĞDAN GELEN ÖN KANAT VE BURUN (Oyun ile Birebir Aynı) */}
        <g className="part-front">
          <path d="M 88 30 L 98 30 L 96 25 L 88 28 Z" />
          <path d="M 88 31 L 100 31" stroke="currentColor" strokeWidth="1.5" />
        </g>

        {/* PARÇA 4: AŞAĞIDAN GELEN TEKERLEKLER (Siyah Çeperli - Oyun ile Birebir Aynı) */}
        <g className="part-wheels">
          <circle cx="26" cy="28" r="7.5" fill="currentColor" stroke="#0d0d0d" strokeWidth="1" />
          <circle cx="26" cy="28" r="3" fill="#0d0d0d" />
          <circle cx="78" cy="28" r="7.5" fill="currentColor" stroke="#0d0d0d" strokeWidth="1" />
          <circle cx="78" cy="28" r="3" fill="#0d0d0d" />
        </g>

      </svg>
    </div>

    {/* METİN ALANI */}
    <span className="assembly-tag">// IN PRODUCTION</span>
    <h3 className="assembly-title">COMING SOON</h3>
    <p className="assembly-desc">2025-2026 Season Vehicle is in Assembly Phase</p>

  </div>
</div>
          <div className="season-specs mt-48">
            <p className="section-label reveal">// TECHNICAL SPECIFICATIONS</p>
            <div className="red-line reveal" />
            <div className="specs-grid reveal reveal-delay-1">
              {specs2026.map(s => (
                <div key={s.key} className="spec-item card">
                  <span className="spec-key">{s.key}</span>
                  <span className="spec-val">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="season-build mt-48">
            <p className="section-label reveal">// BUILD PROCESS</p>
            <div className="red-line reveal" />
            
            {buildPhotos2026.length ? (
              <div className="build-grid">
                {buildPhotos2026.map((p, i) => (
                  <div key={i} className="build-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <img src={p.src} alt={p.caption} loading="lazy" />
                    <p className="build-caption">{p.caption}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="build-grid">
                {/* 4 adet placeholder kutusu */}
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="build-placeholder-box reveal">
                    <span className="placeholder-icon">📸</span>
                    <p>Image Coming<br/>Soon</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
