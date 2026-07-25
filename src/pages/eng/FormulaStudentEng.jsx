import '../FormulaStudent.css'

const staticStages = [
  { title: 'Engineering Design', en: 'Mühendislik Tasarımı', score: '150', desc: 'An academic defense of the design processes of components, finite element analysis (FEA), computational fluid dynamics (CFD), and data acquisition systems (DAQ) outputs.' },
  { title: 'Cost & Manufacturing', en: 'Maliyet ve Üretim Analizi', score: '100', desc: 'A detailed cost reporting based on the optimization of production processes, material management, and industrial scalability.' },
  { title: 'Business Plan', en: 'İş Planı Sunumu', score: '75', desc: 'Transforming the technical project into a business model and presenting it to the jury with market analysis and return on investment (ROI) projections.' },
]

const dynamicStages = [
  { title: 'Acceleration', en: 'Hızlanma', score: '75', desc: 'Measuring the efficiency of the power-to-weight ratio and traction control algorithms on a 75-meter track.' },
  { title: 'Skid Pad', en: 'Yanal İvmelenme', score: '75', desc: 'Testing suspension kinematics and tire characterization on a circular path (Steady-state cornering).' },
  { title: 'Autocross', en: 'Otokros', score: '100', desc: 'Time-based validation of the vehicle\'s dynamic responses, maneuverability, and transient stability on a technical track.' },
  { title: 'Endurance & Efficiency', en: 'Dayanıklılık ve Verimlilik', score: '350', desc: 'Testing system reliability under high stress for 22 kilometers and rationalizing energy consumption per unit performance.' },
]

export default function FormulaStudentEng() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero fs-page-hero">
        <div className="container">
          <p className="section-label reveal">// OUR COMPETITION</p>
          <div className="red-line reveal" />
          <h1 className="reveal reveal-delay-1">
            FORMULA<br /><span className="text-red">STUDENT</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2" style={{ maxWidth: '600px' }}>
            We represent our university and country in the world's most prestigious engineering competition.
          </p>
        </div>
      </section>

      {/* NEDİR BU FORMULA STUDENT? (FOTOĞRAF VE YAZI YAN YANA) */}
      <section className="fs-info-section">
        <div className="container">
          <div className="fs-info-split">
            {/* SOL: YAZI */}
            <div className="fs-info-text reveal">
              <h2>What is <span className="text-red">Formula Student?</span></h2>
              <h4 className="mt-16">Conceptual Framework and Historical Development</h4>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.9' }}>
                Formula Student (FS) is an international design competition founded by the Society of Automotive Engineers (SAE) in 1981, and today it is recognized as the highest level of application in engineering education. It is organized in 26 different countries every year. The fundamental paradigm of the organization is to allow students to test their theoretical engineering notions within a real-time industrial project cycle (design, validation, production, and operation).
              </p>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.9' }}>
                This ecosystem is not just about building a car; it is a holistic academic challenge where the integration of complex systems, data-driven decision-making mechanisms, and project management disciplines unite.
              </p>
            </div>
            
            {/* SAĞ: GÖRSEL */}
            <div className="fs-info-img-box reveal reveal-delay-1">
              <img 
                src={`${import.meta.env.BASE_URL}images/formula_students.jpg`} 
                alt="Formula Student Team" 
                className="fs-info-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YARIŞMA ETAPLARI */}
      <section className="fs-stages-section">
        <div className="container">
          <p className="section-label reveal">// EVALUATION CRITERIA</p>
          <div className="red-line reveal" />
          <h2 className="mb-48 reveal">Competition <span className="text-red">Stages</span></h2>

          {/* STATİK ETAPLAR */}
          <div className="stage-category reveal">
            <h3 className="category-title">Static Stages <span className="text-secondary" style={{fontSize: '18px'}}>(~325 Pts)</span></h3>
            <div class="stages-grid mt-24">
              {staticStages.map((stage, i) => (
                <div key={i} className="stage-card card">
                  <div className="stage-score">{stage.score} <span>PT</span></div>
                  <h4>{stage.title}</h4>
                  <span className="stage-en">{stage.en}</span>
                  <p className="text-secondary mt-16">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DİNAMİK ETAPLAR */}
          <div className="stage-category mt-64 reveal">
            <h3 className="category-title">Dynamic Stages <span className="text-secondary" style={{fontSize: '18px'}}>(~675 Pts)</span></h3>
            <div class="stages-grid mt-24">
              {dynamicStages.map((stage, i) => (
                <div key={i} className="stage-card card">
                  <div className="stage-score">{stage.score} <span>PT</span></div>
                  <h4>{stage.title}</h4>
                  <span className="stage-en">{stage.en}</span>
                  <p className="text-secondary mt-16">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DİĞER DETAYLAR (REGÜLASYON & ÇIKTILAR) */}
      <section className="fs-details-section">
        <div className="container">
          <div className="details-grid">
            
            <div className="detail-card card reveal">
              <div className="detail-icon">📖</div>
              <h3>Technical Regulations and Scrutineering Process</h3>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.8' }}>
                All vehicles are subject to a comprehensive set of regulations (Rulebook) that determine engineering ethics and operational safety standards. The technical inspection (Scrutineering) process is a zero-margin control mechanism in critical areas such as chassis rigidity, battery management systems (BMS), braking capacity, and driver ergonomics. This process certifies the project's compliance with safety engineering standards.
              </p>
            </div>

            <div className="detail-card card reveal reveal-delay-1">
              <div className="detail-icon">🎓</div>
              <h3>Academic and Industrial Outcomes</h3>
              <p className="text-secondary mt-16" style={{ lineHeight: '1.8' }}>
                Formula Student offers its participants the opportunity to gain direct experience in future technologies such as advanced production technologies, high-voltage systems, and autonomous driving algorithms. This project is a master's degree equivalent that reinforces engineering candidates' problem-solving abilities, interdisciplinary teamwork skills, and compliance with Industry 4.0 standards.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
