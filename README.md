# Tienda Virtual - Desarrollo Web y RRHH

Tienda virtual minimalista para mostrar servicios de desarrollo web y recursos humanos.

## Características

- **Productos de Desarrollo Web:**
  - Páginas Web Corporativas
  - Landing Pages
  - Portfolios Profesionales

- **Servicios de Recursos Humanos:**
  - Reclutamiento y Selección
  - Evaluación de Desempeño
  - Capacitación y Desarrollo

- **Características principales:**
  - Diseño minimalista con colores claros
  - Interfaz responsive
  - Sección "Quiénes Somos"
  - Footer con redes sociales
  - Botón flotante de WhatsApp
  - Navegación suave entre secciones
  - Hero section atractivo
  - Formulario de contacto funcional

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## Configuración

### WhatsApp

Para configurar el número de WhatsApp, edita el archivo `src/config/constants.js`:

```js
export const WHATSAPP_NUMBER = '123456789' // Reemplaza con tu número (formato: código país + número sin +)
```

Ejemplo: Si tu número es +34 612 345 678, deberías poner `34612345678`

Este número se usará en el botón flotante de WhatsApp.

### Email de Contacto

También puedes configurar tu email de contacto en el mismo archivo:

```js
export const CONTACT_EMAIL = 'consultora.humantech@gmail.com'
```

## Configuración de Email

El formulario de contacto está integrado con EmailJS. Configura las credenciales en el archivo `.env`:

```
VITE_EMAILJS_SERVICE_ID=service_6dgnnzk
VITE_EMAILJS_TEMPLATE_ID=template_h9afqbr
VITE_EMAILJS_PUBLIC_KEY=ykQCn5MEeDymKo_H8
```

Los mensajes se enviarán automáticamente a tu email de contacto.

## Tecnologías Utilizadas

- React 18
- Vite
- React Icons
- CSS3
- EmailJS

