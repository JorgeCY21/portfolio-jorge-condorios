import React from 'react'
import type { Experience as ExperienceType } from '../types'

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      role: 'Desarrollador Full Stack & QA',
      company: 'American Statistics',
      period: 'Enero 2026 – Agosto 2026',
      highlights: [
        'Desarrollo frontend con React, Next.js, Vite y TypeScript, cuidando usabilidad y rendimiento.',
        'Construcción de servicios backend con NestJS y TypeScript, implementando APIs REST y lógica de negocio.',
        'Diseño y gestión de bases de datos PostgreSQL mediante Prisma ORM; despliegue de soluciones en AWS.',
        'Ejecución de pruebas funcionales (QA), identificación de incidencias y verificación de correcciones.'
      ],
      current: true
    },
    {
      id: 2,
      role: 'Desarrollador Frontend',
      company: 'CEPRUNSA',
      period: 'Enero 2025 – Abril 2025',
      highlights: [
        'Desarrollo de interfaces web interactivas con React y TypeScript.',
        'Integración y consumo de APIs RESTful para la comunicación frontend-backend.',
        'Optimización de componentes orientados a experiencia de usuario y rendimiento.'
      ]
    },
    {
      id: 3,
      role: 'Monitor Supervisor',
      company: 'CEPRUNSA',
      period: 'Junio 2024 – Enero 2025',
      highlights: [
        'Supervisión y coordinación de monitores durante procesos de admisión virtual.',
        'Seguimiento del cumplimiento de procedimientos y atención de incidencias en evaluaciones.',
        'Apoyo en la resolución de incidencias y toma de decisiones operativas.'
      ]
    },
    {
      id: 4,
      role: 'Entrevistador y Evaluador',
      company: 'CEPRUNSA',
      period: 'Agosto 2024 – Setiembre 2024',
      highlights: [
        'Participación en la convocatoria y selección de personal docente y monitores.',
        'Evaluación de postulantes según criterios establecidos, con registro y asignación de puntajes.'
      ]
    },
    {
      id: 5,
      role: 'Monitor',
      company: 'CEPRUNSA',
      period: 'Junio 2023 – Febrero 2024',
      highlights: [
        'Apoyo a docentes para el correcto desarrollo de clases virtuales.',
        'Atención de consultas de postulantes y seguimiento de sesiones durante procesos de admisión.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Trayectoria</span>
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-intro">
          Más de dos años combinando desarrollo de software, aseguramiento de calidad y roles de coordinación
          en entornos con procesos y responsabilidades claras.
        </p>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.current ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300'
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {exp.role} <span className="text-slate-400 font-normal">— {exp.company}</span>
                  </h3>
                  <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-indigo-400 mt-1.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
