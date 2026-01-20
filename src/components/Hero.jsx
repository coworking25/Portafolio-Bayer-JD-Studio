import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, Code2, Sparkles, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.role');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-16 relative overflow-hidden">
      {/* Partículas animadas */}
      <ParticlesBackground />
      
      {/* Background decorative elements con animaciones más dramáticas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700 float" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl rotate-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Brand Badge con efecto holográfico */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-2 border-gradient rounded-full backdrop-blur-sm hover:scale-105 transition-transform">
            <Sparkles size={16} className="text-blue-400 animate-pulse" />
            <span className="holographic text-transparent bg-clip-text text-sm uppercase tracking-wider font-bold">
              {t('hero.tagline')}
            </span>
            <Zap size={16} className="text-purple-400 animate-pulse" />
          </div>
          
          {/* Main Heading con efecto de glitch */}
          <div className="space-y-4">
            <p className="text-gray-400 text-lg neon">
              {t('hero.greeting')}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block glitch">{t('hero.name').split(' ')[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient neon">
                {t('hero.name').split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
          
          {/* Role con efecto typewriter */}
          <div className="max-w-3xl mx-auto min-h-[60px]">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed flex items-center justify-center gap-3 flex-wrap">
              <Code2 size={24} className="text-blue-400 float" />
              <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
                {typedText}
              </span>
            </p>
          </div>
          
          {/* Location con efecto neón */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin size={20} className="text-blue-400 neon" />
            <span className="text-lg">{t('hero.location')}</span>
          </div>
          
          {/* CTA Buttons con efectos más dramáticos */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{t('hero.cta')}</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gray-800/80 hover:bg-gray-700 text-white rounded-lg font-medium transition-all border-2 border-gradient hover:scale-105 backdrop-blur-sm"
            >
              {t('hero.contactBtn')}
            </button>
          </div>
          
          {/* Scroll indicator animado */}
          <div className="pt-16 float">
            <div className="w-6 h-10 border-2 border-blue-500 rounded-full mx-auto flex items-start justify-center p-2 neon">
              <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
