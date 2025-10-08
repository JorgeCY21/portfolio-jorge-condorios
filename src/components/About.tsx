import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                  <img src="/oficial_photo.jpg" alt="Foto oficial"/>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl shadow-lg">
                <span className="font-bold">🎓 2do Puesto</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovación + Tecnología + Pasión
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-blue-600">Estudiante de 8vo ciclo</span> de Ingeniería de Sistemas en la 
                  <span className="font-semibold text-purple-600"> Universidad Nacional de San Agustín de Arequipa</span>. 
                  Mi pasión por la tecnología me ha llevado a destacar académicamente y a buscar constantemente nuevos desafíos.
                </p>
                
                <p>
                  Me especializo en crear <span className="font-semibold text-green-600">soluciones digitales modernas</span> que 
                  combinan diseño atractivo con funcionalidad robusta. Tengo una facilidad natural para aprender nuevas herramientas 
                  y disfruto trabajar en proyectos que impacten positivamente.
                </p>
                
                <p>
                  Mi interés se extiende hacia <span className="font-semibold text-indigo-600">tecnologías emergentes</span> como 
                  blockchain, aplicaciones distribuidas y cómo estas pueden transformar organizaciones y la vida diaria.
                </p>
              </div>
              
              {/* Highlight Card */}
              <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🏆</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Logro Destacado</h4>
                    <p className="text-blue-100">
                      Desarrollador Frontend en el sistema web de <span className="font-semibold">CEPRUNSA</span>, 
                      optimizando gestión de horarios y recibiendo <span className="font-semibold">carta de recomendación</span> 
                      por mi contribución al proyecto.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8vo</div>
                  <div className="text-sm text-gray-600">Ciclo</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2do</div>
                  <div className="text-sm text-gray-600">Puesto</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2+</div>
                  <div className="text-sm text-gray-600">Años Exp.</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
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