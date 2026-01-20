import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      alert(t('contact.success'));
      setFormData({ email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/50"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : t('contact.send')}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border-2 border-blue-500/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.or')}
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:diegorpo5008@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-900 transition-all group"
                >
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <span className="font-medium">diegorpo5008@gmail.com</span>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/573028240488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-900 transition-all group"
                >
                  <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors">
                    <Phone size={24} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <span className="font-medium">+57 302 824 0488</span>
                  </div>
                </a>
                
                <a
                  href="https://github.com/juandiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-gray-900 transition-all group"
                >
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <Github size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <span className="font-medium">@juandiego</span>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/juandiego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-900 transition-all group"
                >
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <span className="font-medium">@juandiego</span>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">📍 Ubicación:</span> Medellín, Colombia
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                <span className="font-semibold text-white">⏰ Horario:</span> Lun - Vie, 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
