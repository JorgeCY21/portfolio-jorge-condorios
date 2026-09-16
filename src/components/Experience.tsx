import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const Experience: React.FC = () => {
  const { t } = useLanguage()
  const { experience } = t
  const experiences = experience.roles.map((r, i) => ({ ...r, id: i, current: i === 0 }))

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">{experience.eyebrow}</span>
        <h2 className="section-title">{experience.title}</h2>
        <p className="section-intro">{experience.intro}</p>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-copper-400 via-slate-200 to-slate-200" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10">
                <span
                  className={`absolute left-0 top-6 w-4 h-4 rounded-full border-2 ring-4 ${
                    exp.current
                      ? 'bg-copper-500 border-copper-500 ring-copper-100'
                      : 'bg-white border-slate-300 ring-white'
                  }`}
                />

                <div className={`rounded-xl border p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                  exp.current ? 'border-copper-200 bg-copper-50/30' : 'border-slate-200 bg-white'
                }`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                    <h3 className="text-lg font-semibold text-slate-900 font-display">
                      {exp.role} <span className="text-slate-400 font-normal font-sans">— {exp.company}</span>
                      {exp.current && (
                        <span className="ml-2 align-middle text-[10px] font-sans font-bold uppercase tracking-wide text-copper-700 bg-copper-100 px-2 py-0.5 rounded-full">
                          {experience.currentBadge}
                        </span>
                      )}
                    </h3>
                    <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                        <span className={exp.current ? 'text-copper-500 mt-1.5' : 'text-indigo-400 mt-1.5'}>•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
