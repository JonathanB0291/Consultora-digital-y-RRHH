import { FiPlus } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './ProductCard.css'

const ProductCard = ({ item, onAddToCart }) => {
  const { t, language } = useLanguage()
  
  const formatPrice = (price) => {
    const locales = { es: 'es-ES', en: 'en-ES', pt: 'pt-PT' }
    return new Intl.NumberFormat(locales[language] || 'es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-name">{item.name}</h3>
        <span className="product-price">{formatPrice(item.price)}</span>
      </div>
      <p className="product-description">{item.description}</p>
      <ul className="product-features">
        {item.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        className="add-to-cart-button"
        onClick={() => onAddToCart(item)}
      >
        <FiPlus className="plus-icon" />
        {t('product.addToCart')}
      </button>
    </div>
  )
}

export default ProductCard

