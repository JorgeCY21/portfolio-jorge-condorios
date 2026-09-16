import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { CertificationT } from '../i18n/translations'

const CertificationCard: React.FC<{ cert: CertificationT; featuredLabel: string }> = ({ cert, featuredLabel }) => {
  return (
    <div className={`card p-5 ${cert.featured ? 'border-t-2 border-t-copper-500' : 'border-t-2 border-t-slate-200'}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="chip">{cert.year}</span>
        {cert.featured && (
          <span className="flex items-center gap-1 text-xs font-semibold text-copper-600">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
            {featuredLabel}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 mb-1 leading-snug">{cert.course}</h3>
      <p className="text-sm text-slate-500">{cert.institution}</p>
      {cert.detail && <p className="text-xs text-slate-400 mt-2">{cert.detail}</p>}
    </div>
  )
}

const Certifications: React.FC = () => {
  const { t } = useLanguage()
  const { certifications } = t

  const featured = certifications.items.filter((c) => c.featured)
  const other = certifications.items.filter((c) => !c.featured)

  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">{certifications.eyebrow}</span>
        <h2 className="section-title">{certifications.title}</h2>
        <p className="section-intro">{certifications.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featured.map((cert, i) => (
            <CertificationCard key={i} cert={cert} featuredLabel={certifications.featuredBadge} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {other.map((cert, i) => (
            <CertificationCard key={i} cert={cert} featuredLabel={certifications.featuredBadge} />
          ))}
        </div>

        {/* Congresos y eventos */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-700">
            {certifications.congressesTitle}
          </h3>
        </div>
        <div className="card divide-y divide-slate-100">
          {certifications.congresses.map((c, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 hover:bg-slate-50/60 transition-colors duration-200">
              <div>
                <p className="font-medium text-slate-800 text-sm">{c.title}</p>
                <p className="text-xs text-slate-500">{c.organizer}</p>
              </div>
              <span className="chip">{c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
