import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { i18n } = useTranslation();

  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5">
      {languages.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`
              flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-inter font-medium
              transition-all duration-300 ease-in-out
              ${active
                ? variant === 'dark'
                  ? 'bg-remons-primary text-white shadow-sm'
                  : 'bg-white text-remons-dark shadow-sm'
                : variant === 'dark'
                  ? 'text-white/70 hover:text-white'
                  : 'text-remons-dark/60 hover:text-remons-dark'
              }
            `}
          >
            <span className="text-[14px] leading-none">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
