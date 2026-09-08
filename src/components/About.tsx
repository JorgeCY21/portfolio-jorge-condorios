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
              <div className="stat-box">
                <div className="text-lg font-bold text-indigo-600">Último</div>
                <div className="text-xs text-slate-500">Semestre</div>
              </div>
              <div className="stat-box">
                <div className="text-lg font-bold text-indigo-600">2.º</div>
                <div className="text-xs text-slate-500">Puesto</div>
              </div>
              <div className="stat-box">
                <div className="text-lg font-bold text-indigo-600">2+</div>
                <div className="text-xs text-slate-500">Años exp.</div>
              </div>
              <div className="stat-box">
                <div className="text-lg font-bold text-indigo-600">5</div>
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
                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Carta de recomendación</p>
                  <p className="text-sm text-slate-500">
                    Reconocimiento de CEPRUNSA por desempeño como desarrollador frontend en su sistema de gestión de horarios.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Investigador acreditado UNSA</p>
                  <p className="text-sm text-slate-500">
                    Acreditación institucional otorgada por la Universidad Nacional de San Agustín.
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
