import React from 'react'

interface Certification {
  id: number
  institution: string
  course: string
  detail?: string
  year: string
  featured?: boolean
}

interface CongressItem {
  id: number
  title: string
  organizer: string
  year: string
}

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => {
  return (
    <div className={`card p-5 ${cert.featured ? 'border-t-2 border-t-copper-500' : 'border-t-2 border-t-slate-200'}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="chip">{cert.year}</span>
        {cert.featured && (
          <span className="flex items-center gap-1 text-xs font-semibold text-copper-600">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
            Destacado
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 mb-1 leading-snug">{cert.course}</h3>
      <p className="text-sm text-slate-500">{cert.institution}</p>
      {cert.detail && <p className="text-xs text-slate-400 mt-2">{cert.detail}</p>}
    </div>
  )
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      institution: 'NASA International Space Apps Challenge',
      course: 'Galactic Problem Solver — Outstanding Participation',
      detail: '4–5 de octubre de 2025',
      year: '2025',
      featured: true
    },
    {
      id: 2,
      institution: 'Cisco Networking Academy',
      course: 'Ciberseguridad y Redes',
      detail: 'Ruta de 7 módulos: introducción a ciberseguridad, redes, dispositivos, terminales, gestión de amenazas, defensa de redes y hacking ético',
      year: '2026',
      featured: true
    },
    {
      id: 3,
      institution: 'Código Facilito',
      course: 'Ruta de LLMs e Inteligencia Artificial a Profundidad',
      detail: 'Formación de 9 semanas',
      year: '2025',
      featured: true
    },
    {
      id: 13,
      institution: 'Centro Cultural Peruano Norteamericano',
      course: 'Advanced English Program (CEFR B2) — Con Honores',
      detail: '240 horas',
      year: '2021',
      featured: true
    },
    {
      id: 4,
      institution: 'Código Facilito',
      course: 'Introducción a Machine Learning',
      year: '2025'
    },
    {
      id: 5,
      institution: 'Código Facilito',
      course: 'MLOps: Machine Learning Operations',
      year: '2025'
    },
    {
      id: 6,
      institution: 'Código Facilito',
      course: 'Introducción a DevOps: Bases y Conceptos',
      year: '2025'
    },
    {
      id: 7,
      institution: 'Código Facilito',
      course: 'Fundamentos de SQL',
      year: '2025'
    },
    {
      id: 8,
      institution: 'Platzi',
      course: 'Fundamentos de Ingeniería de Software',
      year: '2026'
    },
    {
      id: 9,
      institution: 'Platzi',
      course: 'Git y GitHub',
      year: '2026'
    },
    {
      id: 10,
      institution: 'Platzi',
      course: 'Introducción a Ciberseguridad: Prevención de Ataques Informáticos',
      year: '2026'
    },
    {
      id: 11,
      institution: 'Platzi',
      course: 'Redes Informáticas de Internet',
      year: '2026'
    },
    {
      id: 12,
      institution: 'INFOUNSA',
      course: 'Microsoft Excel Avanzado',
      year: '2023'
    },
    {
      id: 14,
      institution: 'INFOUNSA',
      course: 'Ensamblaje y Mantenimiento de Computadoras',
      year: '2023'
    },
    {
      id: 15,
      institution: 'Código Facilito',
      course: 'Curso de Kotlin',
      year: '2025'
    },
    {
      id: 16,
      institution: 'Código Facilito',
      course: 'Curso de GitHub Copilot',
      year: '2025'
    },
    {
      id: 17,
      institution: 'Código Facilito',
      course: 'Curso de Metodologías para Solución de Problemas',
      year: '2025'
    },
    {
      id: 18,
      institution: 'Platzi',
      course: 'Curso Práctico de Frontend Developer',
      year: '2022'
    },
    {
      id: 19,
      institution: 'Platzi',
      course: 'Curso de Frontend Developer',
      year: '2022'
    }
  ]

  const congresses: CongressItem[] = [
    { id: 1, title: 'Convención Peruana de Ingeniería — PERUMEC 2026', organizer: 'ASME Perú Section / ENGIETEK · Cusco', year: '2026' },
    { id: 9, title: 'Talent & Skills Volunteer Week', organizer: 'Charlas de ciberseguridad, productividad y marca personal', year: '2025' },
    { id: 10, title: 'CI-EXPLORA II Edición — Proyectos y Transformación Digital para la Ingeniería Inteligente', organizer: 'UNSA', year: '2025' },
    { id: 5, title: 'CI-EXPLORA II Edición — Liderazgo Humano y Competencias para la Ingeniería 5.0', organizer: 'UNSA', year: '2025' },
    { id: 11, title: 'Perú Hub Digital Universitario: Lidera el Cambio', organizer: '18 horas académicas', year: '2025' },
    { id: 3, title: 'VI Edición Hack4Edu — Hackatón Internacional', organizer: 'Fundación ProFuturo / Universidad Pontificia de Salamanca', year: '2025' },
    { id: 4, title: 'Hack4Edu UNSA 2025', organizer: 'Soluciones tecnológicas para procesos educativos', year: '2025' },
    { id: 2, title: 'V Congreso Internacional de Ingeniería de Sistemas — CIIS 2025', organizer: '30 horas académicas', year: '2025' },
    { id: 12, title: 'TICAL 2025', organizer: 'RedCLARA · Costa Rica · Beca UNSA', year: '2025' },
    { id: 7, title: 'IV Congreso Internacional de Ingeniería de Sistemas — CIIS 2024', organizer: '40 horas académicas', year: '2024' },
    { id: 8, title: 'Primer Congreso Nacional de Semilleros de Investigación — CONASEIN', organizer: 'CONCYTEC', year: '2023' },
    { id: 13, title: 'Semana Capitular de Ingeniería de Sistemas e Informática', organizer: 'Colegio de Ingenieros del Perú', year: '2022' }
  ]

  const featured = certifications.filter((c) => c.featured)
  const other = certifications.filter((c) => !c.featured)

  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Formación complementaria</span>
        <h2 className="section-title">Certificaciones &amp; Logros</h2>
        <p className="section-intro">
          Reconocimientos y formación continua en ingeniería de software, ciberseguridad e inteligencia artificial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featured.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {other.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Congresos y eventos */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-700">
            Congresos y eventos académicos
          </h3>
        </div>
        <div className="card divide-y divide-slate-100">
          {congresses.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 hover:bg-slate-50/60 transition-colors duration-200">
              <div>
                <p className="font-medium text-slate-800 text-sm">{c.title}</p>
                <p className="text-xs text-slate-500">{c.organizer}</p>
              </div>
              <span className="chip">{c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
