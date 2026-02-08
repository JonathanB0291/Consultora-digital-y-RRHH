import { useLanguage } from '../contexts/LanguageContext'
import './ProductCard.css'

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-name">{item.name}</h3>
      </div>
      <p className="product-description">{item.description}</p>
      <ul className="product-features">
        {item.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductCard

