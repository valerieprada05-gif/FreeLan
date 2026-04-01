"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <section
      className="py-16 md:py-24 px-[5%] text-center"
      style={{ background: "var(--navy)" }}
    >
      <div
        ref={ref}
        className={`reveal max-w-xl mx-auto ${isVisible ? "visible" : ""}`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          {t("Your Next Client Is One", "Tu Proximo Cliente Esta a")}
          <br />
          {t("Call Away. ", "Una Llamada. ")}
          <em className="not-italic" style={{ color: "var(--gold)" }}>
            {t("Let's Go.", "Empecemos.")}
          </em>
        </h2>
        <p
          className="text-base leading-relaxed mb-9"
          style={{ color: "rgba(255,255,255,0.56)" }}
        >
          {t(
            "Stop losing clients to competitors who show up online. In less than a week, your business can be generating real leads.",
            "Deja de perder clientes ante competidores que si tienen presencia online. En menos de una semana, tu negocio genera leads reales."
          )}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3.5">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-extrabold text-[15px] transition-all border-2"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              borderColor: "var(--gold)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)";
              e.currentTarget.style.borderColor = "var(--gold-light)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t("Get My Free Quote Now", "Quiero Mi Cotizacion Gratis")} &rarr;
          </a>
          <a
            href="tel:+19454008937"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold text-[15px] transition-all border-2"
            style={{
              background: "transparent",
              color: "var(--gold-light)",
              borderColor: "rgba(201,151,58,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--navy)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold-light)";
              e.currentTarget.style.borderColor = "rgba(201,151,58,0.5)";
            }}
          >
            📞 +1 (945) 400-8937
          </a>
          <a
            href="https://wa.me/19454008937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-bold text-[15px] transition-all border-2"
            style={{
              background: "transparent",
              color: "var(--gold-light)",
              borderColor: "rgba(201,151,58,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--navy)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold-light)";
              e.currentTarget.style.borderColor = "rgba(201,151,58,0.5)";
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
