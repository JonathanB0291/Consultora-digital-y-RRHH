import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './Cart.css'

const Cart = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity, total, onCheckout }) => {
  const { t, language } = useLanguage()
  
  const formatPrice = (price) => {
    const locales = { es: 'es-ES', en: 'en-ES', pt: 'pt-PT' }
    return new Intl.NumberFormat(locales[language] || 'es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>{t('cart.title')}</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>{t('cart.empty')}</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">{formatPrice(item.price)}</p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          className="quantity-button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <FiMinus />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => onRemove(item.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                    <div className="cart-item-total">
                      {t('cart.itemTotal')} {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-total">
                  <span className="total-label">{t('cart.total')}</span>
                  <span className="total-amount">{formatPrice(total)}</span>
                </div>
                <button className="checkout-button" onClick={onCheckout}>
                  {t('cart.checkout')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart

