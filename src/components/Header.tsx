import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className={`font-display flex items-center gap-2 text-lg font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-copper-500" />
            Jorge Condorios
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-indigo-600'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:jorgecondoriosy21@gmail.com"
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <nav className="flex flex-col space-y-1 bg-white rounded-xl p-3 shadow-lg border border-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-medium rounded-lg px-3 py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
