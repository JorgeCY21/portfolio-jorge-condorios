import React from 'react'
import type { Project } from '../types'

const palette = [
  { bar: 'bg-indigo-600', badge: 'bg-indigo-50 text-indigo-600', label: 'text-indigo-600' },
  { bar: 'bg-copper-500', badge: 'bg-copper-50 text-copper-600', label: 'text-copper-600' },
  { bar: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-600', label: 'text-emerald-600' },
  { bar: 'bg-violet-500', badge: 'bg-violet-50 text-violet-600', label: 'text-violet-600' }
]

const initials = (title: string) =>
  title
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SmartMine AI — Simulación y Optimización de Flotas Mineras con IA',
      description:
        'Plataforma colaborativa para simular y optimizar operaciones de flotas de camiones en minería a tajo abierto. El backend integra un modelo de Machine Learning que predice el tiempo de ciclo camión-pala; desarrollé la lógica de asignación y gestión de camiones y palas, WebSockets en tiempo real, y el canvas de simulación y módulo constructor en el frontend.',
      image: '/smartmine-project.jpg',
      technologies: ['React', 'Vite', 'Python', 'FastAPI', 'Machine Learning', 'WebSockets'],
      demoLink: 'https://smartmine-frontend.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/smartmine-frontend',
      backendLink: 'https://github.com/JorgeCY21/smartmine-backend',
      featured: true
    },
    {
      id: 2,
      title: 'Apruebo PE — Plataforma de Gestión Académica Universitaria',
      description:
        'Aplicación web para el seguimiento académico de estudiantes de la UNSA, con usuarios reales activos. Carga automáticamente la malla curricular al seleccionar carrera y año de ingreso: dashboard, notas por curso, apuntes, gráficos de rendimiento, simulador de notas, referidos, reportes e importación de libreta.',
      image: '/apruebo-pe-project.jpg',
      technologies: ['React', 'TypeScript'],
      demoLink: 'https://apruebo-pe.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/AprueboPe',
      note: 'Repositorio privado — disponible bajo solicitud',
      featured: true
    },
    {
      id: 3,
      title: 'CEPRUNSA — Sistema de Gestión de Horarios',
      description:
        'Sistema web para optimizar la gestión de horarios del centro pre-universitario más importante de Arequipa. Mejoré la accesibilidad para docentes y monitores, recibiendo una carta de recomendación por mi contribución como desarrollador frontend.',
      image: '/ceprunsa-project.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'Spring Boot'],
      demoLink: 'https://cepre-frontend.vercel.app/',
      codeLink: 'https://github.com/CeprHorario/cepre-frontend',
      featured: false
    },
    {
      id: 4,
      title: 'Pacha Wayra — Planificador de Viajes Turísticos',
      description:
        'Aplicación web desarrollada para NASA Space Apps Challenge para planificar viajes por Perú: información por región, top 10 lugares turísticos por ciudad, recomendaciones según clima y exportación de itinerarios en PDF.',
      image: '/pacha-wayra-project.jpg',
      technologies: ['React', 'JavaScript', 'CSS', 'Exportación PDF', 'NASA API'],
      demoLink: 'https://pacha-wayra-official.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/pacha-wayra',
      featured: false
    },
    {
      id: 5,
      title: 'Rehabi — Rehabilitación con Kinect v2 y Avatares Generados con IA',
      description:
        'Videojuego de rehabilitación física (equilibrio monopodal) en Unity, con seguimiento de movimiento en tiempo real vía Kinect v2 y avatares personalizados generados con IA a partir de una foto del paciente. Diseñé el pipeline completo: app web de generación 3D (Meshy AI), importación automática a Unity vía Editor scripting en C#, y detección de postura desde los joints del Kinect.',
      image: '/rehabi-project.jpg',
      technologies: ['Unity', 'C#', 'Kinect v2', 'React', 'Vite', 'Meshy AI'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Sistema de Gestión Académica de Maestrías — Centro de Postgrado UNSA',
      description:
        'Sistema de gestión académica para el Centro de Postgrado de la UNSA (Maestría en Informática): docentes, estudiantes, cursos, matrículas, notas, pensiones, pagos y vouchers. Me encargué de metodologías ágiles, pruebas automatizadas e integración continua y despliegue (CI/CD), incluyendo workflows de mirror a GitLab y control de flujo de ramas.',
      image: '/gestion-maestrias-project.jpg',
      technologies: ['React', 'Java 25', 'Spring Boot', 'PostgreSQL', 'CI/CD'],
      demoLink: 'https://gestion-maestrias-front.vercel.app/login',
      codeLink: 'https://github.com/YeyderJHJL/gestion-maestrias-front',
      featured: false
    },
    {
      id: 7,
      title: 'Sistema de Votación Distribuida',
      description:
        'Plataforma web para votaciones electrónicas con arquitectura de sistemas distribuidos, orientada a garantizar seguridad, transparencia y escalabilidad en procesos electorales.',
      image: '/votacion-project.jpg',
      technologies: ['React', 'Sistemas Distribuidos', 'Tailwind CSS', 'Seguridad'],
      demoLink: 'https://front-sistema-votacion-xan1.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/front-sistema-votacion',
      featured: false
    },
    {
      id: 8,
      title: 'Sistema de Compra de Entradas de Cine',
      description:
        'Simulación de compra de entradas de cine con backend que implementa transacciones con rollback, generación de tickets en PDF y manejo seguro de transacciones.',
      image: '/cine-project.jpg',
      technologies: ['React', 'Backend', 'Generación de PDF', 'Transacciones'],
      demoLink: 'https://front-cine-gilt.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/front-cine',
      featured: false
    },
    {
      id: 9,
      title: 'Sistema de Gestión Energética',
      description:
        'Aplicación web para simulación y optimización de consumo energético: dashboard de consumo, guías de ahorro, registro diario y análisis del gasto energético del usuario.',
      image: '/energia-project.jpg',
      technologies: ['React', 'Dashboard', 'Análisis de Datos'],
      demoLink: '#',
      codeLink: 'https://github.com/JorgeCY21/front-ti',
      featured: false
    }
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Portafolio</span>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-intro">
          Desarrollos que combinan buenas prácticas de ingeniería con problemas reales.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured colors={palette[i % palette.length]} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={false}
              colors={palette[(i + featuredProjects.length) % palette.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  featured: boolean
  colors: { bar: string; badge: string; label: string }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured, colors }) => {
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className={`h-1.5 ${colors.bar} w-full`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-lg ${colors.badge} flex items-center justify-center font-bold text-sm font-display`}>
            {initials(project.title)}
          </div>
          {featured && <span className={`text-xs font-semibold ${colors.label}`}>Destacado</span>}
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {project.note && (
          <p className="text-xs text-slate-400 italic mb-4">{project.note}</p>
        )}

        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 min-w-[100px] ${colors.bar} hover:opacity-90 text-white text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-opacity duration-200 inline-flex items-center justify-center gap-1.5`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[100px] border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            {project.backendLink ? 'Frontend' : 'Código'}
          </a>
          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
