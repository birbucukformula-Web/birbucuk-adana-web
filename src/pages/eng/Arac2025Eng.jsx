import '../Araclarimiz.css'

const base = import.meta.env.BASE_URL

// ─── TEKNİK VERİLER ──────────────────────────────────────────────────────────
const specs2025 = [
  { key: 'Motor Type',     value: 'Electric' },
  { key: 'Chassis',           value: 'Steel Tube Spaceframe' },
  { key: 'Total Weight', value: '250 kg' },
  { key: 'Power',            value: '60 kW' },
]

// ─── YAPIM AŞAMASI FOTOĞRAFLARI ──────────────────────────────────────────────
const buildPhotos2025 = [
  { src: `${base}images/2025-arac-images/made-progress/2025-1.jpeg`, caption: 'Welding Process' },
  { src: `${base}images/2025-arac-images/made-progress/2025-2.jpeg`, caption: 'Metal Cutting' },
  { src: `${base}images/2025-arac-images/made-progress/2025-3.jpg`, caption: 'Chassis Detail' },
  { src: `${base}images/2025-arac-images/made-progress/2025-4.jpg`, caption: 'Assembly Phase' },
]

export default function Arac2025Eng() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="season-section">
        <div className="container">
          <div className="season-title-box reveal">
            <h2>BAF01-<span className="text-red">KOZA</span></h2>
          </div>

          <div className="season-main-img reveal reveal-delay-1">
            <img src={`${base}images/2025-arac-images/24-25-arac.jpeg`} alt="2024-2025 Sezonu Aracı" />
          </div>

          <div className="season-intro-text mt-32 reveal reveal-delay-2 text-secondary" style={{ maxWidth: '800px' }}>
            <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>WHERE A DREAM MEETS THE ASPHALT</h3>
            <p style={{ lineHeight: '1.8' }}>
              It takes courage to pursue a dream, and faith, sweat, and sleepless nights to turn it into reality... Our first pride and joy, emerged after long shifts shaped in the heat of Çukurova and the dust of the workshop. Our 2024-2025 season vehicle, which we brought to the asphalt as the 1.5 Adana Formula Student team, is not just made of steel tubes, batteries, and wheels; it is the embodiment of engineering passion, the will to create from scratch, and a student team standing shoulder to shoulder. This vehicle is the first line of the legends we will write in the future.
            </p>
          </div>

          <div className="season-specs mt-48">
            <p className="section-label reveal">// TECHNICAL SPECIFICATIONS</p>
            <div className="red-line reveal" />
            
            <div className="specs-intro-text mt-32 mb-32 reveal reveal-delay-1 text-secondary" style={{ maxWidth: '800px' }}>
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>POWER, BALANCE, AND THE COURAGE OF THE FIRST STEP</h3>
              <p style={{ lineHeight: '1.8' }}>
                Our main goal when designing our first vehicle was to combine stability, safety, and optimum performance in a single chassis. We carried out days of simulations to learn the dynamics of electric powertrains and transfer this technology to the road in the most efficient way. While focusing on sustainable performance with our 60 kW electric motor, we built an agile structure without compromising safety with our 250 kg total weight and durable steel tubular space frame chassis. The collective wisdom of a huge team lies in every weld mark and every tightened bolt.
              </p>
            </div>

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
            <p className="section-label reveal">// BUILD PROCESS</p>
            <div className="red-line reveal" />
            
            {buildPhotos2025.length ? (
              <div className="build-grid mt-32">
                {buildPhotos2025.slice(0, 4).map((p, i) => (
                  <div key={i} className="build-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <img src={p.src} alt={p.caption} loading="lazy" />
                    <p className="build-caption">{p.caption}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="build-outro-text mt-48 reveal reveal-delay-2 text-secondary" style={{ maxWidth: '800px' }}>
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>FROM PAPER TO THE TRACKS...</h3>
              <p style={{ lineHeight: '1.8' }}>
                The transformation of lines on design screens into sparks in the workshop, and then into a race car hitting the track, is the result of months of effort. From metal cutting to chassis assembly, we pushed our own limits at every stage, learned from our mistakes, and tested our engineering skills right in the field. Our first vehicle became our greatest guide, showing us what we can achieve. Now, we are putting this experience in our pocket and laying the foundations of our vehicle to make the name of Çukurova University heard much stronger in motorsports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
