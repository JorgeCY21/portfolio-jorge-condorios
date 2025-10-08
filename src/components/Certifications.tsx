import React from 'react'

interface Certification {
  id: number;
  title: string;
  institution: string;
  date: string;
  credential?: string;
  image: string;
  description?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Desarrollo Frontend con React",
      institution: "Platzi",
      date: "2024",
      credential: "ABC123",
      image: "/cert-react.jpg",
      description: "Curso avanzado de React con hooks, context y mejores prácticas"
    },
    {
      id: 2,
      title: "JavaScript Moderno ES6+",
      institution: "Udemy",
      date: "2023",
      credential: "DEF456",
      image: "/cert-js.jpg",
      description: "Dominio de características modernas de JavaScript"
    },
    {
      id: 3,
      title: "TypeScript para React",
      institution: "FreeCodeCamp",
      date: "2024",
      credential: "GHI789",
      image: "/cert-ts.jpg",
      description: "TypeScript aplicado al desarrollo con React"
    },
    {
      id: 4,
      title: "Tailwind CSS Profesional",
      institution: "YouTube Academy",
      date: "2023",
      credential: "JKL012",
      image: "/cert-tailwind.jpg",
      description: "Diseño moderno y responsive con Tailwind CSS"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Certificaciones</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Constante aprendizaje y validación de habilidades através de certificaciones reconocidas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{cert.institution}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                {cert.credential && (
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Credencial: {cert.credential}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                      Ver certificado →
                    </button>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-gray-600 mb-4">¿Quieres ver más certificaciones?</p>
            <button className="btn-primary">
              📜 Ver Todos los Certificados
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications