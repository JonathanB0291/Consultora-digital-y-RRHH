import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-button primary" 
            onClick={() => scrollToSection('web')}
            aria-label="Ver servicios de desarrollo web"
          >
            {t('hero.button.web')}
          </button>
          <button 
            className="hero-button secondary" 
            onClick={() => scrollToSection('rrhh')}
            aria-label="Ver servicios de recursos humanos"
          >
            {t('hero.button.rrhh')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

