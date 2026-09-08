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
    <div className={`card p-5 ${cert.featured ? 'border-indigo-200' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="chip">{cert.year}</span>
        {cert.featured && (
          <span className="text-xs font-semibold text-indigo-600">Destacado</span>
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
      detail: 'Introducción a ciberseguridad, redes, defensa de redes y hacking ético',
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
    }
  ]

  const congresses: CongressItem[] = [
    { id: 1, title: 'Convención Peruana de Ingeniería — PERUMEC 2026', organizer: 'ASME Perú Section / ENGIETEK · Cusco', year: '2026' },
    { id: 2, title: 'V Congreso Internacional de Ingeniería de Sistemas — CIIS 2025', organizer: '30 horas académicas', year: '2025' },
    { id: 3, title: 'VI Edición Hack4Edu — Hackatón Internacional', organizer: 'Fundación ProFuturo / Universidad Pontificia de Salamanca', year: '2025' },
    { id: 4, title: 'Hack4Edu UNSA 2025', organizer: 'Soluciones tecnológicas para procesos educativos', year: '2025' },
    { id: 5, title: 'CI-EXPLORA II Edición — Liderazgo Humano y Competencias para la Ingeniería 5.0', organizer: 'UNSA', year: '2025' },
    { id: 6, title: 'CI-EXPLORA II Edición — Proyectos y Transformación Digital para la Ingeniería Inteligente', organizer: 'UNSA', year: '2025' },
    { id: 7, title: 'IV Congreso Internacional de Ingeniería de Sistemas — CIIS 2024', organizer: '40 horas académicas', year: '2024' },
    { id: 8, title: 'Primer Congreso Nacional de Semilleros de Investigación — CONASEIN', organizer: 'CONCYTEC', year: '2023' }
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
        <h3 className="text-sm font-semibold tracking-wide uppercase text-indigo-600 mb-5">
          Congresos y eventos académicos
        </h3>
        <div className="card divide-y divide-slate-100">
          {congresses.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
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
