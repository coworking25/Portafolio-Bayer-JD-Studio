import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export interface ContactFormData {
  email: string;
  message: string;
  name?: string;
}

export class ContactService {
  static async sendEmail(formData: ContactFormData): Promise<boolean> {
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        from_email: formData.email,
        from_name: formData.name || 'Portfolio Visitor',
        message: formData.message,
        to_email: 'diegorpo9608@gmail.com',
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      return result.status === 200;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  static generateWhatsAppAutoResponse(): string {
    const responses = [
      "¡Hola! 👋 Gracias por contactarme a través de WhatsApp. He recibido tu mensaje y te responderé lo más pronto posible. Mientras tanto, puedes revisar mi portafolio en https://tu-portafolio.com",
      "¡Hola! 😊 Gracias por escribirme. Estoy revisando tu mensaje y te responderé pronto. Si tienes alguna pregunta urgente sobre mis servicios, puedes enviarme un correo a diegorpo9608@gmail.com",
      "¡Hola! 🙌 Gracias por tu interés. He recibido tu mensaje por WhatsApp y lo estoy revisando. Normalmente respondo en menos de 24 horas. ¡Saludos!",
      "¡Hola! ✨ Gracias por contactarme. Tu mensaje ha sido recibido correctamente. Te responderé lo antes posible con toda la información que necesitas."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  static getWhatsAppLink(message?: string): string {
    const phoneNumber = '573028240488'; // Número sin el +
    const encodedMessage = message
      ? encodeURIComponent(message)
      : encodeURIComponent('Hola, me gustaría contactarte desde tu portafolio web.');

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  static getWhatsAppAutoResponseLink(): string {
    const autoResponse = this.generateWhatsAppAutoResponse();
    return this.getWhatsAppLink(autoResponse);
  }
}