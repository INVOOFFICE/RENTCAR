import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Christine Eve',
    initials: 'CE',
    textKey: 'testimonial1',
  },
  {
    id: 2,
    name: 'Mike Hardson',
    initials: 'MH',
    textKey: 'testimonial2',
  },
  {
    id: 3,
    name: 'Shirley Smith',
    initials: 'SS',
    textKey: 'testimonial3',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const sectionRef = useScrollAnimation<HTMLElement>({ animation: 'fadeInUp' });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Testimonial */}
          <div className="text-center max-w-2xl mx-auto">
            {/* Avatars Row */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {testimonials.map((tItem, i) => (
                <button
                  key={tItem.id}
                  onClick={() => setCurrent(i)}
                  className={`w-[60px] h-[60px] rounded-full overflow-hidden border-3 transition-all duration-300 flex items-center justify-center text-white font-poppins font-bold text-lg ${
                    i === current
                      ? 'border-remons-primary scale-110 bg-remons-primary'
                      : 'border-transparent opacity-60 hover:opacity-80 bg-remons-primary/60'
                  }`}
                >
                  {tItem.initials}
                </button>
              ))}
            </div>

            {/* Quote */}
            <p className="text-remons-gray text-base sm:text-lg font-inter leading-relaxed italic mb-6">
              &ldquo;{t(`testimonials.${testimonials[current].textKey}`)}&rdquo;
            </p>

            {/* Name */}
            <h4 className="font-poppins text-xl font-semibold text-remons-dark mb-1">
              {testimonials[current].name}
            </h4>
            <span className="text-remons-primary text-[13px] font-inter font-medium uppercase tracking-wider">
              {t('testimonials.role')}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-remons-border flex items-center justify-center hover:bg-remons-primary hover:text-white hover:border-remons-primary transition-all duration-300"
              aria-label={t('testimonials.prev')}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-remons-border flex items-center justify-center hover:bg-remons-primary hover:text-white hover:border-remons-primary transition-all duration-300"
              aria-label={t('testimonials.next')}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
