import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-[13px] font-inter"
        aria-label="Changer de langue"
      >
        <Globe size={14} />
        <span className="uppercase font-medium">{current}</span>
      </button>
      <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        <div className="bg-white rounded-xl shadow-elevated py-1.5 min-w-[140px] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm font-inter transition-colors ${
                current === lang.code
                  ? 'text-remons-primary font-medium bg-remons-primary/5'
                  : 'text-remons-dark hover:bg-remons-light-gray'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
