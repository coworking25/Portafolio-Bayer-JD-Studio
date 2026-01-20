# 🚨 CONFIGURACIÓN DE EMAILJS - PASOS OBLIGATORIOS

## ❌ ERROR ACTUAL: EmailJS no está configurado

Estás viendo errores porque EmailJS necesita credenciales válidas. Sigue estos pasos EXACTAMENTE:

## 📋 PASO 1: Crear archivo .env

1. Copia el archivo `.env.example` como `.env`:
```bash
cp .env.example .env
```

2. El archivo `.env` debería verse así:
```env
VITE_EMAILJS_SERVICE_ID=service_tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=template_tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## 🌐 PASO 2: Configurar EmailJS (5 minutos)

### 2.1 Crear cuenta
- Ve a https://www.emailjs.com/
- Regístrate con tu email (gratis)

### 2.2 Configurar Email Service
1. Ve a "Email Services" → "Add New Service"
2. Selecciona "Gmail" (recomendado)
3. Conecta tu cuenta de Gmail
4. **Copia el SERVICE ID** (ejemplo: `service_abc123def`)

### 2.3 Crear Email Template
1. Ve a "Email Templates" → "Create New Template"
2. Usa esta plantilla EXACTA:

**Subject:**
```
Nuevo mensaje de {{from_name}} desde tu portafolio
```

**Body:**
```
Hola Juan Diego,

Has recibido un nuevo mensaje desde tu portafolio web:

De: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Responde directamente a: {{reply_to}}
Enviado desde: tu-portafolio.com
```

3. Guarda el template
4. **Copia el TEMPLATE ID** (ejemplo: `template_xyz789`)

### 2.4 Obtener Public Key
1. Ve a "Account" → "General"
2. **Copia la PUBLIC KEY** (ejemplo: `def456ghi789`)

## ⚙️ PASO 3: Configurar credenciales

Edita el archivo `.env` con tus credenciales reales:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123def
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=def456ghi789
```

## 🧪 PASO 4: Probar el formulario

1. Reinicia el servidor:
```bash
npm run dev
```

2. Ve a http://localhost:5173/

3. Llena el formulario de contacto:
   - Nombre: Tu nombre
   - Email: Un email real donde recibir respuesta
   - Mensaje: "Prueba de EmailJS"

4. Envía el formulario

5. **Verifica que llegue el email** a `diegorpo9608@gmail.com`

## 🔧 SOLUCIÓN DE ERRORES

### ❌ "Invalid service id"
- Verifica que el SERVICE_ID en `.env` sea correcto

### ❌ "Invalid template id"
- Verifica que el TEMPLATE_ID en `.env` sea correcto

### ❌ "Invalid user id"
- Verifica que la PUBLIC_KEY en `.env` sea correcta

### ❌ Emails no llegan
- Revisa carpeta de spam
- Verifica que el email esté autorizado en EmailJS
- Confirma que el template esté activo

## ✅ CONFIRMACIÓN DE ÉXITO

Cuando funcione correctamente, verás:
- ✅ Mensaje de éxito en el formulario
- ✅ Email recibido en tu bandeja
- ✅ Sin errores en la consola del navegador

## 📱 WhatsApp Auto-Response

La funcionalidad de WhatsApp ya está funcionando automáticamente con respuestas aleatorias.

---

**⚠️ IMPORTANTE:** No subas el archivo `.env` a Git. Ya está en `.gitignore`.