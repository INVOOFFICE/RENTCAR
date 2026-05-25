import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MousePointerClick, ShieldCheck, Headphones } from 'lucide-react';

const featureKeys = ['express', 'insurance', 'support'] as const;

export default function Features() {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation<HTMLElement>({ animation: 'fadeInUp' });
  const gridRef = useScrollAnimation<HTMLDivElement>({
    animation: 'fadeInUp',
    childSelector: '.feature-card',
    stagger: 0.1,
  });

  return (
    <section ref={sectionRef} className="bg-white py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {featureKeys.map((key, i) => {
            const icons = [MousePointerClick, ShieldCheck, Headphones];
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="feature-card bg-remons-light-gray rounded-2xl p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-remons-blue/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-remons-blue" />
                </div>
                <h4 className="font-poppins text-lg font-semibold text-remons-dark mb-2">
                  {t(`features.${key}.title`)}
                </h4>
                <p className="text-remons-gray text-sm font-inter leading-relaxed">
                  {t(`features.${key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
