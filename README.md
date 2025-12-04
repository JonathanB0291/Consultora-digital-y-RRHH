# Tienda Virtual - Desarrollo Web y RRHH

Tienda virtual minimalista para la venta de servicios de desarrollo web y recursos humanos.

## Características

- **Productos de Desarrollo Web:**
  - Páginas Web Corporativas (899€)
  - Landing Pages (499€)
  - Portfolios Profesionales (399€)

- **Servicios de Recursos Humanos:**
  - Reclutamiento y Selección (1,299€)
  - Evaluación de Desempeño (899€)
  - Capacitación y Desarrollo (1,499€)

- **Características principales:**
  - Carrito de compras funcional
  - Precios en euros (€)
  - Diseño minimalista con colores claros
  - Interfaz responsive
  - Sección "Quiénes Somos"
  - Footer con redes sociales
  - Botón flotante de WhatsApp
  - Navegación suave entre secciones
  - Hero section atractivo

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

Este número se usará tanto en el botón flotante de WhatsApp como en el proceso de checkout.

### Email de Contacto

También puedes configurar tu email de contacto en el mismo archivo:

```js
export const CONTACT_EMAIL = 'contacto@tiendavirtual.com'
```

## Sistema de Checkout

El sistema de checkout incluye:

- **Formulario de datos del cliente**: Nombre, email, teléfono y mensaje opcional
- **Validación de formulario**: Verifica que todos los campos requeridos estén completos
- **Resumen del pedido**: Muestra todos los productos/servicios seleccionados
- **Envío por WhatsApp**: Genera un mensaje completo con todos los datos y abre WhatsApp
- **Envío por Email**: Botón para enviar solicitud (actualmente muestra confirmación)

### Integración con Email (Opcional)

Si deseas integrar el envío de emails real, puedes usar servicios como:
- **EmailJS**: Fácil de integrar, no requiere backend
- **Formspree**: Servicio de formularios por email
- **Backend propio**: Con Node.js y nodemailer

El botón "Enviar Solicitud" actualmente muestra un mensaje de confirmación. Puedes modificarlo en `src/components/Checkout.jsx` para integrar tu servicio de email preferido.

## Tecnologías Utilizadas

- React 18
- Vite
- React Icons
- CSS3

