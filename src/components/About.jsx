import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="about-title">{t('about.title')}</h2>

        <div className="about-content">
          {/* TEXT SECTION */}
          <div className="about-text">
            {/* Description 1 */}
            <p className="about-description">
              {t('about.description1')}
            </p>

            {/* Description 2 with Bold */}
            <p className="about-description">
              {t('about.description2.part1')}{' '}
              <strong>{t('about.description2.dev')}</strong>{' '}
              {t('about.description2.part2')}{' '}
              <strong>{t('about.description2.psy')}</strong>{' '}
              {t('about.description2.part3')}
            </p>

            {/* Description 3 */}
            <p className="about-description">
              {t('about.description4')}
            </p>

            {/* Description 4 */}
            <p className="about-description">
              {t('about.description5')}
            </p>
          </div>

          {/* VALUES SECTION */}
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
