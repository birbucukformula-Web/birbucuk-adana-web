import './Araclarimiz.css'

const base = import.meta.env.BASE_URL

// ─── TEKNİK VERİLER ──────────────────────────────────────────────────────────
const specs2025 = [
  { key: 'Motor Tipi',     value: 'Elektrikli' },
  { key: 'Şasi',           value: 'Çelik Boru Kafes' },
  { key: 'Toplam Ağırlık', value: '250 kg' },
  { key: 'Güç',            value: '60 kW' },
]

// ─── YAPIM AŞAMASI FOTOĞRAFLARI ──────────────────────────────────────────────
const buildPhotos2025 = [
  { src: `${base}images/2025-arac-images/made-progress/2025-1.jpeg`, caption: 'Kaynak İşlemleri' },
  { src: `${base}images/2025-arac-images/made-progress/2025-2.jpeg`, caption: 'Metal Kesim' },
  { src: `${base}images/2025-arac-images/made-progress/2025-3.jpg`, caption: 'Şasi Detay' },
  { src: `${base}images/2025-arac-images/made-progress/2025-4.jpg`, caption: 'Montaj Aşaması' },
]

export default function Arac2025() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="season-section">
        <div className="container">
          <div className="season-title-box reveal">
            <h2>2024-2025 <span className="text-red">SEZONU ARACI</span></h2>
          </div>

          <div className="season-main-img reveal reveal-delay-1">
            <img src={`${base}images/2025-arac-images/24-25-arac.jpeg`} alt="2024-2025 Sezonu Aracı" />
          </div>

          <div className="season-specs mt-48">
            <p className="section-label reveal">// TEKNİK ÖZELLİKLER</p>
            <div className="red-line reveal" />
            <div className="specs-grid reveal reveal-delay-1">
              {specs2025.map(s => (
                <div key={s.key} className="spec-item card">
                  <span className="spec-key">{s.key}</span>
                  <span className="spec-val">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="season-build mt-48">
            <p className="section-label reveal">// YAPIM AŞAMASI</p>
            <div className="red-line reveal" />
            
            {buildPhotos2025.length ? (
              <div className="build-grid">
                {buildPhotos2025.slice(0, 4).map((p, i) => (
                  <div key={i} className="build-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <img src={p.src} alt={p.caption} loading="lazy" />
                    <p className="build-caption">{p.caption}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}
