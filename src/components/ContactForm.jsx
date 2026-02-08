import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import { CONTACT_EMAIL } from '../config/constants'
import './ContactForm.css'

const ContactForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Inicializar EmailJS cuando el componente se monta
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ykQCn5MEeDymKo_H8'
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6dgnnzk'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_h9afqbr'

    // Mostrar información de depuración en desarrollo
    if (import.meta.env.DEV) {
      console.log('🔍 EmailJS Configuration Check:')
      console.log('Service ID:', serviceId ? '✅ Configurado' : '❌ Faltante')
      console.log('Template ID:', templateId ? '✅ Configurado' : '❌ Faltante')
      console.log('Public Key:', publicKey ? '✅ Configurado' : '❌ Faltante')
    }

    // Inicializar EmailJS
    emailjs.init(publicKey)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Limpiar mensajes de error cuando el usuario empieza a escribir
    if (submitStatus === 'error') {
      setSubmitStatus(null)
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      // Obtener las credenciales de EmailJS (con valores por defecto)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6dgnnzk'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_h9afqbr'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ykQCn5MEeDymKo_H8'

      // Mostrar las credenciales que se están usando (solo en desarrollo)
      if (import.meta.env.DEV) {
        console.log('📧 Enviando email con:')
        console.log('Service ID:', serviceId)
        console.log('Template ID:', templateId)
        console.log('Public Key:', publicKey ? `${publicKey.substring(0, 10)}...` : 'No configurado')
      }

      // Inicializar EmailJS con la clave pública
      emailjs.init(publicKey)

      // Parámetros que se enviarán a la plantilla
      // IMPORTANTE: Los nombres deben coincidir exactamente con los nombres en tu plantilla de EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        title: formData.subject,
        message: formData.message,
        to_email: CONTACT_EMAIL
      }

      // Enviar el email usando la API más reciente de EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams)

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Error al enviar el email')
      }
    } catch (error) {
      console.error('❌ Error completo:', error)
      console.error('Error details:', {
        text: error.text,
        status: error.status,
        message: error.message,
        response: error.response
      })
      
      // Mensajes de error más específicos
      let errorMsg = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      let helpText = ''
      
      if (error.text) {
        errorMsg = `Error de EmailJS: ${error.text}`
        
        // Mensajes de ayuda específicos según el error
        if (error.text.includes('service ID not found') || error.text.includes('Service ID not found')) {
          helpText = 'El Service ID no se encuentra. Verifica que: 1) El Service ID sea correcto, 2) El servicio esté activo en tu cuenta de EmailJS, 3) El Service ID pertenezca a la misma cuenta que tu Public Key. Ve a https://dashboard.emailjs.com/admin/integration para verificar tu Service ID.'
        } else if (error.text.includes('template') || error.text.includes('Template')) {
          helpText = 'El Template ID no se encuentra. Verifica que el Template ID sea correcto y que la plantilla exista en tu cuenta de EmailJS.'
        } else if (error.text.includes('public key') || error.text.includes('Public key')) {
          helpText = 'La Public Key no es válida. Verifica que copiaste correctamente la Public Key desde tu cuenta de EmailJS.'
        }
      } else if (error.message) {
        errorMsg = error.message
      } else if (error.response) {
        errorMsg = `Error ${error.response.status}: ${error.response.text || 'Error desconocido'}`
      }
      
      setErrorMessage(errorMsg)
      if (helpText) {
        setErrorMessage(`${errorMsg}\n\n💡 ${helpText}`)
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">{t('contact.title') || 'Contáctanos'}</h2>
        <p className="contact-subtitle">
          {t('contact.subtitle') || '¿Tienes alguna pregunta? Estamos aquí para ayudarte.'}
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t('contact.name') || 'Nombre *'}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder') || 'Tu nombre'}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email') || 'Email *'}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder') || 'tu@email.com'}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">{t('contact.subject') || 'Asunto *'}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t('contact.subjectPlaceholder') || '¿Sobre qué quieres consultar?'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.message') || 'Mensaje *'}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder={t('contact.messagePlaceholder') || 'Escribe tu mensaje aquí...'}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form-message success">
              {t('contact.success') || '¡Mensaje enviado con éxito! Te responderemos pronto.'}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error">
              <strong>Error:</strong> {errorMessage || (t('contact.error') || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')}
              <br />
              <small style={{ marginTop: '0.5rem', display: 'block' }}>
                Verifica que las credenciales de EmailJS estén correctamente configuradas en tu archivo .env
              </small>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (t('contact.sending') || 'Enviando...') 
              : (t('contact.send') || 'Enviar Mensaje')
            }
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

