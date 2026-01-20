import { useTranslation } from 'react-i18next';
import { Code2, Wrench, Database } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();

  const skills = {
    frontend: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Flexbox',
      'Grid'
    ],
    tools: [
      'Vite',
      'Git',
      'GitHub',
      'Figma'
    ],
    backend: [
      'Node.js',
      'PostgreSQL',
      'Supabase'
    ]
  };

  const categoryIcons = {
    frontend: Code2,
    tools: Wrench,
    backend: Database
  };

  const categoryColors = {
    frontend: {
      border: 'border-blue-500',
      bg: 'bg-blue-600/20',
      text: 'text-blue-400',
      icon: 'text-blue-400'
    },
    tools: {
      border: 'border-purple-500',
      bg: 'bg-purple-600/20',
      text: 'text-purple-400',
      icon: 'text-purple-400'
    },
    backend: {
      border: 'border-green-500',
      bg: 'bg-green-600/20',
      text: 'text-green-400',
      icon: 'text-green-400'
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = categoryIcons[category];
            const colors = categoryColors[category];
            
            return (
              <div
                key={category}
                className={`bg-gray-800 p-8 rounded-xl border-2 ${colors.border} hover:shadow-2xl hover:shadow-${colors.border}/20 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className={colors.icon} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t(`skills.categories.${category}`)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
