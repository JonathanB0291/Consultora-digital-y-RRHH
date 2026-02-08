# Solución de Problemas con EmailJS

## Verificaciones Básicas

### 1. Verificar que el archivo .env existe y tiene las variables correctas

Asegúrate de tener un archivo `.env` en la raíz del proyecto con:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**Importante:**
- Las variables DEBEN empezar con `VITE_` para que Vite las reconozca
- NO uses comillas alrededor de los valores
- NO dejes espacios alrededor del signo `=`

### 2. Reiniciar el servidor de desarrollo

Después de crear o modificar el archivo `.env`, DEBES reiniciar el servidor:

1. Detén el servidor (Ctrl+C en la terminal)
2. Ejecuta `npm run dev` nuevamente

### 3. Verificar las credenciales en EmailJS

#### Service ID
- Ve a https://www.emailjs.com/admin/integration
- Busca tu servicio en "Email Services"
- Copia el **Service ID** (ejemplo: `service_xxxxxxx`)

#### Template ID
- Ve a https://www.emailjs.com/admin/templates
- Abre tu plantilla
- Copia el **Template ID** (ejemplo: `template_xxxxxxx`)

#### Public Key
- Ve a https://www.emailjs.com/account
- En la sección "API Keys"
- Copia tu **Public Key** (ejemplo: `xxxxxxxxxxxxx`)

### 4. Verificar la plantilla de EmailJS

Tu plantilla DEBE tener estas variables exactamente como se muestran:

```
De: {{from_name}} <{{from_email}}>
Asunto: {{subject}}

Mensaje:
{{message}}

Email de destino: {{to_email}}
```

**Los nombres de las variables deben coincidir exactamente:**
- `{{from_name}}` (no `{{name}}` ni `{{nombre}}`)
- `{{from_email}}` (no `{{email}}`)
- `{{subject}}` (no `{{asunto}}`)
- `{{message}}` (no `{{mensaje}}`)
- `{{to_email}}` (opcional, pero útil)

### 5. Verificar el servicio de email

- Asegúrate de que tu servicio de email esté **activo** en EmailJS
- Si usas Gmail, verifica que la conexión esté autorizada
- Revisa que no hayas excedido el límite de emails (200/mes en plan gratuito)

## Errores Comunes y Soluciones

### Error: "Faltan las credenciales de EmailJS"
**Solución:** Verifica que el archivo `.env` existe y tiene las 3 variables correctas.

### Error: "Invalid public key"
**Solución:** Verifica que copiaste correctamente la Public Key desde EmailJS.

### Error: "Template not found"
**Solución:** Verifica que el Template ID es correcto y que la plantilla existe.

### Error: "Service not found"
**Solución:** Verifica que el Service ID es correcto y que el servicio está activo.

### Error: "Email service error"
**Solución:** 
- Verifica que tu servicio de email (Gmail, Outlook, etc.) esté correctamente conectado
- Revisa que no hayas excedido el límite de emails

## Cómo Verificar que las Variables se Cargaron

Abre la consola del navegador (F12) y ejecuta:

```javascript
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

Si alguna variable muestra `undefined`, significa que no se cargó correctamente.

## Prueba Rápida

1. Abre la consola del navegador (F12)
2. Intenta enviar un mensaje
3. Revisa los mensajes de error en la consola
4. El mensaje de error ahora será más específico y te dirá exactamente qué está fallando

## Contacto

Si después de verificar todo lo anterior sigue sin funcionar, revisa:
- Los logs en la consola del navegador
- El mensaje de error específico que aparece en el formulario
- La documentación de EmailJS: https://www.emailjs.com/docs/

