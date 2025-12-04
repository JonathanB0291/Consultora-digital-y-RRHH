import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="about-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {t('about.description1')} <strong>{t('about.developer')}</strong> {t('about.and')} <strong>{t('about.hr')}</strong> {t('about.description2')}
            </p>
            <p className="about-description">
              {t('about.description3')}
            </p>
          </div>
          <div className="about-values">
            <div className="value-card">
              <h3>{t('about.value1.title')}</h3>
              <p>{t('about.value1.desc')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.value2.title')}</h3>
              <p>{t('about.value2.desc')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.value3.title')}</h3>
              <p>{t('about.value3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

