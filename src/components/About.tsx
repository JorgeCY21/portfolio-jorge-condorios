import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-lg">
              {/* Imagen de perfil */}
              <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                <span className="text-gray-600">Tu Foto</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Desarrollador apasionado por crear soluciones innovadoras
            </h3>
            <p className="text-gray-600 mb-6">
              Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas y responsivas. 
              Me especializo en JavaScript, React, Node.js y otras tecnologías del ecosistema web.
            </p>
            <p className="text-gray-600 mb-6">
              Mi objetivo es combinar diseño atractivo con funcionalidad robusta para ofrecer experiencias de usuario excepcionales. 
              Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Desarrollo Frontend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Desarrollo Backend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Diseño UI/UX</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Optimización SEO</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="btn-primary">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About