import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: 'bn' | 'en';
  label: string;
  onToggle: () => void;
}

export function LanguageToggle({ label, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 border border-gray-200"
      aria-label="Toggle Language"
    >
      <Globe className="w-5 h-5 text-[#55A7AF]" />
      <span className="font-medium text-gray-800">
        {label}
      </span>
    </button>
  );
}
