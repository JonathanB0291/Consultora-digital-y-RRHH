import { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useLanguage } from './contexts/LanguageContext'
import { getTranslatedProducts } from './utils/getTranslatedProducts'
import './App.css'

function App() {
  const { language, t } = useLanguage()
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  
  const { products, services } = useMemo(() => getTranslatedProducts(language), [language])

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="App">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <main className="main-content">
        <div className="container">
          <section className="section" id="web">
            <h2 className="section-title">{t('section.web')}</h2>
            <ProductGrid items={products} onAddToCart={addToCart} />
          </section>

          <section className="section" id="rrhh">
            <h2 className="section-title">{t('section.rrhh')}</h2>
            <ProductGrid items={services} onAddToCart={addToCart} />
          </section>
        </div>
      </main>

      <About />

      <Footer />

      <WhatsAppButton />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        total={getTotalPrice()}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        total={getTotalPrice()}
      />
    </div>
  )
}

export default App

