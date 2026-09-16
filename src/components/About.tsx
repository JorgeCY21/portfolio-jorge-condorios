import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">{about.eyebrow}</span>
        <h2 className="section-title">{about.title}</h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3 w-full">
            <div className="w-full aspect-square max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/oficial_photo.jpg" alt="Jorge Condorios" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 max-w-xs mx-auto lg:mx-0">
              <div className="stat-box border-t-2 border-t-indigo-500">
                <div className="font-display text-lg font-bold text-indigo-600">{about.statSemester}</div>
                <div className="text-xs text-slate-500">{about.statSemesterLabel}</div>
              </div>
              <div className="stat-box border-t-2 border-t-copper-500">
                <div className="font-display text-lg font-bold text-copper-600">{about.statRank}</div>
                <div className="text-xs text-slate-500">{about.statRankLabel}</div>
              </div>
              <div className="stat-box border-t-2 border-t-emerald-500">
                <div className="font-display text-lg font-bold text-emerald-600">{about.statYears}</div>
                <div className="text-xs text-slate-500">{about.statYearsLabel}</div>
              </div>
              <div className="stat-box border-t-2 border-t-violet-500">
                <div className="font-display text-lg font-bold text-violet-600">{about.statProjects}</div>
                <div className="text-xs text-slate-500">{about.statProjectsLabel}</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="card p-8">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-copper-500 p-4 bg-copper-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-copper-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">{about.highlights.recommendation.title}</p>
                  </div>
                  <p className="text-sm text-slate-500">{about.highlights.recommendation.description}</p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-indigo-500 p-4 bg-indigo-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">{about.highlights.researcher.title}</p>
                  </div>
                  <p className="text-sm text-slate-500">{about.highlights.researcher.description}</p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-emerald-500 p-4 bg-emerald-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9m9 9c0-4.97-4.03-9-9-9m9 9c0 4.97-4.03 9-9 9m0-18a9 9 0 000 18" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">{about.highlights.tical.title}</p>
                  </div>
                  <p className="text-sm text-slate-500">{about.highlights.tical.description}</p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-violet-500 p-4 bg-violet-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-violet-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9m9 9c0-4.97-4.03-9-9-9m9 9c0 4.97-4.03 9-9 9m0-18a9 9 0 000 18" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">{about.highlights.afide.title}</p>
                  </div>
                  <p className="text-sm text-slate-500">{about.highlights.afide.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
