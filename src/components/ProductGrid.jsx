import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = ({ items, onAddToCart }) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export default ProductGrid

