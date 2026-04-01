"use client";

import { useLanguage } from "./language-context";

export function LangBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-[5%] py-2.5" style={{ background: "var(--navy)" }}>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
        <strong style={{ color: "var(--gold-light)" }}>
          {t(
            "Serving businesses across the U.S. · English & Spanish",
            "Atendemos negocios en EE.UU. · Ingles y Espanol"
          )}
        </strong>
      </div>
      <div className="flex gap-1.5">
        <button
          onClick={() => setLang("en")}
          className={`px-3.5 py-1 text-[11px] font-bold tracking-wider rounded-full border transition-all cursor-pointer ${
            lang === "en"
              ? "border-[var(--gold)] text-[var(--navy)]"
              : "border-white/20 text-white/55 hover:border-[var(--gold)] hover:text-[var(--navy)]"
          }`}
          style={{
            background: lang === "en" ? "var(--gold)" : "transparent",
          }}
        >
          EN
        </button>
        <button
          onClick={() => setLang("es")}
          className={`px-3.5 py-1 text-[11px] font-bold tracking-wider rounded-full border transition-all cursor-pointer ${
            lang === "es"
              ? "border-[var(--gold)] text-[var(--navy)]"
              : "border-white/20 text-white/55 hover:border-[var(--gold)] hover:text-[var(--navy)]"
          }`}
          style={{
            background: lang === "es" ? "var(--gold)" : "transparent",
          }}
        >
          ES
        </button>
      </div>
    </div>
  );
}
