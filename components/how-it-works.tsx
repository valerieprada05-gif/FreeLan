"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    num: "01",
    labelEn: "Day 1",
    labelEs: "Dia 1",
    titleEn: "You contact us",
    titleEs: "Nos contactas",
    descEn:
      "Call, text, WhatsApp, or fill out the form. We respond the same day with a free consultation.",
    descEs:
      "Llama, escribe, WhatsApp o llena el formulario. Respondemos el mismo dia con una consulta gratis.",
  },
  {
    num: "02",
    labelEn: "Days 2-7",
    labelEs: "Dias 2-7",
    titleEn: "We build everything",
    titleEs: "Construimos todo",
    descEn:
      "Your website, social media profiles, and ad campaigns are created and ready to launch.",
    descEs:
      "Tu sitio web, perfiles de redes sociales y campanas publicitarias se crean y estan listos.",
  },
  {
    num: "03",
    labelEn: "Week 1",
    labelEs: "Semana 1",
    titleEn: "Everything goes live",
    titleEs: "Todo sale en vivo",
    descEn:
      "Site is published, ads are running, social media is active. We monitor everything daily.",
    descEs:
      "El sitio esta publicado, los anuncios corriendo, las redes activas. Monitoreamos todo diariamente.",
  },
  {
    num: "04",
    labelEn: "Week 1-3",
    labelEs: "Semana 1-3",
    titleEn: "Clients start calling",
    titleEs: "Los clientes empiezan a llamar",
    descEn:
      "Your phone rings. Messages come in. We keep optimizing every week so it only gets better.",
    descEs:
      "Tu telefono suena. Llegan mensajes. Seguimos optimizando cada semana para que mejore.",
  },
];

export function HowItWorks() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <section id="how" className="py-16 md:py-24 px-[5%]">
      <div
        ref={ref}
        className={`reveal text-center max-w-xl mx-auto mb-14 ${
          isVisible ? "visible" : ""
        }`}
      >
        <div
          className="inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--gold)" }}
        >
          <span
            className="w-4 h-0.5 flex-shrink-0"
            style={{ background: "var(--gold)" }}
          />
          {t("Simple Process", "Proceso Simple")}
        </div>
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3.5"
          style={{ color: "var(--navy)" }}
        >
          {t(
            "Here's Exactly What Happens When You Contact Us",
            "Esto Es Exactamente Lo Que Pasa Cuando Nos Contactas"
          )}
        </h2>
        <p
          className="text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {t(
            "No guesswork. No waiting. A clear, step-by-step path from your first message to your first new client.",
            "Sin adivinar. Sin esperar. Un camino claro, paso a paso, desde tu primer mensaje hasta tu primer cliente nuevo."
          )}
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Connecting line */}
        <div
          className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-0.5"
          style={{ background: "var(--border)" }}
        />

        {steps.map((step, index) => (
          <Step key={step.num} step={step} delay={index} />
        ))}
      </div>
    </section>
  );
}

function Step({
  step,
  delay,
}: {
  step: (typeof steps)[number];
  delay: number;
}) {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal d${delay} text-center px-4 relative z-10 ${
        isVisible ? "visible" : ""
      }`}
    >
      <div
        className="w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-xl font-extrabold transition-all duration-300 group-hover:bg-[var(--gold)]"
        style={{
          background: "var(--white)",
          border: "2px solid var(--border)",
          color: "var(--navy)",
          boxShadow: "0 4px 24px rgba(13,27,46,0.10)",
        }}
      >
        {step.num}
      </div>
      <span
        className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded mb-2.5"
        style={{
          background: "var(--gold-pale)",
          color: "var(--gold)",
        }}
      >
        {t(step.labelEn, step.labelEs)}
      </span>
      <div
        className="text-[15px] font-bold mb-2"
        style={{ color: "var(--navy)" }}
      >
        {t(step.titleEn, step.titleEs)}
      </div>
      <p
        className="text-[13px] leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {t(step.descEn, step.descEs)}
      </p>
    </div>
  );
}
