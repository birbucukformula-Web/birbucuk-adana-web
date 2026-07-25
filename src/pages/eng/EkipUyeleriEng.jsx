import { Link } from 'react-router-dom'
import '../EkipUyeleri.css'

const base = import.meta.env.BASE_URL


const departments = [
  {
    id: 'kaptanlar',
    label: '// TEAM CAPTAIN',
    isCaptains: true,
    members: [
      { name: 'Ahmet Göksel Durmaz', role: 'Team Captain', photo: 'ahmet_goksel_durmaz.jpg', linkedin: 'https://www.linkedin.com/in/ahmet-g%C3%B6ksel-durmaz-aa5a90231/' },
    ],
  },
  {
    id: 'mekanik',
    label: '// MECHANICS DEPARTMENT',
    captains: [
      { name: 'Mustafa Mert Abbak', role: 'Mechanics Captain', photo: 'mustafa_mert_abbak.jpg', linkedin: 'https://www.linkedin.com/in/mustafa-mert-abbak' },
    ],
    subUnits: [
      {
        label: 'Composite & Manufacturing Unit',
        members: [
          { name: 'Alp Kağan Manga', role: 'Composite & Manufacturing Unit Leader', photo: 'alp_kagan_manga.jpg', linkedin: 'https://www.linkedin.com/in/alp-ka%C4%9Fan-manga-aa3023335' },
          { name: 'Merve Aslan', role: 'Composite & Manufacturing Unit Member', photo: 'merve_aslan.jpg', linkedin: 'https://www.linkedin.com/in/merve-aslan-00a56632a' },
        ]
      },
      {
        label: 'Chassis Unit',
        members: [
          { name: 'Kerem Kanar', role: 'Chassis Unit Leader', photo: 'kerem_kanar.jpg', linkedin: 'https://www.linkedin.com/in/kerem-kanar-baa49733b' },
          { name: 'Busenur Can', role: 'Chassis Unit Member', photo: 'buse_nur_can.jpg', linkedin: 'https://www.linkedin.com/in/busenurcan' },
        ],
      },
      {
        label: 'Vehicle Dynamics Unit',
        members: [
          { name: 'Emir Mert Akar', role: 'Vehicle Dynamics Unit Leader', photo: 'emir_mert_akar.jpg', linkedin: 'https://www.linkedin.com/in/emir-mert-akar-a81450253' },
          { name: 'Ceren Sude Tatar', role: 'Vehicle Dynamics Unit Member', photo: 'ceren_sude_tatar.jpg', linkedin: 'https://www.linkedin.com/in/ceren-sude-tatar-9846173b5' },
        ]
      },
      {
        label: 'Aerodynamics Unit',
        members: [
          { name: 'Kayra Kurt', role: 'Aerodynamics Unit Leader', photo: 'kayra_kurt.jpg', linkedin: 'https://www.linkedin.com/in/kayra-kurt-9572a6268' },
        ]
      }
    ]
  },
  {
    id: 'elektrik',
    label: '// ELECTRONICS DEPARTMENT',
    members: [
      { name: 'Demir Tuna Torun', role: 'Electronics Captain', photo: 'demir_torun.jpg', linkedin: 'https://www.linkedin.com/in/demir-torun-45a80a278' },
      { name: 'Muhammed Furkan Kutlu', role: 'Electronics Unit Member', photo: 'muhammed_furkan_kutlu.jpg', linkedin: 'https://www.linkedin.com/in/muhammed-furkan-kutlu-894532344' },
    ],
  },
  {
    id: 'yazilim',
    label: '// SOFTWARE DEPARTMENT',
    captains: [
      { name: 'Necdet Özdemir', role: 'Software Captain', photo: 'necdet_ozdemir.jpg', linkedin: 'https://www.linkedin.com/in/necdetozdemir' },
    ],
    subUnits: [
      {
        label: 'Web Unit',
        members: [
          { name: 'Rumeysa Küçük', role: 'Web Unit Leader', photo: 'rumeysa_kucuk.jpg', linkedin: 'https://www.linkedin.com/in/kucukrumeysa/' },
        ]
      },
      {
        label: 'Game Unit',
        members: [
          { name: 'Mert Özkara', role: 'Game Unit Leader', photo: 'mert_ozkara.jpg', linkedin: 'https://www.linkedin.com/in/mert-ozkara-177991299' },
        ]
      },
      {
        label: 'Embedded Unit',
        members: [
          { name: 'Züleyha Nur Güneş', role: 'Embedded Unit Leader', photo: 'zuleyha_nur_gules.jpg', linkedin: 'https://www.linkedin.com/in/z%C3%BCleyha-nur-g%C3%BCne%C5%9F-340561342' },
        ]
      }
    ]
  },
  {
    id: 'sponsorluk',
    label: '// BUSINESS AND OPERATIONS DEPARTMENT',
    subUnits: [
      {
        label: 'Business and Operations Unit',
        members: [
          { name: 'Tuğçe Taş', role: 'Business and Operations Unit Member', photo: 'tugce_tas.jpg', linkedin: 'https://www.linkedin.com/in/tu%C4%9F%C3%A7e-ta%C5%9F-a05342389' },
          { name: 'Semine Karadağ', role: 'Business and Operations Unit Member', photo: 'semine_karadag.jpg', linkedin: 'https://www.linkedin.com/in/semine-karada%C4%9F-83a59b3b3' },
          { name: 'Emine Aden Taşkın', role: 'Business and Operations Unit Member', photo: 'aden_taskin.jpg', linkedin: 'https://www.linkedin.com/in/aden-ta%C5%9Fk%C4%B1n-542158408' },
          { name: 'Zeynep Derya Tekeci', role: 'Business and Operations Unit Member', photo: 'zeynep_derya_tekeci.jpg', linkedin: 'https://www.linkedin.com/in/zeynep-derya-tekeci-906390258' },
          { name: 'Aysel Yılmaz', role: 'Business and Operations Unit Member', photo: 'aysel_yilmaz.jpg', linkedin: 'https://www.linkedin.com/in/aysel-yilmaz-ie' },
          { name: 'Naz Yaman', role: 'Business and Operations Unit Member', photo: 'naz_yaman.jpg', linkedin: 'https://www.linkedin.com/in/naz-yaman' },
          { name: 'Zeynep Vahid', role: 'Business and Operations Unit Member', photo: 'zeynep_vahid.jpg', linkedin: 'https://www.linkedin.com/in/zeynep-vahid-0951b83b1' },
        ]
      },
      {
        label: 'Statics Unit',
        members: [
          { name: 'Nurhayat Işık', role: 'Statics Unit Leader', photo: 'nurhayat_isik.jpg', linkedin: 'https://www.linkedin.com/in/nur-hayat-i%C5%9Fik-4819543a7' },
        ]
      },
      {
        label: 'Media & Design Unit',
        members: [
          { name: 'Emine Aden Taşkın', role: 'Media Unit Member', photo: 'aden_taskin.jpg', linkedin: 'https://www.linkedin.com/in/aden-ta%C5%9Fk%C4%B1n-542158408' },
        ]
      }
    ]
  },
  {
    id: 'guvenlik',
    label: '// 1.5 ADANA FORMULA CAT DEPARTMENT',
    captains: [
      { name: 'Anı', role: '1.5 Adana Formula Cat Captain (Mother of Cats)', photo: 'ani.jpeg', linkedin: '#', description: 'The most senior and patient of the department. No meeting is considered official without her.', shortDesc: '👑 Team Leader' },
    ],
    members: [
      { name: 'Mechanics', role: 'Mechanics Unit Member', photo: 'mekanik.jpeg', linkedin: '#', description: 'Wherever it touches, something falls over or gets lost, but no one can get mad because it looks so happy playing.', shortDesc: '🔧 Chaos Master' },
      { name: 'Electronics', role: 'Electronics Unit Member', photo: 'elektrik.jpeg', linkedin: '#', description: 'Loses its mind when it sees a cable, doesn\'t let go until the job is done.', shortDesc: '⚡ Cable Hunter' },
      { name: 'Software', role: 'Software Unit Member', photo: 'yazilim.jpeg', linkedin: '#', description: 'Thinks sleeping on the keyboard is a job, better at finding bugs than the team.', shortDesc: '💻 Keyboard Guardian' },
      { name: 'B&O', role: 'Business & Operations Unit Member', photo: 'bando.jpeg', linkedin: '#', description: 'Finds whoever is sad in the office. Therapy is free, the only condition is some treats. (Its name is B&O but it has nothing to do with a band, its only job is to get petted)', shortDesc: '💖 Therapy Expert' },
    ],
  },
]

function MemberCard({ name, role, photo, linkedin, isCaptain, description, shortDesc }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const content = (
    <>
      <div className={`eu-photo-wrap${isCaptain ? ' eu-photo-wrap--captain' : ''}`}>
        {photo
          ? <img src={`${base}images/uyeler/${photo}`} alt={name} />
          : <div className="eu-initials">{initials}</div>
        }
        {description && (
          <div className="eu-photo-overlay">
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className="eu-info">
        <h4>{name}</h4>
        <span>{role}</span>
        {shortDesc && <div className="eu-short-desc">{shortDesc}</div>}
      </div>
      {linkedin && linkedin !== '#' && <div className="eu-linkedin-badge">in</div>}
    </>
  )

  if (!linkedin || linkedin === '#') {
    return (
      <div className={`eu-member-card${isCaptain ? ' eu-member-card--captain' : ''}`}>
        {content}
      </div>
    )
  }

  return (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`eu-member-card${isCaptain ? ' eu-member-card--captain' : ''}`}
      title={`${name} — LinkedIn`}
    >
      {content}
    </a>
  )
}

export default function EkipUyeleriEng() {
  return (
    <div className="eu-page">
      {/* HERO */}
      <section className="eu-hero">
        <div className="container">
          <div className="reveal">
            <h1>TEAM <span className="text-red">MEMBERS</span></h1>
            <p className="eu-hero-sub">The real power behind the project.</p>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="eu-content container">
        <div className="eu-departments-list">
          {departments.map((dept) => (
            <div key={dept.id} className="eu-dept-block">
              <div className="eu-dept-header">
                <span>{dept.label}</span>
              </div>
              
              {dept.captains && (
                <div className="eu-members-grid" style={{ marginBottom: '32px' }}>
                  {dept.captains.map(member => (
                    <MemberCard key={member.name} {...member} isCaptain={false} />
                  ))}
                </div>
              )}

              {dept.members && (
                <div className="eu-members-grid">
                  {dept.members.map(member => (
                    <MemberCard key={member.name} {...member} isCaptain={dept.isCaptains} />
                  ))}
                </div>
              )}

              {dept.subUnits && (
                <div className="eu-subunits-container">
                  {dept.subUnits.map(subUnit => (
                    <div key={subUnit.label} className="eu-subunit-block">
                      <h4 className="eu-subunit-title">{subUnit.label}</h4>
                      <div className="eu-members-grid">
                        {subUnit.members.map(member => (
                          <MemberCard key={member.name + member.role} {...member} isCaptain={false} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
