import React from 'react'
import type { SkillCategory } from '../types'

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 0 },
        { name: 'Next.js', level: 0 },
        { name: 'Vite', level: 0 },
        { name: 'TypeScript / JavaScript', level: 0 },
        { name: 'Tailwind CSS', level: 0 },
        { name: 'HTML / CSS', level: 0 }
      ]
    },
    {
      title: 'Backend & Datos',
      skills: [
        { name: 'NestJS', level: 0 },
        { name: 'Node.js', level: 0 },
        { name: 'PostgreSQL', level: 0 },
        { name: 'Prisma ORM', level: 0 },
        { name: 'APIs REST', level: 0 },
        { name: 'Java · Python · Kotlin', level: 0 }
      ]
    },
    {
      title: 'Cloud, QA & Herramientas',
      skills: [
        { name: 'AWS', level: 0 },
        { name: 'Docker', level: 0 },
        { name: 'Git / GitHub', level: 0 },
        { name: 'Quality Assurance (QA)', level: 0 },
        { name: 'Ciberseguridad y Redes', level: 0 },
        { name: 'Spring Boot', level: 0 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Stack técnico</span>
        <h2 className="section-title">Habilidades</h2>
        <p className="section-intro">
          Tecnologías con las que he construido soluciones en producción, desde el frontend hasta el despliegue en la nube.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-indigo-600 mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className="card p-8 max-w-2xl">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-indigo-600 mb-6">Idiomas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-800">Español</span>
                <span className="text-xs font-semibold text-slate-500">Nativo</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-800">Inglés</span>
                <span className="text-xs font-semibold text-slate-500">Intermedio (B2)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-indigo-400 h-1.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
