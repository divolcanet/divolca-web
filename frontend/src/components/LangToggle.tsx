import { useLanguage } from "../data/translations/LanguageContext";

export function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-1 font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === "id" ? "text-primary-10" : "text-white/40"}>
        ID
      </span>
      <span className="text-white/30">/</span>
      <span className={lang === "en" ? "text-primary-10" : "text-white/40"}>
        EN
      </span>
    </button>
  );
}
