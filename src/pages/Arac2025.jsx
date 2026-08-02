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
            <h2>BAF01-<span className="text-red">KOZA</span></h2>
          </div>

          <div className="season-main-img reveal reveal-delay-1">
            <img src={`${base}images/2025-arac-images/24-25-arac.jpeg`} alt="2024-2025 Sezonu Aracı" />
          </div>

          <div className="season-intro-text mt-32 reveal reveal-delay-2 text-secondary" style={{ maxWidth: '800px' }}>
            <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>BİR HAYALİN ASFALTLA BULUŞTUĞU YER</h3>
            <p style={{ lineHeight: '1.8' }}>
              Bir hayalin peşinden gitmek cesaret ister, o hayali gerçeğe dönüştürmek ise inanç, ter ve uykusuz geceler... Çukurova’nın sıcağında, atölyenin tozunda yoğrulan uzun mesailerin sonunda ortaya çıkan ilk göz ağrımız. 1.5 Adana Formula Student ekibi olarak asfalta indirdiğimiz 2024-2025 sezonu aracımız, sadece çelik borulardan, pillerden ve tekerleklerden ibaret değil; bir mühendislik tutkusunun, sıfırdan var etme iradesinin ve omuz omuza vermiş bir öğrenci takımının somutlaşmış halidir. Bu araç, gelecekte yazacağımız efsanelerin ilk satırı.
            </p>
          </div>

          <div className="season-specs mt-48">
            <p className="section-label reveal">// TEKNİK ÖZELLİKLER</p>
            <div className="red-line reveal" />
            
            <div className="specs-intro-text mt-32 mb-32 reveal reveal-delay-1 text-secondary" style={{ maxWidth: '800px' }}>
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>GÜÇ, DENGE VE İLK ADIMIN CESARETİ</h3>
              <p style={{ lineHeight: '1.8' }}>
                İlk aracımızı tasarlarken temel hedefimiz; stabiliteyi, güvenliği ve optimum performansı tek bir şaside buluşturmaktı. Elektrikli güç aktarım organlarının dinamiklerini öğrenmek ve bu teknolojiyi en verimli şekilde yola aktarmak için günlerce süren simülasyonlar gerçekleştirdik. 60 kW gücündeki elektrik motorumuzla sürdürülebilir performansı merkeze alırken, 250 kg'lık toplam ağırlığımız ve dayanıklı çelik boru kafes şasimizle güvenlikten ödün vermeden çevik bir yapı kurguladık. Her bir kaynak izinde, her bir cıvatanın sıkılığında koca bir ekibin ortak aklı yatıyor.
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
            <p className="section-label reveal">// YAPIM AŞAMASI</p>
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
              <h3 className="text-white mb-16" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>KAĞIT ÜZERİNDEN PİSTLERE...</h3>
              <p style={{ lineHeight: '1.8' }}>
                Tasarım ekranlarındaki çizgilerin atölyede kıvılcımlara, ardından piste çıkan bir yarış aracına dönüşmesi aylar süren bir emeğin eseri. Metal kesiminden şasi montajına kadar her aşamada kendi sınırlarımızı zorladık, hatalarımızdan öğrendik ve mühendislik yeteneklerimizi bizzat sahada test ettik. İlk aracımız bize neleri başarabileceğimizi gösteren en büyük rehberimiz oldu. Şimdi bu tecrübeyi cebimize koyuyor, Çukurova Üniversitesi'nin adını motor sporlarında çok daha güçlü duyurmak için aracımızın temellerini atıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
