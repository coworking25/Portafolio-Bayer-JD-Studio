import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, LayoutDashboard, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="space-y-8">
          {t('projects.items', { returnObjects: true }).map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border-2 border-gradient hover:scale-[1.02] transition-all duration-300 card-3d"
            >
              <div className="p-8 relative overflow-hidden">
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white neon">
                      {project.title}
                    </h3>
                    {index === 0 && (
                      <span className="px-3 py-1 holographic text-transparent bg-clip-text rounded-full text-sm font-bold border-2 border-blue-500">
                        Featured
                      </span>
                    )}
                  </div>
                
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg text-sm font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Features */}
                  {project.features && (
                    <div className="mb-6 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-green-400" />
                        Características principales
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        {t('projects.viewDemo')}
                      </a>
                    )}
                    
                    {project.dashboard && (
                      <a
                        href={project.dashboard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                      >
                        <LayoutDashboard size={18} />
                        {t('projects.viewDashboard')}
                      </a>
                    )}
                    
                    {project.code && project.code !== '#' && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                      >
                        <Github size={18} />
                        {t('projects.viewCode')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
