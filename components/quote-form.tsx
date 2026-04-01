"use client";

import { useState } from "react";
import { useLanguage } from "./language-context";

const serviceOptions = [
  { en: "Website", es: "Sitio Web" },
  { en: "Social Media", es: "Redes Sociales" },
  { en: "Meta / Google Ads", es: "Meta / Google Ads" },
  { en: "AI Marketing", es: "Marketing con IA" },
  { en: "Local SEO", es: "Local SEO" },
  { en: "Full Package", es: "Paquete Completo" },
];

const industryOptions = [
  "Construction / Remodeling",
  "Plumbing / Electrical / HVAC",
  "Landscaping / Cleaning",
  "Restaurant / Food Service",
  "Beauty / Salon / Spa",
  "Medical / Dental",
  "Legal / Accounting",
  "Auto / Transportation",
  "Retail / E-Commerce",
  "Fitness / Wellness",
  "Education / Coaching",
  "Other / Otro",
];

interface QuoteFormProps {
  standalone?: boolean;
}

export function QuoteForm({ standalone = false }: QuoteFormProps) {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 6000);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: "var(--white)",
        border: standalone ? "1px solid var(--border)" : "none",
        boxShadow: standalone ? "0 4px 24px rgba(13,27,46,0.10)" : "none",
      }}
    >
      <h3
        className="font-serif text-2xl font-extrabold mb-1"
        style={{ color: "var(--navy)" }}
      >
        {standalone
          ? t("Get Your Free Quote", "Obten Tu Cotizacion Gratis")
          : t("Request Your Free Quote", "Solicitar Cotizacion Gratis")}
      </h3>
      <p className="text-[13px] mb-7" style={{ color: "var(--muted)" }}>
        {t(
          "We'll respond with a full custom strategy within 24 hours.",
          "Respondemos con una estrategia completa en menos de 24 horas."
        )}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              {t("Your Name", "Tu Nombre")}
            </label>
            <input type="text" placeholder="John Smith / Juan Garcia" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              {t("Business Name", "Nombre del Negocio")}
            </label>
            <input type="text" placeholder="My Business LLC" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              Email
            </label>
            <input type="email" placeholder="you@email.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              {t("Phone / WhatsApp", "Telefono / WhatsApp")}
            </label>
            <input type="tel" placeholder="(000) 000-0000" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              {t("Type of Business", "Tipo de Negocio")}
            </label>
            <select defaultValue="">
              <option value="" disabled>
                {t("Select your industry...", "Selecciona tu industria...")}
              </option>
              {industryOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold tracking-wide"
              style={{ color: "var(--navy)" }}
            >
              {t("City & State", "Ciudad y Estado")}
            </label>
            <input type="text" placeholder="e.g. Houston, TX" />
          </div>
        </div>

        <span
          className="block text-xs font-bold mb-2.5"
          style={{ color: "var(--navy)" }}
        >
          {t("What services interest you?", "Que servicios te interesan?")}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          {serviceOptions.map((opt) => (
            <label key={opt.en} className="c-check">
              <input
                type="checkbox"
                checked={selectedServices.includes(opt.en)}
                onChange={() => toggleService(opt.en)}
              />
              <span>{t(opt.en, opt.es)}</span>
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 mb-4">
          <label
            className="text-xs font-bold tracking-wide"
            style={{ color: "var(--navy)" }}
          >
            {t(
              "Tell us about your business & goals (optional)",
              "Cuentanos sobre tu negocio y metas (opcional)"
            )}
          </label>
          <textarea placeholder="What do you do? Where are you located? How many new clients do you want per month?" />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-lg font-extrabold text-base border-none cursor-pointer transition-all"
          style={{
            background: "var(--navy)",
            color: "var(--white)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.color = "var(--navy)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--navy)";
            e.currentTarget.style.color = "var(--white)";
          }}
        >
          {t("Send My Free Quote Request", "Enviar Mi Solicitud")} &rarr;
        </button>

        <p
          className="text-xs text-center mt-3.5 leading-relaxed"
          style={{ color: "var(--muted2)" }}
        >
          {t(
            "Free · No commitment · Response within 24h · English & Spanish",
            "Gratis · Sin compromiso · Respuesta en 24h · Ingles y Espanol"
          )}
          <br />
          📞{" "}
          <a href="tel:+19454008937" style={{ color: "var(--gold)" }}>
            +1 (945) 400-8937
          </a>{" "}
          · 💬{" "}
          <a href="https://wa.me/19454008937" style={{ color: "var(--gold)" }}>
            WhatsApp
          </a>{" "}
          · ✉{" "}
          <a
            href="mailto:RomeroHCTimox@outlook.com"
            style={{ color: "var(--gold)" }}
          >
            RomeroHCTimox@outlook.com
          </a>
        </p>
      </form>

      {showSuccess && (
        <div
          className="text-center p-7 rounded-xl mt-4"
          style={{ background: "var(--gold-pale)" }}
        >
          <h3
            className="text-xl font-extrabold mb-2"
            style={{ color: "var(--navy)" }}
          >
            {t("Request Sent!", "Solicitud Enviada!")}
          </h3>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {t(
              "We'll reach out within 24 hours with a custom strategy. Check your email and phone!",
              "Nos pondremos en contacto en menos de 24 horas con una estrategia personalizada."
            )}
          </p>
        </div>
      )}
    </div>
  );
}
