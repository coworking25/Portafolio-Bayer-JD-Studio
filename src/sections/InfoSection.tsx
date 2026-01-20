import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { FloatingButton } from '../components/FloatingButton';
import { GlowBoxLink } from '../components/GlowBoxLink';
import { TextHover } from '../components/TextHover';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const InfoSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="hero-section">
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      <FloatingButton label={t('navbar.about')} className="first" href="/#about-me" />
      <p>{t('hero.greeting')}</p>
      <TextHover text="JUAN DIEGO" className="name" />
      <p>{t('hero.role')}</p>
      <FloatingButton label="Tech Stack" className="sec" href="/#tech-stack" />

      <a href="/#contact" className="contact-cta">
        {t('hero.contactBtn')}
      </a>

      <div className="blur"></div>
      <div className="bottom-bar">
        <GlowBoxLink
          href="https://github.com/juandiego"
          color="rgba(255, 255, 255, 0.4)"
          icon={<FaGithub color="rgba(255, 255, 255,0.9)" />}
          aria-label="github"
        />
        <GlowBoxLink
          href="https://www.linkedin.com/in/juan-diego-restrepo-bayer"
          color="rgb(0, 160, 220, 0.6)"
          icon={<FaLinkedinIn color="rgb(0, 160, 220)" />}
          aria-label="linkedin"
        />
        <GlowBoxLink
          href="mailto:diegorpo5008@gmail.com"
          icon={<IoMailOutline color="rgb(18, 122, 209)" />}
          color="rgb(18, 122, 209,0.7)"
          aria-label="mail"
        />
        <GlowBoxLink
          href="https://wa.me/573028240488"
          icon={<FaWhatsapp color="rgb(37, 211, 102)" />}
          color="rgb(37, 211, 102, 0.7)"
          aria-label="whatsapp"
        />
      </div>
    </div>
  );
};
