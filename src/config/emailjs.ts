// EmailJS configuration using environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

// Validation function to check if EmailJS is properly configured
export const validateEmailJSConfig = (): boolean => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  if (SERVICE_ID === 'service_your_service_id' ||
      TEMPLATE_ID === 'template_your_template_id' ||
      PUBLIC_KEY === 'your_public_key') {
    console.warn('⚠️ EmailJS no está configurado. Usa las variables de entorno VITE_EMAILJS_*');
    return false;
  }

  return true;
};