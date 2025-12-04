import { useState } from 'react'
import { FiX, FiMessageCircle, FiCheck } from 'react-icons/fi'
import { WHATSAPP_NUMBER } from '../config/constants'
import { useLanguage } from '../contexts/LanguageContext'
import './Checkout.css'

const Checkout = ({ isOpen, onClose, cart, total }) => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formatPrice = (price) => {
    const locales = { es: 'es-ES', en: 'en-ES', pt: 'pt-PT' }
    return new Intl.NumberFormat(locales[language] || 'es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('validation.nameRequired')
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.emailInvalid')
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('validation.phoneRequired')
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = t('validation.phoneInvalid')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsAppMessage = () => {
    const itemsList = cart.map(item => 
      `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n')

    return `${t('checkout.whatsappMessage')}

📋 *${t('checkout.orderSummary')}*
${itemsList}

💰 *${t('cart.total')} ${formatPrice(total)}*

👤 *${t('checkout.myData')}*
• ${t('checkout.nameLabel')} ${formData.name}
• ${t('checkout.emailLabel')} ${formData.email}
• ${t('checkout.phoneLabel')} ${formData.phone}
${formData.message ? `• ${t('checkout.messageLabel')} ${formData.message}` : ''}

${t('checkout.contactPrompt')}`
  }

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return

    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
    setIsSubmitted(true)
    
    // Resetear formulario después de 2 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      onClose()
    }, 2000)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    // Aquí podrías integrar con un servicio de email como EmailJS
    // Por ahora, mostramos un mensaje de confirmación
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="checkout-overlay" onClick={onClose}></div>
      <div className="checkout-modal">
        <div className="checkout-header">
          <h2>{t('checkout.title')}</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {isSubmitted ? (
          <div className="checkout-success">
            <FiCheck className="success-icon" />
            <h3>{t('checkout.success')}</h3>
            <p>{t('checkout.successMessage')}</p>
          </div>
        ) : (
          <div className="checkout-content">
            <div className="checkout-summary">
              <h3>{t('checkout.summary')}</h3>
              <div className="summary-items">
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span className="summary-item-name">{item.name} x{item.quantity}</span>
                    <span className="summary-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <span>{t('cart.total')}</span>
                <span className="total-price">{formatPrice(total)}</span>
              </div>
            </div>

            <form className="checkout-form" onSubmit={handleEmailSubmit}>
              <h3>{t('checkout.contact')}</h3>
              
              <div className="form-group">
                <label htmlFor="name">{t('checkout.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Juan Pérez"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('checkout.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('checkout.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+34 612 345 678"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('checkout.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder={t('checkout.messagePlaceholder')}
                />
              </div>

              <div className="checkout-actions">
                <button
                  type="button"
                  className="whatsapp-button"
                  onClick={handleWhatsAppSubmit}
                >
                  <FiMessageCircle />
                  {t('checkout.whatsapp')}
                </button>
                <button type="submit" className="email-button">
                  {t('checkout.submit')}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default Checkout

