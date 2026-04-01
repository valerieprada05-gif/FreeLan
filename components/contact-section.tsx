"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";
import { QuoteForm } from "./quote-form";

export function ContactSection() {
  const { t } = useLanguage();
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-[5%]"
      style={{ background: "var(--navy)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
        {/* Left Side */}
        <div
          ref={leftRef}
          className={`reveal ${leftVisible ? "visible" : ""}`}
        >
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold-light)" }}
          >
            <span
              className="w-4 h-0.5 flex-shrink-0"
              style={{ background: "var(--gold-light)" }}
            />
            {t("Contact us directly", "Contactanos directamente")}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-3.5">
            {t("We're Here to Help", "Estamos Aqui Para Ayudarte")}
            <br />
            <em className="not-italic" style={{ color: "var(--gold)" }}>
              {t("You Grow Your Business", "A Hacer Crecer Tu Negocio")}
            </em>
          </h2>
          <p
            className="text-base leading-relaxed mb-7"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {t(
              "Whether you prefer to call, text, or send an email, our bilingual team will respond within hours — not days. No automated menus, just real people ready to understand your needs.",
              "Ya sea que prefieras llamar, enviar un mensaje o un email, nuestro equipo bilingue respondera en horas — no dias. Sin menus automaticos, solo personas reales listas para entender tus necesidades."
            )}
          </p>

          <div className="flex flex-col gap-6">
            <ContactCard
              icon="📞"
              title={t("Call or Text", "Llama o Escribe")}
              description={t(
                "Speak directly with our team. We'll answer any questions and start your free strategy session immediately.",
                "Habla directamente con nuestro equipo. Responderemos cualquier pregunta y comenzaremos tu sesion de estrategia gratis de inmediato."
              )}
              link="tel:+19454008937"
              linkText="📞 +1 (945) 400-8937 →"
            />
            <ContactCard
              icon="💬"
              title={t("WhatsApp Chat", "Chat de WhatsApp")}
              description={t(
                "Send us a message and get a quick reply. Perfect for sharing details about your business.",
                "Envianos un mensaje y obten una respuesta rapida. Perfecto para compartir detalles de tu negocio."
              )}
              link="https://wa.me/19454008937?text=Hi%20FreeLAN%20team!%20I%20need%20help%20with%20digital%20marketing"
              linkText="💬 WhatsApp →"
              variant="whatsapp"
            />
            <ContactCard
              icon="✉️"
              title={t("Email", "Correo Electronico")}
              description={t(
                "Send us your questions or fill out the form below — we'll reply within 24 hours with a custom plan.",
                "Envianos tus preguntas o completa el formulario a continuacion — te responderemos en 24 horas con un plan personalizado."
              )}
              link="mailto:RomeroHCTimox@outlook.com"
              linkText="RomeroHCTimox@outlook.com →"
              variant="email"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div
          ref={rightRef}
          className={`reveal d2 ${rightVisible ? "visible" : ""}`}
        >
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  description,
  link,
  linkText,
  variant = "default",
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  variant?: "default" | "whatsapp" | "email";
}) {
  return (
    <div
      className="p-6 rounded-2xl transition-all"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(201,151,58,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <div className="text-lg font-extrabold text-white mb-2 flex items-center gap-2.5">
        <span>{icon}</span> {title}
      </div>
      <p
        className="text-[13px] mb-4"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {description}
      </p>
      {variant === "email" ? (
        <a
          href={link}
          className="font-semibold underline"
          style={{ color: "var(--gold-light)" }}
        >
          {linkText}
        </a>
      ) : (
        <a
          href={link}
          target={variant === "whatsapp" ? "_blank" : undefined}
          rel={variant === "whatsapp" ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all"
          style={{
            background: variant === "whatsapp" ? "#25d366" : "var(--gold)",
            color: variant === "whatsapp" ? "#fff" : "var(--navy)",
          }}
          onMouseEnter={(e) => {
            if (variant === "whatsapp") {
              e.currentTarget.style.background = "#128c7e";
            } else {
              e.currentTarget.style.background = "var(--gold-light)";
            }
            e.currentTarget.style.gap = "12px";
          }}
          onMouseLeave={(e) => {
            if (variant === "whatsapp") {
              e.currentTarget.style.background = "#25d366";
            } else {
              e.currentTarget.style.background = "var(--gold)";
            }
            e.currentTarget.style.gap = "8px";
          }}
        >
          {linkText}
        </a>
      )}
    </div>
  );
}
