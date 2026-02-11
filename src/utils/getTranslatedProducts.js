import { products, services } from '../data/products'
import { translations } from '../translations/translations'

export const getTranslatedProducts = (language) => {
  // Translation helper
  const t = (key) => translations[language]?.[key] || key

  // -----------------------------
  // PRODUCTS (Web Services)
  // -----------------------------
  const translatedProducts = products.map((product, index) => {
    const keys = {
      0: {
        name: 'product.web.name',
        desc: 'product.web.desc',
        features: [
          'feature.responsive',
          'feature.seo',
          'feature.admin',
          'feature.contact',
          'feature.social',
        ],
      },

      1: {
        name: 'product.landing.name',
        desc: 'product.landing.desc',
        features: [
          'feature.conversion',
          'feature.speed',
          'feature.email',
          'feature.forms',
        ],
      },

      2: {
        name: 'product.portfolio.name',
        desc: 'product.portfolio.desc',
        features: [
          'feature.gallery',
          'feature.minimalist',
          'feature.animations',
          'feature.contact',
          'feature.social',
        ],
      },
    }

    const key = keys[index]
    if (!key) return product

    return {
      ...product,
      name: t(key.name),
      description: t(key.desc),
      features: key.features.map((f) => t(f)),
    }
  })

  // -----------------------------
  // SERVICES (HR + Psychology)
  // -----------------------------
  const translatedServices = services.map((service, index) => {
    const keys = {
      // Recruitment Service
      0: {
        name: 'service.recruitment.name',
        desc: 'service.recruitment.desc',
        features: [
          'feature.profile',
          'feature.jobposting',
          'feature.prescreening',
          'feature.competency',
          'feature.presentation',
        ],
      },

      // Performance Evaluation Service
      1: {
        name: 'service.evaluation.name',
        desc: 'service.evaluation.desc',
        features: [
          'feature.competencies',
          'feature.development',
          'feature.reports',
          'feature.followup',
        ],
      },

      // Psychological Services
      2: {
        name: 'service.psychological.name',
        desc: 'service.psychological.desc',
        features: [
          'feature.orientation',
          'feature.strengths',
          'feature.psychoprofile',
          'feature.growth',
        ],
      },
    }

    const key = keys[index]
    if (!key) return service

    return {
      ...service,
      name: t(key.name),
      description: t(key.desc),
      features: key.features.map((f) => t(f)),
    }
  })

  // Return translated data
  return {
    products: translatedProducts,
    services: translatedServices,
  }
}
