# Configuración de EmailJS

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a https://www.emailjs.com/
- Crea una cuenta gratuita (permite hasta 200 emails/mes)

### 2. Configurar un servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta

### 3. Crear una plantilla de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Configura la plantilla con estas variables:
  - `{{from_name}}` - Nombre del remitente
  - `{{from_email}}` - Email del remitente
  - `{{subject}}` - Asunto del mensaje
  - `{{message}}` - Contenido del mensaje
  - `{{to_email}}` - Tu email de destino

Ejemplo de plantilla:
```
De: {{from_name}} <{{from_email}}>
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto.
```

### 4. Obtener las credenciales
- **Service ID**: Lo encuentras en "Email Services" > Tu servicio
- **Template ID**: Lo encuentras en "Email Templates" > Tu plantilla
- **Public Key**: Ve a "Account" > "General" > "API Keys"

### 5. Configurar variables de entorno
- Crea un archivo `.env` en la raíz del proyecto
- Agrega las siguientes variables:
```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 6. Reiniciar el servidor de desarrollo
- Detén el servidor (Ctrl+C)
- Ejecuta `npm run dev` nuevamente

## Nota de seguridad
⚠️ **Importante**: El archivo `.env` contiene información sensible. 
- NO lo subas a Git
- Asegúrate de que esté en tu `.gitignore`
- El archivo `.env.example` es solo una plantilla sin valores reales

