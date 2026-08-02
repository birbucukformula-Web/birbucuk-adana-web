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
            <h2>BAF02-<span className="text-red">METAMORF</span></h2>
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

          <div className="season-intro-text mt-32 reveal reveal-delay-2 text-secondary" style={{ maxWidth: '800px' }}>
            <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>WE ARE EVOLVING: LIGHTER, STRONGER, MORE AGGRESSIVE</h3>
            <p style={{ lineHeight: '1.8' }}>
              We left our mark on the asphalt with our first vehicle, and now we are coming to rewrite the rules of that asphalt. Every sound of metal rising from the workshop and every welding spark struck is a harbinger of a much faster future. As the 1.5 Adana Formula Student team, we are transforming all the experience and data we have gained from the past into pure speed in our 2025-2026 season vehicle. This new design, currently rising millimeter by millimeter on the assembly line, is counting the days to become the sharpest point our university's engineering vision has reached.
            </p>
          </div>

          <div className="season-specs mt-48">
            <p className="section-label reveal">// TECHNICAL SPECIFICATIONS</p>
            <div className="red-line reveal" />
            
            <div className="specs-intro-text mt-32 mb-32 reveal reveal-delay-1 text-secondary" style={{ maxWidth: '800px' }}>
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>AT THE LIMITS OF ENGINEERING: A 3.9-SECOND CLAIM</h3>
              <p style={{ lineHeight: '1.8' }}>
                When constructing our second vehicle, our only goal on the table was to exceed the limits. We completely optimized our chassis geometry, reducing our total weight to the ~230 kg range and upgrading our power unit to 80 kW. This renewed steel tubular space frame architecture, which maximizes cornering stability with its 1530 mm wheelbase, aims to reach from 0 to 100 kilometers per hour in just 3.9 seconds. These numbers are not just goals on paper; they are the mathematical proof of our new character challenging our rivals on the track.
              </p>
            </div>
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

            <div className="build-outro-text mt-48 reveal reveal-delay-2 text-secondary" style={{ maxWidth: '800px' }}>
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>NO SLEEP IN THE WORKSHOP, ONLY THE GOAL</h3>
              <p style={{ lineHeight: '1.8' }}>
                Right now, time has stopped in our garage; there is only a team locked on the target. The eyes shining behind the welding masks witness every second of this challenging assembly phase where steel is shaped by fire. Metals cut with millimetric calculations are welded together with a belief in championship during shifts that last until morning. Very soon, the doors of this dark workshop will open, and that silent wait will be replaced by the high-pitched scream of our 80 kW electric motor. Get ready, here we come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
