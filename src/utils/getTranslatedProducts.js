import { products, services } from '../data/products'
import { translations } from '../translations/translations'

export const getTranslatedProducts = (language) => {
  const t = (key) => translations[language]?.[key] || key
  
  const translatedProducts = products.map((product, index) => {
    const keys = {
      0: { name: 'product.web.name', desc: 'product.web.desc', features: ['feature.responsive', 'feature.seo', 'feature.admin', 'feature.contact', 'feature.social'] },
      1: { name: 'product.landing.name', desc: 'product.landing.desc', features: ['feature.conversion', 'feature.speed', 'feature.email', 'feature.forms', 'feature.analytics'] },
      2: { name: 'product.portfolio.name', desc: 'product.portfolio.desc', features: ['feature.gallery', 'feature.minimalist', 'feature.animations', 'feature.contact', 'feature.social'] }
    }
    
    const key = keys[index]
    if (!key) return product
    
    return {
      ...product,
      name: t(key.name),
      description: t(key.desc),
      features: key.features.map(f => t(f))
    }
  })
  
  const translatedServices = services.map((service, index) => {
    const keys = {
      0: { name: 'service.recruitment.name', desc: 'service.recruitment.desc', features: ['feature.search', 'feature.evaluation', 'feature.interviews', 'feature.references', 'feature.onboarding'] },
      1: { name: 'service.evaluation.name', desc: 'service.evaluation.desc', features: ['feature.360', 'feature.competencies', 'feature.development', 'feature.reports', 'feature.followup'] },
      2: { name: 'service.training.name', desc: 'service.training.desc', features: ['feature.needs', 'feature.programs', 'feature.training', 'feature.material', 'feature.certification'] }
    }
    
    const key = keys[index]
    if (!key) return service
    
    return {
      ...service,
      name: t(key.name),
      description: t(key.desc),
      features: key.features.map(f => t(f))
    }
  })
  
  return { products: translatedProducts, services: translatedServices }
}

