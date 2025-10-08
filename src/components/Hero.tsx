import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 float-animation"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-50 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-cyan-400 rounded-full opacity-40 float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                  🎓 2do Puesto - Ingeniería de Sistemas
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.15]">
                Hola, soy 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block py-3">
                  Jorge Condorios
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                Desarrollador Frontend &<br />Estudiante de Ingeniería de Sistemas
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                Creo soluciones digitales innovadoras que combinan 
                <span className="text-cyan-300"> diseño moderno</span>, 
                <span className="text-blue-300"> funcionalidad robusta</span> y 
                <span className="text-purple-300"> experiencias excepcionales</span>
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#projects" className="btn-primary">
                  🚀 Ver Proyectos
                </a>
                <a href="#contact" className="btn-secondary">
                  📬 Contáctame
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl glass-effect backdrop-blur-lg border border-cyan-400/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full overflow-hidden shadow-2xl mb-4 border-4 border-white/20">
                        <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                          <img src="/oficial_photo.jpg" alt="Foto oficial"/>
                        </div>
                      </div>
                      <p className="text-white font-semibold text-lg">Jorge Condorios</p>
                      <p className="text-cyan-300 text-sm">Desarrollador Frontend</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-purple-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero