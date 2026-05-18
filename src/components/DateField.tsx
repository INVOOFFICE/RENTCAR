import { useRef } from 'react';
import { Calendar } from 'lucide-react';

interface DateFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  name?: string;
  required?: boolean;
  className?: string;
  label?: string;
}

export function DateField({ value, onChange, min, name, required, className = '', label }: DateFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-inter font-medium mb-1.5">
          {label}
        </label>
      )}
      <div className="relative cursor-pointer">
        <div className="flex items-center gap-2 w-full bg-white rounded-xl px-4 py-3.5 text-sm font-inter pointer-events-none border border-transparent">
          <Calendar size={16} className="text-remons-gray shrink-0" />
          <span className={value ? 'text-remons-dark' : 'text-remons-gray'}>
            {value || 'Sélectionnez une date'}
          </span>
        </div>
        <input
          ref={inputRef}
          type="date"
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          min={min}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
