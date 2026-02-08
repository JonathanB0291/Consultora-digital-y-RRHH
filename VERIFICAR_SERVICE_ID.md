# Cómo Verificar tu Service ID de EmailJS

## El Error: "Service ID not found"

Este error significa que el Service ID que estás usando (`service_8la9jvg`) no existe en tu cuenta de EmailJS o no es correcto.

## Pasos para Obtener el Service ID Correcto

### 1. Inicia sesión en EmailJS
- Ve a https://dashboard.emailjs.com/
- Inicia sesión con tu cuenta

### 2. Ve a Email Services
- En el menú lateral, haz clic en **"Email Services"** o **"Integration"**
- O ve directamente a: https://dashboard.emailjs.com/admin/integration

### 3. Verifica tu Servicio
- Deberías ver una lista de servicios de email (Gmail, Outlook, etc.)
- Si NO tienes ningún servicio configurado:
  - Haz clic en **"Add New Service"**
  - Selecciona tu proveedor de email (Gmail, Outlook, etc.)
  - Sigue las instrucciones para conectarlo

### 4. Copia el Service ID Correcto
- Una vez que tengas un servicio configurado, verás algo como:
  ```
  Service ID: service_xxxxxxxxx
  ```
- **Copia este Service ID completo** (debe empezar con `service_`)

### 5. Actualiza tu Archivo .env
- Abre el archivo `.env` en la raíz de tu proyecto
- Reemplaza el Service ID con el correcto:
  ```env
  VITE_EMAILJS_SERVICE_ID=service_tu_id_real_aqui
  VITE_EMAILJS_TEMPLATE_ID=template_zmvuxvo
  VITE_EMAILJS_PUBLIC_KEY=i0wI_DCgQGZZm9uhR
  ```

### 6. Reinicia el Servidor
- Detén el servidor (Ctrl+C)
- Ejecuta `npm run dev` nuevamente

## Verificación Rápida

Abre la consola del navegador (F12) y deberías ver:
```
🔍 EmailJS Configuration Check:
Service ID: ✅ Configurado
Template ID: ✅ Configurado
Public Key: ✅ Configurado
```

Y cuando envíes un mensaje:
```
📧 Enviando email con:
Service ID: service_tu_id_real
Template ID: template_zmvuxvo
Public Key: i0wI_DCgQGZZ...
```

## Problemas Comunes

### "No tengo ningún servicio configurado"
**Solución:** Debes crear un servicio primero:
1. Ve a https://dashboard.emailjs.com/admin/integration
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para autorizar la conexión

### "El Service ID es diferente"
**Solución:** Cada cuenta de EmailJS tiene sus propios IDs únicos. Asegúrate de usar el Service ID de TU cuenta, no el de otra persona.

### "El servicio está inactivo"
**Solución:** 
1. Ve a Email Services
2. Verifica que el servicio esté activo (debe mostrar "Active" o "Connected")
3. Si está inactivo, reconéctalo o crea uno nuevo

## Importante

- El Service ID debe pertenecer a la **misma cuenta** que tu Public Key
- Si creaste una cuenta nueva, necesitas crear un servicio nuevo y obtener su Service ID
- El Service ID siempre empieza con `service_`

