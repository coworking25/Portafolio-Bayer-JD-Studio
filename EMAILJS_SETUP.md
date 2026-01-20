# Configuración de EmailJS para el Formulario de Contacto

## 🚀 Configuración Inicial

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar Email Service
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Copia el **Service ID**

### 3. Crear Email Template
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla:

```
Subject: Nuevo mensaje de {{from_name}} desde tu portafolio

De: {{from_name}} ({{from_email}})
Mensaje:

{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.
```

4. Copia el **Template ID**

### 4. Obtener Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key**

### 5. Configurar en el proyecto
Edita el archivo `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id_aqui',
  TEMPLATE_ID: 'tu_template_id_aqui',
  PUBLIC_KEY: 'tu_public_key_aqui'
};
```

## 🧪 Probar el envío de correos

1. Ejecuta el proyecto:
```bash
npm run dev
```

2. Ve a la sección de contacto
3. Llena el formulario con:
   - Nombre: Tu nombre de prueba
   - Email: Un email válido para recibir la respuesta
   - Mensaje: Mensaje de prueba

4. Haz clic en "Enviar Mensaje"
5. Verifica que recibas el email en tu bandeja de entrada

## 📱 Auto respuesta de WhatsApp

La funcionalidad de WhatsApp incluye respuestas automáticas aleatorias que se muestran cuando alguien hace clic en el enlace de WhatsApp. Las respuestas incluyen:

- Confirmación de recepción del mensaje
- Información sobre tiempos de respuesta
- Enlace al portafolio
- Información de contacto alternativo

## 🔧 Solución de problemas

### Error: "Invalid service id"
- Verifica que el SERVICE_ID sea correcto en `emailjs.ts`

### Error: "Invalid template id"
- Verifica que el TEMPLATE_ID sea correcto en `emailjs.ts`

### Error: "Invalid user id"
- Verifica que la PUBLIC_KEY sea correcta en `emailjs.ts`

### Los emails no llegan
- Verifica que tu cuenta de email esté conectada correctamente en EmailJS
- Revisa la carpeta de spam
- Asegúrate de que el email del remitente esté autorizado

### Problemas con WhatsApp
- Verifica que el número de teléfono esté en formato internacional sin "+"
- Asegúrate de que WhatsApp Business esté configurado correctamente

## 📧 Configuración de EmailJS completada

¡Tu formulario de contacto ahora puede enviar emails reales y WhatsApp tiene respuestas automáticas!