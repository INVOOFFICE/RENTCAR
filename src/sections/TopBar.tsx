import { Mail, MapPin } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TopBar() {
  return (
    <div className="bg-remons-secondary text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[42px]">
          {/* Left */}
          <div className="flex items-center gap-4 text-[13px] font-inter">
            <a href="mailto:yacout.tours@gmail.com" className="flex items-center gap-2 hover:text-remons-primary transition-colors">
              <Mail size={14} />
              <span>yacout.tours@gmail.com</span>
            </a>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>100 Rue Mohammed el Beqal, Marrakech</span>
            </div>
          </div>

          {/* Right */}
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
