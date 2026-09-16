import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from './translations'

interface LanguageContextValue {
  lang: Lang
  t: typeof translations['es']
  toggleLang: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-lang'

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'es' ? stored : 'es'
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
