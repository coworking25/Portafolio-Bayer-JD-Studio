import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';

export const AboutMe = () => {
  const { t } = useTranslation();
  
  const experienceItems = t('experience.items', { returnObjects: true }) as Array<{
    title: string;
    place: string;
    timePeriod: string;
    description: string;
  }>;
  
  const timeline = [
    {
      title: t('experience.title'),
      items: experienceItems,
    },
    {
      title: t('about.education'),
      items: [
        {
          title: t('about.degree'),
          place: t('about.institution'),
          timePeriod: '2021 - 2024',
          description: '',
        },
      ],
    },
  ];

  return (
    <section className="about-me container" id="about-me">
      <div>
        <SectionTitle title={t('about.title').split(' ')[0]} subTitle={t('about.title').split(' ')[1] || 'MÍ'} />
      </div>
      <div>
        <div className="intro">
          <p style={{ marginTop: '20px' }}>
            👋 {t('hero.greeting')} {t('hero.name')}, {t('hero.role')}.
          </p>
          <p>{t('about.summary')}</p>
          <p>
            📍 <strong>{t('navbar.contact')}:</strong> {t('contact.personalInfo.location')}
            <br />
            📧 <strong>Email:</strong> diegorpo9608@gmail.com
            <br />
            📱 <strong>{t('navbar.contact')}:</strong> {t('contact.personalInfo.phone')}
          </p>
        </div>
        <div>
          {timeline.map(({ items, title }, idx) => (
            <div className="timeline" key={idx}>
              <h1>{title}</h1>
              {items.map(({ title, place, timePeriod, description }, itemIdx: number) => (
                <div className="timeline-list" key={itemIdx}>
                  <div className="timeline-item">
                    <p className="designation">{title}</p>
                    <p className="place">
                      {place} | {timePeriod}
                    </p>
                    {description && <div className="timeline-description">{description}</div>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
