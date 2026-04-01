"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

const countryTags = [
  "United States",
  "Mexico",
  "Colombia",
  "Peru",
  "Argentina",
  "R. Dominicana",
  "+ More",
];

export function BilingualBanner() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <div className="py-14 px-[5%] text-center" style={{ background: "var(--navy3)" }}>
      <div
        ref={ref}
        className={`reveal max-w-2xl mx-auto ${isVisible ? "visible" : ""}`}
      >
        <div className="flex justify-center gap-2.5 text-3xl mb-4">
          <span>🇺🇸</span>
          <span>🤝</span>
          <span>🌎</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
          {t("We Serve Businesses Across", "Atendemos Negocios en")}
          <br />
          <em className="not-italic" style={{ color: "var(--gold)" }}>
            {t("The United States & Latin America", "Estados Unidos y Latinoamerica")}
          </em>
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {t(
            "Whether you're a contractor in New Jersey, a restaurant in Texas, or a service provider in Florida — we speak your language and understand your market.",
            "Ya seas un contratista en New Jersey, un restaurante en Texas o un proveedor en Florida — hablamos tu idioma y entendemos tu mercado."
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {countryTags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3.5 py-1.5 rounded"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
