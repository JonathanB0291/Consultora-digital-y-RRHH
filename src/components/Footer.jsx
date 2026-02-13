import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t('Human Tech')}</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.services')}</h4>
            <ul className="footer-links">
              <li><a href="#about">{t('header.nav.about')}</a></li>
              <li><a href="#web">{t('header.nav.web')}</a></li>
              <li><a href="#rrhh">{t('header.nav.rrhh')}</a></li>
              <li><a href="#contact">{t('header.nav.contact') || 'Contacto'}</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} . {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

