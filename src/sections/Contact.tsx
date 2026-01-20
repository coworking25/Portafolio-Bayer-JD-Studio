import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlowBoxLink } from '../components/GlowBoxLink';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { ContactService, ContactFormData } from '../services/contactService';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const success = await ContactService.sendEmail(formData);

      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Error desconocido al enviar el email.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Error al enviar el email. Inténtalo de nuevo.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section container" id="contact">
      <SectionTitle title={t('contact.title').split(' ')[0]} subTitle={t('contact.title').split(' ')[1] || ''} />
      <div>
        <div className="contact-intro">
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>📧 {t('contact.personalInfo.email')}</h3>
            <p className="info-highlight">diegorpo5008@gmail.com</p>

            <h3>📱 {t('contact.personalInfo.phone')}</h3>
            <p className="info-highlight">+57 302 824 0488</p>

            <h3>📍 {t('contact.personalInfo.location')}</h3>
            <p className="info-highlight">Medellín, Colombia</p>

            <div className="social-links">
              <p>{t('contact.or')}</p>
              <div className="social-icons">
                <GlowBoxLink
                  href="https://github.com/juandiego"
                  color="rgba(255, 255, 255, 0.4)"
                  icon={<FaGithub size={24} color="rgba(255, 255, 255,0.9)" />}
                  aria-label="github"
                />
                <GlowBoxLink
                  href="https://www.linkedin.com/in/juan-diego-restrepo-bayer"
                  color="rgb(0, 160, 220, 0.6)"
                  icon={<FaLinkedinIn size={24} color="rgb(0, 160, 220)" />}
                  aria-label="linkedin"
                />
                <GlowBoxLink
                  href={ContactService.getWhatsAppAutoResponseLink()}
                  icon={<FaWhatsapp size={24} color="rgb(37, 211, 102)" />}
                  color="rgb(37, 211, 102, 0.7)"
                  aria-label="whatsapp"
                />
                <GlowBoxLink
                  href={`mailto:${t('contact.personalInfo.email')}`}
                  icon={<IoMailOutline size={24} color="rgb(18, 122, 209)" />}
                  color="rgb(18, 122, 209,0.7)"
                  aria-label="mail"
                />
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? t('contact.sending') : t('contact.send')}
              </button>

              {status === 'success' && (
                <p className="form-message success">{t('contact.success')}</p>
              )}
              {status === 'error' && (
                <p className="form-message error">
                  {errorMessage || t('contact.error')}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
