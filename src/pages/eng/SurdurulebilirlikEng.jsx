import { useState } from 'react'
import '../Surdurulebilirlik.css'

/* 4 Temel Yaklaşım */
const pillars = [
  {
    icon: '📊',
    title: 'CCBOM Analysis',
    desc: 'We analyze the carbon emission of each part from raw material to logistics.',
  },
  {
    icon: '♻️',
    title: 'From Waste to Value',
    desc: 'We achieve 95% energy savings by recovering aluminum in our workshop.',
  },
  {
    icon: '🧠',
    title: 'Corporate Memory',
    desc: 'With the documentation culture we have developed, we transfer our experiences to future generations.',
  },
  {
    icon: '🔋',
    title: 'LCA Focus',
    desc: 'We focus not only on the track performance of the vehicle but also on its entire life cycle impact (LCA).',
  },
]

const goals = [
  { year: '2024', text: 'Sustainability reporting and CCBOM analyses have been initiated.' },
  { year: '2025', text: 'Aluminum recycling unit and circular economy model have been established.' },
  { year: '2026', text: 'Fully electric chassis and minimized operational carbon footprint.' },
]

const base = import.meta.env.BASE_URL

export default function SurdurulebilirlikEng() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero surd-hero">
        <div className="container">
          <p className="section-label reveal">// SUSTAINABILITY</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            RESPONSIBLE<br /><span className="text-red">APPROACH</span><br />TO THE FUTURE
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            As the 1.5 Adana Formula Student team, we see sustainability not just as a goal, but as an engineering discipline. While focusing on electric vehicle technologies, we consider minimizing environmental impact and using resources most efficiently as our fundamental principle.
          </p>
        </div>
      </section>

      {/* GERİ DÖNÜŞÜM EL KİTABI (YENİ REKLAM BÖLÜMÜ) */}
      <section className="handbook-section">
        <div className="container">
          <div className="handbook-split reveal">
            {/* SOL: KİTAP KAPAĞI */}
            <div className="handbook-img-box">
              <img 
                src={`${base}images/el_kitabi_kapak.png`} 
                alt="Recycling Handbook Cover" 
                className="handbook-img"
              />
            </div>

            {/* SAĞ: METİN & İNDİRME */}
            <div className="handbook-text">
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.2' }}>
                We Are Also <span className="text-red">Leaving a Mark</span> on Our World's Future!
              </h2>
              <p className="text-secondary mt-16" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Engineering is not just about producing vehicles; it is about designing nature-friendly systems. We proudly present the <strong>1.5 Adana Formula Team Recycling Handbook</strong>, which we prepared to embed our sustainability awareness into our corporate memory and transfer it to future generations.
              </p>

              <div className="stats-box mt-20">
                <h4 className="text-red mb-12" style={{ fontSize: '1rem' }}>Our First Semester Data (6 Months)</h4>
                <ul className="stats-list">
                  <li><span className="icon">♻️</span> <strong>7.220 gr</strong> Aluminum</li>
                  <li><span className="icon">♻️</span> <strong>24.925 gr</strong> Plastic</li>
                  <li><span className="icon">♻️</span> <strong>3.490 gr</strong> Electronics</li>
                  <li><span className="icon">♻️</span> <strong>7.860 gr</strong> Cardboard</li>
                  <li><span className="icon">♻️</span> <strong>483 gr</strong> AA Batteries</li>
                </ul>
                <p className="mt-12 text-primary" style={{ fontSize: '0.9rem' }}><strong>In total, ~160 kg CO₂e emission benefit!</strong></p>
              </div>

              <div className="mt-24">
                <a 
                  href={`${base}docs/15AdanaFormula_GeriDonusumElKitabi.pdf`} 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary btn-sm"
                >
                  Click to Download the Handbook ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMEL YAKLAŞIMLAR */}
      <section className="pillars-section">
        <div className="container">
          <p className="section-label reveal">// OUR FUNDAMENTAL APPROACHES</p>
          <div className="red-line reveal" />
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.title} className={`pillar-card card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="pillar-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p className="text-secondary mt-16">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAYLI İÇERİK (ESKİ SİTEDEN AKTARILAN) */}
      <section className="surd-detailed-content">
        <div className="container">
          <div className="surd-report-box reveal">
            <div className="report-section">
              <h3 className="text-red">1. Environmental Sustainability (CCBOM)</h3>
              <p>We apply Carbon Cycle Bill of Materials analyses, which are part of the Formula Student "Cost and Manufacturing" discipline, starting from the design phase of our vehicle. We minimize carbon emissions at every step, from material selection to logistics.</p>
            </div>

            <div className="report-section mt-32">
              <h3 className="text-red">2. Workshop Culture: Zero Waste</h3>
              <p>We manage our operational carbon footprint with the Zero Waste principles we apply in our workshop. Specifically through aluminum recovery, we contribute to the circular economy by using 95% less energy compared to primary production.</p>
            </div>

            <div className="fun-fact-card mt-32">
              <h4>💡 Did you know?</h4>
              <p>The energy saved by recycling one aluminum beverage can is enough to run a television for 3 hours. We return thousands of hours of 'engineering energy' to nature every year!</p>
            </div>
          </div>
        </div>
      </section>

      {/* YOL HARİTASI */}
      <section className="goals-section">
        <div className="container">
          <p className="section-label reveal">// OUR ROADMAP</p>
          <div className="red-line reveal" />
          <div className="timeline">
            {goals.map((g, i) => (
              <div key={g.year} className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="timeline-year">{g.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-text">{g.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
