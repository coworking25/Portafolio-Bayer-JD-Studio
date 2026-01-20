import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('experience.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            <div className="space-y-12">
              {t('experience.items', { returnObjects: true }).map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10" />
                  
                  {/* Content */}
                  <div className="flex-1 ml-8 md:ml-0">
                    <div className={`bg-gray-800 p-8 rounded-xl border-2 border-gray-700 hover:border-blue-500 transition-all ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg flex-shrink-0">
                          <Briefcase size={24} className="text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <p className="text-sm">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed pl-16">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
