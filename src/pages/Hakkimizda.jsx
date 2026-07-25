import './Hakkimizda.css'

const base = import.meta.env.BASE_URL


/* ─── Hakkimizda Page ─── */
export default function Hakkimizda() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero hakkimizda-hero">
        <div className="container">
          <p className="section-label reveal">// HAKKIMIZDA</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            BİZ<br /><span className="text-red">KİMİZ?</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Mühendislik, tutku ve takım ruhuyla piste çıkıyoruz.
          </p>
        </div>
      </section>

      {/* HIKAYE */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-text reveal">
            <p className="section-label">// TAKIMIMIZ</p>
            <div className="red-line" />
            <h2>Bir Hayalin<br /><span className="text-red">Gerçeğe Dönüşü</span></h2>
            <p className="mt-24 text-secondary" style={{ lineHeight: '1.9' }}>
              1.5 Adana Formula Student, 2023 yılında Çukurova Üniversitesi bünyesinde, elektrikli araç teknolojileri ve yüksek performanslı mühendislik çözümleri üretmek amacıyla kurulmuştur. Adana'nın teknoloji ve inovasyon odağındaki en güçlü topluluklarından biri olan ve bünyesinde 10'dan fazla profesyonel ekibi barındıran "1.5 Adana Teknoloji" ailesinin bir parçasıyız.
            </p>
            <p className="mt-16 text-secondary" style={{ lineHeight: '1.9' }}>
              Genç, dinamik ve disiplinler arası bir ekiple; sadece bir yarış aracı inşa etmiyor, aynı zamanda geleceğin mobilite çözümlerine yön verecek bir mühendislik kültürü oluşturuyoruz.
            </p>
            <div className="story-tags mt-32">
              <span className="story-tag">GERÇEK DENEYİM</span>
              <span className="story-tag">EKİP RUHU</span>
              <span className="story-tag">NETWORK</span>
            </div>
          </div>
          <div className="story-img reveal reveal-delay-2">
            <img
              src={`${base}images/hakkimizda-images/biz-kimiz.JPG`}
              alt="Takım çalışma anı"
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
              <h3>Vizyonumuz</h3>
              <p className="text-secondary mt-16">
                Dünya çapındaki Formula Student yarışmalarında mühendislik mükemmeliyetiyle tanınan; yenilikçi teknolojileri ve sürdürülebilir başarıyı bir kurum kültürü haline getirmiş, lider bir elektrikli yarış takımı olmak.
              </p>
            </div>
            <div className="vm-card card reveal reveal-delay-1">
              <div className="vm-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p className="text-secondary mt-16">
                Teorik mühendislik bilgisini pratik uygulamalar ve Ar-Ge çalışmalarıyla bütünleştirerek takım üyelerimize endüstri standartlarının ötesinde teknik yetkinlik kazandırmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATOLYEMIZ */}
      <section className="workshop-section">
        <div className="container">
          <p className="section-label reveal">// ATÖLYEMİZ</p>
          <div className="red-line reveal" />
          <div className="workshop-grid mt-32">
            <div className="workshop-img-wrapper reveal">
              <img
                src={`${base}images/atolye.jpeg`}
                alt="Atölyemiz"
                className="workshop-main-img"
              />
            </div>
            <div className="workshop-text reveal reveal-delay-2">
              <h2>Üretimin<br /><span className="text-red">Kalbi</span></h2>
              <p className="mt-24 text-secondary" style={{ lineHeight: '1.9' }}>
                Tasarımlarımızın gerçeğe dönüştüğü, karbon fiberin şekil aldığı ve elektrik motorlarının güce dönüştüğü yer burası. Atölyemiz, sadece bir çalışma alanı değil, hatalarımızdan ders çıkardığımız, uykusuz gecelerde bile mühendislik tutkumuzla aydınlanan evimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}