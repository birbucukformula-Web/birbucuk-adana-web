import '../Hakkimizda.css'

const base = import.meta.env.BASE_URL


/* ─── Hakkimizda Page ─── */
export default function HakkimizdaEng() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero hakkimizda-hero">
        <div className="container">
          <p className="section-label reveal">// ABOUT US</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            WHO ARE<br /><span className="text-red">WE?</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            We hit the track with engineering, passion, and team spirit.
          </p>
        </div>
      </section>

      {/* HIKAYE */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-text reveal">
            <p className="section-label">// OUR TEAM</p>
            <div className="red-line" />
            <h2>Turning a Dream<br /><span className="text-red">Into Reality</span></h2>
            <p className="mt-24 text-secondary" style={{ lineHeight: '1.9' }}>
              Founded in 2023 at Çukurova University, 1.5 Adana Formula Student aims to produce electric vehicle technologies and high-performance engineering solutions. We are a part of the "1.5 Adana Teknoloji" family, one of the most powerful technology and innovation communities in Adana, hosting more than 10 professional teams.
            </p>
            <p className="mt-16 text-secondary" style={{ lineHeight: '1.9' }}>
              With a young, dynamic, and interdisciplinary team, we are not just building a race car; we are creating an engineering culture that will shape the mobility solutions of the future.
            </p>
            <div className="story-tags mt-32">
              <span className="story-tag">REAL EXPERIENCE</span>
              <span className="story-tag">TEAM SPIRIT</span>
              <span className="story-tag">NETWORK</span>
            </div>
          </div>
          <div className="story-img reveal reveal-delay-2">
            <img
              src={`${base}images/hakkimizda-images/biz-kimiz.JPG`}
              alt="Team working moment"
              onError={e => { e.target.parentElement.classList.add('img-placeholder') }}
            />
            <div className="img-bracket img-bracket-tl" />
            <div className="img-bracket img-bracket-br" />
          </div>
        </div>
      </section>

      {/* VIZYON & MISYON */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card card reveal">
              <div className="vm-icon">🔭</div>
              <h3>Our Vision</h3>
              <p className="text-secondary mt-16">
                To be a leading electric racing team recognized for engineering excellence in worldwide Formula Student competitions, having turned innovative technologies and sustainable success into a corporate culture.
              </p>
            </div>
            <div className="vm-card card reveal reveal-delay-1">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p className="text-secondary mt-16">
                To provide our team members with technical competence beyond industry standards by integrating theoretical engineering knowledge with practical applications and R&D studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATOLYEMIZ */}
      <section className="workshop-section">
        <div className="container">
          <p className="section-label reveal">// OUR WORKSHOP</p>
          <div className="red-line reveal" />
          <div className="workshop-grid mt-32">
            <div className="workshop-img-wrapper reveal">
              <img
                src={`${base}images/atolye.jpeg`}
                alt="Our Workshop"
                className="workshop-main-img"
              />
            </div>
            <div className="workshop-text reveal reveal-delay-2">
              <h2>The Heart of<br /><span className="text-red">Production</span></h2>
              <p className="mt-24 text-secondary" style={{ lineHeight: '1.9' }}>
                This is where our designs become reality, where carbon fiber takes shape, and where electric motors turn into power. Our workshop is not just a workspace; it is our home, enlightened by our passion for engineering even on sleepless nights where we learn from our mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
