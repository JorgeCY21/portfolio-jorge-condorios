import React, { useState } from 'react'
import type { ContactInfo, FormData } from '../types'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <div className="w-11 h-11 bg-indigo-50 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: 'Email',
      value: 'jorgecondoriosy21@gmail.com',
      link: 'mailto:jorgecondoriosy21@gmail.com'
    },
    {
      icon: (
        <div className="w-11 h-11 bg-copper-50 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-copper-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      ),
      title: 'Teléfono',
      value: '+51 944 400 868',
      link: 'tel:+51944400868'
    },
    {
      icon: (
        <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      title: 'Ubicación',
      value: 'Arequipa, Perú',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-eyebrow">Contacto</span>
        <h2 className="section-title">Conversemos</h2>
        <p className="section-intro">
          ¿Tienes una oportunidad, proyecto o programa en mente? Estoy abierto a nuevos desafíos.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5">
            <div className="card p-8 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Información de contacto</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-100"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-slate-700 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-medium text-slate-800 mb-4 text-sm">Sígueme en</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/jorge-enrique-condorios-yllapuma-0882122a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/JorgeCY21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="card p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Envíame un mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-700 text-sm font-medium mb-1.5">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                    placeholder="Cuéntame más..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-3.5">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
