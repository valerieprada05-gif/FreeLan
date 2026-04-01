"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const { t } = useLanguage();
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      className="relative overflow-hidden px-[5%] py-20 md:py-20"
      style={{ background: "var(--navy)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div
          ref={leftRef}
          className={`reveal ${leftVisible ? "visible" : ""}`}
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded mb-6 text-[11px] font-bold tracking-widest uppercase"
            style={{
              background: "rgba(201,151,58,0.12)",
              border: "1px solid rgba(201,151,58,0.28)",
              color: "var(--gold-light)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-blink"
              style={{ background: "var(--gold)" }}
            />
            {t(
              "Digital Marketing · Lead Generation · AI-Powered",
              "Marketing Digital · Generacion de Leads · Con IA"
            )}
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-5"
          >
            {t("More Leads.", "Mas Leads.")}
            <br />
            <em className="not-italic" style={{ color: "var(--gold)" }}>
              {t("More Clients.", "Mas Clientes.")}
            </em>
            <br />
            {t("Real Growth.", "Crecimiento Real.")}
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed max-w-lg mb-9"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            {t(
              "We help businesses across the ",
              "Ayudamos a negocios en "
            )}
            <strong className="text-white font-bold">
              {t("United States", "Estados Unidos")}
            </strong>
            {t(
              " attract more clients with websites, social media, paid ads, and AI — ",
              " a conseguir mas clientes con sitios web, redes sociales, anuncios e IA — "
            )}
            <strong className="text-white font-bold">
              {t("no long contracts, just results.", "sin contratos largos, solo resultados.")}
            </strong>
          </p>

          <div className="flex gap-3.5 flex-wrap mb-12">
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
              {t("Get My Free Quote", "Quiero Mi Cotizacion")} &rarr;
            </a>
            <a
              href="#how"
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
              {t("See How It Works", "Ver Como Funciona")}
            </a>
          </div>

          <div
            className="flex flex-wrap gap-7 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <TrustItem
              icon="⚡"
              title={t("Website live in 3-7 days", "Sitio web en 3-7 dias")}
              subtitle={t("Fast setup, no waiting", "Configuracion rapida")}
            />
            <TrustItem
              icon="🤝"
              title={t("We speak Spanish", "Hablamos espanol")}
              subtitle={t("Bilingual team", "Equipo bilingue")}
            />
            <TrustItem
              icon="📞"
              title={t("Reply in 24 hours", "Respuesta en 24h")}
              subtitle={t("To every quote request", "A toda solicitud")}
            />
          </div>
        </div>

        {/* Right - Contact Card */}
        <div
          ref={rightRef}
          className={`reveal d2 ${rightVisible ? "visible" : ""}`}
        >
          <div
            className="relative rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div
              className="absolute -top-3 right-5 px-3.5 py-1 rounded text-[10px] font-extrabold tracking-wider uppercase"
              style={{
                background: "var(--gold)",
                color: "var(--navy)",
              }}
            >
              {t("CONTACT US NOW", "CONTACTANOS AHORA")}
            </div>

            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--gold-light)" }}
            >
              {t("Ready to get more clients?", "Listo para conseguir mas clientes?")}
            </div>

            <p
              className="text-[15px] leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {t(
                "Call or text us and we'll put together a ",
                "Llamanos y te preparamos una "
              )}
              <strong className="text-white">
                {t("free custom strategy", "estrategia personalizada gratis")}
              </strong>
              {t(
                " for your business within 24 hours.",
                " para tu negocio en 24 horas."
              )}
            </p>

            <a
              href="tel:+19454008937"
              className="block text-center font-extrabold text-xl py-4 rounded-lg mb-2.5 transition-colors"
              style={{
                background: "var(--gold)",
                color: "var(--navy)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--gold)";
              }}
            >
              📞 +1 (945) 400-8937
            </a>

            <a
              href="https://wa.me/19454008937?text=Hi!%20I%20need%20more%20clients%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-bold text-sm py-3 rounded-lg transition-colors"
              style={{
                background: "rgba(37,211,102,0.14)",
                border: "1px solid rgba(37,211,102,0.4)",
                color: "#3dcc7a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.14)";
              }}
            >
              💬 {t("Chat on WhatsApp", "Chatear por WhatsApp")}
            </a>

            <p
              className="mt-3.5 text-xs text-center leading-relaxed"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              {t(
                "Free · No commitment · Bilingual · Response same day",
                "Gratis · Sin compromiso · Bilingue · Respuesta el mismo dia"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <span
        className="text-sm leading-snug"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        <strong
          className="block text-sm"
          style={{ color: "var(--gold-light)" }}
        >
          {title}
        </strong>
        {subtitle}
      </span>
    </div>
  );
}
