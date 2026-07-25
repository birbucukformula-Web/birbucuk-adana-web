// Sponsorlar sayfası — Sponsor katmanlarını (tier) ve avantajları listeler
import { Link } from 'react-router-dom'
import '../Sponsorlar.css'

const base = import.meta.env.BASE_URL

const tiers = [
  {
    label: 'GOLD SPONSOR',
    icon: '🥇',
    cls: 'tier-main',
    sponsors: [
      { name: 'Avioni',    logo: `${base}images/sponsor-images/avioni_logo.png`, href: 'https://avionitech.com//' },
      { name: 'OnPlus',    logo: `${base}images/sponsor-images/onplus-sitelogo.png`, href: 'https://www.onplus.com.tr/' },
      { name: 'Germaksan', logo: `${base}images/sponsor-images/germaksan-logo.jpg`, href: 'https://germaksan.com.tr/' },
      { name: 'NoktaDil',  logo: `${base}images/sponsor-images/noktadil-logo.jpg`, href: 'https://www.noktadil.com.tr/' }
    ],
  },
  {
    label: 'SILVER SPONSOR',
    icon: '🥈',
    cls: 'tier-silver',
    sponsors: [
      { name: 'Boğaziçi Yazılım',  logo: `${base}images/sponsor-images/boazici-yazilim-logo.png`, href: 'https://www.bogaziciyazilim.com/' },
      { name: 'Cubicl',            logo: `${base}images/sponsor-images/cubicl-logo.png`, href: 'https://cubicl.io/tr' },
      { name: 'Makersan',          logo: `${base}images/sponsor-images/makersan-logo.jpeg`, href: 'https://www.makersan.com.tr/' },
      { name: 'Ateks',             logo: `${base}images/sponsor-images/ateks-logo.png`, href: 'https://www.ateks.international/anasayfa-muhendislik' },
      { name: 'Şifa Ana',          logo: `${base}images/sponsor-images/sifaana-logo.png`, href: 'https://www.sifaana.com.tr/' },
      { name: 'Petka',             logo: `${base}images/sponsor-images/petka-logo.png`, href: 'https://www.petkakalip.com.tr/' },
    ],
  },
  {
    label: 'BRONZE SPONSOR',
    icon: '🥉',
    cls: 'tier-bronze',
    sponsors: [
      { name: 'ORS',             logo: `${base}images/sponsor-images/ors-logo.png`, href: 'https://www.ors.com.tr/' },
      { name: 'Beauty Max',  logo: `${base}images/sponsor-images/beautymax.jpg`,      href: 'https://example3.com' }
    ],
  },
  {
    label: 'SUPPORTING SPONSOR',
    icon: '🤝',
    cls: 'tier-other',
    sponsors: [
      { name: 'MSA',              logo: `${base}images/sponsor-images/MSA-logo.png`, href: 'https://msaglobalgumruk.com/' },
      { name: 'Acımak',           logo: `${base}images/sponsor-images/acimak-logo.png`, href: 'https://www.acimak.com.tr/' },
      { name: 'Cebeci',           logo: `${base}images/sponsor-images/cebeci-logo.png` },
      { name: 'Temsa',            logo: `${base}images/sponsor-images/temsa.png`, href: 'https://www.temsa.com/tr/' },
      { name: 'Tasargem',         logo: `${base}images/sponsor-images/tasargem-logo.png`, href: 'https://tasargem.com/' },
      { name: 'Şanal Petrol',     logo: `${base}images/sponsor-images/sanalpetrol-logo.png` },
      { name: 'Aslan Çelik Boru', logo: `${base}images/sponsor-images/aslancelik-logo.jpg`, href: 'https://www.aslancelikboru.com/' },
      { name: 'Şef Kebapsef', logo: `${base}images/sponsor-images/sefkebap-logo.png`, href: 'https://www.sefkebap.com/' },
      { name: 'Groseri',          logo: `${base}images/sponsor-images/groseri-logo.png`, href: 'https://www.groseri.com.tr/' },
      { name: 'Dimes',            logo: `${base}images/sponsor-images/dimes-logo.png`, href: 'https://www.dimes.com.tr/' },
      { name: 'Han Kahve',        logo: `${base}images/sponsor-images/hankahve-logo.jpg`, href: 'https://hankurukahvecisi.com/' },
      { name: 'Bilgehan Mak',     logo: `${base}images/sponsor-images/bilgehanmak.png`, href: 'https://www.bilgehanltd.com/' }
    ],
  },
]

const benefits = [
  { icon: '📢', text: 'Logo visibility on the vehicle' },
  { icon: '📱', text: 'Social media promotion' },
  { icon: '🏁', text: 'Brand representation during the competition' },
  { icon: '🤝', text: 'Networking with university students' },
  { icon: '📄', text: 'Feature on the website and press materials' },
  { icon: '🎥', text: 'Sponsor promotion in media content' },
]

function SponsorCard({ s, size }) {
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`sponsor-card card sponsor-card--${size}`}>
      <img
        src={s.logo}
        alt={s.name}
        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
      />
      <span className="sponsor-name-fallback" style={{ display: 'none' }}>{s.name}</span>
    </a>
  )
}

export default function SponsorlarEng() {
  return (
    <>
      <section className="page-hero sponsor-hero">
        <div className="container">
          <p className="section-label reveal">// SPONSORS</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            TAKE PART<br /><span className="text-red">WITH US</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2" style={{ maxWidth: '560px' }}>
            Support the Formula Student team of Çukurova University to share the dreams of young engineers and bring your brand to the track.
          </p>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <p className="section-label reveal">// WHY BECOME A SPONSOR?</p>
          <div className="red-line reveal" />
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <span className="benefit-icon">{b.icon}</span>
                <span className="benefit-text">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sponsors-section">
        <div className="container">
          <p className="section-label reveal">// OUR SUPPORTERS</p>
          <div className="red-line reveal" />

          {tiers.map(tier => (
            <div key={tier.label} className={`tier-block reveal ${tier.cls}`}>
              <div className="tier-header">
                <span className="tier-icon">{tier.icon}</span>
                <span className="tier-label">{tier.label}</span>
              </div>

              {tier.sponsors.length ? (
                <div className={`sponsors-row sponsors-row--${tier.cls}`}>
                  {tier.sponsors.map(s => (
                    <SponsorCard key={s.name} s={s} size={tier.cls} />
                  ))}
                </div>
              ) : (
                <div className="tier-empty">
                  <p className="text-secondary" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '1px' }}>
                    Waiting for a sponsor in this category...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="sponsor-cta-section">
        <div className="container">
          <div className="sponsor-cta-box reveal">
            <p className="section-label">// BECOME A SPONSOR</p>
            <div className="red-line" />
            <h2>Become a Sponsor<br /><span className="text-red">of Our Team</span></h2>
            <p className="text-secondary mt-24" style={{ maxWidth: '480px', lineHeight: '1.8' }}>
              Contact us for our sponsorship packages and detailed information.
              We offer collaboration opportunities suitable for every budget.
            </p>
            <Link to="/iletisim" className="btn-primary mt-32 inline-block">CONTACT US →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
