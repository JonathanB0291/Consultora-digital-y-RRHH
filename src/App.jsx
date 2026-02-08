import { useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useLanguage } from './contexts/LanguageContext'
import { getTranslatedProducts } from './utils/getTranslatedProducts'
import './App.css'

function App() {
  const { language, t } = useLanguage()
  
  const { products, services } = useMemo(() => getTranslatedProducts(language), [language])

  return (
    <div className="App">
      <Header />
      <Hero />
      <main className="main-content">
        <div className="container">
          <section className="section" id="web">
            <h2 className="section-title">{t('section.web')}</h2>
            <ProductGrid items={products} />
          </section>

          <section className="section" id="rrhh">
            <h2 className="section-title">{t('section.rrhh')}</h2>
            <ProductGrid items={services} />
          </section>
        </div>
      </main>

      <About />

      <ContactForm />

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App

