import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlowBoxLink } from '../components/GlowBoxLink';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del formulario
    // Por ahora solo mostramos mensaje de éxito
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section container" id="contact">
      <div>
        <SectionTitle title={t('contact.title').split(' ')[0]} subTitle={t('contact.title').split(' ')[1] || ''} />
      </div>
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
                  href={`https://wa.me/${t('contact.personalInfo.whatsapp')}`}
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

              <button type="submit" className="submit-btn">
                {t('contact.send')}
              </button>

              {status === 'success' && (
                <p className="form-message success">{t('contact.success')}</p>
              )}
              {status === 'error' && (
                <p className="form-message error">{t('contact.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
