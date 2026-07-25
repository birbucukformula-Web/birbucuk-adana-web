import './Oyun.css'

export default function Oyun() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero oyun-hero">
        <div className="container">
          <p className="section-label reveal">// OYUN</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            PİSTİ<br /><span className="text-red">HISSET</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2" style={{ maxWidth: '520px' }}>
            {/* EDIT: Oyun açıklamasını buraya ekle */}
            1.5 Adana Formula Student ekibinin geliştirdiği mobil oyunla Formula Student dünyasını
            doğrudan deneyimle. Kendi aracını yönet, pistlerde yarış, tutkuyu hisset.
          </p>
        </div>
      </section>

      {/* OYUN GÖRSELİ */}
      {/* OYUN GÖRSELİ */}
<section className="game-showcase">
  <div className="container">
    <div className="game-media reveal">
      <img
        src="/src/assets/images/oyun_screenshot.jpg"
        alt="Oyun ekran görüntüsü"
        onError={e => { 
          e.target.style.display = 'none';
          e.target.parentElement.classList.add('is-placeholder');
        }}
      />
      
      {/* Görsel olmadığı sürece ekranda görünecek dinamik yüklenme alanı */}
      <div className="game-placeholder-content">
       <div className="track-loading-container">
  <div className="f1-car-track">
    <svg viewBox="0 0 100 36" fill="currentColor">
      {/* Arka Kanat (Solda) */}
      <path d="M 4 8 L 18 8 L 15 22 L 4 22 Z" />
      <path d="M 2 8 L 18 8" stroke="currentColor" strokeWidth="2" />
      {/* Gövde / Sidepod / Kokpit / Halo / Burun */}
      <path d="M 12 22 L 20 18 L 38 17 C 42 12, 52 12, 56 17 L 72 20 L 92 26 L 98 28 L 98 30 L 88 30 L 76 29 L 58 28 L 22 28 Z" />
      {/* Halo & Sürücü Kafası */}
      <path d="M 46 17 C 48 14, 54 14, 57 17 Z" fill="#0d0d0d" />
      <circle cx="49" cy="15.5" r="1.8" />
      {/* Ön Kanat (Sağda) */}
      <path d="M 88 30 L 98 30 L 96 25 L 88 28 Z" />
      <path d="M 88 31 L 100 31" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Arka Tekerlek (Siyah İnce Çeperli) */}
      <circle cx="26" cy="28" r="7.5" fill="currentColor" stroke="#0d0d0d" strokeWidth="1" />
      <circle cx="26" cy="28" r="3" fill="#0d0d0d" />
      
      {/* Ön Tekerlek (Siyah İnce Çeperli) */}
      <circle cx="78" cy="28" r="7.5" fill="currentColor" stroke="#0d0d0d" strokeWidth="1" />
      <circle cx="78" cy="28" r="3" fill="#0d0d0d" />
    </svg>
  </div>
  <div className="track-road" />
  <div className="track-lines" />
</div>

        <span className="placeholder-tag">// PİST HAZIRLANIYOR</span>
        <h3 className="placeholder-title">YAKINDA GELECEK</h3>
        <p className="placeholder-desc">1.5 Adana Mobil Oyunu Yükleniyor...</p>
      </div>

      <div className="game-media-overlay" />
      {/* Corner brackets */}
      <div className="gb gb-tl" /><div className="gb gb-tr" />
      <div className="gb gb-bl" /><div className="gb gb-br" />
    </div>
  </div>
</section>

      {/* STORE BUTTONS */}
      <section className="store-section">
        <div className="container">
          <p className="section-label reveal">// İNDİR</p>
          <div className="red-line reveal" />
          <p className="text-secondary reveal" style={{ marginBottom: '40px', fontSize: '16px' }}>
            Oyunu ücretsiz indir, pistte yarışmaya başla.
          </p>
          <div className="store-buttons reveal reveal-delay-1">

            {/* Google Play */}
            {/* EDIT: href'i gerçek Play Store linkiyle güncelle */}
            <a href="#" className="store-btn card" aria-label="Google Play'den İndir">
              {/* EDIT: Add Play Store link */}
              <div className="store-btn-icon store-icon-play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M3.18 23.76a2 2 0 0 0 2.09-.22l12.09-6.97-3.43-3.43L3.18 23.76zM.1 1.09A2 2 0 0 0 0 1.75v20.5c0 .23.04.45.1.66l.07.06L11.35 12v-.25L.17 1.03l-.07.06zM21.43 10.3l-2.95-1.7-3.8 3.8 3.8 3.79 2.96-1.71a2.01 2.01 0 0 0 0-4.18zM3.18.24L14.93 7.2l-3.43 3.43L3.18.46a2 2 0 0 0 0-.22z"/>
                </svg>
              </div>
              <div className="store-btn-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>

            {/* App Store */}
            {/* EDIT: href'i gerçek App Store linkiyle güncelle */}
            <a href="#" className="store-btn card" aria-label="App Store'dan İndir">
              {/* EDIT: Add App Store link */}
              <div className="store-btn-icon store-icon-apple">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="store-btn-text">
                <span className="store-sub">DOWNLOAD ON THE</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}