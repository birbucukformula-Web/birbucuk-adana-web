import { Link } from 'react-router-dom'
import './Araclarimiz.css'

export default function Araclarimiz() {
  return (
    <>
      {/* ── SAYFA BAŞLIĞI VE YÖNLENDİRME MENÜSÜ ───────────────────────────── */}
      <section className="araclar-header-section" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="container">
          <p className="section-label reveal">// ARAÇLARIMIZ</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1 mt-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
            GEÇMİŞTEN GÜNÜMÜZE<br /><span className="text-red">ARAÇLARIMIZ</span>
          </h1>
          <p className="text-secondary mt-16 reveal reveal-delay-2" style={{ maxWidth: '600px' }}>
            Bir hayalden yola çıkıp, mühendisliğin sınırlarını zorladığımız serüvenimize hoş geldiniz. Atölyede dökülen terin, pistlerdeki hızla buluştuğu bu hikayede; BAF01-KOZA ile attığımız o ilk cesur adım, bugün BAF02-METAMORF ile asfalta kazıdığımız güçlü bir mirasa dönüştü. Geçmişten aldığımız ilhamla her vidayı daha inançla sıkıyor, her yeni sezonda geleceğe doğru vites büyütüyoruz. Kendi sınırlarımızı aştığımız bu mühendislik eserlerini aşağıdan detaylıca inceleyebilirsiniz.
          </p>
          
          <div className="araclar-nav mt-32 reveal reveal-delay-3">
            <Link to="/2026arac" className="btn-primary">BAF02-METAMORF →</Link>
            <Link to="/2025arac" className="btn-outline">BAF01-KOZA →</Link>
          </div>
        </div>
      </section>
    </>
  )
}