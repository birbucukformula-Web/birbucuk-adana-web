import { useState } from 'react';
import './Galeri.css';

const base = import.meta.env.BASE_URL;

const galleryData = {
  '2026': [
    {
      id: "2026-cufest",
      title: "CUFest Etkinliği",
      subtitle: "2026 Üniversite Fuarı",
      cover: "galeri/cufest/cufest4.jpg",
      images: [
        "galeri/cufest/cufest.jpg",
        "galeri/cufest/cufest1.jpg",
        "galeri/cufest/cufest3.jpg",
        "galeri/cufest/cufest4.jpg",
        "galeri/cufest/cufest5.jpg",
        "galeri/cufest/cufest6.jpg"
      ]
    },
    {
      id: "2026-yapim",
      title: "Yapım Aşaması 2026",
      subtitle: "2026 Araba Yapım Süreci",
      cover: "galeri/yapimasamasi26/yapim26_1.JPG",
      images: [
        "galeri/yapimasamasi26/yapim26_1.JPG",
        "galeri/yapimasamasi26/yapim26_2.jpeg",
        "galeri/yapimasamasi26/yapim26_3.jpeg",
        "galeri/yapimasamasi26/yapim26_4.jpeg"
      ]
    }
  ],
  '2025': [
    {
      id: "2025-yapim",
      title: "Yapım Aşaması 2025",
      subtitle: "2025 Araba Yapım Süreci",
      cover: "galeri/yapimasamasi25/yapim25_1.jpg",
      images: [
        "galeri/yapimasamasi25/yapim25_1.jpg",
        "galeri/yapimasamasi25/yapim25_2.JPG",
        "galeri/yapimasamasi25/yapim25_3.jpg",
        "galeri/yapimasamasi25/yapim25_4.jpg"
      ]
    },
    {
      id: "2025-yilbasi",
      title: "Yılbaşı Etkinliği 2025",
      subtitle: "Takım Yılbaşı Kutlaması",
      cover: "galeri/yilbasi25/yilbasi1.jpg",
      images: [
        "galeri/yilbasi25/yilbasi1.jpg",
        "galeri/yilbasi25/yilbasi2.jpg",
        "galeri/yilbasi25/yilbasi3.jpg",
        "galeri/yilbasi25/yilbasi4.jpg",
        "galeri/yilbasi25/yilbasi5.jpg",
        "galeri/yilbasi25/yilbasi6.jpg",
        "galeri/yilbasi25/yilbasi7.jpg",
        "galeri/yilbasi25/yilbasi8.jpg",
        "galeri/yilbasi25/yilbasi9.jpg"
      ]
    }
  ]
};

export default function Galeri() {
  const [activeYear, setActiveYear] = useState('2026');
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openAlbum = (album) => {
    setActiveAlbum(album);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
  };

  const closeAlbum = () => {
    setActiveAlbum(null);
    document.body.style.overflow = '';
  };

  const nextImage = (e) => {
    e.stopPropagation(); // Resmin dışına tıklamayı tetiklemesini engelle
    if (activeAlbum) {
      setCurrentImageIndex((prev) => (prev + 1) % activeAlbum.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeAlbum) {
      setCurrentImageIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
    }
  };

  return (
    <div className="galeri-page">
      {/* ── HERO BÖLÜMÜ ── */}
      <section className="galeri-hero reveal">
        <div className="container">
          <p className="section-label">// ANILARIMIZ</p>
          <h1>Galeri</h1>
          <p className="hero-subtext">Geçmişten günümüze takımımızın en unutulmaz anları, etkinlikleri ve atölye günleri.</p>
        </div>
      </section>

      {/* ── İÇERİK BÖLÜMÜ ── */}
      <section className="galeri-content container">
        {/* Yıl Sekmeleri */}
        <div className="year-tabs reveal">
          <button 
            className={`year-tab ${activeYear === '2026' ? 'active' : ''}`}
            onClick={() => setActiveYear('2026')}
          >
            2026
          </button>
          <button 
            className={`year-tab ${activeYear === '2025' ? 'active' : ''}`}
            onClick={() => setActiveYear('2025')}
          >
            2025
          </button>
        </div>

        {/* Albüm Kartları */}
        <div className="albums-grid">
          {(galleryData[activeYear] || []).map((album, idx) => (
            <div 
              key={album.id} 
              className="album-card"
              onClick={() => openAlbum(album)}
            >
              <div className="album-cover">
                <img src={`${base}images/${album.cover}`} alt={album.title} />
                <div className="album-overlay">
                  <span className="album-count">{album.images.length} Fotoğraf</span>
                  <h3>{album.title}</h3>
                  {album.subtitle && <p className="album-subtitle">{album.subtitle}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX (TAM EKRAN SLIDER) ── */}
      {activeAlbum && (
        <div className="lightbox-overlay" onClick={closeAlbum}>
          <button className="lightbox-close" onClick={closeAlbum}>&#10005;</button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`${base}images/${activeAlbum.images[currentImageIndex]}`} 
              alt={`${activeAlbum.title} - ${currentImageIndex + 1}`} 
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              {activeAlbum.title} ({currentImageIndex + 1} / {activeAlbum.images.length})
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
