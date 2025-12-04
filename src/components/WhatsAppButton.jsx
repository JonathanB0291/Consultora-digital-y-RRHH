import { FiMessageCircle } from 'react-icons/fi'
import { WHATSAPP_NUMBER } from '../config/constants'
import { useLanguage } from '../contexts/LanguageContext'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const { t } = useLanguage()
  const message = t('whatsapp.message')
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <FiMessageCircle className="whatsapp-icon" />
      <span className="whatsapp-tooltip">{t('whatsapp.tooltip')}</span>
    </a>
  )
}

export default WhatsAppButton

