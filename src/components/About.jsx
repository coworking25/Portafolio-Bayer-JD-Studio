import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, Target, Zap } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Target, label: 'Enfoque', value: 'Frontend Development' },
    { icon: Zap, label: 'Stack Principal', value: 'React + Tailwind' },
    { icon: Award, label: 'Experiencia', value: '2+ años' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.summary')}
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all text-center"
                  >
                    <div className="inline-flex p-3 bg-blue-600/20 rounded-lg mb-3">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column - Education */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border-2 border-blue-500/50 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-600/30 rounded-xl">
                  <GraduationCap size={40} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {t('about.education')}
                  </h3>
                  <div className="w-12 h-1 bg-blue-400 rounded-full mt-2" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xl text-white font-semibold">
                  {t('about.degree')}
                </p>
                <p className="text-lg text-blue-300">
                  {t('about.institution')}
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                    Análisis de Software
                  </span>
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                    Desarrollo Web
                  </span>
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                    Bases de Datos
                  </span>
                </div>
              </div>
            </div>
            
            {/* Additional Info Card */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                💡 <span className="font-semibold text-white">Aprendizaje continuo:</span> Siempre en búsqueda de nuevas tecnologías y mejores prácticas para crear experiencias web excepcionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
