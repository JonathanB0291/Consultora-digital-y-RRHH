import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = ({ items }) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProductGrid


