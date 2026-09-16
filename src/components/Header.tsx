import React, { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const UsFlagIcon = () => (
  <svg viewBox="0 0 20 14" className="w-4 h-3 rounded-[2px] shrink-0" aria-hidden="true">
    <rect width="20" height="14" fill="#B22234" />
    {[1, 3, 5, 7, 9, 11, 13].map((y) => (
      <rect key={y} y={y} width="20" height="1" fill="#fff" />
    ))}
    <rect width="8" height="7" fill="#3C3B6E" />
  </svg>
)

const PeFlagIcon = () => (
  <svg viewBox="0 0 20 14" className="w-4 h-3 rounded-[2px] shrink-0" aria-hidden="true">
    <rect width="20" height="14" fill="#fff" />
    <rect width="6.67" height="14" fill="#D91023" />
    <rect x="13.33" width="6.67" height="14" fill="#D91023" />
  </svg>
)

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' }
  ]

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language / Cambiar idioma"
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className={`flex items-center gap-1.5 text-xs font-bold tracking-wide px-2.5 py-1.5 rounded-md border transition-colors duration-200 ${className}`}
    >
      {lang === 'es' ? <UsFlagIcon /> : <PeFlagIcon />}
      <span>{lang === 'es' ? 'EN' : 'ES'}</span>
    </button>
  )

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
            <LangToggle
              className={
                isScrolled
                  ? 'border-slate-300 text-slate-600 hover:border-indigo-600 hover:text-indigo-600'
                  : 'border-white/30 text-white hover:bg-white/10'
              }
            />
            <a
              href="mailto:jorgecondoriosy21@gmail.com"
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t.nav.contactBtn}
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <LangToggle
              className={
                isScrolled
                  ? 'border-slate-300 text-slate-600'
                  : 'border-white/30 text-white'
              }
            />
            <button
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t.nav.openMenu}
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
