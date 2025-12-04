import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations/translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key) => {
    return translations[language][key] || key
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

