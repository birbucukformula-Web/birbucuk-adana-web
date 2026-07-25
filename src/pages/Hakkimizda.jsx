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
            BIZ<br /><span className="text-red">KIMIZ?</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Muhendislik, tutku ve takim ruhuyla piste cikiyoruz.
          </p>
        </div>
      </section>

      {/* HIKAYE */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-text reveal">
            <p className="section-label">// TAKIMIMIZ</p>
            <div className="red-line" />
            <h2>Bir Hayalin<br /><span className="text-red">Gercege Donusu</span></h2>
            <p className="mt-24 text-secondary" style={{ lineHeight: '1.9' }}>
              1.5 Adana Formula Student, 2023 yilinda Cukurova Universitesi buynyesinde, elektrikli arac teknolojileri ve yuksek performansli muhendislik cozumleri uretmek amaciyla kurulmustur. Adana'nin teknoloji ve inovasyon odagindaki en guclu topluluklarindan biri olan ve bunyesinde 10'dan fazla profesyonel ekibi barindiran "1.5 Adana Teknoloji" ailesinin bir parcasiyiz.
            </p>
            <p className="mt-16 text-secondary" style={{ lineHeight: '1.9' }}>
              Genc, dinamik ve disiplinler arasi bir ekiple; sadece bir yaris araci insaa etmiyor, ayni zamanda gelecegin mobilite cozumlerine yon verecek bir muhendislik kulturu olusturuyoruz.
            </p>
            <div className="story-tags mt-32">
              <span className="story-tag">GERCEK DENEYIM</span>
              <span className="story-tag">EKIP RUHU</span>
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
                Dunya capindaki Formula Student yarismalarinda muhendislik mukemmelliyiyle taninan; yenilikci teknolojileri ve surdurulebilir basariyi bir kurum kulturu haline getirmis, lider bir elektrikli yaris takimi olmak.
              </p>
            </div>
            <div className="vm-card card reveal reveal-delay-1">
              <div className="vm-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p className="text-secondary mt-16">
                Teorik muhendislik bilgisini pratik uygulamalar ve Ar-Ge calismalariyyla butunlestirerek takim uyelerimize endustri standartlarinin otesinde teknik yetkinlik kazandirmaktir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATOLYEMIZ */}
      <section className="workshop-section">
        <div className="container">
          <p className="section-label reveal">// ATOLYEMIZ</p>
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