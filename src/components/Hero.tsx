import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const Hero: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-slate-900"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Accent glows */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-copper-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-3/5">
            <span className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase text-copper-300 border border-copper-400/30 bg-copper-500/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-400" />
              {t.hero.badge}
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t.hero.greetingName} <span className="text-copper-300">{t.hero.greetingSurname}</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
              {t.hero.role}
            </h2>

            <p className="text-slate-400 mb-10 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-w-md">
              <div>
                <div className="font-display text-2xl font-bold text-indigo-300">2.º</div>
                <div className="text-sm text-slate-400">{t.hero.stat1Label}</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-copper-300">2+</div>
                <div className="text-sm text-slate-400">{t.hero.stat2Label}</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-emerald-300">5</div>
                <div className="text-sm text-slate-400">{t.hero.stat3Label}</div>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500/30 to-copper-400/20 rounded-[2rem] blur-xl" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/oficial_photo.jpg"
                  alt="Jorge Condorios"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl border-l-2 border-copper-500">
                <p className="text-slate-900 font-semibold text-sm">{t.hero.photoTitle}</p>
                <p className="text-slate-500 text-xs">{t.hero.photoSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
