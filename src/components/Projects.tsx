import React from 'react'
import type { Project } from '../types'

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CEPRUNSA - Sistema de Gestión de Horarios",
      description: "Sistema web desarrollado para optimizar el manejo y gestión de horarios en el Centro Pre Universitario más importante de Arequipa. Mejoré la accesibilidad para docentes y monitores, recibiendo una carta de recomendación por mi contribución como Desarrollador Frontend.",
      image: "/ceprunsa-project.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "APIs REST", "Spring Boot"],
      demoLink: "#",
      codeLink: "https://github.com/CeprHorario/cepre-frontend",
      featured: true
    },
    {
      id: 2,
      title: "Pacha Wayra - Planificador de Viajes Turísticos",
      description: "Aplicación web desarrollada para NASA Space Apps que permite planificar viajes turísticos por Perú. Incluye información de todas las regiones, top 10 lugares turísticos por ciudad, recomendaciones según clima y exportación de PDFs para cada destino.",
      image: "/pacha-wayra-project.jpg",
      technologies: ["React", "JavaScript", "CSS", "PDF Export", "NASA API"],
      demoLink: "https://pacha-wayra-official.vercel.app/",
      codeLink: "https://github.com/JorgeCY21/pacha-wayra",
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Votación Distribuida",
      description: "Plataforma web para votaciones electrónicas implementando sistemas distribuidos. Garantiza seguridad, transparencia y escalabilidad en procesos electorales mediante arquitectura descentralizada.",
      image: "/votacion-project.jpg",
      technologies: ["React", "Sistemas Distribuidos", "Tailwind", "Seguridad"],
      demoLink: "https://front-sistema-votacion-xan1.vercel.app/",
      codeLink: "https://github.com/JorgeCY21/front-sistema-votacion",
      featured: false
    },
    {
      id: 4,
      title: "Sistema de Compra de Entradas de Cine",
      description: "Sistema de simulación para compra de entradas de cine con backend robusto que implementa rollback transactions. Genera tickets en PDF y maneja transacciones seguras.",
      image: "/cine-project.jpg",
      technologies: ["React", "Backend", "PDF Generation", "Transactions"],
      demoLink: "https://front-cine-gilt.vercel.app/",
      codeLink: "https://github.com/JorgeCY21/front-cine",
      featured: false
    },
    {
      id: 5,
      title: "Sistema de Gestión Energética",
      description: "Aplicación web para simulación y optimización de consumo energético. Incluye dashboard de consumo, guías de ahorro, registro diario y análisis detallado del gasto energético del usuario.",
      image: "/energia-project.jpg",
      technologies: ["React", "Dashboard", "Data Analysis", "Energy Management"],
      demoLink: "#",
      codeLink: "https://github.com/JorgeCY21/front-ti",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-36 -translate-y-36 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full translate-x-48 translate-y-48 opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Desarrollos que combinan innovación, tecnología y impacto real
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ⭐ Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚀 Más Proyectos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de Tarjeta de Proyecto
interface ProjectCardProps {
  project: Project;
  featured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured }) => {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
      featured ? 'border-2 border-yellow-400' : 'border border-gray-100'
    }`}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
        <div className="text-white text-center p-4">
          <div className="text-4xl mb-2">🚀</div>
          <p className="font-semibold">{project.title}</p>
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ⭐ Destacado
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex space-x-4 pt-4 border-t border-gray-100">
          <a 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>🌐</span>
            <span>Demo</span>
          </a>
          <a 
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2 border border-gray-200"
          >
            <span>💻</span>
            <span>Código</span>
          </a>
        </div>

        {/* Special Badges */}
        {project.id === 1 && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm font-medium text-center">
              🏆 Proyecto con carta de recomendación
            </p>
          </div>
        )}
        
        {project.id === 2 && (
          <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-purple-800 text-sm font-medium text-center">
              🛰️ Desarrollado para NASA Space Apps
            </p>
          </div>
        )}
      </div>
      
      {/* Gradient Border Bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  )
}

export default Projects