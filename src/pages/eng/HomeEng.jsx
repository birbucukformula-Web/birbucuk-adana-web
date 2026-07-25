import { Link } from 'react-router-dom'
import '../Home.css'

const captains = [
  { name: 'Ahmet Göksel Durmaz', title: 'Team Captain', photo: 'ahmet_goksel_durmaz.jpg' },
  { name: 'Mustafa Mert Abbak', title: 'Mechanics Captain', photo: 'mustafa_mert_abbak.jpg' },
  { name: 'Demir Tuna Torun', title: 'Electronics Captain', photo: 'demir_torun.jpg' },
  { name: 'Necdet Özdemir', title: 'Software Captain', photo: 'necdet_ozdemir.jpg' },
]

const stats = [
  { value: '2023', label: 'Founded' },
  { value: '25+', label: 'Members' },
  { value: 'FS', label: 'Competitions' },
]

const base = import.meta.env.BASE_URL

function CaptainCard({ c, delay }) {
  const initials = c.name.split(' ').slice(0, 2).map(n => n[0]).join('')
  return (
    <div className={`captain-card card reveal reveal-delay-${delay}`}>
      <div className="captain-photo-wrap">
        <img src={`${base}images/uyeler/${c.photo}`} alt={c.name} onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex'
        }}
        />
        <div className="captain-initials" style={{ display: 'none' }}>{initials}</div>
      </div>
      <div className="captain-info">
        <h3>{c.name}</h3>
        <p>{c.title}</p>
      </div>
    </div>
  )
}

export default function HomeEng() {
  return (
    <>
      {/* HERO */}
      <section className="hero scanline-bg">
        <div className="hero-lines" aria-hidden="true">
          {[...Array(6)].map((_, i) => <span key={i} className="hero-line" style={{
            animationDelay: `${i * 0.4}s`
          }} />)}
        </div>
        <div className="hero-content reveal">
          <h1 className="hero-title">
            <span className="hero-num">1.5</span>
            <span className="hero-formula">ADANA</span>
            <span className="hero-student text-red">FORMULA</span>
          </h1>
          <p className="hero-sub">ENGINEERING · SPEED · CODE · PASSION</p>
          <div className="hero-ctas">
            <Link to="/araclarimiz" className="btn-primary">VIEW VEHICLES</Link>
            <Link to="/hakkimizda" className="btn-outline">ABOUT US</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
        </div>
      </section>

      {/* ARAÇ TEASER */}
      <section className="car-teaser">
        {/* EDIT: Replace with your car photo — src/assets/images/arac_2026.jpg */}
        <div className="car-teaser-bg" style={{ backgroundImage: 'url(/src/assets/images/arac_2026.jpg)' }}>
          <div className="car-teaser-overlay" />
          <div className="container car-teaser-inner">
            <div className="car-teaser-text reveal">
              <p className="section-label">// OUR 2026 VEHICLE</p>
              <div className="red-line" />
              <h2>Ready to Race.<br />Pushing the Limits.</h2>
              <p className="mt-16 text-secondary">
                Our 2026 vehicle where engineering, passion, and code unite — every detail designed by our team.
              </p>
              <Link to="/araclarimiz" className="btn-primary mt-32 inline-block">DISCOVER VEHICLES →</Link>
            </div>
            {/* Corner brackets */}
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-br" />
          </div>
        </div>
      </section>

      {/* FORMULA STUDENT NEDİR */}
      <section className="about-section">
        <div className="container grid-2 items-center">
          <div className="reveal">
            <p className="section-label">// WHAT IS FORMULA STUDENT?</p>
            <div className="red-line" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Engineering's<br />Ultimate Test<br />On the <span
              className="text-red">Track</span></h2>
            <p className="mt-24 text-secondary" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Formula Student is an international engineering competition where university students worldwide design, manufacture, and race single-seat formula cars. Beyond technical excellence, marketing, cost optimization, and business planning are also evaluated.
            </p>
          </div>

          <div className="stats-block reveal reveal-delay-2">
            {stats.map(s => (
              <div key={s.value} className="stat-item card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKIM KAPTANLARI */}
      <section className="captains-section">
        <div className="container">
          <div className="reveal">
            <p className="section-label">// TEAM CAPTAINS</p>
            <div className="red-line" />
          </div>
          <div className="captains-grid">
            {captains.map((c, i) => (
              <CaptainCard key={c.name} c={c} delay={Math.min(i + 1, 4)} />
            ))}
          </div>
          <div className="reveal mt-48" style={{ textAlign: 'center' }}>
            <Link to="/ekip-uyeleri" className="btn-outline">MEET THE FULL TEAM →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
