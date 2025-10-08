import React from 'react'

interface Certification {
  id: number;
  year: string;
  institution: string;
  course: string;
  duration: string;
  date: string;
  type: 'certification' | 'achievement' | 'participation' | 'workshop';
  featured?: boolean;
  credential?: string;
}

// Funciones auxiliares - DEFINIR ANTES de usarlas
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'certification':
      return '📜';
    case 'achievement':
      return '🏆';
    case 'participation':
      return '👥';
    case 'workshop':
      return '🔧';
    default:
      return '📄';
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'certification':
      return 'from-blue-500 to-cyan-500';
    case 'achievement':
      return 'from-yellow-500 to-orange-500';
    case 'participation':
      return 'from-green-500 to-emerald-500';
    case 'workshop':
      return 'from-purple-500 to-pink-500';
    default:
      return 'from-gray-500 to-gray-700';
  }
}

const getTypeBadge = (type: string) => {
  switch (type) {
    case 'certification':
      return 'Certificación';
    case 'achievement':
      return 'Logro';
    case 'participation':
      return 'Participación';
    case 'workshop':
      return 'Taller';
    default:
      return 'Certificado';
  }
}

// Componente de Tarjeta de Certificación
interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 overflow-hidden">
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-r ${getTypeColor(certification.type)} p-4 text-white relative overflow-hidden`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getTypeIcon(certification.type)}</span>
            <span className="font-semibold text-sm bg-white/20 px-2 py-1 rounded-full">
              {getTypeBadge(certification.type)}
            </span>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
            {certification.year}
          </span>
        </div>
        
        {/* Featured Star */}
        {certification.featured && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black text-lg">⭐</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Institution */}
        <h3 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {certification.institution}
        </h3>
        
        {/* Course */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {certification.course}
        </p>
        
        {/* Details */}
        <div className="space-y-2 text-sm text-gray-500">
          {certification.duration !== "—" && (
            <div className="flex justify-between">
              <span>Duración:</span>
              <span className="font-medium text-gray-700">{certification.duration}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Fecha:</span>
            <span className="font-medium text-gray-700">{certification.date}</span>
          </div>
        </div>
        
        {/* Special Badges */}
        {certification.credential === "NASA Space Apps" && (
          <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-purple-800 text-sm font-medium text-center">
              🛰️ NASA International Space Apps
            </p>
          </div>
        )}
        
        {certification.course.includes("Con Honores") && (
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-yellow-800 text-sm font-medium text-center">
              🎖️ Con Honores
            </p>
          </div>
        )}
      </div>
      
      {/* Gradient Border Bottom */}
      <div className={`h-1 bg-gradient-to-r ${getTypeColor(certification.type)} w-0 group-hover:w-full transition-all duration-500`}></div>
    </div>
  )
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      year: "2025",
      institution: "NASA International Space Apps Challenge",
      course: "Galactic Problem Solver – Outstanding Participation",
      duration: "—",
      date: "4 – 5 de octubre de 2025",
      type: "achievement",
      featured: true,
      credential: "NASA Space Apps"
    },
    {
      id: 2,
      year: "2025",
      institution: "CódigoFacilito",
      course: "Ruta de LLMs e Inteligencia Artificial a Profundidad",
      duration: "9 semanas",
      date: "7 de septiembre de 2025",
      type: "certification",
      featured: true
    },
    {
      id: 3,
      year: "2024",
      institution: "IV Congreso Internacional de Ingeniería de Sistemas – CIIS 2024",
      course: "Desarrollo de Aplicaciones Móvil + IoT (Participante)",
      duration: "—",
      date: "6 – 8 de noviembre de 2024",
      type: "participation"
    },
    {
      id: 4,
      year: "2024",
      institution: "IV Congreso Internacional de Ingeniería de Sistemas – CIIS 2024",
      course: "Participante general del evento académico",
      duration: "40 horas académicas",
      date: "6 – 8 de noviembre de 2024",
      type: "participation"
    },
    {
      id: 5,
      year: "2024",
      institution: "CEPRUNSA",
      course: "Entrevistador en el proceso de convocatoria y selección de personal docente y monitor",
      duration: "20 h (aprox.)",
      date: "20 de agosto – 8 de septiembre de 2024",
      type: "achievement"
    },
    {
      id: 6,
      year: "2024",
      institution: "CEPRUNSA",
      course: "Asignación y gestión de puntajes en proceso de selección de personal",
      duration: "20 h (aprox.)",
      date: "20 de agosto – 8 de septiembre de 2024",
      type: "achievement"
    },
    {
      id: 7,
      year: "2023",
      institution: "CONCYTEC",
      course: "Organizador del Primer Congreso Nacional de Semilleros de Investigación (CONASEIN)",
      duration: "—",
      date: "30 de noviembre – 1 de diciembre de 2023",
      type: "achievement"
    },
    {
      id: 8,
      year: "2023",
      institution: "INFO UNSA",
      course: "Microsoft Excel Avanzado",
      duration: "40 horas",
      date: "10 – 26 de marzo de 2023",
      type: "certification"
    },
    {
      id: 9,
      year: "2023",
      institution: "INFO UNSA",
      course: "Ensamblaje y Mantenimiento de Computadoras",
      duration: "40 horas",
      date: "6 – 31 de marzo de 2023",
      type: "workshop"
    },
    {
      id: 10,
      year: "2022",
      institution: "Colegio de Ingenieros del Perú",
      course: "Semana Capitular de Ingeniería de Sistemas e Informática",
      duration: "10 horas",
      date: "5 – 7 de diciembre de 2022",
      type: "participation"
    },
    {
      id: 11,
      year: "2022",
      institution: "Platzi",
      course: "Frontend Developer",
      duration: "15 horas",
      date: "28 de abril de 2022",
      type: "certification"
    },
    {
      id: 12,
      year: "2021",
      institution: "Centro Cultural Peruano Norteamericano",
      course: "Advanced English Program (CEFR B2) – Con Honores",
      duration: "240 horas",
      date: "12 de julio de 2021",
      type: "certification",
      featured: true
    }
  ]

  const featuredCertifications = certifications.filter(cert => cert.featured)
  const otherCertifications = certifications.filter(cert => !cert.featured)

  return (
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full translate-x-40 translate-y-40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Certificaciones & Logros</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Reconocimientos, certificaciones y participaciones que respaldan mi crecimiento profesional
        </p>

        {/* Featured Certifications */}
        {featuredCertifications.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              🏆 Logros Destacados
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredCertifications.map((cert) => (
                <CertificationCard key={cert.id} certification={cert} />
              ))}
            </div>
          </div>
        )}

        {/* All Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{certifications.length}</div>
              <div className="text-blue-100">Total Certificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{certifications.filter(c => c.type === 'certification').length}</div>
              <div className="text-blue-100">Certificaciones</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{certifications.filter(c => c.type === 'achievement').length}</div>
              <div className="text-blue-100">Logros</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{certifications.filter(c => c.type === 'participation').length}</div>
              <div className="text-blue-100">Participaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications