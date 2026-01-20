import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/img/logo-2.png" 
              alt="BAYER JD STUDIO Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden gap-2">
              <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <span className="text-xl font-bold text-white">BJD</span>
              </div>
              <span className="text-lg font-bold text-white">{t('footer.brand')}</span>
            </div>
          </div>
          <p className="text-gray-400">
            © {currentYear} {t('footer.brand')}. {t('footer.rights')}.
          </p>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            {t('footer.madeWith')} <Heart size={16} className="text-red-500 fill-red-500" /> {t('footer.by')} {t('hero.name')}
          </p>
        </div>
      </div>
    </footer>
  );
}
