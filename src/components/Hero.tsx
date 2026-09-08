import React from 'react'

const Hero: React.FC = () => {
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-3/5">
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-indigo-300 border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 rounded-full">
              Becario PRONABEC · 2.º puesto académico
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Jorge Condorios
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
              Desarrollador Full Stack &amp; QA
            </h2>

            <p className="text-slate-400 mb-10 max-w-xl leading-relaxed">
              Estudiante de último semestre de Ingeniería de Sistemas en la Universidad Nacional de San Agustín.
              Experiencia construyendo aplicaciones web con React, Next.js y NestJS, y en procesos de
              aseguramiento de la calidad de software.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn-primary">
                Ver experiencia
              </a>
              <a href="#contact" className="btn-secondary">
                Contáctame
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-w-md">
              <div>
                <div className="text-2xl font-bold text-white">2.º</div>
                <div className="text-sm text-slate-400">Puesto académico</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-slate-400">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-slate-400">Roles profesionales</div>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/oficial_photo.jpg"
                  alt="Jorge Condorios"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl">
                <p className="text-slate-900 font-semibold text-sm">Ingeniería de Sistemas</p>
                <p className="text-slate-500 text-xs">UNSA · Arequipa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
