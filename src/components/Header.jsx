import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import './Header.css'

const Header = ({ cartItemsCount, onCartClick }) => {
  const { theme, toggleTheme } = useTheme()
  const { t, language, changeLanguage } = useLanguage()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{t('header.title')}</h1>
        </div>
        <nav className="nav-menu">
          <button onClick={() => scrollToSection('web')} className="nav-link">
            {t('header.nav.web')}
          </button>
          <button onClick={() => scrollToSection('rrhh')} className="nav-link">
            {t('header.nav.rrhh')}
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            {t('header.nav.about')}
          </button>
        </nav>
        <div className="header-controls">
          <div className="language-selector">
            <select 
              value={language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button className="cart-button" onClick={onCartClick}>
            <FiShoppingCart className="cart-icon" />
            <span className="cart-count">{cartItemsCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

