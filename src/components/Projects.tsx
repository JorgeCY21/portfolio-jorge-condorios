import React from 'react'
import type { Project } from '../types'

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestión de Horarios - CEPRUNSA",
      description: "Sistema web desarrollado para optimizar el manejo y gestión de horarios en CEPRUNSA. Mejoré la accesibilidad para docentes y monitores, recibiendo una carta de recomendación por mi contribución como Desarrollador Frontend.",
      image: "/ceprunsa-project.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "APIs REST"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Portafolio Personal",
      description: "Portafolio web moderno y responsive desarrollado con React, TypeScript y Tailwind CSS. Implementa mejores prácticas de desarrollo y diseño UX/UI.",
      image: "/portfolio-project.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Sistema de Mapas Interactivos",
      description: "Aplicación web con mapas interactivos utilizando OpenLayers. Implementa visualización de datos geoespaciales y herramientas de análisis.",
      image: "/maps-project.jpg",
      technologies: ["OpenLayers", "JavaScript", "HTML/CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "API REST con Spring Boot",
      description: "Backend robusto desarrollado con Spring Boot para gestión de datos. Implementa autenticación JWT y operaciones CRUD completas.",
      image: "/spring-project.jpg",
      technologies: ["Spring Boot", "Java", "MySQL", "JWT"],
      demoLink: "#",
      codeLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mis Proyectos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-medium">{project.title}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="text-gray-600 hover:text-gray-800 font-medium flex items-center transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects