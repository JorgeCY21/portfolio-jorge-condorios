import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hola, soy <span className="text-blue-600">Tu Nombre</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Desarrollador Full Stack
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Creo experiencias digitales excepcionales con código limpio, diseño moderno y las últimas tecnologías.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                Ver Proyectos
              </a>
              <a href="#contact" className="btn-secondary">
                Contáctame
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full overflow-hidden shadow-xl">
              {/* Aquí puedes agregar tu foto */}
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg">Tu Foto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero