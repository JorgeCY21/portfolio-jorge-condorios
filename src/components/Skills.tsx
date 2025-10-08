import React from 'react'
import type { SkillCategory } from '../types'

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "💻 Lenguajes de Programación",
      skills: [
        { name: "JavaScript / TypeScript", level: 0 },
        { name: "HTML / CSS", level: 0 },
        { name: "Java", level: 0 },
        { name: "Python", level: 0 },
        { name: "Kotlin", level: 0 }
      ]
    },
    {
      title: "⚛️ Frameworks & Librerías",
      skills: [
        { name: "React + Vite", level: 0 },
        { name: "Spring Boot", level: 0 },
        { name: "Tailwind CSS", level: 0 },
        { name: "OpenLayers", level: 0 },
        { name: "Framer Motion", level: 0 }
      ]
    },
    {
      title: "⚙️ Herramientas & Tecnologías",
      skills: [
        { name: "Node.js", level: 0 },
        { name: "Docker", level: 0 },
        { name: "Git / GitHub", level: 0 },
        { name: "APIs REST", level: 0 },
        { name: "Bases de Datos", level: 0 }
      ]
    }
  ]

  const proficiencyLevels = [
    { level: "Básico", color: "bg-gray-300" },
    { level: "Intermedio", color: "bg-blue-400" },
    { level: "Avanzado", color: "bg-green-500" },
    { level: "Experto", color: "bg-purple-600" }
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= (skillIndex % 4) + 1 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                              : 'bg-gray-300'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lenguajes Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">🌍 Idiomas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">Español</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Nativo</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">Inglés</span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">Intermedio</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div className="bg-blue-300 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 inline-block">
            <p className="text-yellow-800 font-semibold">
              🚀 "El aprendizaje nunca termina - Siempre explorando nuevas tecnologías y mejorando mis habilidades"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills