import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Perfil</span>
        <h2 className="section-title">Sobre mí</h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3 w-full">
            <div className="w-full aspect-square max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/oficial_photo.jpg" alt="Jorge Condorios" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 max-w-xs mx-auto lg:mx-0">
              <div className="stat-box border-t-2 border-t-indigo-500">
                <div className="font-display text-lg font-bold text-indigo-600">Último</div>
                <div className="text-xs text-slate-500">Semestre</div>
              </div>
              <div className="stat-box border-t-2 border-t-copper-500">
                <div className="font-display text-lg font-bold text-copper-600">2.º</div>
                <div className="text-xs text-slate-500">Puesto</div>
              </div>
              <div className="stat-box border-t-2 border-t-emerald-500">
                <div className="font-display text-lg font-bold text-emerald-600">2+</div>
                <div className="text-xs text-slate-500">Años exp.</div>
              </div>
              <div className="stat-box border-t-2 border-t-violet-500">
                <div className="font-display text-lg font-bold text-violet-600">5</div>
                <div className="text-xs text-slate-500">Proyectos</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="card p-8">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Estudiante del último semestre de <span className="font-semibold text-slate-900">Ingeniería de Sistemas</span> en
                  la <span className="font-semibold text-slate-900">Universidad Nacional de San Agustín de Arequipa</span>, donde
                  ocupo el <span className="font-semibold text-slate-900">2.º puesto académico</span> de la carrera y soy
                  becario PRONABEC (Beca Permanencia) por desempeño y continuidad de estudios.
                </p>
                <p>
                  Cuento con experiencia profesional en desarrollo de software y aseguramiento de la calidad,
                  participando en el análisis, desarrollo, integración, pruebas y mejora de soluciones tecnológicas
                  junto a equipos multidisciplinarios, en proyectos de desarrollo web, APIs, bases de datos y
                  servicios en la nube.
                </p>
                <p>
                  Investigador acreditado por la UNSA mediante resolución institucional. Me caracterizo por mi
                  capacidad de aprendizaje, pensamiento analítico, adaptación y orientación a la mejora continua,
                  y busco seguir desarrollándome en organizaciones de alto desempeño.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-copper-500 p-4 bg-copper-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-copper-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">Carta de recomendación</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    Reconocimiento de CEPRUNSA por desempeño como desarrollador frontend en su sistema de gestión de horarios.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-indigo-500 p-4 bg-indigo-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">Investigador acreditado UNSA</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    Acreditación institucional otorgada por la Universidad Nacional de San Agustín.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-emerald-500 p-4 bg-emerald-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9m9 9c0-4.97-4.03-9-9-9m9 9c0 4.97-4.03 9-9 9m0-18a9 9 0 000 18" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">Beca UNSA — TICAL 2025</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    Beca institucional para participar en la conferencia internacional de RedCLARA en Costa Rica.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 border-l-2 border-l-violet-500 p-4 bg-violet-50/40">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-violet-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9m9 9c0-4.97-4.03-9-9-9m9 9c0 4.97-4.03 9-9 9m0-18a9 9 0 000 18" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">Beca UNSA — AFIDE 2026</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    Beca institucional para participar en el congreso internacional de innovación en Panamá.
                  </p>
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
