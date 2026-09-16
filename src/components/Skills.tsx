import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const categoryStyles = [
  { border: 'border-t-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50', chip: 'hover:border-indigo-300 hover:text-indigo-700' },
  { border: 'border-t-copper-500', text: 'text-copper-600', bg: 'bg-copper-50', chip: 'hover:border-copper-300 hover:text-copper-700' },
  { border: 'border-t-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', chip: 'hover:border-emerald-300 hover:text-emerald-700' }
]

const icons = [
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L15 21.75M15 21.75l5.25-4.75M15 21.75V9.75M2.25 12l3-3m0 0l3 3m-3-3v10.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L15 9M15 9l-2.25-2.25M15 9V2.25" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
]

const Skills: React.FC = () => {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">{skills.eyebrow}</span>
        <h2 className="section-title">{skills.title}</h2>
        <p className="section-intro">{skills.intro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {skills.categories.map((category, index) => {
            const style = categoryStyles[index % categoryStyles.length]
            return (
              <div key={index} className={`card border-t-2 ${style.border} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${style.bg} ${style.text} flex items-center justify-center`}>
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-700">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`chip transition-colors duration-200 ${style.chip}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Idiomas / Languages */}
        <div className="card border-t-2 border-t-copper-500 p-8 max-w-2xl">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-700 mb-6">{skills.languagesTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-800">{skills.spanish}</span>
                <span className="text-xs font-semibold text-slate-500">{skills.spanishLevel}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-copper-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-800">{skills.english}</span>
                <span className="text-xs font-semibold text-slate-500">{skills.englishLevel}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
