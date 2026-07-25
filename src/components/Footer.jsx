// Footer bileşeni — sitenin alt kısmında logo, hızlı linkler ve sosyal medya ikonları
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

// Görseller public/images/ klasöründe olduğu için BASE_URL prefix kullanıyoruz
const base = import.meta.env.BASE_URL

// ─── SOSYAL MEDYA LİNKLERİ ───────────────────────────────────────────────────
const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/1.5adanaformula/',          icon: `${base}images/Instagram_icon.png` },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/company/birbucukadanaformula/', icon: `${base}images/Linkedin_icon.png`  },
  { name: 'YouTube',   href: 'https://www.youtube.com/@1.5adanaformula',             icon: `${base}images/Youtube_icon.png`   },
  { name: 'TikTok',    href: 'https://www.tiktok.com/@1.5adanaformula',               icon: `${base}images/tiktok-icon.png`    },
]

// ─── HIZLI SAYFALAR ──────────────────────────────────────────────────────────
const pagesTR = [
  { to: '/',                  label: 'Ana Sayfa'       },
  { to: '/hakkimizda',        label: 'Hakkımızda'      },
  { to: '/araclarimiz',       label: 'Araçlarımız'     },
  { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik'},
  { to: '/sponsorlar',        label: 'Sponsorlar'      },
  { to: '/oyun',              label: 'Oyun'            },
]

const pagesEN = [
  { to: '/',                  label: 'Home'       },
  { to: '/hakkimizda',        label: 'About Us'      },
  { to: '/araclarimiz',       label: 'Our Vehicles'     },
  { to: '/surdurulebilirlik', label: 'Sustainability'},
  { to: '/sponsorlar',        label: 'Sponsors'      },
  { to: '/oyun',              label: 'Game'            },
]

export default function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const currentPages = isEnglish ? pagesEN : pagesTR;

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* ── MARKA / LOGO ────────────────────────────────────────────────── */}
        <div className="footer-brand">
          <img
            src={`${base}images/kırmızı_beyaz.png`}
            alt="Team Logo"
            style={{ height: '80px', width: 'auto', marginBottom: '16px' }}
          />
          <p className="footer-tagline">
            {isEnglish ? "Çukurova's Formula Student Team" : "Çukurova'nın Formula Student Takımı"}
          </p>
        </div>

        {/* ── HIZLI LİNKLER ───────────────────────────────────────────────── */}
        <div className="footer-links">
          <p className="footer-heading">{isEnglish ? "Pages" : "Sayfalar"}</p>
          <ul>
            {currentPages.map(p => (
              <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ── İLETİŞİM VE SOSYAL MEDYA ───────────────────────────────────────── */}
        <div className="footer-contact">
          <p className="footer-heading">{isEnglish ? "Contact" : "İletişim"}</p>
          <ul className="contact-info">
            <li>
              <Link to="/iletisim">
                {isEnglish ? (
                  <>Çukurova University Tömer Building,<br />Sarıçam/Adana</>
                ) : (
                  <>Çukurova Üniversitesi Tömer Binası,<br />Sarıçam/Adana</>
                )}
              </Link>
            </li>
            <li className="footer-mail">
              <a href="mailto:info@birbucukadanaformula.com">info@birbucukadanaformula.com</a>
            </li>
          </ul>
          
          <div className="social-icons" style={{ marginTop: '20px' }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} className="social-icon" aria-label={s.name} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.name} className="footer-social-img" />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="footer-bottom container">
        <p>
          {isEnglish ? "© 2026 1.5 Adana Formula Student. All rights reserved." : "© 2026 1.5 Adana Formula Student. Tüm hakları saklıdır."}
        </p>
      </div>
    </footer>
  )
}