import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const LANGUAGES = [
  { code: "en" as const, label: "English", native: "English" },
  { code: "hi" as const, label: "Hindi", native: "हिन्दी" },
  { code: "mr" as const, label: "Marathi", native: "मराठी" },
];

interface LanguageSelectorProps {
  isScrolled: boolean;
}

export default function LanguageSelector({
  isScrolled,
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
            isScrolled
              ? "border-sage/40 text-forest/80 hover:text-forest hover:border-moss/60 bg-cream/60"
              : "border-cream/40 text-cream/90 hover:text-cream hover:border-cream/70 bg-cream/10 backdrop-blur-sm"
          }`}
          aria-label="Select language"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{current.code.toUpperCase()}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] bg-cream border-sage/30 shadow-card"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between gap-3 cursor-pointer text-forest/80 hover:text-forest hover:bg-parchment focus:bg-parchment focus:text-forest"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">{lang.native}</span>
              <span className="text-xs text-forest/50">{lang.label}</span>
            </div>
            {language === lang.code && (
              <Check className="w-3.5 h-3.5 text-moss flex-shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
