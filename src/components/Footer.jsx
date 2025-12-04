import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiFacebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: FiInstagram, name: 'Instagram', url: 'https://instagram.com' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: FiTwitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: FiMail, name: 'Email', url: 'mailto:contacto@tiendavirtual.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t('header.title')}</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.services')}</h4>
            <ul className="footer-links">
              <li><a href="#web">{t('header.nav.web')}</a></li>
              <li><a href="#rrhh">{t('header.nav.rrhh')}</a></li>
              <li><a href="#about">{t('header.nav.about')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.follow')}</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('header.title')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

