import React from 'react'
import type { Project } from '../types'

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
      title: 'CEPRUNSA — Sistema de Gestión de Horarios',
      description:
        'Sistema web para optimizar la gestión de horarios del centro pre-universitario más importante de Arequipa. Mejoré la accesibilidad para docentes y monitores, recibiendo una carta de recomendación por mi contribución como desarrollador frontend.',
      image: '/ceprunsa-project.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'Spring Boot'],
      demoLink: '#',
      codeLink: 'https://github.com/CeprHorario/cepre-frontend',
      featured: true
    },
    {
      id: 2,
      title: 'Pacha Wayra — Planificador de Viajes Turísticos',
      description:
        'Aplicación web desarrollada para NASA Space Apps Challenge para planificar viajes por Perú: información por región, top 10 lugares turísticos por ciudad, recomendaciones según clima y exportación de itinerarios en PDF.',
      image: '/pacha-wayra-project.jpg',
      technologies: ['React', 'JavaScript', 'CSS', 'Exportación PDF', 'NASA API'],
      demoLink: 'https://pacha-wayra-official.vercel.app/',
      codeLink: 'https://github.com/JorgeCY21/pacha-wayra',
      featured: true
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  featured: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured }) => {
  return (
    <div className={`card overflow-hidden flex flex-col ${featured ? 'border-indigo-200' : ''}`}>
      <div className="h-2 bg-indigo-600 w-full" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
            {initials(project.title)}
          </div>
          {featured && <span className="text-xs font-semibold text-indigo-600">Destacado</span>}
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
          >
            Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 text-center text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
